"use client";

import { useState } from "react";
import { projects, type Project } from "../data";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="mb-16">
      <h2 className="mb-6 text-muted">projects</h2>
      {projects.map((project) => (
        <button
          key={project.id}
          type="button"
          onClick={() => setSelected(project)}
          className="group w-full border-b border-border py-4 text-left last:border-0"
        >
          <p className="text-foreground group-hover:underline">{project.title}</p>
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-hover:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="text-muted">{project.tagline}</p>
              <p className="text-xs text-muted">{project.category}</p>
            </div>
          </div>
        </button>
      ))}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
