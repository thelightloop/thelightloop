import { projects } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function ProjectsSection() {
  return (
    <section id="projects" className="wrap">
      <SectionHeader hash="b47d10a" title="feat — selected projects" />
      <div className="section-body">
        <div className="projects">
          {projects.map((project) => (
            <article className="project" key={project.title}>
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
          ))}
        </div>
      </div>
    </section>
  );
}
