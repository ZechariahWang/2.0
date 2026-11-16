import { about } from "../data";

export default function About() {
  return (
    <section id="about" className="max-w-[70ch] text-muted">
      {about.map((paragraph) => (
        <p key={paragraph} className="mb-2">
          {paragraph}
        </p>
      ))}
    </section>
  );
}
