import React from "react";

const experiences = [
  {
    role: "Undergraduate Research Fellow",
    organization: "Columbia University Astrophysics Department",
    dates: "September 2024 – Present",
    location: "New York, NY",
    description: [
      "Leading computational research on multi-messenger astrophysics, analyzing correlations between gravitational waves and neutrino signals from cosmic events",
      "Developed Python-based data processing pipelines that reduced analysis time by 30% for large-scale astronomical datasets",
      "Collaborated with interdisciplinary team of physicists and data scientists to advance understanding of black hole mergers and neutron star collisions",
      "Presented research findings at departmental seminars and contributed to ongoing publications in peer-reviewed journals",
      "Mastered advanced statistical techniques and machine learning applications in scientific computing"
    ],
    paperLink: "https://drive.google.com/file/d/1xfg6keeL-ITgJ_U7Ds6WgFDUQW2Zgx5o/view?usp=sharing"
  },
  {
    role: "Software Engineering Fellow",
    organization: "CodePath.org",
    dates: "June 2024 – August 2024",
    location: "Remote",
    description: [
      "Completed intensive 10-week web development program focusing on modern full-stack technologies and industry best practices",
      "Built and deployed multiple full-stack applications using React, Node.js, Express, and cloud databases",
      "Gained hands-on experience with user authentication, API design, responsive UI development, and cloud deployment",
      "Collaborated in agile development teams, practicing code reviews, version control with Git, and project management",
      "Graduated with distinction, demonstrating proficiency in professional software development workflows"
    ]
  },
  {
    role: "STEM Tutor & Mentor",
    organization: "Columbia University Learning Center",
    dates: "January 2024 – Present",
    location: "New York, NY",
    description: [
      "Provide academic support in mathematics, physics, and computer science for undergraduate students",
      "Developed personalized learning strategies that improved student performance by an average of 25%",
      "Created supplementary educational materials and coding exercises to reinforce complex concepts",
      "Mentored students in technical career preparation, including coding interview practice and portfolio development"
    ]
  }
];

export default function Experience() {
  return (
    <main className="main-content">
      <section className="section">
        <h2 className="section-title">Professional Experience</h2>
        
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item" style={{ 
            background: '#f8faff', 
            borderRadius: '16px', 
            padding: '32px 28px', 
            margin: '28px 0', 
            boxShadow: '0 4px 20px rgba(0,112,243,0.08)',
            border: '1px solid #e6f3ff'
          }}>
            <h3 className="experience-role" style={{ 
              fontWeight: 700, 
              fontSize: '1.4rem', 
              color: '#0070f3',
              marginBottom: '8px'
            }}>
              {exp.role}
            </h3>
            
            <div className="experience-org-date" style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "16px", 
              flexWrap: "wrap", 
              fontSize: '1.08rem', 
              marginBottom: '12px',
              color: '#555'
            }}>
              <span style={{ fontWeight: 600 }}>
                {exp.organization} | {exp.dates}
              </span>
              {exp.location && (
                <span style={{ color: '#777', fontWeight: 500 }}>
                  📍 {exp.location}
                </span>
              )}
              {exp.paperLink && (
                <a
                  href={exp.paperLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    color: "#0070f3", 
                    textDecoration: "underline", 
                    fontWeight: 600,
                    fontSize: "0.95em"
                  }}
                >
                  📄 Research Publication
                </a>
              )}
            </div>
            
            <ul className="experience-desc" style={{ 
              marginTop: '16px', 
              marginBottom: 0, 
              lineHeight: 1.7,
              paddingLeft: '20px'
            }}>
              {exp.description.map((item, i) => (
                <li key={i} style={{ marginBottom: '12px', fontSize: '1.05rem' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        
        <div style={{ 
          textAlign: 'center', 
          marginTop: '40px', 
          padding: '24px',
          background: 'linear-gradient(135deg, #eaf6ff, #f0f8ff)',
          borderRadius: '12px',
          border: '1px solid #d0e8ff'
        }}>
          <h3 style={{ color: '#0070f3', marginBottom: '12px', fontSize: '1.2rem' }}>
            Looking for Opportunities
          </h3>
          <p style={{ color: '#555', fontSize: '1.05rem', marginBottom: '16px' }}>
            Actively seeking internships and entry-level positions in software engineering, 
            data science, and research computing for Summer 2026 and beyond.
          </p>
          <a 
            href="mailto:ytk2108@columbia.edu" 
            style={{ 
              color: '#0070f3', 
              fontWeight: 600, 
              textDecoration: 'underline',
              fontSize: '1.1rem'
            }}
          >
            Let's connect →
          </a>
        </div>
      </section>
    </main>
  );
}
