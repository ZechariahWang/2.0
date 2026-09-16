"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { Project } from "../data";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project) {
      if (!dialog.open) dialog.showModal();
    } else {
      dialog.close();
    }
  }, [project]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
      className="m-auto max-h-[90vh] w-[min(92vw,640px)] overflow-y-auto border border-border bg-background p-6 text-foreground"
    >
      {project && (
        <div>
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-foreground">{project.title}</h3>
            <button
              type="button"
              aria-label="close"
              onClick={onClose}
              className="text-muted hover:text-foreground"
            >
              esc
            </button>
          </div>
          <p className="text-muted">{project.tagline}</p>

          <div className="relative my-4 aspect-video border border-border">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 92vw, 640px"
              className="object-cover"
            />
          </div>

          {project.paragraphs.map((paragraph, i) => (
            <p key={i} className="mb-3">
              {paragraph}
            </p>
          ))}

          <p className="text-xs text-muted">{project.technologies.join(" · ")}</p>

          {(project.githubUrl || project.liveUrl) && (
            <div className="mt-4 flex gap-4 text-muted">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  github
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  live
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </dialog>
  );
}
