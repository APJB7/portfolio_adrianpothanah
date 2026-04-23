import { useState } from "react";
import { MousePointerClick, Hand, XCircle } from "lucide-react";

export default function InteractivePreviewFrame({
  src,
  title,
  height = "700px",
  className = "",
}) {
  const [interactive, setInteractive] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#18181b] shadow-2xl ${className}`}
      style={{ height }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <iframe
        src={src}
        title={title}
        className={`h-full w-full border-0 ${
          interactive ? "pointer-events-auto" : "pointer-events-none"
        }`}
      />

      {!interactive && (
        <>
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/30 via-transparent to-black/10 transition-opacity duration-300"></div>

          <div
            className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-300 ${
              hovered
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            <button
              onClick={() => setInteractive(true)}
              className="pointer-events-auto inline-flex items-center gap-3 rounded-full border border-cyan-300/40 bg-gradient-to-r from-cyan-400 to-violet-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-2xl transition hover:-translate-y-1 hover:from-cyan-300 hover:to-violet-300"
            >
              <MousePointerClick className="h-4 w-4" />
              Click to Interact
            </button>
          </div>

          <div className="pointer-events-none absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs text-slate-200 backdrop-blur-md">
            Hover over preview to enable interaction
          </div>
        </>
      )}

      {interactive && (
        <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2">
          <button
            onClick={() => setInteractive(false)}
            className="inline-flex items-center gap-2 rounded-full border border-red-300/25 bg-black/70 px-5 py-2.5 text-xs font-bold text-white shadow-xl backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-red-500/80"
          >
            <XCircle className="h-4 w-4" />
            Stop Interaction
          </button>
        </div>
      )}

      {!interactive && hovered && (
        <div className="pointer-events-none absolute left-4 top-4 z-20 rounded-full border border-white/10 bg-black/55 px-3 py-1.5 text-[11px] font-semibold text-slate-200 backdrop-blur-md">
          <span className="inline-flex items-center gap-1.5">
            <Hand className="h-3.5 w-3.5" />
            Preview locked
          </span>
        </div>
      )}
    </div>
  );
}