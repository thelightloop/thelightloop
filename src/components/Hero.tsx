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
          <a className="btn btn-primary" href="#projects">
            See my work
          </a>
          <a className="btn btn-ghost" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
