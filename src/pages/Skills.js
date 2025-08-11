import React from "react";


const skills = [
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "HTML & CSS", level: 90 },
  { name: "Python", level: 75 },
  { name: "Git & GitHub", level: 80 },
  { name: "Node.js", level: 70 },
];

export default function Skills() {
  return (
    <main className="main-content">
      <section className="section">
        <h2 className="section-title">Skills</h2>
        {skills.map(({ name, level }) => (
          <div key={name} className="skill-item">
            <div className="skill-header">
              <span>{name}</span>
              <span>{level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-level"
                style={{ width: `${level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
