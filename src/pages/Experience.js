import React from "react";

const experiences = [
  {
    role: "Undergraduate Researcher",
    organization: "Columbia University",
    dates: "Sep 2023 – Present",
    description:
      "Conducted research in astrophysics focusing on multi-messenger signals from gravitational waves and neutrinos. Developed Python tools for data analysis and contributed to collaborative papers.",
  },
  // Add more experiences if you want
];

export default function Experience() {
  return (
    <main className="main-content">
      <section className="section">
        <h2 className="section-title">Experience</h2>
        {experiences.map(({ role, organization, dates, description }, i) => (
          <div key={i} className="experience-item">
            <h3 className="experience-role">{role}</h3>
            <p className="experience-org-date">
              {organization} | <span>{dates}</span>
            </p>
            <p className="experience-desc">{description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
