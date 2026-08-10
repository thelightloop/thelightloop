import { experience } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function ExperienceSection() {
  return (
    <section id="experience" className="wrap">
      <SectionHeader hash="c93e77f" title="log — experience" />
      <div className="section-body xp">
        {experience.map((item) => (
          <div className="xp-item" key={`${item.period}-${item.org}`}>
            <div className="xp-date">{item.period}</div>
            <div>
              <div>
                <span className="xp-role">{item.role}</span> ·{" "}
                <span className="xp-org">{item.org}</span>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
