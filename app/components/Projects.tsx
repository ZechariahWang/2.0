"use client";

import { useState } from "react";
import { projects, type Project } from "../data";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="mb-16">
      <h2 className="mb-6 text-muted">{"// projects"}</h2>
      {projects.map((project) => (
        <button
          key={project.id}
          type="button"
          onClick={() => setSelected(project)}
          className="flex w-full items-baseline justify-between gap-4 border-b border-border py-4 text-left last:border-0"
        >
          <div>
            <p className="text-foreground hover:underline">{project.title}</p>
            <p className="text-muted">{project.tagline}</p>
          </div>
          <span className="shrink-0 text-xs text-muted">{project.category}</span>
        </button>
      ))}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
