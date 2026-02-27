"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const roles = ["Engineer", "Tech Lead", "Founder", "Platform", "Other"] as const;

type Status = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const endpoint =
        process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT?.toString() || "/api/waitlist";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || "Request failed");
      }

      setStatus("success");
      router.push("/waitlist/success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <form className="mt-8 grid gap-4" onSubmit={handleSubmit} noValidate>
      <label className="grid gap-2">
        <span className="text-sm font-semibold text-haze-200">Email *</span>
        <input
          className="h-12 rounded-xl border border-white/15 bg-ink-700/70 px-4 text-base text-haze-100 placeholder:text-haze-300 focus:border-accent-500 focus:outline-none"
          type="email"
          name="email"
          autoComplete="email"
          required
          placeholder="you@company.com"
        />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-semibold text-haze-200">Company</span>
        <input
          className="h-12 rounded-xl border border-white/15 bg-ink-700/70 px-4 text-base text-haze-100 placeholder:text-haze-300 focus:border-accent-500 focus:outline-none"
          type="text"
          name="company"
          autoComplete="organization"
          placeholder="SteerMesh"
        />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-semibold text-haze-200">Role</span>
        <select
          className="h-12 rounded-xl border border-white/15 bg-ink-700/70 px-4 text-base text-haze-100 focus:border-accent-500 focus:outline-none"
          name="role"
          defaultValue=""
        >
          <option value="" disabled>
            Select a role
          </option>
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </label>

      <label className="hidden" aria-hidden="true">
        <span>Website</span>
        <input tabIndex={-1} name="website" type="text" autoComplete="off" />
      </label>

      <button className="primary-button w-full" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Join the Waitlist"}
      </button>

      {status === "error" && (
        <p className="text-sm text-ember-500">{error || "Something went wrong."}</p>
      )}
    </form>
  );
}
