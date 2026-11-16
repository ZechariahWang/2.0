"use client";

import { useState } from "react";
import { projects, type Project } from "../data";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="mt-12 border-t border-border pt-10">
      <h2 className="mb-6 font-display text-2xl text-accent">Projects</h2>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => setSelected(project)}
            className="group block w-full text-left"
          >
            <p className="text-lg font-medium group-hover:underline">{project.title} ↗</p>
            <p className="text-xs uppercase tracking-wider text-muted">{project.category}</p>
            <p className="text-muted">{project.tagline}</p>
          </button>
        ))}
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
