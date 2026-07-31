import React, { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaBars,
  FaCodeBranch,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedinIn,
  FaTimes,
} from "react-icons/fa";
import "./App.css";

const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};

const projects = [
  {
    name: "PatchProof",
    label: "Founder & Full-Stack Engineer",
    period: "2026 — Present",
    description:
      "An AI code-verification platform that checks pull requests against the task they were meant to solve—not just the code they changed.",
    outcomes: [
      "CLI and VS Code workflows for reviewing local Git diffs",
      "GitHub App automation with webhook auth and PR comments",
      "AWS ECS/RDS deployment with 364-test coverage",
    ],
    stack: ["Python", "FastAPI", "TypeScript", "PostgreSQL", "AWS"],
    accent: "lime",
    href: "mailto:ytk2108@columbia.edu?subject=PatchProof",
    cta: "Ask about PatchProof",
  },
  {
    name: "Repofy",
    label: "Full-Stack Developer",
    period: "2025 — 2026",
    description:
      "A GitHub-style collaboration platform with authentication, repository workflows, file versioning, and tag-based discovery.",
    outcomes: [
      "19 REST endpoints across core product workflows",
      "React and Express application backed by PostgreSQL",
      "Automated GitHub Actions-to-Render delivery pipeline",
    ],
    stack: ["React", "Express.js", "PostgreSQL", "Supabase"],
    accent: "blue",
    image: `${process.env.PUBLIC_URL}/images/repofy.png`,
    href: "https://github.com/ethiyor/Repofy",
    cta: "View repository",
  },
  {
    name: "PaperMind AI",
    label: "Backend & AI Developer",
    period: "2025",
    description:
      "A research-paper assistant that turns uploaded PDFs into a searchable semantic index with retrieval and automatic summarization.",
    outcomes: [
      "PDF parsing and chunking pipeline",
      "Embedding-based semantic search",
      "FastAPI service deployed through Railway",
    ],
    stack: ["Python", "FastAPI", "Hugging Face", "Embeddings"],
    accent: "violet",
    image: `${process.env.PUBLIC_URL}/images/papermind.png`,
    href: "https://papermind-ai-frontend.vercel.app",
    repo: "https://github.com/ethiyor/papermind-ai",
    cta: "Open live project",
  },
];

const experience = [
  {
    role: "Full-Stack Engineer Intern",
    organization: "FurnishUp",
    location: "New York, NY",
    period: "May 2026 — Present",
    description:
      "Building reliable catalog and visual-search infrastructure for a computational interior-design startup.",
    details: [
      "Built ETL and QA pipelines for 3,200 products and 7,962 thumbnails, cutting onboarding time by roughly 85%.",
      "Selected one representative image for 2,502 products and generated 1,024-dimensional Amazon Titan embeddings.",
      "Implemented NumPy Euclidean-distance retrieval with Pillow normalization, resumable processing, validation, and 25 tests.",
    ],
  },
  {
    role: "ValuesLab Research Fellow",
    organization: "Columbia University",
    location: "New York, NY",
    period: "Jun 2026 — Present",
    description:
      "Researching whether AI explanations of Lean 4 proof steps are faithful to the exact formal state.",
    details: [
      "Compare rationales against verified hypotheses, lemmas, actions, and before/after proof states.",
      "Built a Lean 4/Python benchmark foundation with Pydantic schemas, JSONL tooling, provenance tracking, and tests.",
    ],
  },
  {
    role: "AI Research Engineer Intern",
    organization: "Hidden Information Labs",
    location: "Remote",
    period: "Oct 2025 — May 2026",
    description:
      "Worked on retrieval for formal mathematics, where a useful answer must also be mechanically valid.",
    details: [
      "Engineered a Rust-based Lean 4 theorem-search agent with multi-signal ranking over 5,000+ mathlib lemmas.",
      "Benchmarked symbol-frequency, TF-IDF, and embedding-based retrieval to study precision–recall tradeoffs.",
    ],
  },
  {
    role: "Undergraduate Student Researcher",
    organization: "Columbia Astrophysics",
    location: "New York, NY",
    period: "Jun 2024 — Jul 2025",
    description:
      "Studied multimessenger searches connecting gravitational-wave events with high-energy neutrino signals.",
    details: [
      "Analyzed neutrino-injection data and odds-ratio metrics with Python and LLAMA.",
      "Presented findings at the 2024 Columbia Science Research Symposium.",
    ],
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "Rust", "Java", "JavaScript", "TypeScript", "SQL", "C", "Bash"],
  },
  {
    title: "Backend & Web",
    items: ["FastAPI", "Express.js", "Node.js", "React", "REST APIs", "Pydantic"],
  },
  {
    title: "Data & Infrastructure",
    items: ["PostgreSQL", "SQLAlchemy", "Alembic", "Docker", "AWS ECS", "RDS", "GitHub Actions"],
  },
  {
    title: "AI & Retrieval",
    items: ["OpenAI API", "RAG", "Vector Embeddings", "Amazon Titan", "NumPy", "Pillow", "boto3"],
  },
];

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-heading" data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <div className="section-heading__row">
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
    </div>
  );
}

const graphNodes = [
  { x: "8%", y: "53%", delay: "0s" },
  { x: "25%", y: "39%", delay: "0.25s" },
  { x: "42%", y: "45%", delay: "0.5s" },
  { x: "58%", y: "31%", delay: "0.75s" },
  { x: "74%", y: "36%", delay: "1s" },
  { x: "87%", y: "20%", delay: "1.25s", verified: true },
  { x: "24%", y: "18%", delay: "0.4s", secondary: true },
  { x: "41%", y: "24%", delay: "0.7s", secondary: true },
  { x: "57%", y: "13%", delay: "0.9s", secondary: true },
  { x: "72%", y: "15%", delay: "1.1s", secondary: true },
  { x: "89%", y: "43%", delay: "1.4s", secondary: true },
];

const graphLinks = [
  { x: "9%", y: "52%", width: "20%", angle: "-33deg", delay: "0s", active: true },
  { x: "26%", y: "39%", width: "19%", angle: "18deg", delay: "0.2s" },
  { x: "43%", y: "44%", width: "20%", angle: "-32deg", delay: "0.4s", active: true },
  { x: "59%", y: "31%", width: "18%", angle: "13deg", delay: "0.6s" },
  { x: "75%", y: "35%", width: "18%", angle: "-47deg", delay: "0.8s", active: true },
  { x: "25%", y: "19%", width: "18%", angle: "17deg", delay: "0.3s" },
  { x: "42%", y: "23%", width: "18%", angle: "-27deg", delay: "0.5s" },
  { x: "58%", y: "14%", width: "17%", angle: "7deg", delay: "0.7s" },
  { x: "73%", y: "16%", width: "16%", angle: "12deg", delay: "0.9s" },
  { x: "75%", y: "37%", width: "17%", angle: "24deg", delay: "1.1s" },
];

function ProofNetwork() {
  return (
    <div className="system-map" aria-hidden="true">
      <div className="system-map__topbar">
        <span><i /> Live proof trace</span>
        <span>RUN_026</span>
      </div>

      <div className="system-map__canvas">
        <span className="system-map__axis system-map__axis--x" />
        <span className="system-map__axis system-map__axis--y" />

        {graphLinks.map((link, index) => (
          <span
            className={`map-link ${link.active ? "map-link--active" : ""}`}
            key={`link-${index}`}
            style={{
              "--x": link.x,
              "--y": link.y,
              "--width": link.width,
              "--angle": link.angle,
              "--delay": link.delay,
            }}
          />
        ))}

        {graphNodes.map((node, index) => (
          <span
            className={`map-node ${node.secondary ? "map-node--secondary" : ""} ${
              node.verified ? "map-node--verified" : ""
            }`}
            key={`node-${index}`}
            style={{ "--x": node.x, "--y": node.y, "--delay": node.delay }}
          >
            {node.verified && "✓"}
          </span>
        ))}

        <div className="code-module">
          <span>review_pipeline.py</span>
          <i style={{ "--line": "78%" }} />
          <i style={{ "--line": "54%" }} />
          <i style={{ "--line": "88%" }} />
          <i style={{ "--line": "42%" }} />
          <i style={{ "--line": "66%" }} />
        </div>

        <div className="retrieval-module">
          <div className="retrieval-module__orbit">
            <span />
            <span />
            <span />
            <span />
            <i />
          </div>
          <p><strong>5,000+</strong> indexed lemmas</p>
        </div>

        <div className="output-module">
          <span><i /> requirement</span>
          <span><i /> evidence</span>
          <span><i /> verdict</span>
        </div>
      </div>

      <div className="system-map__profile">
        <img
          src={`${process.env.PUBLIC_URL}/images/yorr.jpeg`}
          alt=""
        />
        <p><strong>Yordanos Kassa</strong><span>New York · Columbia &apos;27</span></p>
        <i />
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Yordanos Kassa, home">
          <span className="brand__mark">YK</span>
          <span className="brand__name">Yordanos Kassa</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>

        <nav
          id="primary-navigation"
          className={`primary-navigation ${menuOpen ? "is-open" : ""}`}
          aria-label="Primary navigation"
        >
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let&apos;s talk
            <FaArrowRight aria-hidden="true" />
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero hero--technical" id="top">
          <div className="hero__copy">
            <p className="hero__system-label">Portfolio / 2026</p>
            <h1>
              <span>Yordanos</span>
              <span>Kassa</span>
            </h1>
            <p className="hero__role">Engineer <i>·</i> Researcher</p>
            <p className="hero__statement">
              I build systems that make AI <em>prove its work.</em>
            </p>
            <p className="hero__lede">
              I&apos;m Yordanos Kassa, a computer science–mathematics and
              astrophysics student working across backend engineering, AI
              retrieval, and formal verification.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#work">
                See selected work
                <FaArrowRight aria-hidden="true" />
              </a>
              <a
                className="button button--secondary"
                href="https://github.com/ethiyor"
                {...externalLinkProps}
              >
                <FaGithub aria-hidden="true" />
                GitHub
              </a>
            </div>
            <div className="hero__domains" aria-label="Areas of focus">
              <span>Backend systems</span>
              <span>Formal methods</span>
              <span>AI retrieval</span>
            </div>
            <div className="hero__availability">
              <span className="status-dot" aria-hidden="true" />
              Available for new-grad roles · May 2027
            </div>
          </div>

          <div className="hero__visual">
            <ProofNetwork />
          </div>
        </section>

        <div className="tech-marquee" aria-hidden="true">
          <div className="tech-marquee__track">
            <span>Backend systems</span><i>◆</i>
            <span>Formal verification</span><i>◆</i>
            <span>AI retrieval</span><i>◆</i>
            <span>Research engineering</span><i>◆</i>
            <span>Backend systems</span><i>◆</i>
            <span>Formal verification</span><i>◆</i>
            <span>AI retrieval</span><i>◆</i>
            <span>Research engineering</span><i>◆</i>
          </div>
        </div>

        <section className="signal-strip" aria-label="Selected impact">
          <article data-reveal>
            <strong>3,200</strong>
            <span>catalog products processed</span>
          </article>
          <article data-reveal>
            <strong>5,000+</strong>
            <span>Lean lemmas indexed</span>
          </article>
          <article data-reveal>
            <strong>364</strong>
            <span>PatchProof tests</span>
          </article>
          <article data-reveal>
            <strong>2,502</strong>
            <span>Titan image embeddings</span>
          </article>
        </section>

        <section className="section section--work" id="work">
          <SectionHeading
            eyebrow="Selected work"
            title="Products with a point of view."
            copy="I gravitate toward systems where correctness, traceability, and real-world usefulness all matter."
          />

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                className={`project-card project-card--${project.accent} ${
                  index === 0 ? "project-card--featured" : ""
                }`}
                key={project.name}
                data-reveal
              >
                <div className="project-card__visual">
                  {project.image ? (
                    <img src={project.image} alt={`${project.name} interface`} />
                  ) : (
                    <div className="verification-visual" aria-hidden="true">
                      <div className="verification-visual__header">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="verification-visual__body">
                        <p><i>01</i> requirement_trace</p>
                        <p><i>02</i> diff_evidence</p>
                        <p><i>03</i> risk_score</p>
                        <div className="verification-visual__result">
                          <span>✓</span>
                          verified against task
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="project-card__content">
                  <div className="project-card__meta">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{project.period}</span>
                  </div>
                  <p className="project-card__label">{project.label}</p>
                  <h3>{project.name}</h3>
                  <p className="project-card__description">{project.description}</p>
                  <ul>
                    {project.outcomes.map((outcome) => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ul>
                  <div className="tag-list" aria-label={`${project.name} technologies`}>
                    {project.stack.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                  <div className="project-card__links">
                    <a href={project.href} {...(project.href.startsWith("http") ? externalLinkProps : {})}>
                      {project.cta}
                      {project.href.startsWith("http") ? (
                        <FaExternalLinkAlt aria-hidden="true" />
                      ) : (
                        <FaArrowRight aria-hidden="true" />
                      )}
                    </a>
                    {project.repo && (
                      <a href={project.repo} {...externalLinkProps} aria-label={`${project.name} GitHub repository`}>
                        <FaGithub aria-hidden="true" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--experience" id="experience">
          <SectionHeading
            eyebrow="Experience"
            title="Engineering, from data pipelines to proof states."
            copy="My work moves between production systems and research questions, with the same emphasis on evidence."
          />

          <div className="experience-list">
            {experience.map((item, index) => (
              <article className="experience-item" key={`${item.role}-${item.organization}`} data-reveal>
                <div className="experience-item__index">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="experience-item__when">
                  <span>{item.period}</span>
                  <span>{item.location}</span>
                </div>
                <div className="experience-item__content">
                  <p>{item.organization}</p>
                  <h3>{item.role}</h3>
                  <p className="experience-item__summary">{item.description}</p>
                  <ul>
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--about" id="about">
          <SectionHeading
            eyebrow="About"
            title="Scientific rigor, applied to software."
          />

          <div className="about-grid">
            <article className="about-statement" data-reveal>
              <p className="about-statement__lead">
                I&apos;m drawn to problems where a result is only as useful as
                the evidence behind it.
              </p>
              <p>
                That thread connects my work on multimessenger astrophysics,
                theorem retrieval, AI-generated proof explanations, and
                specification-aware code review. I like turning ambiguous
                questions into systems that can be tested, inspected, and
                improved.
              </p>
              <a href="mailto:ytk2108@columbia.edu">
                Start a conversation
                <FaArrowRight aria-hidden="true" />
              </a>
            </article>

            <article className="education-card" data-reveal>
              <p className="card-kicker">Education</p>
              <h3>Columbia University</h3>
              <p>B.A. in Computer Science–Mathematics and Astrophysics</p>
              <div className="education-card__meta">
                <span>Double major</span>
                <span>Expected May 2027</span>
              </div>
              <div className="coursework">
                <span>Advanced Programming</span>
                <span>Data Structures & Algorithms</span>
                <span>Databases</span>
                <span>Computer Science Theory</span>
                <span>Analysis & Optimization</span>
                <span>Modern Algebra</span>
              </div>
            </article>

            <article className="honors-card" data-reveal>
              <p className="card-kicker">Selected honors</p>
              <a
                href="https://urf.columbia.edu/urf/research/srf/scholars"
                {...externalLinkProps}
              >
                <span>
                  <strong>Columbia Science Research Fellow</strong>
                  $10,000 · 1 of 10 university-wide
                </span>
                <FaExternalLinkAlt aria-hidden="true" />
              </a>
              <a
                href="https://valueslab.github.io/awards/#2025/26"
                {...externalLinkProps}
              >
                <span>
                  <strong>ValuesLab Research Fellow</strong>
                  $4,000 · 1 of 3 fellows
                </span>
                <FaExternalLinkAlt aria-hidden="true" />
              </a>
            </article>

            <article className="leadership-card" data-reveal>
              <p className="card-kicker">Leadership</p>
              <h3>Founder & Lead Developer, EthioCare.org</h3>
              <p>
                Built and launched a humanitarian donation platform supporting
                5 campaigns and 100+ donors with Stripe Checkout and Render.
              </p>
              <div>
                <a href="https://ethiocare.org" {...externalLinkProps}>
                  Visit EthioCare
                  <FaExternalLinkAlt aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/ethiyor/donation-website"
                  {...externalLinkProps}
                >
                  <FaGithub aria-hidden="true" />
                  Code
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="section section--skills">
          <SectionHeading
            eyebrow="Technical toolkit"
            title="Built for the whole path to production."
          />
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article key={group.title} data-reveal>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{group.title}</h3>
                <p>{group.items.join(" · ")}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s build something that needs to be correct.</h2>
          <p>
            I&apos;m always glad to talk about software engineering, reliable
            AI, formal methods, research, or ambitious products.
          </p>
          <a className="contact-email" href="mailto:ytk2108@columbia.edu">
            <FaEnvelope aria-hidden="true" />
            ytk2108@columbia.edu
            <FaArrowRight aria-hidden="true" />
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <span className="brand__mark">YK</span>
          <p>
            Designed and built by Yordanos Kassa.
            <br />
            New York, NY.
          </p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/ethiyor" {...externalLinkProps}>
            <FaGithub aria-hidden="true" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yordanos-kassa-624302295/"
            {...externalLinkProps}
          >
            <FaLinkedinIn aria-hidden="true" />
            LinkedIn
          </a>
          <a href="mailto:ytk2108@columbia.edu">
            <FaEnvelope aria-hidden="true" />
            Email
          </a>
        </div>
        <a className="back-to-top" href="#top" aria-label="Back to top">
          <FaCodeBranch aria-hidden="true" />
          Back to top
        </a>
      </footer>
    </div>
  );
}

export default App;
