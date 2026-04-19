export default function ProjectCard({ project }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-emerald-400/30">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">
          {project.category}
        </span>
      </div>

      <div className="mb-5 h-44 rounded-3xl bg-gradient-to-br from-white/10 to-transparent" />

      <h4 className="text-2xl font-semibold">{project.title}</h4>
      <p className="mt-3 leading-7 text-slate-300">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-sm text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}