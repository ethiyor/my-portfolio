import React from "react";

const leadershipActivities = [
  {
    role: "Founder & Lead Developer",
    organization: "EthioCare.org",
    dates: "Jan 2025 – Present",
    description: [
      "Founded and led a student-run humanitarian platform connecting donors to grassroots relief efforts in Ethiopia.",
      "Designed and deployed the official EthioCare website with donation flows, campaign pages, and trust-focused UX.",
      "Coordinated a team of Ethiopian and Eritrean students across U.S. universities to support grassroots relief efforts.",
      "Built secure payment integration and transparent fund tracking systems to ensure donor trust.",
      "Implemented modern web technologies (React, Node.js, Supabase) to create a scalable humanitarian platform."
    ],
    websiteLink: "https://ethiocare.org"
  },
  {
    role: "Team Member",
    organization: "CSI Rocketry Mission (Space Initiative)",
    dates: "Dec 2023 – Present",
    description: [
      "Contributed to propulsion systems development for Columbia Space Initiative's rocketry team.",
      "Collaborated with engineers and physicists to design and test rocket propulsion components.",
      "Participated in launch preparations and safety protocol development.",
      "Applied computational modeling to analyze thrust performance and fuel efficiency.",
      "Engaged in hands-on hardware assembly and system integration."
    ]
  },
  {
    role: "Event Coordinator & Technical Lead",
    organization: "Society of Physics Students",
    dates: "2023 – 2024",
    description: [
      "Led weekly events and technical talks for Columbia's physics student community.",
      "Organized seminars featuring guest speakers from academia and industry.",
      "Facilitated networking opportunities between undergraduate and graduate physics students.",
      "Coordinated outreach activities to promote physics education in local schools.",
      "Managed social media presence and event promotions to increase member engagement."
    ]
  },
  {
    role: "Web Developer & Mentor",
    organization: "CTP Ethiopia Counseling",
    dates: "2023 – Present",
    description: [
      "Redesigned the organization's website to improve user experience and accessibility for Ethiopian students.",
      "Mentored 7 students through the college application process, resulting in Ivy League acceptances.",
      "Provided technical guidance on application essays, interview preparation, and college selection.",
      "Created resources and workshops focused on standardized testing and financial aid applications.",
      "Built a community of Ethiopian students aspiring to study in top U.S. universities."
    ]
  }
];

export default function Leadership() {
  return (
    <main className="main-content">
      <section className="section">
        <h2 className="section-title">Leadership & Activities</h2>
        
        <div style={{ 
          background: "linear-gradient(135deg, #eaf6ff, #f0f8ff)", 
          padding: "24px", 
          borderRadius: "16px", 
          margin: "0 0 32px 0",
          border: "1px solid #d0e8ff"
        }}>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#333", margin: 0, textAlign: "center" }}>
            Beyond academics and technical work, I'm passionate about <strong>building communities</strong>, 
            <strong> mentoring peers</strong>, and <strong>creating impact</strong> through leadership roles 
            that combine my technical skills with a commitment to service.
          </p>
        </div>
        
        {leadershipActivities.map((activity, index) => (
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
              {activity.role}
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
                {activity.organization} | {activity.dates}
              </span>
              {activity.websiteLink && (
                <a
                  href={activity.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    color: "#0070f3", 
                    textDecoration: "underline", 
                    fontWeight: 600,
                    fontSize: "0.95em"
                  }}
                >
                  Visit Website
                </a>
              )}
            </div>
            
            <ul className="experience-desc" style={{ 
              marginTop: '16px', 
              marginBottom: 0, 
              lineHeight: 1.7,
              paddingLeft: '20px'
            }}>
              {activity.description.map((item, i) => (
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
          padding: '28px',
          background: 'linear-gradient(135deg, #f8faff, #eaf6ff)',
          borderRadius: '16px',
          border: '1px solid #d0e8ff'
        }}>
          <h3 style={{ color: '#0070f3', marginBottom: '16px', fontSize: '1.3rem' }}>
            Impact Through Leadership
          </h3>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#444', maxWidth: '800px', margin: '0 auto' }}>
            These experiences have taught me the importance of <strong>collaboration</strong>, 
            <strong> empathy</strong>, and <strong>perseverance</strong> in creating meaningful change. 
            I'm always looking for new opportunities to lead, mentor, and contribute to causes I care about.
          </p>
        </div>
      </section>
    </main>
  );
}
