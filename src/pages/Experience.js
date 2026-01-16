import React from "react";

const experiences = [
  {
    role: "Undergraduate Student Researcher",
    organization: "Physics Department, Columbia University",
    dates: "June 2024 – Present",
    description: [
      "Investigated the role of time windows in multimessenger searches for gravitational waves and high-energy neutrinos.",
      "Analyzed neutrino injection data and computed odds ratio metrics using the LLAMA Python framework.",
      "Identified the effects of shorter time windows on joint searches, offering key recommendations for the next LIGO/Virgo collaboration.",
      "Presented findings at the 2024 Columbia Annual Science Research Symposium.",
      "Research paper in preparation: Coincident Searches for Gravitational Waves and High-Energy Neutrinos (2024)."
    ],
    paperLink: "https://drive.google.com/file/d/1xfg6keeL-ITgJ_U7Ds6WgFDUQW2Zgx5o/view?usp=sharing"
  },
  {
    role: "AI Research Engineer (Intern)",
    organization: "Hidden Information Labs",
    dates: "Oct 2025 – Present",
    location: "Remote",
    description: [
      "Building a Rust-based Lean search agent that matches mathematical theorems using symbol patterns and contextual similarity.",
      "Created CLI commands to extract and structure 5,000+ mathlib lemmas into searchable datasets.",
      "Designed a smart ranking system that prioritizes the most relevant results by analyzing symbol frequency and keyword matching.",
      "Implemented context-aware extraction to capture surrounding code, improving the system's understanding of theorem usage."
    ]
  },
  {
    role: "Web Development Fellow",
    organization: "CodePath",
    dates: "July 2025",
    location: "Remote",
    description: [
      "Completed a competitive web dev fellowship focused on HTML, CSS, and JavaScript.",
      "Built and deployed full-stack projects with real-world applications.",
      "Collaborated with peers through code reviews and team projects.",
      "Applied industry best practices for frontend development and responsive design."
    ]
  }
];

export default function Experience() {
  return (
    <main className="main-content">
      <section className="section">
        <h2 className="section-title">Experience</h2>
        
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
                {exp.location && ` | ${exp.location}`}
              </span>
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
                  View Research Paper
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
