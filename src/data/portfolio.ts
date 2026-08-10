export const site = {
  name: "Prakash BL Dhakal",
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
    title: "Project One",
    diffstat: { added: "+4,210", removed: "−980", meta: "3 contributors" },
    description:
      "A short description of what this project does, the problem it solves, and your role in building it. Replace with your real project.",
    tags: ["React", "Node.js", "PostgreSQL"],
    href: "#",
  },
  {
    title: "Project Two",
    diffstat: { added: "+2,875", removed: "−410", meta: "solo build" },
    description:
      "Another project summary goes here — what you built, the stack you chose, and what the outcome was for users or the business.",
    tags: ["Python", "FastAPI", "Docker"],
    href: "#",
  },
  {
    title: "Project Three",
    diffstat: { added: "+1,530", removed: "−260", meta: "open source" },
    description:
      "A third highlight — an open-source contribution, a side project, or client work you're proud of. Swap in your own details.",
    tags: ["TypeScript", "Next.js"],
    href: "#",
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
