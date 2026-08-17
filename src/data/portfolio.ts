export const site = {
  name: "Prakash B.L. Dhakal",
  title: "Software Developer",
  location: "kathmandu, nepal",
  status: "open to work",
  description:
    "I build reliable, maintainable software — from clean APIs to full-stack web apps. I care about code that other people can read, systems that don't fall over, and shipping things that actually get used.",
  email: "thelightloop@gmail.com",
  github: "https://github.com/thelightloop",
  linkedin: "https://linkedin.com/in/thelightloop",
} as const;

export const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export const about = {
  hash: "a1f9c2e",
  title: "init — about me",
  paragraphs: [
    "I'm a software developer based in Kathmandu with a passion for turning messy problems into simple, well-structured solutions. Whether it's a backend service, a web application, or an automation script, I approach every project with the same question: how will this be maintained a year from now?",
    "Outside of code, I enjoy learning new tools, contributing to open source, and mentoring junior developers getting started in tech.",
  ],
  facts: ["B.Sc. Computer Science & IT", "Full-stack development", "English · Nepali · Hindi"],
} as const;

export const projects = [
  {
    title: "HEI Core - Non-Life",
    diffstat: { added: "+15,210", removed: "−12,80", meta: "950+ Contributions" },
    description:
      "A core enterprise platform for Himalayan Everest Insurance that digitizes and streamlines non-life insurance operations across underwriting, claims, reinsurance, policy and endorsement workflows, accounting, and reporting. I contributed as a Full Stack/Sr. Software Engineer, developing business-critical services, REST APIs, database solutions, workflow automation, and modernizing legacy modules using .NET, ASP.NET MVC, PostgreSQL, and microservice-based architecture.",
    tags: [".NET", "Angular.JS", "PostgreSQL", "Microservices", "EF Core", "Docker", "Kubernetes","Jenkins","Deployments"],
    href: "https://uat-auth.hgidigital.com/",
  },
  {
    title: "HEI Customer Portal",
    diffstat: { added: "+20,875", removed: "−12,510",meta: "150+ Contributions" },
    description:
      "A digital customer portal built for Himalayan Everest Insurance to bring essential non-life insurance services online. The platform connects with core insurance systems to support customer-facing policy services, endorsements, document access, and other insurance workflows. I contributed to backend API development, business logic, database integration, and frontend features while ensuring reliable communication between the portal and core insurance services.",
    tags: [".NET", "Hangfire","Serilog", "REST API", "PostgreSQL", "NEXT.JS"],
    href: "https://heiuat-customer.hgidigital.com/",
  },
  {
    title: "HEI CMS – Content Management System",
    diffstat: { added: "+1,530", removed: "−260", meta: "95+ Contributions"},
    description:
      "An enterprise content management platform developed for Himalayan Everest Insurance to manage and publish website content, announcements, informational pages, and configurable digital content without requiring code changes. I contributed to the backend APIs, content workflows, database integration, administration features, and frontend interfaces, with a focus on maintainability, usability, and seamless integration with the company's digital ecosystem.",
    tags: [".NET", "PostgreSQL", "REST API", "NEXT.JS"],
    href: "https://uat-admin.hgidigital.com/",
  },
  {
    title: "Ticket Management System",
    diffstat: { added: "+7,520", removed: "−2,367", meta: "475+ Contributions" },
    description:
      "An enterprise ticketing platform for Himalayan Everest Insurance that streamlines internal issue reporting, service requests, assignment, tracking, and resolution. I contributed across backend APIs, business logic, database integration, workflow implementation, and administrative UI development.",
    tags: [".NET", "PostgreSQL", "REST API", "MVC", "Entity Framework", "Bootstrap", "jQuery"],
    href: "https://support.digitalhei.com/",
  },
] as const;

export const experience = [
  {
    period: "2024 — now",
    role: "Senior Software Developer",
    org: "Himalayan Everest Insurance Pvt. Ltd.",
    description:
      "Describe your responsibilities and biggest wins here — the systems you own, the features you shipped, the impact you had.",
  },
  {
    period: "2022 — 2024",
    role: "Mid-Level Software Developer",
    org: "Himalayan Everest Insurance Pvt. Ltd.",
    description:
      "Describe your responsibilities and biggest wins here — the systems you own, the features you shipped, the impact you had.",
  },
  {
    period: "2021 — 2022",
    role: "Intern",
    org: "Aqore Nepal Pvt. Ltd.",
    description:
      "Where it all started — the internship or first project that got you into professional software development.",
  },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript / TypeScript", "Python", "SQL", "C#"],
  },
  {
    title: "Frameworks",
    items: ["React / Next.js", "Angular", ".NET"],
  },
  {
    title: "Tools & Infra",
    items: ["Git & GitHub", "Docker", "PostgreSQL / MySQL", "Kubernetes","Jenkins"],
  },
] as const;
