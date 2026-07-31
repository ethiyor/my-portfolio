import React, { useEffect, useRef, useState } from "react";
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
  const mapRef = useRef(null);

  const handlePointerMove = (event) => {
    const map = mapRef.current;
    if (
      !map ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const bounds = map.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width;
    const relativeY = (event.clientY - bounds.top) / bounds.height;
    const centeredX = relativeX - 0.5;
    const centeredY = relativeY - 0.5;

    map.style.setProperty("--pointer-x", `${relativeX * 100}%`);
    map.style.setProperty("--pointer-y", `${relativeY * 100}%`);
    map.style.setProperty("--tilt-x", `${centeredX * 5}deg`);
    map.style.setProperty("--tilt-y", `${centeredY * -4}deg`);

    map.querySelectorAll(".map-node").forEach((node) => {
      const nodeBounds = node.getBoundingClientRect();
      const nodeX = nodeBounds.left + nodeBounds.width / 2;
      const nodeY = nodeBounds.top + nodeBounds.height / 2;
      const distance = Math.hypot(event.clientX - nodeX, event.clientY - nodeY);
      node.classList.toggle("is-near", distance < 105);
    });
  };

  const resetPointerEffect = () => {
    const map = mapRef.current;
    if (!map) return;

    map.style.setProperty("--pointer-x", "50%");
    map.style.setProperty("--pointer-y", "45%");
    map.style.setProperty("--tilt-x", "0deg");
    map.style.setProperty("--tilt-y", "0deg");
    map.querySelectorAll(".map-node").forEach((node) => node.classList.remove("is-near"));
  };

  return (
    <div
      className="system-map"
      aria-hidden="true"
      ref={mapRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointerEffect}
    >
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

function ProjectVisual({ projectName }) {
  if (projectName === "PatchProof") {
    return (
      <div className="project-diagram project-diagram--patchproof" aria-hidden="true">
        <div className="diagram-window__bar">
          <span /><span /><span />
          <strong>verification_run_364</strong>
        </div>
        <div className="patchproof-flow">
          <div className="patchproof-task">
            <span>01 / requirement</span>
            <strong>Task specification</strong>
            <i />
          </div>
          <div className="patchproof-diff">
            <span>02 / evidence</span>
            <p className="diff-line diff-line--removed">- unverified response</p>
            <p className="diff-line diff-line--added">+ tested implementation</p>
            <p className="diff-line">  364 checks passed</p>
          </div>
          <div className="patchproof-verdict">
            <span>03 / verdict</span>
            <strong><i>✓</i> Requirement satisfied</strong>
          </div>
          <span className="flow-packet flow-packet--one" />
          <span className="flow-packet flow-packet--two" />
        </div>
      </div>
    );
  }

  if (projectName === "Repofy") {
    return (
      <div className="project-diagram project-diagram--repofy" aria-hidden="true">
        <div className="diagram-window__bar">
          <span /><span /><span />
          <strong>repository / collaboration</strong>
        </div>
        <div className="repo-network">
          <div className="repo-branch repo-branch--main">
            <span className="repo-node repo-node--active" />
            <span className="repo-node" />
            <span className="repo-node" />
            <span className="repo-node repo-node--merge" />
          </div>
          <div className="repo-branch repo-branch--feature">
            <span className="repo-node" />
            <span className="repo-node" />
          </div>
          <div className="repo-panel repo-panel--files">
            <span>main / src</span>
            <i /><i /><i /><i />
          </div>
          <div className="repo-panel repo-panel--team">
            <span>collaborators</span>
            <b>YK</b><b>01</b><b>02</b>
          </div>
          <div className="repo-deploy">
            <i />
            <span>CI passed</span>
            <strong>Render</strong>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-diagram project-diagram--papermind" aria-hidden="true">
      <div className="diagram-window__bar">
        <span /><span /><span />
        <strong>semantic_retrieval.pipeline</strong>
      </div>
      <div className="paper-pipeline">
        <div className="paper-stack">
          <span className="paper-sheet paper-sheet--back" />
          <span className="paper-sheet paper-sheet--middle" />
          <span className="paper-sheet paper-sheet--front">
            <i /><i /><i /><i />
          </span>
          <small>PDF</small>
        </div>
        <div className="chunk-stream">
          <span /><span /><span /><span /><span />
        </div>
        <div className="embedding-core">
          <span /><span /><span /><span /><span /><span />
          <i />
        </div>
        <div className="answer-card">
          <span>semantic match</span>
          <strong>0.94</strong>
          <i /><i /><i />
        </div>
      </div>
    </div>
  );
}

function AstroBridge() {
  return (
    <section className="astro-bridge" aria-label="Research through-line">
      <div className="astro-bridge__copy" data-reveal>
        <span>Research coordinate / 40.8075° N</span>
        <p>From cosmic signals to verifiable systems.</p>
      </div>
      <div className="orbital-system" aria-hidden="true">
        <span className="orbit orbit--outer"><i /></span>
        <span className="orbit orbit--middle"><i /></span>
        <span className="orbit orbit--inner"><i /></span>
        <span className="orbit-core" />
        <span className="signal-wave signal-wave--one" />
        <span className="signal-wave signal-wave--two" />
        <span className="signal-wave signal-wave--three" />
      </div>
    </section>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [introVisible, setIntroVisible] = useState(true);

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

  useEffect(() => {
    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    let hasSeenIntro = false;

    try {
      hasSeenIntro = window.sessionStorage.getItem("portfolio-intro-seen") === "true";
    } catch {
      hasSeenIntro = false;
    }

    if (reducedMotion || hasSeenIntro) {
      setIntroVisible(false);
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setIntroVisible(false);
      try {
        window.sessionStorage.setItem("portfolio-intro-seen", "true");
      } catch {
        // The intro still works when browser storage is unavailable.
      }
    }, 1900);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const progressBar = document.querySelector(".page-progress__bar");
    const cursor = document.querySelector(".ambient-cursor");
    const finePointer = window.matchMedia?.("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      progressBar?.style.setProperty("--page-progress", String(Math.min(1, progress)));
    };

    const updateCursor = (event) => {
      if (!cursor) return;
      cursor.style.setProperty("--cursor-x", `${event.clientX}px`);
      cursor.style.setProperty("--cursor-y", `${event.clientY}px`);
      cursor.classList.add("is-visible");
    };

    const updateCursorState = (event) => {
      cursor?.classList.toggle(
        "is-interactive",
        Boolean(event.target.closest("a, button, .project-card, .system-map")),
      );
    };

    const magneticItems = finePointer && !reducedMotion
      ? [...document.querySelectorAll("[data-magnetic]")]
      : [];
    const magneticCleanups = magneticItems.map((item) => {
      const move = (event) => {
        const bounds = item.getBoundingClientRect();
        item.style.setProperty(
          "--magnetic-x",
          `${(event.clientX - bounds.left - bounds.width / 2) * 0.12}px`,
        );
        item.style.setProperty(
          "--magnetic-y",
          `${(event.clientY - bounds.top - bounds.height / 2) * 0.15}px`,
        );
      };
      const leave = () => {
        item.style.setProperty("--magnetic-x", "0px");
        item.style.setProperty("--magnetic-y", "0px");
      };
      item.addEventListener("pointermove", move);
      item.addEventListener("pointerleave", leave);
      return () => {
        item.removeEventListener("pointermove", move);
        item.removeEventListener("pointerleave", leave);
      };
    });

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    if (finePointer && !reducedMotion) {
      window.addEventListener("pointermove", updateCursor, { passive: true });
      window.addEventListener("pointerover", updateCursorState, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("pointermove", updateCursor);
      window.removeEventListener("pointerover", updateCursorState);
      magneticCleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <div className="site-shell">
      {introVisible && (
        <div className="site-intro" aria-hidden="true">
          <div className="site-intro__brand">YK</div>
          <div className="site-intro__sequence">
            <span>01 index</span>
            <span>02 retrieve</span>
            <span>03 verify</span>
          </div>
          <div className="site-intro__status">
            <i />
            <strong>Portfolio verified</strong>
          </div>
        </div>
      )}
      <div className="page-progress" aria-hidden="true">
        <span className="page-progress__bar" />
      </div>
      <span className="ambient-cursor" aria-hidden="true" />

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
          <a className="nav-contact" href="#contact" onClick={closeMenu} data-magnetic>
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
              <a className="button button--primary" href="#work" data-magnetic>
                See selected work
                <FaArrowRight aria-hidden="true" />
              </a>
              <a
                className="button button--secondary"
                href="https://github.com/ethiyor"
                data-magnetic
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
                  <ProjectVisual projectName={project.name} />
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
                    <a
                      href={project.href}
                      data-magnetic
                      {...(project.href.startsWith("http") ? externalLinkProps : {})}
                    >
                      {project.cta}
                      {project.href.startsWith("http") ? (
                        <FaExternalLinkAlt aria-hidden="true" />
                      ) : (
                        <FaArrowRight aria-hidden="true" />
                      )}
                    </a>
                    {project.repo && (
                      <a
                        href={project.repo}
                        {...externalLinkProps}
                        data-magnetic
                        aria-label={`${project.name} GitHub repository`}
                      >
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

        <AstroBridge />

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
              <a href="mailto:ytk2108@columbia.edu" data-magnetic>
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
          <a className="contact-email" href="mailto:ytk2108@columbia.edu" data-magnetic>
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
        <a className="back-to-top" href="#top" aria-label="Back to top" data-magnetic>
          <FaCodeBranch aria-hidden="true" />
          Back to top
        </a>
      </footer>
    </div>
  );
}

export default App;
