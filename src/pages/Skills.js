import React from "react";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML & CSS", description: "Semantic markup, responsive layouts" },
      { name: "JavaScript", description: "ES6+, DOM manipulation, async/await" },
      { name: "React", description: "Hooks, context API, component design" },
      { name: "Responsive UI Design", description: "Mobile-first and adaptive design" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Java", description: "OOP, REST API development" },
      { name: "Python", description: "Scripting, data parsing" },
      { name: "Node.js", description: "Express.js, middleware, async" },
      { name: "FastAPI", description: "Building REST APIs, async processing" },
      { name: "Express.js", description: "Routing, middleware" },
    ],
  },
  {
    category: "AI / Data",
    skills: [
      { name: "Hugging Face Transformers", description: "NLP model integration" },
      { name: "Semantic Search & Embeddings", description: "Vector search techniques" },
      { name: "Data Parsing & Processing", description: "ETL pipelines, chunking" },
    ],
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "Supabase", description: "Realtime DB, auth, cloud storage" },
      { name: "PostgreSQL", description: "Relational DB design, queries" },
    ],
  },
  {
    category: "Tools & Collaboration",
    skills: [
      { name: "Git & GitHub", description: "Version control, PR workflows" },
      { name: "VS Code", description: "IDE customization, debugging" },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Problem-Solving" },
      { name: "Collaboration & Teamwork" },
      { name: "Agile Development" },
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
