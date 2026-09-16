import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { email, githubUrl, name, tagline } from "./data";

export default function Home() {
  return (
    <main className="mx-auto max-w-[680px] px-4 py-14 sm:py-20">
      <header className="mb-14 flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h1 className="text-base font-medium">{name}</h1>
          <p className="text-muted">{tagline}</p>
        </div>
        <nav className="flex gap-4 text-muted">
          <a href="#about" className="hover:text-foreground">about</a>
          <a href="#experience" className="hover:text-foreground">experience</a>
          <a href="#projects" className="hover:text-foreground">projects</a>
        </nav>
      </header>

      <About />
      <Experience />
      <Projects />

      <footer className="mt-20 flex gap-4 border-t border-border pt-6 text-muted">
        <a href={githubUrl} target="_blank" rel="noreferrer" className="hover:text-foreground">github</a>
        <a href={`mailto:${email}`} className="hover:text-foreground">email</a>
      </footer>
    </main>
  );
}
