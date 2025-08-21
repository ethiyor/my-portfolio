import React from "react";

const skillGroups = [
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript (ES6+)", description: "Modern web development with async/await, DOM manipulation, and advanced language features." },
      { name: "Java", description: "Object-oriented programming, data structures, algorithms, and enterprise applications." },
      { name: "SQL", description: "Database design, complex queries, joins, and performance optimization." },
      { name: "HTML5 & CSS3", description: "Semantic markup, modern styling, animations, and responsive design principles." },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js", description: "Component-driven architecture, hooks, context API, state management, and modern React patterns." },
      { name: "Responsive Design", description: "Mobile-first approach, CSS Grid, Flexbox, and cross-browser compatibility." },
      { name: "UI/UX Design", description: "User-centered design principles, accessibility (WCAG), and modern design systems." },
      { name: "Version Control", description: "Git workflows, branching strategies, code reviews, and collaborative development." },
    ],
  },
  {
    category: "Backend & Cloud",
    skills: [
      { name: "Node.js & Express", description: "RESTful APIs, middleware, authentication, and scalable server architecture." },
      { name: "FastAPI", description: "High-performance Python APIs with automatic documentation and async support." },
      { name: "Supabase", description: "Real-time databases, authentication, storage, and serverless functions." },
      { name: "PostgreSQL", description: "Advanced SQL, database design, indexing, and query optimization." },
      { name: "Cloud Deployment", description: "Heroku, Render, Vercel, and modern DevOps practices." },
    ],
  },
  {
    category: "AI & Data Science",
    skills: [
      { name: "Machine Learning", description: "Supervised/unsupervised learning, model evaluation, and feature engineering." },
      { name: "Natural Language Processing", description: "Text processing, sentiment analysis, and transformer models." },
      { name: "Hugging Face", description: "Pre-trained models, fine-tuning, and deployment of NLP solutions." },
      { name: "Data Visualization", description: "Interactive charts, statistical plots, and dashboard creation." },
      { name: "Scientific Computing", description: "Statistical analysis, numerical methods, and research data processing." },
    ],
  },
  {
    category: "Development Tools & Practices",
    skills: [
      { name: "Testing", description: "Unit testing, integration testing, and test-driven development." },
      { name: "API Design", description: "RESTful principles, documentation, and integration patterns." },
      { name: "Performance Optimization", description: "Code profiling, caching strategies, and scalability improvements." },
    ],
  },
  {
    category: "Research & Analytics",
    skills: [
      { name: "Statistical Analysis", description: "Hypothesis testing, regression analysis, and experimental design." },
      { name: "Scientific Writing", description: "Research documentation, technical reports, and peer review." },
      { name: "Presentation Skills", description: "Technical communication, data storytelling, and academic presentations." },
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
