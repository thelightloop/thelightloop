"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

const AUTO_PLAY_MS = 3000;
const PAUSE_MS = 5000;

type Project = (typeof projects)[number];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project project-slide">
      <h3>{project.title}</h3>
      <span className="diffstat">
        <span className="add">{project.diffstat.added}</span>{" "}
        <span className="del">{project.diffstat.removed}</span> ·{" "}
        {project.diffstat.meta}
      </span>
      <div className="project-scroll">
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <a href={project.href}>View project →</a>
    </article>
  );
}

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const pauseUntilRef = useRef(0);

  const scrollToIndex = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const viewport = viewportRef.current;
      const slide = viewport?.querySelectorAll(".project-slide")[index] as
        | HTMLElement
        | undefined;

      if (!viewport || !slide) {
        return;
      }

      viewport.scrollTo({ left: slide.offsetLeft, behavior });
      activeIndexRef.current = index;
      setActiveIndex(index);
    },
    [],
  );

  const pauseAutoplay = () => {
    pauseUntilRef.current = Date.now() + PAUSE_MS;
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || projects.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      if (Date.now() < pauseUntilRef.current) {
        return;
      }

      const nextIndex = (activeIndexRef.current + 1) % projects.length;
      scrollToIndex(nextIndex);
    }, AUTO_PLAY_MS);

    return () => window.clearInterval(intervalId);
  }, [scrollToIndex]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }

    const syncActiveSlide = () => {
      const slides = viewport.querySelectorAll(".project-slide");
      let closestIndex = 0;
      let closestDistance = Infinity;

      slides.forEach((slide, index) => {
        const distance = Math.abs(
          (slide as HTMLElement).offsetLeft - viewport.scrollLeft,
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      activeIndexRef.current = closestIndex;
      setActiveIndex(closestIndex);
    };

    viewport.addEventListener("scroll", syncActiveSlide, { passive: true });
    window.addEventListener("resize", syncActiveSlide);

    return () => {
      viewport.removeEventListener("scroll", syncActiveSlide);
      window.removeEventListener("resize", syncActiveSlide);
    };
  }, []);

  return (
    <section id="projects" className="wrap">
      <SectionHeader hash="b47d10a" title="feat — selected projects" />
      <div className="section-body">
        <div
          className="projects-carousel"
          ref={viewportRef}
          onMouseEnter={pauseAutoplay}
          onMouseLeave={pauseAutoplay}
          onFocusCapture={pauseAutoplay}
          aria-roledescription="carousel"
          aria-label="Selected projects"
        >
          <div className="projects-track">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        {projects.length > 1 && (
          <div className="projects-dots" role="tablist" aria-label="Project slides">
            {projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                role="tab"
                className={`projects-dot${index === activeIndex ? " active" : ""}`}
                aria-label={`Show ${project.title}`}
                aria-selected={index === activeIndex}
                onClick={() => {
                  pauseAutoplay();
                  scrollToIndex(index);
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
