import React, { useState } from "react";

const projects = [
  {
    name: "Repofy",
    tagline: "A fast, lightweight alternative to GitHub for quick code sharing and collaboration.",
    overview: "Repofy is a streamlined platform for hosting and collaborating on code repositories, designed for speed and simplicity.",
    role: "Full Stack Developer",
    challenges: "Engineered real-time collaboration and secure authentication, enabling instant multi-user updates. Supported 50+ simultaneous users without downtime.",
    tech: ["React", "Express", "Supabase"],
    image: process.env.PUBLIC_URL + "/images/repofy.png",
    demoLink: "https://repofy-frontend.onrender.com/",
    repoLink: "https://github.com/ethiyor/repofy",
  },
  {
    name: "PaperMind AI",
    tagline: "An AI tool that reads research papers so you don’t have to — summaries in seconds.",
    overview: "PaperMind AI leverages advanced NLP to extract insights and summaries from academic papers, saving researchers hours of reading.",
    role: "Backend Engineer",
    challenges: "Developed REST APIs with FastAPI to handle PDF parsing, text chunking, and semantic search. Integrated Hugging Face transformers for summarization and question answering, optimizing inference speed for large documents.",
    tech: ["React", "FastAPI", "Supabase", "Hugging Face"],
    image: process.env.PUBLIC_URL + "/images/papermind.png",
    demoLink: "https://papermind-ai-frontend.vercel.app/",
    repoLink: "https://github.com/ethiyor/papermind-ai",
  },
  {
    name: "School Website",
    tagline: "A modern, mobile-friendly site for showcasing school programs and updates.",
    overview: "Built for Haddis Alemayehu Academy, this site highlights programs, news, and events with a responsive design for all devices.",
    role: "Web Designer",
    challenges: "Redesigned site for mobile, increasing engagement by 30%. Automated news updates for staff.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: process.env.PUBLIC_URL + "/images/school.png",
    demoLink: "https://haddis-academy.onrender.com/",
    repoLink: "https://github.com/ethiyor/haddis-alemayehu-academy-WEBSITE",
  },
];

export default function Projects() {
  const [modalProject, setModalProject] = useState(null);

  return (
    <main className="main-content">
      <section className="section">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map(
            ({
              name,
              tagline,
              overview,
              role,
              challenges,
              tech,
              image,
              demoLink,
              repoLink,
            }) => (
              <div
                key={name}
                className="project-card fade-in"
                onClick={() =>
                  setModalProject({
                    name,
                    tagline,
                    overview,
                    role,
                    challenges,
                    tech,
                    image,
                    demoLink,
                    repoLink,
                  })
                }
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter")
                    setModalProject({
                      name,
                      tagline,
                      overview,
                      role,
                      challenges,
                      tech,
                      image,
                      demoLink,
                      repoLink,
                    });
                }}
                aria-label={`View details for project ${name}`}
              >
                {image && (
                  <img
                    src={image}
                    alt={name + " screenshot"}
                    className="project-image"
                    loading="lazy"
                  />
                )}
                <h3 className="project-title">{name}</h3>
                <p className="project-tagline">{tagline}</p>
                <p className="project-overview">{overview}</p>
                <div className="project-meta">
                  <span className="project-role">
                    <strong>Role:</strong> {role}
                  </span>
                </div>
                <div
                  className="project-challenges"
                  style={{ marginBottom: "12px" }}
                >
                  <strong>Key Achievements:</strong>
                  <div>{challenges}</div>
                </div>

                <div className="tech-stack">
                  <strong>Tech Stack:</strong> {tech.join(", ")}
                </div>

                <div className="project-links">
                  {demoLink ? (
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                    </a>
                  ) : (
                    <span className="project-link disabled">
                      Live Demo Coming Soon
                    </span>
                  )}
                  {repoLink ? (
                    <a
                      href={repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub Repo
                    </a>
                  ) : (
                    <span className="project-link disabled">
                      GitHub Coming Soon
                    </span>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {modalProject && (
        <div
          className="modal-overlay"
          onClick={() => setModalProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          tabIndex={-1}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            tabIndex={0}
          >
            <button
              className="modal-close"
              onClick={() => setModalProject(null)}
              aria-label="Close modal"
            >
              ×
            </button>
            <h2 id="modal-title" className="modal-title">
              {modalProject.name}
            </h2>
            {modalProject.image && (
              <img
                src={modalProject.image}
                alt={`${modalProject.name} detailed screenshot`}
                className="modal-image"
              />
            )}
            <p>
              <strong>Tagline:</strong> {modalProject.tagline}
            </p>
            <p>
              <strong>Overview:</strong> {modalProject.overview}
            </p>
            <p>
              <strong>Role:</strong> {modalProject.role}
            </p>
            <p>
              <strong>Key Achievements:</strong> {modalProject.challenges}
            </p>
            <p>
              <strong>Tech Stack:</strong> {modalProject.tech.join(", ")}
            </p>
            <div className="modal-links">
              {modalProject.demoLink && (
                <a
                  href={modalProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Demo
                </a>
              )}
              {modalProject.repoLink && (
                <a
                  href={modalProject.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  GitHub Repo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
