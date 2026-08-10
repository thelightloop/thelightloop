import { skillGroups } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function SkillsSection() {
  return (
    <section id="skills" className="wrap">
      <SectionHeader hash="d5810bc" title="deps — skills & tools" />
      <div className="section-body">
        <div className="skills">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
