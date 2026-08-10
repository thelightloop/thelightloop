import { site } from "@/data/portfolio";

export default function ContactFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact">
      <div className="wrap">
        <span className="push">git push origin collaboration</span>
        <h2>Have a project in mind? Let&apos;s build it together.</h2>
        <div className="contact-links">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.github} target="_blank" rel="noopener noreferrer">
            github.com/thelightloop
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            linkedin.com/in/thelightloop
          </a>
        </div>
        <div className="foot-note">
          <span>© {year} {site.name}</span>
        </div>
      </div>
    </footer>
  );
}
