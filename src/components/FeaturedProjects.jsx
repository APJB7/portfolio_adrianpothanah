import { useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Gamepad2,
  Leaf,
  Database,
  ExternalLink,
  Palette,
} from "lucide-react";

export default function FeaturedProjects() {
  const projects = useMemo(
    () => [
      {
        id: 1,
        title: "AI-Driven Plant Disease Management System",
        subtitle: "Explainable AI • RAG • Severity Estimation",
        description:
          "A smart plant health assistant that detects diseases from uploaded leaf images, estimates severity, highlights affected regions, and provides research-backed treatment guidance for non-expert users.",
        icon: <Leaf className="h-5 w-5" />,
        accent: "from-emerald-400 to-teal-500",
        badgeClass:
          "border-emerald-400/25 bg-emerald-400/10 text-emerald-300",
        iconClass:
          "bg-emerald-400/10 text-emerald-300 border border-emerald-400/20",
        tags: ["TensorFlow", "Flask", "Grad-CAM", "ChromaDB", "PWA"],
        liveHref: "#plant-disease-system",
      },
      {
        id: 2,
        title: "Gladiator Run Game",
        subtitle: "Interactive Frontend • Canvas • Custom Assets",
        description:
          "A browser-based platform game featuring movement physics, collision detection, enemies, collectibles, scoring, timer mechanics, and custom-designed visual assets.",
        icon: <Gamepad2 className="h-5 w-5" />,
        accent: "from-cyan-400 to-blue-500",
        badgeClass: "border-cyan-400/25 bg-cyan-400/10 text-cyan-300",
        iconClass:
          "bg-cyan-400/10 text-cyan-300 border border-cyan-400/20",
        tags: ["JavaScript", "HTML Canvas", "CSS", "Game Logic", "Figma"],
        liveHref: "#game-showcase",
      },
      {
        id: 3,
        title: "Full-Stack Vue Coursework",
        subtitle: "Vue Frontend • Node Backend • MongoDB",
        description:
          "A practical coursework web application with lesson browsing, filtering, cart handling, checkout flow, and backend data persistence across separate frontend and backend repositories.",
        icon: <Database className="h-5 w-5" />,
        accent: "from-violet-400 to-fuchsia-500",
        badgeClass:
          "border-violet-400/25 bg-violet-400/10 text-violet-300",
        iconClass:
          "bg-violet-400/10 text-violet-300 border border-violet-400/20",
        tags: ["Vue.js", "Node.js", "MongoDB", "REST API", "Full-Stack"],
        liveHref: "#vue-project-live-preview",
      },
      {
        id: 4,
        title: "UI / UX Design Portfolio",
        subtitle: "Wireframes • Visual Design • User Experience",
        description:
          "A curated portfolio of UI and UX design work including interface concepts, wireframes, layout exploration, visual hierarchy, and presentation-ready design documentation.",
        icon: <Palette className="h-5 w-5" />,
        accent: "from-pink-400 to-violet-500",
        badgeClass: "border-pink-400/25 bg-pink-400/10 text-pink-300",
        iconClass:
          "bg-pink-400/10 text-pink-300 border border-pink-400/20",
        tags: ["Figma", "Wireframes", "UI Design", "UX Thinking", "Portfolio"],
        liveHref: "#uiux-portfolio",
      },
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentProject = projects[currentIndex];

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-24 text-white"
    >
      <div className="absolute left-[-100px] top-20 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"></div>
      <div className="absolute right-[-120px] bottom-10 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-emerald-300">
            Featured Projects
          </p>

          <h2 className="mx-auto mb-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Selected Work
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-300">
            A selection of projects that highlight my strengths in AI systems,
            interactive frontend development, and practical software design.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur-xl md:p-6">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${currentProject.accent} opacity-10`}
              ></div>

              <div className="relative z-10 flex h-full min-h-[360px] flex-col justify-between">
                <div>
                  <div
                    className={`mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${currentProject.badgeClass}`}
                  >
                    {currentProject.icon}
                    {currentProject.subtitle}
                  </div>

                  <h3 className="mb-4 max-w-2xl text-3xl font-bold leading-tight md:text-4xl">
                    {currentProject.title}
                  </h3>

                  <p className="max-w-2xl text-base leading-8 text-slate-300">
                    {currentProject.description}
                  </p>
                </div>

                <div className="mt-8">
                  <div className="mb-6 flex flex-wrap gap-3">
                    {currentProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs font-semibold text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={currentProject.liveHref}
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-1"
                    >
                      View Project
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-5 shadow-2xl">
              <div>
                <div className="mb-5 flex items-center justify-between">
                  <h4 className="text-lg font-bold text-white">
                    Project Navigation
                  </h4>

                  <div className="flex gap-2">
                    <button
                      onClick={prevSlide}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/15"
                      aria-label="Previous project"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>

                    <button
                      onClick={nextSlide}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/15"
                      aria-label="Next project"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  {projects.map((project, index) => {
                    const active = index === currentIndex;

                    return (
                      <button
                        key={project.id}
                        onClick={() => goToSlide(index)}
                        className={`flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition ${
                          active
                            ? "border-white/20 bg-white/12 shadow-lg"
                            : "border-white/8 bg-white/[0.04] hover:bg-white/[0.08]"
                        }`}
                      >
                        <div
                          className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${project.iconClass}`}
                        >
                          {project.icon}
                        </div>

                        <div className="min-w-0">
                          <h5 className="truncate text-sm font-bold text-white">
                            {project.title}
                          </h5>
                          <p className="mt-1 text-xs leading-6 text-slate-400">
                            {project.subtitle}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to project ${index + 1}`}
                    className={`h-2.5 rounded-full transition ${
                      index === currentIndex
                        ? "w-8 bg-white"
                        : "w-2.5 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}