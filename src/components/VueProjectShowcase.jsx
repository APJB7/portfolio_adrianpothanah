import { Layers3, Code2, Database, ExternalLink, Server } from "lucide-react";

export default function VueProjectShowcase() {
  return (
    <section
      id="vue-project-showcase"
      className="relative overflow-hidden px-6 py-24 text-white"
    >
      <div className="absolute left-[-100px] top-10 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl"></div>
      <div className="absolute right-[-100px] bottom-10 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm font-semibold text-violet-300">
            <Layers3 className="h-4 w-4" />
            Featured Web Project
          </div>

          <h2 className="mx-auto mb-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Full-Stack Vue Coursework
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-300">
            A coursework web application showcasing Vue frontend development,
            JavaScript backend structure, and a practical full-stack workflow
            across separate frontend and backend repositories.
          </p>
        </div>

        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950 shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.06] px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
              <span className="h-3 w-3 rounded-full bg-green-400"></span>
              <span className="ml-3 text-xs font-semibold text-slate-300">
                Vue Coursework Project
              </span>
            </div>

            <div className="flex min-h-[360px] items-center justify-center bg-gradient-to-br from-violet-500/10 via-slate-900 to-fuchsia-500/10 p-8">
              <div className="grid w-full gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                  <div className="mb-3 flex items-center gap-2 text-violet-300">
                    <Code2 className="h-5 w-5" />
                    <span className="text-sm font-bold">Frontend</span>
                  </div>
                  <p className="text-sm leading-7 text-slate-300">
                    Vue-based interface structure for the coursework frontend.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                  <div className="mb-3 flex items-center gap-2 text-fuchsia-300">
                    <Server className="h-5 w-5" />
                    <span className="text-sm font-bold">Backend</span>
                  </div>
                  <p className="text-sm leading-7 text-slate-300">
                    JavaScript backend structure with server-side logic and data files.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 md:col-span-2">
                  <div className="mb-3 flex items-center gap-2 text-cyan-300">
                    <Database className="h-5 w-5" />
                    <span className="text-sm font-bold">Project Workflow</span>
                  </div>
                  <p className="text-sm leading-7 text-slate-300">
                    Split frontend and backend repositories highlight practical full-stack project organisation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-6 flex flex-wrap gap-3">
              <TechBadge text="Vue" />
              <TechBadge text="JavaScript" />
              <TechBadge text="Node.js" />
              <TechBadge text="Frontend + Backend" />
            </div>

            <h3 className="mb-4 text-2xl font-bold text-white">
              Structured coursework full-stack development
            </h3>

            <p className="mb-6 leading-8 text-slate-300">
              This project represents a practical coursework implementation with
              a dedicated Vue frontend repository and a separate backend
              repository, making it a strong example of modular web application
              development.
            </p>

            <div className="mb-7 grid gap-4 sm:grid-cols-2">
              <FeatureItem
                icon={<Code2 className="h-5 w-5" />}
                title="Vue Frontend"
                text="Dedicated frontend repository for interface development."
              />
              <FeatureItem
                icon={<Server className="h-5 w-5" />}
                title="Backend Structure"
                text="Separate backend implementation using JavaScript."
              />
              <FeatureItem
                icon={<Database className="h-5 w-5" />}
                title="Practical Workflow"
                text="Clear separation between frontend and backend responsibilities."
              />
              <FeatureItem
                icon={<Layers3 className="h-5 w-5" />}
                title="Portfolio Value"
                text="Shows full-stack structure, project organisation, and coursework delivery."
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/APJB7/Vue-FrontEnd"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-violet-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-violet-300"
              >
                Frontend Repo
                <ExternalLink className="h-4 w-4" />
              </a>

              <a
                href="https://github.com/APJB7/Fullstack-Backend"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/15"
              >
                Backend Repo
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechBadge({ text }) {
  return (
    <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-xs font-bold text-violet-300">
      {text}
    </span>
  );
}

function FeatureItem({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
        {icon}
      </div>
      <h4 className="mb-1 text-sm font-bold text-white">{title}</h4>
      <p className="text-sm leading-6 text-slate-400">{text}</p>
    </div>
  );
}