import { about, skills } from "../data";

export default function About() {
  return (
    <section id="about" className="mb-16">
      <h2 className="mb-6 text-muted">{"// about"}</h2>
      <div className="max-w-prose">
        {about.map((paragraph) => (
          <p key={paragraph} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
      <div>
        {skills.map((entry) => (
          <div
            key={entry.label}
            className="flex border-b border-border py-2"
          >
            <span className="w-24 shrink-0 text-muted">{entry.label}</span>
            <span>{entry.items.join(", ")}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
