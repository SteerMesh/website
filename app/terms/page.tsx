import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="section-shell pb-20 pt-16">
      <Link className="text-sm text-accent-500 hover:underline" href="/">
        ← Back to home
      </Link>
      <h1 className="mt-6 font-display text-3xl font-semibold text-white">Terms of Service</h1>
      <p className="mt-4 text-sm text-haze-200">
        SteerMesh provides this website and waitlist for informational purposes. By joining the
        waitlist, you agree that we may contact you about SteerMesh Cloud availability and
        updates.
      </p>
      <p className="mt-4 text-sm text-haze-200">
        SteerMesh Cloud features are subject to change prior to release. All trademarks and
        product names belong to their respective owners.
      </p>
    </main>
  );
}
