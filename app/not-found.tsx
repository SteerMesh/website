import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-shell pb-20 pt-16">
      <h1 className="font-display text-3xl font-semibold text-white">Page not found</h1>
      <p className="mt-4 text-sm text-haze-200">
        The page you are looking for does not exist.
      </p>
      <Link className="mt-6 inline-flex text-sm text-accent-500 hover:underline" href="/">
        ← Back to home
      </Link>
    </main>
  );
}
