import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Tech Stack</p>
        <h3 className="mt-3 text-3xl font-semibold md:text-4xl">Skills & Tools</h3>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200 backdrop-blur-xl"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}