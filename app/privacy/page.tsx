import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="section-shell pb-20 pt-16">
      <Link className="text-sm text-accent-500 hover:underline" href="/">
        ← Back to home
      </Link>
      <h1 className="mt-6 font-display text-3xl font-semibold text-white">Privacy Policy</h1>
      <p className="mt-4 text-sm text-haze-200">
        We only collect information you submit through the SteerMesh Cloud waitlist form. That
        includes your email address and optional company/role details. We use this data solely to
        communicate about SteerMesh Cloud access and product updates.
      </p>
      <p className="mt-4 text-sm text-haze-200">
        We do not sell your data. Access is limited to SteerMesh operators and is stored in
        Firestore with restricted access. You can request deletion by emailing
        Rick.Sanchez@brainbreaking.com.
      </p>
      <p className="mt-4 text-sm text-haze-200">
        Analytics may be enabled to understand site usage. If enabled, we use anonymized Google
        Analytics and do not store cookies beyond standard analytics requirements.
      </p>
    </main>
  );
}
