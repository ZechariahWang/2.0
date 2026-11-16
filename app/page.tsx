import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { email, githubUrl, name, tagline } from "./data";

const contactLink = "border-b border-border pb-0.5 text-sm hover:border-foreground";

export default function Home() {
  return (
    <main className="mx-auto max-w-[680px] px-4 py-14 sm:py-20">
      <header>
        <h1 className="mb-6 font-display text-5xl tracking-tight text-accent">{name}</h1>
        {tagline && <p className="mb-2 text-lg">{tagline}</p>}
        <About />
        <div className="mt-6 flex flex-wrap gap-6">
          <a href={`mailto:${email}`} className={contactLink}>
            {email} ↗
          </a>
          <a href={githubUrl} target="_blank" rel="noreferrer" className={contactLink}>
            github ↗
          </a>
        </div>
      </header>

      <Experience />
      <Projects />
    </main>
  );
}
