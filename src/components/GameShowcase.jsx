import { useState } from "react";
import {
  Gamepad2,
  Code2,
  ExternalLink,
  Sparkles,
  MonitorPlay,
  Play,
} from "lucide-react";

export default function GameShowcase() {
  const [startPreview, setStartPreview] = useState(false);

  return (
    <section
      id="game-showcase"
      className="relative overflow-hidden px-6 py-24 text-white"
    >
      <div className="absolute left-[-80px] top-20 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl"></div>
      <div className="absolute right-[-80px] top-64 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"></div>

      <div className="absolute left-10 top-32 hidden animate-float-slow rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md lg:block">
        <Gamepad2 className="h-8 w-8 text-emerald-300" />
      </div>

      <div className="absolute right-16 top-36 hidden animate-float-medium rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md lg:block">
        <Code2 className="h-8 w-8 text-cyan-300" />
      </div>

      <div className="absolute bottom-28 left-24 hidden animate-float-fast rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md lg:block">
        <Sparkles className="h-8 w-8 text-yellow-300" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
            <Gamepad2 className="h-4 w-4" />
            Featured Interactive Project
          </div>

          <h2 className="mx-auto mb-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Gladiator Run Game
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-300">
            A browser-based platform game built with HTML Canvas, JavaScript,
            custom Figma-designed characters, enemy movement, collectibles,
            sound effects, scoring, timer logic and collision detection.
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 opacity-50 blur-xl"></div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950/95 shadow-2xl shadow-emerald-950/40">
            <div className="flex flex-col gap-4 border-b border-white/10 bg-white/[0.06] px-5 py-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400"></span>
                  <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                  <span className="h-3 w-3 rounded-full bg-green-400"></span>
                </div>

                <div className="hidden h-5 w-px bg-white/10 md:block"></div>

                <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                  <MonitorPlay className="h-4 w-4 text-emerald-300" />
                  Live Game Preview
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/10 bg-black/30 px-4 py-1 text-xs text-slate-300">
                  1024 × 576 Canvas Game
                </span>

                <a
                  href="/projects/GLADIATOR_RUN/index.html"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-4 py-2 text-xs font-bold text-slate-950 transition hover:bg-emerald-300"
                >
                  Open Full Game
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div
              className="relative flex min-h-[620px] items-center justify-center overflow-hidden bg-black p-6"
              tabIndex="0"
              onKeyDown={(e) => {
                if (
                  e.key === "ArrowUp" ||
                  e.key === "ArrowDown" ||
                  e.key === "ArrowLeft" ||
                  e.key === "ArrowRight" ||
                  e.key === " "
                ) {
                  e.preventDefault();
                }
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12),transparent_55%)]"></div>

              <div className="relative h-[576px] w-[1024px] max-w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
                {!startPreview ? (
                  <div
                    className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-6 text-center"
                    style={{
                      backgroundImage:
                        `url('${import.meta.env.BASE_URL}gladiator_run_logo.png')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="absolute inset-0 bg-black/10"></div>

                    <div className="relative z-10 flex flex-col items-center">
                      <button
                        onClick={() => setStartPreview(true)}
                        className="-translate-y-[33px] inline-flex items-center gap-3 rounded-xl bg-yellow-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:-translate-y-[11px] hover:bg-yellow-400"
                      >
                        <Play className="h-5 w-5 fill-current" />
                        Play
                      </button>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src="/projects/GLADIATOR_RUN/index.html?preview=true"
                    title="Gladiator Run Game Preview"
                    tabIndex="0"
                    className="absolute left-0 top-0 h-[576px] w-[1024px] origin-top-left border-0"
                  ></iframe>
                )}
              </div>

              <div className="pointer-events-none absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-xs text-slate-200 shadow-lg backdrop-blur-md">
                {startPreview
                  ? "Click inside the game first • Arrow keys to play"
                  : "Game preview is paused until you press Play"}
              </div>
            </div>

            <div className="grid gap-4 border-t border-white/10 bg-white/[0.04] p-5 md:grid-cols-[1fr_auto] md:items-center">
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-slate-200">
                  JavaScript
                </span>
                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-slate-200">
                  HTML Canvas
                </span>
                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-slate-200">
                  CSS
                </span>
                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-slate-200">
                  Figma Assets
                </span>
                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-slate-200">
                  Collision Logic
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="/projects/GLADIATOR_RUN/index.html"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/25 transition hover:-translate-y-1 hover:bg-emerald-400"
                >
                  Play Fullscreen
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md">
            <h3 className="mb-3 text-lg font-bold text-emerald-300">
              Custom Game Assets
            </h3>
            <p className="text-sm leading-7 text-slate-300">
              Characters, enemies, platforms and visual elements were designed
              and refined using Figma.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md">
            <h3 className="mb-3 text-lg font-bold text-cyan-300">
              Game Mechanics
            </h3>
            <p className="text-sm leading-7 text-slate-300">
              Includes jumping, scrolling, collision detection, enemies,
              piranhas, coins, timer and scoring.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md">
            <h3 className="mb-3 text-lg font-bold text-purple-300">
              Portfolio Value
            </h3>
            <p className="text-sm leading-7 text-slate-300">
              Demonstrates frontend creativity, JavaScript logic, UI polish and
              interactive development skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}