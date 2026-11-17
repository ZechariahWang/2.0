import Image from "next/image";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { email, githubUrl, linkedinUrl, name, tagline, youtubeUrl } from "./data";

const contactLink = "border-b border-border pb-0.5 text-sm hover:border-foreground";

export default function Home() {
  return (
    <main className="mx-auto max-w-[680px] px-4 py-14 sm:py-20">
      <header className="flex flex-col-reverse gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
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
            <a href={linkedinUrl} target="_blank" rel="noreferrer" className={contactLink}>
              linkedin ↗
            </a>
            <a href={youtubeUrl} target="_blank" rel="noreferrer" className={contactLink}>
              youtube ↗
            </a>
          </div>
        </div>
        <Image
          src="/about/IMG_5987.png"
          alt={name}
          width={701}
          height={624}
          unoptimized
          priority
          className="h-auto w-64 shrink-0 rounded-md"
        />
      </header>

      <Experience />
      <Projects />
    </main>
  );
}
