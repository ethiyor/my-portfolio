import React, { useState } from "react";

const projects = [
  {
    name: "Repofy",
    tagline: "Mini GitHub Platform - Full-Stack Collaboration Tool",
    overview: "A GitHub-like collaboration platform built for modern development teams. Features secure authentication, repository creation, file uploads, tagging, commenting, and starring functionality. Designed to provide seamless code sharing and project management.",
    role: "Full-Stack Developer",
    challenges: "Developed secure authentication system, implemented repository creation and file upload features, built tagging and commenting systems, and created starring functionality. Deployed frontend with GitHub CI/CD auto-deployment; backend powered by Express and Supabase Postgres. Currently developing a cross-platform Android APK using React Native and Expo.",
    tech: ["React", "Express.js", "Supabase", "Render", "React Native", "Expo", "GitHub CI/CD"],
    image: process.env.PUBLIC_URL + "/images/repofy.png",
    demoLink: "https://repofy-frontend.onrender.com/",
    repoLink: "https://github.com/ethiyor/repofy",
  },
  {
    name: "PaperMind AI",
    tagline: "AI-powered PDF Analysis Platform",
    overview: "Full-stack web application for document processing with AI-powered summarization and semantic search. Transforms academic PDFs into digestible insights using advanced NLP models, helping researchers quickly extract key findings from scientific papers.",
    role: "AI/ML Developer",
    challenges: "Integrated five Hugging Face models (BART, T5, Pegasus, LED, DistilBART) for specialized academic summarization. Engineered pipelines for PDF storage, text chunking, vector embeddings, and semantic retrieval. Deployed using Railway with optimized CORS for efficient ML inference.",
    tech: ["React", "FastAPI", "Python", "Hugging Face", "Supabase", "Railway", "Vector Embeddings"],
    image: process.env.PUBLIC_URL + "/images/papermind.png",
    demoLink: "https://papermind-ai-frontend-production.up.railway.app/",
    repoLink: "https://github.com/ethiyor/papermind-ai",
  },
  {
    name: "Haddis Alemayehu Academy Website",
    tagline: "Modern educational institution web presence",
    overview: "Designed and launched the official website for Haddis Alemayehu Academy, a top-ranked boarding school in Ethiopia. Features responsive design for admissions, contact, news, and donation pages, serving 500+ monthly users.",
    role: "Lead Developer",
    challenges: "Created responsive pages using semantic HTML and custom CSS. Implemented modern layout strategies (Flexbox/Grid), optimized for accessibility and mobile viewing. Coordinated with school leadership to match branding and mission, resulting in improved user engagement and modern web presence.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Flexbox", "Grid"],
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
