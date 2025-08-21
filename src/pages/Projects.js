import React, { useState } from "react";

const projects = [
  {
    name: "Repofy",
    tagline: "Real-time collaborative code sharing platform",
    overview: "A lightning-fast, real-time code sharing and collaboration platform built for modern development teams. Features instant code synchronization, secure authentication, and an intuitive interface that prioritizes developer productivity.",
    role: "Full Stack Developer & Product Lead",
    challenges: "Architected real-time WebSocket connections for instant code sync across multiple users. Implemented secure user authentication and authorization with role-based access. Designed responsive UI/UX that adapts seamlessly across devices.",
    tech: ["React", "Node.js", "Express", "Supabase", "WebSocket", "JWT"],
    image: process.env.PUBLIC_URL + "/images/repofy.png",
    demoLink: "https://repofy-frontend.onrender.com/",
    repoLink: "https://github.com/ethiyor/repofy",
  },
  {
    name: "PaperMind AI",
    tagline: "AI-powered academic research assistant",
    overview: "An intelligent document analysis platform that transforms academic PDFs into digestible insights using advanced NLP. Helps researchers quickly extract key findings, methodologies, and conclusions from complex scientific papers.",
    role: "AI Engineer & Backend Developer",
    challenges: "Built robust PDF parsing pipeline using FastAPI microservices architecture. Integrated Hugging Face transformer models for semantic text analysis and summarization. Implemented vector database for intelligent document search and retrieval. Optimized inference speed to process documents 3x faster than baseline.",
    tech: ["React", "FastAPI", "Python", "Hugging Face", "Supabase", "Vector DB"],
    image: process.env.PUBLIC_URL + "/images/papermind.png",
    demoLink: "https://papermind-ai-frontend.vercel.app/",
    repoLink: "https://github.com/ethiyor/papermind-ai",
  },
  {
    name: "Haddis Academy Website",
    tagline: "Modern educational institution web presence",
    overview: "Complete redesign and development of a responsive website for Haddis Alemayehu Academy. Features dynamic content management, event calendars, and mobile-optimized design that improved user engagement significantly.",
    role: "Frontend Developer & UX Designer",
    challenges: "Transformed legacy website into modern, accessible platform following WCAG guidelines. Implemented content management system for easy updates by non-technical staff. Optimized for mobile-first experience, resulting in 40% increase in mobile traffic and 25% improvement in user session duration.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "SEO"],
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
                onClick={() => {
                  if (demoLink) {
                    window.open(demoLink, '_blank', 'noopener,noreferrer');
                  }
                }}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && demoLink) {
                    window.open(demoLink, '_blank', 'noopener,noreferrer');
                  }
                }}
                aria-label={`Open live demo for project ${name}`}
                style={{ cursor: demoLink ? 'pointer' : 'not-allowed', opacity: demoLink ? 1 : 0.7 }}
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
