import React from "react";


const projects = [
  {
    name: "Repofy",
    description:
      "A simplified GitHub-like platform for hosting and collaborating on code repositories.",
    tech: ["React", "Express", "Supabase"],
    demoLink: "https://repofy-demo.com",
    repoLink: "https://github.com/yourusername/repofy",
  },
  {
    name: "PaperMind AI",
    description:
      "An AI-powered research paper analyzer that extracts insights and summaries.",
    tech: ["React", "FastAPI", "Supabase", "OpenAI API"],
    demoLink: "https://papermind-demo.com",
    repoLink: "https://github.com/yourusername/papermind",
  },
  {
    name: "School Website",
    description:
      "Responsive website built for Haddis Alemayehu Academy to showcase programs and news.",
    tech: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://haddisacademy.org",
    repoLink: "https://github.com/yourusername/school-website",
  },
];

export default function Projects() {
  return (
    <main className="main-content">
      <section className="section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map(({ name, description, tech, demoLink, repoLink }) => (
            <div key={name} className="project-card">
              <h3>{name}</h3>
              <p>{description}</p>
              <div className="tech-tags">
                {tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {demoLink && (
                  <a href={demoLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
                {repoLink && (
                  <a href={repoLink} target="_blank" rel="noopener noreferrer">
                    GitHub Repo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
