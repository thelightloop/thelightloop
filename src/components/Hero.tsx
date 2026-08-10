import { Button } from "@/components/ui/button";
import { site } from "@/data/portfolio";

export default function Hero() {
  return (
    <header id="top">
      <div className="wrap">
        <span className="eyebrow">
          {site.location} <span className="dot">●</span> {site.status}
        </span>
        <h1>
          Prakash BL Dhakal <span className="accent">/ software developer</span>
        </h1>
        <p className="hero-sub">{site.description}</p>
        <div className="hero-cta">
          <Button
            variant="portfolio"
            nativeButton={false}
            render={<a href="#projects" />}
          >
            See my work
          </Button>
          <Button
            variant="portfolio-outline"
            nativeButton={false}
            render={<a href="#contact" />}
          >
            Get in touch
          </Button>
        </div>
      </div>
    </header>
  );
}
