import Link from "next/link";

export default function WaitlistSuccessPage() {
  return (
    <main className="section-shell pb-20 pt-16">
      <h1 className="font-display text-3xl font-semibold text-white">You’re on the list.</h1>
      <p className="mt-4 text-sm text-haze-200">
        Thanks for joining the SteerMesh Cloud waitlist. We will reach out as soon as private
        access opens.
      </p>
      <Link className="mt-6 inline-flex text-sm text-accent-500 hover:underline" href="/">
        ← Back to home
      </Link>
    </main>
  );
}
