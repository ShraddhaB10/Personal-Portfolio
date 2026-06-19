export const profile = {
  name: "Shraddha Bahuguna",
  title: "Software Development Engineer",
  tagline: "Building distributed systems, resilient infrastructure, and developer tooling at scale.",
  bio: "Former SDE-I at Amazon. Passionate about performance, reliability, and clean architecture. I thrive at the intersection of systems design and developer experience.",
  email: "shraddhabahuguna2002@gmail.com",
  phone: "+91 6397818872",
  linkedin: "https://linkedin.com/in/shraddha-bahuguna",
  location: "Dehradun, India",
  status: "Open to Opportunities",
};

export const stats = [
  { value: "40%", label: "Processing time reduced" },
  { value: "25%", label: "Incident rate reduction" },
  { value: "6", label: "Services migrated (JDK 17)" },
  { value: "9.01", label: "CGPA — B.Tech CS" },
];

export const skillCategories = [
  {
    id: "languages",
    label: "Languages & Frameworks",
    skills: ["Java", "C++", "Python", "JavaScript", "Spring Boot", "React.js"],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    skills: ["AWS", "CloudFormation", "AppConfig", "CI/CD", "Blue-Green Deployments"],
  },
  {
    id: "data",
    label: "Data & Systems",
    skills: ["SQL", "DynamoDB", "Distributed Systems", "Scalable Design"],
  },
  {
    id: "practices",
    label: "Engineering Practices",
    skills: ["REST APIs", "Microservices", "Auth & Security", "Observability", "JUnit", "Gen AI", "DSA"],
  },
];

export const experience = [
  {
    id: "amazon-sde1",
    role: "Software Development Engineer I",
    company: "Amazon",
    period: "July 2024 – April 2026",
    type: "Full-time",
    highlights: [
      {
        title: "Authentication Migration",
        description:
          "Led end-to-end migration to a secure service-to-service authentication system across 4 distributed services (25+ dependencies each), reducing unauthorized access risk and cutting onboarding time. Zero-downtime rollout across 4+ teams.",
      },
      {
        title: "Parallel Processing System",
        description:
          "Designed and implemented a distributed parallel execution engine in Java and AWS to concurrently process thousands of delivery workflows, reducing end-to-end processing time by 40% and increasing throughput.",
      },
      {
        title: "Canary Testing Framework",
        description:
          "Built a canary testing pipeline generating ~1 req/ms of production-like traffic, catching 60–70% of regressions before rollout and reducing incident rate by 25%.",
      },
      {
        title: "Observability & Internal Tooling",
        description:
          "Built an internal React + AWS dashboard to track partner onboarding in real time. Segregated 4xx/5xx error metrics, cutting average debugging time by 5+ hours/week and improving on-call response efficiency.",
      },
      {
        title: "Platform Modernization",
        description:
          "Drove JDK 17 migration across 6 distributed services with zero production downtime, resolving 4+ compatibility issues and reducing dependency vulnerabilities.",
      },
    ],
  },
  {
    id: "amazon-intern",
    role: "Software Development Engineer — Intern",
    company: "Amazon",
    period: "July 2023 – December 2023",
    type: "Internship",
    highlights: [
      {
        title: "Blue-Green Deployments",
        description:
          "Implemented Blue-Green deployment strategy, improving deployment safety and reducing rollback risks across production services.",
      },
      {
        title: "Feature Flag Migration",
        description:
          "Migrated 250+ feature flags per region from SDC (an internal Amazon legacy tool) to AWS AppConfig, improving scalability and maintainability.",
      },
      {
        title: "Warehouse Metrics System",
        description:
          "Designed and implemented a warehouse metrics system using Java, DynamoDB, and React, providing real-time visibility into bag states (used vs unopened) and improving operational efficiency.",
      },
    ],
  },
];

export const projects = [
  {
    id: "code-editor",
    title: "Online Code Editor",
    stack: ["React.js", "Judge0 API"],
    icon: "💻",
    description:
      "A real-time browser-based code editor supporting 5–10 programming languages with live code execution, custom input handling, and structured output/error display — replicating a production-grade IDE experience in the browser.",
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    stack: ["React.js", "GitHub Pages"],
    icon: "🗂️",
    description:
      "A fully responsive portfolio built with React.js and hosted live on GitHub Pages. Built with component-based architecture supporting responsive layouts across mobile and desktop viewports.",
  },
];

export const education = [
  {
    id: "geu",
    institution: "Graphic Era University",
    degree: "B.Tech in Computer Science",
    period: "2020 – 2024",
    score: "CGPA: 9.01 / 10",
  },
  {
    id: "sja-xii",
    institution: "St. Joseph's Academy",
    degree: "I.S.C. (Class XII)",
    period: "2020",
    score: "95.75%",
  },
  {
    id: "sja-x",
    institution: "St. Joseph's Academy",
    degree: "ICSE (Class X)",
    period: "2018",
    score: "91.2%",
  },
];
