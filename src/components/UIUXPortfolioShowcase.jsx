import { FileText, Download, ExternalLink, Palette } from "lucide-react";
import InteractivePreviewFrame from "./InteractivePreviewFrame";

export default function UIUXPortfolioShowcase() {
  return (
    <section
      id="uiux-portfolio"
      className="relative overflow-hidden px-6 py-24 text-white"
    >
      <div className="absolute left-[-80px] top-20 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl"></div>
      <div className="absolute right-[-100px] top-40 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-400/30 bg-pink-400/10 px-4 py-2 text-sm font-semibold text-pink-300">
            <Palette className="h-4 w-4" />
            UI / UX Portfolio
          </div>

          <h2 className="mx-auto mb-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            UI / UX Design Portfolio
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-300">
            A collection of interface designs, wireframes, visual concepts and
            user experience work presented in a clean PDF portfolio format.
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 opacity-40 blur-xl"></div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950/95 shadow-2xl">
            <div className="flex flex-col gap-4 border-b border-white/10 bg-white/[0.06] px-5 py-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400"></span>
                  <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                  <span className="h-3 w-3 rounded-full bg-green-400"></span>
                </div>

                <div className="hidden h-5 w-px bg-white/10 md:block"></div>

                <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                  <FileText className="h-4 w-4 text-pink-300" />
                  PDF Preview
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`/uiux-portfolio.pdf`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-pink-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-pink-300"
                >
                  Open PDF
                  <ExternalLink className="h-4 w-4" />
                </a>

                <a
                  href="/uiux-portfolio.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/15"
                >
                  Download
                  <Download className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="bg-slate-900 p-4 md:p-5">
              <InteractivePreviewFrame
                src="public/uiux-portfolio.pdf"
                title="UI UX Portfolio PDF"
                height="780px"
                className="rounded-[1.4rem] border border-white/10 bg-[#1f1f23] shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}