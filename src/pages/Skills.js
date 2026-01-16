import React from "react";

const skillGroups = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", description: "Advanced data structures, algorithms, scientific computing, and machine learning applications." },
      { name: "JavaScript (ES6+)", description: "Modern web development with async/await, DOM manipulation, and advanced language features." },
      { name: "Java", description: "Object-oriented programming, data structures, algorithms, and enterprise applications." },
      { name: "Rust", description: "Systems programming, CLI development, and high-performance applications." },
      { name: "HTML5 & CSS3", description: "Semantic markup, modern styling, animations, and responsive design principles." },
      { name: "SQL", description: "Database design, complex queries, joins, and performance optimization." },
      { name: "Bash", description: "Shell scripting, automation, and system administration tasks." },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", description: "Component-driven architecture, hooks, context API, state management, and modern React patterns." },
      { name: "Express.js", description: "RESTful API development, middleware, and backend server architecture." },
      { name: "Node.js", description: "Server-side JavaScript, asynchronous programming, and scalable applications." },
      { name: "FastAPI", description: "High-performance Python APIs with automatic documentation and async support." },
      { name: "Expo & React Native", description: "Cross-platform mobile app development and deployment." },
      { name: "Hugging Face", description: "Pre-trained models, fine-tuning, and deployment of NLP solutions." },
    ],
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "PostgreSQL", description: "Advanced SQL, database design, indexing, and query optimization." },
      { name: "Supabase", description: "Real-time databases, authentication, storage, and serverless functions." },
      { name: "Railway", description: "Application deployment and cloud infrastructure management." },
      { name: "Render", description: "Hosting web applications with continuous deployment capabilities." },
      { name: "Docker", description: "Containerization, microservices architecture, and deployment workflows." },
    ],
  },
  {
    category: "Development Tools & Practices",
    skills: [
      { name: "Git & GitHub", description: "Version control, branching strategies, code reviews, and collaborative development." },
      { name: "GitHub CI/CD", description: "Automated testing, continuous integration, and deployment pipelines." },
      { name: "Linux", description: "System administration, command-line proficiency, and development environments." },
      { name: "REST APIs", description: "API design, documentation, integration patterns, and best practices." },
      { name: "CLI Development", description: "Building command-line tools and developer utilities." },
      { name: "UI/UX Optimization", description: "User-centered design principles, accessibility (WCAG), and modern design systems." },
    ],
  },
  {
    category: "AI & Data Science",
    skills: [
      { name: "Machine Learning", description: "Supervised/unsupervised learning, model evaluation, and feature engineering." },
      { name: "Natural Language Processing", description: "Text processing, sentiment analysis, and transformer models (BART, T5, Pegasus, LED, DistilBART)." },
      { name: "Vector Embeddings", description: "Semantic search, document similarity, and embedding-based retrieval systems." },
      { name: "Data Visualization", description: "Interactive charts, statistical plots, and dashboard creation." },
      { name: "Scientific Computing", description: "Statistical analysis, numerical methods, and research data processing." },
    ],
  },
];

export default function Skills() {
  return (
    <main className="main-content">
      <section className="skills-section" aria-label="Skills">
        <h2 className="section-title">Skills</h2>
        {skillGroups.map(({ category, skills }) => (
          <div key={category} className="skill-group">
            <h3 className="skill-category">{category}</h3>
            <ul className="skill-list">
              {skills.map(({ name, description }) => (
                <li key={name} className="skill-item">
                  <span className="skill-name">{name}</span>
                  {description && (
                    <p className="skill-description">{description}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}
