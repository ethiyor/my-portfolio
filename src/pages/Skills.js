import React from "react";
const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML & CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Responsive UI Design", level: 80 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 65 },
      { name: "Node.js", level: 70 },
      { name: "FastAPI", level: 70 },
      { name: "Express.js", level: 70 },
      
    ],
  },
  {
    category: "AI / Data",
    skills: [
      { name: "Hugging Face Transformers", level: 70 },
      { name: "Semantic Search & Embeddings", level: 65 },
      { name: "Data Parsing & Processing", level: 75 },
    ],
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "Supabase", level: 75 },
      { name: "PostgreSQL", level: 70 },
    ],
  },
  {
    category: "Tools & Collaboration",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 80 },
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
      <section className="section">
        <h2 className="section-title">Skills</h2>
        {skillGroups.map(({ category, skills }) => (
          <div key={category}>
            <h3 className="skill-category">{category}</h3>
            {skills.map(({ name, level }) => (
              <div key={name} className="skill-item">
                <div className="skill-header">
                  <span>{name}</span>
                  {level && <span>{level}%</span>}
                </div>
                {level && (
                  <div className="skill-bar">
                    <div
                      className="skill-level"
                      style={{ width: `${level}%`, transition: "width 1s" }}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
}
