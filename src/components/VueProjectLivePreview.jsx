import { ExternalLink, MonitorPlay, Database, ShoppingCart } from "lucide-react";

export default function VueProjectLivePreview() {
    return (
        <section
            id="vue-project-live-preview"
            className="relative overflow-hidden px-6 py-24 text-white"
        >
            <div className="absolute left-[-80px] top-20 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl"></div>
            <div className="absolute right-[-80px] top-64 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"></div>
            <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl"></div>

            <div className="relative mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm font-semibold text-violet-300">
                        <ShoppingCart className="h-4 w-4" />
                        Featured Full-Stack Project
                    </div>

                    <h2 className="mx-auto mb-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                        AfterClass Lesson Booking Platform
                    </h2>

                    <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-300">
                        A Vue.js and Node.js full-stack lesson booking website with search,
                        filtering, cart management, checkout flow, authentication modal, and
                        MongoDB-backed data handling.
                    </p>
                </div>

                <div className="relative mx-auto max-w-6xl">
                    <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-violet-400 via-indigo-400 to-fuchsia-500 opacity-50 blur-xl"></div>

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
                                    <MonitorPlay className="h-4 w-4 text-violet-300" />
                                    Live Website Preview
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-3">
                                <span className="rounded-full border border-white/10 bg-black/30 px-4 py-1 text-xs text-slate-300">
                                    Vue Frontend + Node Backend
                                </span>

                                <a
                                    href="https://apjb7.github.io/Vue-FrontEnd/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-violet-400 px-4 py-2 text-xs font-bold text-slate-950 transition hover:bg-violet-300"
                                >
                                    Open Full Website
                                    <ExternalLink className="h-3.5 w-3.5" />
                                </a>
                            </div>
                        </div>

                        <div className="relative flex min-h-[760px] items-center justify-center overflow-hidden bg-black p-6">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.14),transparent_55%)]"></div>

                            <div className="relative h-[700px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl">
                                <iframe
                                    src="https://apjb7.github.io/Vue-FrontEnd/"
                                    title="AfterClass Vue Project Preview"
                                    className="h-full w-full border-0"
                                ></iframe>
                            </div>

                            <div className="pointer-events-none absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-xs text-slate-200 shadow-lg backdrop-blur-md">
                                Live deployed preview from GitHub Pages
                            </div>
                        </div>

                        <div className="grid gap-4 border-t border-white/10 bg-white/[0.04] p-5 md:grid-cols-[1fr_auto] md:items-center">
                            <div className="flex flex-wrap gap-3">
                                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-slate-200">
                                    Vue.js
                                </span>
                                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-slate-200">
                                    Node.js
                                </span>
                                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-slate-200">
                                    MongoDB
                                </span>
                                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-slate-200">
                                    Cart Logic
                                </span>
                                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-slate-200">
                                    Search & Filters
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="https://apjb7.github.io/Vue-FrontEnd/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-500/25 transition hover:-translate-y-1 hover:bg-violet-400"
                                >
                                    Launch Website
                                    <ExternalLink className="h-4 w-4" />
                                </a>

                                <a
                                    href="https://github.com/APJB7/Vue-FrontEnd"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15"
                                >
                                    Frontend Repo
                                    <span>↗</span>
                                </a>

                                <a
                                    href="https://github.com/APJB7/Fullstack-Backend"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15"
                                >
                                    Backend Repo
                                    <Database className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}