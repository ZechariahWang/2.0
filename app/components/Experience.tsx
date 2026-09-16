import { experiences } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="mb-16">
      <h2 className="mb-6 text-muted">{"// experience"}</h2>
      <div>
        {experiences.map((exp) => (
          <div key={exp.company} className="border-b border-border py-4 last:border-0">
            <div className="flex justify-between gap-4">
              <span className="text-foreground">{exp.company}</span>
              <span className="shrink-0 text-muted tabular-nums">{exp.period}</span>
            </div>
            <div className="text-muted">
              {exp.role} / {exp.location}
            </div>
            <div>{exp.summary}</div>
            <div className="text-xs text-muted">{exp.skills.join(" · ")}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
