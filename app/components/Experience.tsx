import { experiences } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="mt-12 border-t border-border pt-10">
      <h2 className="mb-6 font-display text-2xl text-accent">Work</h2>
      <div className="flex flex-col gap-5">
        {experiences.map((exp) => (
          <div key={exp.company} className="grid gap-x-6 sm:grid-cols-[180px_1fr]">
            <span className="font-medium">{exp.company}</span>
            <div>
              <p className="text-muted">{exp.summary}</p>
              <p className="text-xs uppercase tracking-wider text-muted">
                {exp.role} / {exp.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
