import { about } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function AboutSection() {
  return (
    <section id="about" className="wrap">
      <SectionHeader hash={about.hash} title={about.title} gold />
      <div className="section-body about-grid">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
        <div className="facts">
          {about.facts.map((fact) => (
            <span className="fact" key={fact}>
              {fact}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
