import { experiences } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="mb-16">
      <h2 className="mb-6 text-muted">experience</h2>
      <div>
        {experiences.map((exp) => (
          <div key={exp.company} className="group relative border-b border-border bg-background py-4 last:border-0 hover:z-20">
            <div className="relative">
              <div className="flex justify-between gap-4">
                <span className="text-foreground">{exp.company}</span>
                <span className="shrink-0 text-muted tabular-nums">{exp.period}</span>
              </div>
              {/* Floats over the rows below so opening it shifts nothing. */}
              <div className="pointer-events-none absolute inset-x-0 top-full z-10 grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-hover:grid-rows-[1fr]">
                <div className="overflow-hidden bg-background">
                  <div className="border-b border-border pb-4">
                    <div className="text-muted">
                      {exp.role} / {exp.location}
                    </div>
                    <div>{exp.summary}</div>
                    <div className="text-xs text-muted">{exp.skills.join(" · ")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
