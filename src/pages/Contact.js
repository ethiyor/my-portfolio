import React from "react";

const contactInfo = {
  email: "ytk2108@columbia.edu",
  phone: "(332) 265-6980",
  linkedIn: "https://www.linkedin.com/in/yordanos-kassa-624302295/",
  github: "https://github.com/ethiyor",
};

export default function Contact() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden", paddingTop: "60px" }}>
      <img
        src={process.env.PUBLIC_URL + "/images/time_square.jpeg"}
        alt="NYC Times Square"
        className="contact-bg"
      />
      <div className="contact-overlay" style={{ maxWidth: "400px", padding: "32px 24px" }}>
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: "20px", color: "#0070f3" }}>Let's Connect</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '24px', color: '#222', fontWeight: 500, textAlign: 'center', lineHeight: 1.6 }}>
          I'm always excited to discuss new opportunities, innovative projects, or collaborate on interesting challenges. Whether you're looking for a software engineer, research collaborator, or just want to chat about tech and science, I'd love to hear from you!
        </p>
        
        <div style={{ 
          background: "linear-gradient(135deg, #f8faff, #eaf6ff)", 
          padding: "20px", 
          borderRadius: "12px", 
          marginBottom: "24px",
          border: "1px solid #d0e8ff"
        }}>
          <h3 style={{ color: "#0070f3", marginBottom: "16px", fontSize: "1.1rem", textAlign: "center" }}>
            What I'm Looking For
          </h3>
          <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "0.95rem", lineHeight: 1.6, color: "#555" }}>
            <li>Software Engineering Internships (Summer 2026)</li>
            <li>Research Computing Opportunities</li>
            <li>Open Source Collaborations</li>
            <li>Technical Mentorship</li>
          </ul>
        </div>

        <ul className="contact-list" style={{ listStyle: 'none', padding: 0, fontSize: '1.05rem' }}>
          <li style={{ marginBottom: '16px', textAlign: 'center' }}>
            <a href={`mailto:${contactInfo.email}`} target="_blank" rel="noreferrer" style={{ 
              color: '#0070f3', 
              fontWeight: 600, 
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              background: 'rgba(255,255,255,0.9)',
              borderRadius: '8px',
              border: '1px solid #d0e8ff',
              transition: 'all 0.3s'
            }}>
              📧 Email: {contactInfo.email}
            </a>
          </li>
          <li style={{ marginBottom: '16px', textAlign: 'center' }}>
            <a href={`tel:${contactInfo.phone}`} style={{ 
              color: '#0070f3', 
              fontWeight: 600, 
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              background: 'rgba(255,255,255,0.9)',
              borderRadius: '8px',
              border: '1px solid #d0e8ff',
              transition: 'all 0.3s'
            }}>
              📱 Phone: {contactInfo.phone}
            </a>
          </li>
          <li style={{ marginBottom: '16px', textAlign: 'center' }}>
            <a href={contactInfo.linkedIn} target="_blank" rel="noreferrer" style={{ 
              color: '#0070f3', 
              fontWeight: 600, 
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              background: 'rgba(255,255,255,0.9)',
              borderRadius: '8px',
              border: '1px solid #d0e8ff',
              transition: 'all 0.3s'
            }}>
              💼 LinkedIn Profile
            </a>
          </li>
          <li style={{ textAlign: 'center' }}>
            <a href={contactInfo.github} target="_blank" rel="noreferrer" style={{ 
              color: '#0070f3', 
              fontWeight: 600, 
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              background: 'rgba(255,255,255,0.9)',
              borderRadius: '8px',
              border: '1px solid #d0e8ff',
              transition: 'all 0.3s'
            }}>
              💻 GitHub Profile
            </a>
          </li>
        </ul>

        <div style={{ 
          textAlign: 'center', 
          marginTop: '24px', 
          padding: '16px',
          background: 'rgba(0,112,243,0.1)',
          borderRadius: '8px',
          border: '1px solid rgba(0,112,243,0.2)'
        }}>
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#0070f3', fontWeight: 600 }}>
            📍 Based in New York City<br/>
            🎓 Columbia University Student<br/>
            🚀 Available for Summer 2026 opportunities
          </p>
        </div>
      </div>
    </div>
  );
}
