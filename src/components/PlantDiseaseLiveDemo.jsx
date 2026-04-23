import { Play, Sparkles, Leaf, Activity, BrainCircuit } from "lucide-react";
import InteractivePreviewFrame from "./InteractivePreviewFrame";

export default function PlantDiseaseLiveDemo() {
  return (
    <section
      id="plant-disease-live-demo"
      className="relative overflow-hidden px-6 py-24 text-white"
    >
      {/* Animated glowing background objects */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl animate-pulse"></div>
      <div className="absolute right-[-80px] top-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-green-400/10 blur-3xl animate-pulse"></div>

      {/* Floating mini cards / icons */}
      <div className="absolute left-[6%] top-24 hidden md:flex items-center gap-2 rounded-2xl border border-emerald-400/20 bg-white/5 px-4 py-3 backdrop-blur-xl animate-[floatY_6s_ease-in-out_infinite]">
        <Leaf className="h-4 w-4 text-emerald-300" />
        <span className="text-xs font-semibold text-emerald-200">
          Leaf Analysis
        </span>
      </div>

      <div className="absolute right-[7%] top-36 hidden lg:flex items-center gap-2 rounded-2xl border border-cyan-400/20 bg-white/5 px-4 py-3 backdrop-blur-xl animate-[floatY_7s_ease-in-out_infinite]">
        <Activity className="h-4 w-4 text-cyan-300" />
        <span className="text-xs font-semibold text-cyan-200">
          Severity Detection
        </span>
      </div>

      <div className="absolute bottom-20 right-[12%] hidden lg:flex items-center gap-2 rounded-2xl border border-violet-400/20 bg-white/5 px-4 py-3 backdrop-blur-xl animate-[floatY_8s_ease-in-out_infinite]">
        <BrainCircuit className="h-4 w-4 text-violet-300" />
        <span className="text-xs font-semibold text-violet-200">
          Explainable AI
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300 backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Interactive AI Demo
          </div>

          <h2 className="mb-4 text-4xl font-bold md:text-6xl">
            Plant Disease Live Preview
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-300">
            This embedded interactive demo uses a preloaded sample leaf image.
            Visitors can click analyse and preview the workflow for disease
            detection, severity estimation, visual explanation and treatment
            guidance.
          </p>
        </div>

        <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur-2xl transition duration-500 hover:border-emerald-400/20 hover:bg-white/[0.05]">
          <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300 shadow-lg shadow-emerald-500/10">
                <Play className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-sm font-bold text-white">
                  Live Demo Environment
                </h3>
                <p className="text-xs text-slate-400">
                  Preloaded sample workflow for portfolio viewing
                </p>
              </div>
            </div>

            <span className="hidden rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300 sm:inline-flex">
              Demo Mode
            </span>
          </div>

          <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
              <span className="h-3 w-3 rounded-full bg-green-400"></span>
              <span className="ml-3 text-xs font-semibold text-slate-300">
                PlantGuard AI Demo
              </span>
            </div>

            <div className="relative flex w-full justify-center">
              <div className="w-full">
                <InteractivePreviewFrame
                  src="projects/plant-disease-demo/index.html"
                  title="Plant Disease Management System Preview"
                  height="700px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
}