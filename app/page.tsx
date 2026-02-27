import Link from "next/link";
import WaitlistForm from "@/app/components/WaitlistForm";

const repos = [
  {
    name: "steer",
    description: "CLI, compiler, and steering workflow.",
    href: "https://github.com/SteerMesh/steer"
  },
  {
    name: "packs",
    description: "Open steering packs maintained by the community.",
    href: "https://github.com/SteerMesh/packs"
  },
  {
    name: "spec",
    description: "Steering bundle specification and schemas.",
    href: "https://github.com/SteerMesh/spec"
  },
  {
    name: "go-sdk",
    description: "Go SDK for integrating steering in pipelines.",
    href: "https://github.com/SteerMesh/go-sdk"
  },
  {
    name: "ts-sdk",
    description: "TypeScript SDK for automations and tooling.",
    href: "https://github.com/SteerMesh/ts-sdk"
  }
];

export default function HomePage() {
  return (
    <div className="relative">
      <div className="absolute inset-0 grid-overlay opacity-40" aria-hidden="true" />
      <div className="relative">
        <header className="section-shell flex items-center justify-between py-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-700 text-lg font-semibold">
              S
            </div>
            <div>
              <p className="font-display text-lg font-semibold">SteerMesh</p>
              <p className="text-xs text-haze-300">steermesh.dev</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-haze-200 md:flex">
            <Link href="#solution" className="hover:text-accent-500">
              Solution
            </Link>
            <Link href="#features" className="hover:text-accent-500">
              Features
            </Link>
            <Link href="#waitlist" className="hover:text-accent-500">
              Cloud
            </Link>
            <a
              href="https://github.com/SteerMesh"
              className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold hover:border-accent-500 hover:text-accent-500"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </nav>
        </header>

        <main className="pb-24">
          <section className="section-shell pt-12 md:pt-20">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-500">
                  SteerMesh Platform
                </p>
                <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
                  Steer AI development across tools.
                </h1>
                <p className="mt-6 text-lg text-haze-200 md:text-xl">
                  Define guidance once. Compile into Kiro, Cursor, Amazon Q—and keep your
                  team aligned with versioned, governed steering bundles.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    className="primary-button"
                    href="https://github.com/SteerMesh/steer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Install CLI
                  </a>
                  <Link className="secondary-button" href="#waitlist">
                    Join Cloud Waitlist
                  </Link>
                </div>
                <p className="mt-6 text-sm text-haze-300">
                  Open-core. Built for teams. Production-ready.
                </p>
              </div>
              <div className="card-surface p-6">
                <p className="text-sm font-semibold text-haze-200">Steering pipeline</p>
                <div className="mt-4 rounded-2xl border border-white/10 bg-ink-900/80 p-6">
                  <svg
                    className="h-56 w-full"
                    viewBox="0 0 420 220"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <rect x="10" y="20" width="90" height="50" rx="12" fill="#1F2433" />
                    <rect x="10" y="90" width="90" height="50" rx="12" fill="#1F2433" />
                    <rect x="10" y="160" width="90" height="50" rx="12" fill="#1F2433" />
                    <text x="25" y="50" fill="#B5C0DC" fontSize="12" fontFamily="monospace">
                      Packs
                    </text>
                    <text x="20" y="120" fill="#B5C0DC" fontSize="12" fontFamily="monospace">
                      Policies
                    </text>
                    <text x="22" y="190" fill="#B5C0DC" fontSize="12" fontFamily="monospace">
                      Models
                    </text>
                    <rect x="150" y="80" width="120" height="60" rx="14" fill="#2A3042" />
                    <text x="170" y="115" fill="#69F7C4" fontSize="13" fontFamily="monospace">
                      Compile
                    </text>
                    <rect x="310" y="20" width="90" height="50" rx="12" fill="#1F2433" />
                    <rect x="310" y="90" width="90" height="50" rx="12" fill="#1F2433" />
                    <rect x="310" y="160" width="90" height="50" rx="12" fill="#1F2433" />
                    <text x="326" y="50" fill="#B5C0DC" fontSize="12" fontFamily="monospace">
                      Kiro
                    </text>
                    <text x="326" y="120" fill="#B5C0DC" fontSize="12" fontFamily="monospace">
                      Cursor
                    </text>
                    <text x="326" y="190" fill="#B5C0DC" fontSize="12" fontFamily="monospace">
                      Amazon Q
                    </text>
                    <path
                      d="M100 45H150"
                      stroke="#69F7C4"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M100 115H150"
                      stroke="#69F7C4"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M100 185H150"
                      stroke="#69F7C4"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M270 110H310"
                      stroke="#69F7C4"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="290" cy="30" r="6" fill="#FF8A65" />
                    <circle cx="290" cy="110" r="6" fill="#FF8A65" />
                    <circle cx="290" cy="190" r="6" fill="#FF8A65" />
                    <path
                      d="M290 30V110V190"
                      stroke="#FF8A65"
                      strokeWidth="1.5"
                      strokeDasharray="4 6"
                    />
                    <text x="210" y="210" fill="#97A3C1" fontSize="10" fontFamily="monospace">
                      Sync + Govern in Cloud
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </section>

          <section className="section-shell mt-20">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-500">
                Problem
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-white md:text-4xl">
                Steering breaks when every tool speaks a different language.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Tool config divergence",
                  body: "Every IDE, agent, and vendor has its own steering syntax. Teams fork configs and lose alignment."
                },
                {
                  title: "Policy duplication + drift",
                  body: "Security and compliance rules get copied by hand and diverge with every update."
                },
                {
                  title: "No versioning/audit trail",
                  body: "You can’t answer who changed steering, when, or which tool is out of date."
                }
              ].map((item) => (
                <div key={item.title} className="card-surface p-6">
                  <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm text-haze-200">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-haze-300">
              Steering becomes inconsistent. AI behavior drifts.
            </p>
          </section>

          <section id="solution" className="section-shell mt-20">
            <div className="card-surface p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-500">
                Solution
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-white md:text-4xl">
                A control plane for AI steering.
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">Packs</h3>
                  <ul className="mt-3 space-y-2 text-sm text-haze-200">
                    <li>Composable steering modules with versioned metadata.</li>
                    <li>Bring security, style, and policy packs together.</li>
                    <li>Pin exact pack versions to avoid drift.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">Compiler</h3>
                  <ul className="mt-3 space-y-2 text-sm text-haze-200">
                    <li>Deterministic bundles and lockfiles.</li>
                    <li>Render targets for Kiro, Cursor, Amazon Q.</li>
                    <li>Validate constraints before shipping to teams.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">Cloud</h3>
                  <ul className="mt-3 space-y-2 text-sm text-haze-200">
                    <li>Central registry with org approvals.</li>
                    <li>RBAC, audit trails, and drift detection.</li>
                    <li>Sync bundles directly to tool fleets.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="section-shell mt-20">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-500">
                  How It Works
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold text-white md:text-4xl">
                  From packs to governed bundles in four steps.
                </h2>
                <div className="mt-8 grid gap-6">
                  {[
                    {
                      step: "01",
                      title: "Choose packs",
                      body: "Pick from curated steering packs or publish your own internal packs."
                    },
                    {
                      step: "02",
                      title: "Compile deterministic bundles",
                      body: "The compiler produces a locked, checksummed steering bundle."
                    },
                    {
                      step: "03",
                      title: "Render tool-specific outputs",
                      body: "Targets output the exact config format for each tool."
                    },
                    {
                      step: "04",
                      title: "Sync and govern with Cloud",
                      body: "Ship to fleets, monitor drift, and enforce approvals."
                    }
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-ink-800 text-xs font-semibold text-accent-500">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-haze-200">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-surface p-6">
                <p className="text-sm font-semibold text-haze-200">CLI Flow</p>
                <pre className="mt-4 rounded-2xl border border-white/10 bg-ink-900/80 p-5 font-mono text-sm text-haze-100">
                  <code>
                    steer init
                    {"\n"}steer add security-core@1.0.0
                    {"\n"}steer compile
                    {"\n"}steer sync
                  </code>
                </pre>
                <div className="mt-6 rounded-xl border border-white/10 bg-ink-700/60 p-4 text-xs text-haze-200">
                  Lockfiles + checksums ensure every tool compiles identical steering bundles.
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="section-shell mt-20">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-500">
                  Features
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold text-white md:text-4xl">
                  Governance without slowing teams down.
                </h2>
              </div>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Deterministic compilation + lockfiles",
                "Targets/adapters: Kiro, Cursor, Amazon Q",
                "Versioned bundles + checksums/signatures",
                "Drift detection",
                "GitHub-native workflows",
                "RBAC + audit logs (Cloud)"
              ].map((feature) => (
                <div key={feature} className="card-surface p-6">
                  <p className="font-display text-lg font-semibold text-white">{feature}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section-shell mt-20">
            <div className="card-surface p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-500">
                Open Core Trust
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-white md:text-4xl">
                Open specs. Enterprise control when you need it.
              </h2>
              <p className="mt-4 text-sm text-haze-200">
                The CLI, spec, and steering packs stay open. SteerMesh Cloud adds governance,
                policy gates, and fleet-scale sync.
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {repos.map((repo) => (
                  <a
                    key={repo.name}
                    className="card-surface p-5 transition hover:-translate-y-1 hover:border-accent-500"
                    href={repo.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className="font-display text-lg font-semibold text-white">{repo.name}</p>
                    <p className="mt-2 text-sm text-haze-200">{repo.description}</p>
                    <span className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
                      View Repo
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section id="waitlist" className="section-shell mt-20">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-500">
                  SteerMesh Cloud (Coming Soon)
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold text-white md:text-4xl">
                  Govern steering bundles at org scale.
                </h2>
                <ul className="mt-6 space-y-3 text-sm text-haze-200">
                  <li>Org steering registry + releases</li>
                  <li>RBAC + audit logs</li>
                  <li>Approvals and policy gates</li>
                </ul>
                <p className="mt-6 text-xs text-haze-300">
                  We only use your email to share SteerMesh Cloud updates. See our privacy
                  policy for details.
                </p>
              </div>
              <div className="card-surface p-6">
                <h3 className="font-display text-xl font-semibold text-white">Join the waitlist</h3>
                <p className="mt-2 text-sm text-haze-200">
                  Get early access to governance workflows, sync agents, and platform-level
                  guardrails.
                </p>
                <WaitlistForm />
              </div>
            </div>
          </section>
        </main>

        <footer className="section-shell border-t border-white/10 pb-12 pt-10 text-sm text-haze-300">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-display text-lg font-semibold text-white">SteerMesh</p>
              <p className="mt-2">Contact: Rick.Sanchez@brainbreaking.com</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] hover:border-accent-500 hover:text-accent-500"
                href="https://github.com/SteerMesh"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <Link
                className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] hover:border-accent-500 hover:text-accent-500"
                href="/privacy"
              >
                Privacy
              </Link>
              <Link
                className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] hover:border-accent-500 hover:text-accent-500"
                href="/terms"
              >
                Terms
              </Link>
            </div>
          </div>
          <p className="mt-6 text-xs text-haze-500">© {new Date().getFullYear()} SteerMesh</p>
        </footer>
      </div>
    </div>
  );
}
