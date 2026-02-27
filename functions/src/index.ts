import { onRequest } from "firebase-functions/v2/https";
import { initializeApp } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import crypto from "node:crypto";

initializeApp();

const db = getFirestore();

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 3;

function normalizeIp(raw?: string | string[]) {
  if (!raw) return "unknown";
  const ip = Array.isArray(raw) ? raw[0] : raw;
  return ip.split(",")[0].trim();
}

function hashIp(ip: string) {
  const salt = process.env.RATE_LIMIT_SALT || "steermesh";
  return crypto.createHash("sha256").update(`${salt}:${ip}`).digest("hex");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function enforceRateLimit(ipHash: string) {
  const docRef = db.collection("rate_limits").doc(ipHash);

  await db.runTransaction(async (transaction) => {
    const snapshot = await transaction.get(docRef);
    const now = Date.now();

    if (!snapshot.exists) {
      transaction.set(docRef, {
        count: 1,
        windowStart: now
      });
      return;
    }

    const data = snapshot.data() as { count?: number; windowStart?: number };
    const windowStart = data.windowStart ?? now;
    const count = data.count ?? 0;

    if (now - windowStart > RATE_LIMIT_WINDOW_MS) {
      transaction.set(docRef, {
        count: 1,
        windowStart: now
      });
      return;
    }

    if (count >= RATE_LIMIT_MAX) {
      throw new Error("rate-limit");
    }

    transaction.update(docRef, {
      count: count + 1
    });
  });
}

async function sendConfirmationEmail(payload: {
  email: string;
  company?: string;
  role?: string;
}) {
  if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_FROM) {
    console.info("Confirmation email not sent: SENDGRID_API_KEY not configured.");
    return;
  }

  // TODO: Implement SendGrid integration.
  console.info(`Confirmation email stub for ${payload.email}.`);
}

export const waitlist = onRequest({
  cors: ["https://steermesh.dev", "http://localhost:3000"],
  maxInstances: 5
}, async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  const { email, company, role, website } = req.body ?? {};

  if (website && String(website).trim().length > 0) {
    res.status(200).json({ ok: true });
    return;
  }

  if (!email || !isValidEmail(String(email))) {
    res.status(400).json({ ok: false, error: "Valid email is required" });
    return;
  }

  const ip = normalizeIp(req.headers["x-forwarded-for"] || req.ip);
  const ipHash = hashIp(ip);

  try {
    await enforceRateLimit(ipHash);
  } catch (error) {
    if (error instanceof Error && error.message === "rate-limit") {
      res.status(429).json({ ok: false, error: "Too many requests" });
      return;
    }
    console.error("Rate limit check failed", error);
  }

  const entry = {
    email: String(email).toLowerCase(),
    company: company ? String(company) : null,
    role: role ? String(role) : null,
    ipHash,
    userAgent: req.headers["user-agent"] || null,
    createdAt: FieldValue.serverTimestamp()
  };

  await db.collection("waitlist").add(entry);
  await sendConfirmationEmail({
    email: entry.email,
    company: entry.company ?? undefined,
    role: entry.role ?? undefined
  });

  res.status(200).json({ ok: true });
});
