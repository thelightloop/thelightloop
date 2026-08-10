import AboutSection from "@/components/AboutSection";
import ContactFooter from "@/components/ContactFooter";
import ExperienceSection from "@/components/ExperienceSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import { site } from "@/data/portfolio";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  email: site.email,
  url: "https://prakashdhakal.dev",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
  },
  sameAs: [site.github, site.linkedin],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <div className="spine-section">
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
      </div>
      <ContactFooter />
    </>
  );
}
