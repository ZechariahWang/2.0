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
          className="group relative block w-full border-b border-border bg-background py-4 text-left last:border-0 hover:z-20"
        >
          <div className="relative">
            <p className="text-foreground group-hover:underline">{project.title}</p>
            {/* Floats over the rows below so opening it shifts nothing. */}
            <div className="pointer-events-none absolute inset-x-0 top-full z-10 grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-hover:grid-rows-[1fr]">
              <div className="overflow-hidden bg-background">
                <div className="border-b border-border pb-4">
                  <p className="text-muted">{project.tagline}</p>
                  <p className="text-xs text-muted">{project.category}</p>
                </div>
              </div>
            </div>
          </div>
        </button>
      ))}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
