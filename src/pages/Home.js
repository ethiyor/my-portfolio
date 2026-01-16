import React from "react";

export default function Home() {
  return (
    <main className="main-content">
      <section className="section home-section">
        <div className="home-content">
          <img src={process.env.PUBLIC_URL + "/images/yorr.jpeg"} alt="Yordanos Tiruneh Kassa" className="about-image" style={{
            width: "140px",
            height: "140px",
            objectFit: "cover",
            borderRadius: "50%",
            boxShadow: "0 8px 32px rgba(0,112,243,0.15)",
            margin: "0 auto 24px auto",
            display: "block",
            border: "4px solid #eaf6ff"
          }} />
          <h1 className="title" style={{ fontSize: "2.8rem", textAlign: "center", marginBottom: "12px", fontWeight: 800, letterSpacing: "-1px", color: "#0070f3" }}>Yordanos Kassa</h1>
          <p className="subtitle" style={{ textAlign: "center", fontSize: "1.2rem", wordBreak: "break-word", maxWidth: "700px", margin: "0 auto 20px auto", whiteSpace: "normal", lineHeight: "1.6", color: "#333" }}>
            <span style={{ fontWeight: 700, fontSize: "1.25rem" }}>Software Engineer | Astrophysics & CS-Math @ Columbia 2027</span><br/>
            <span style={{ color: '#0070f3', fontWeight: 600, fontSize: "1.1rem" }}>Columbia Science Research Fellow</span>
          </p>
          
          <div style={{ 
            background: "linear-gradient(135deg, #fff9e6, #fffbf0)", 
            padding: "20px", 
            borderRadius: "12px", 
            margin: "20px auto 24px auto",
            maxWidth: "700px",
            border: "2px solid #ffd700"
          }}>
            <h3 style={{ color: "#d4a017", marginBottom: "12px", fontSize: "1.15rem", textAlign: "center", fontWeight: 700 }}>
              🏆 Honors & Recognition
            </h3>
            <ul style={{ margin: 0, paddingLeft: "20px", lineHeight: "1.7", fontSize: "1.05rem", color: "#333" }}>
              <li><strong>Columbia Science Research Fellow:</strong> $10,000 award (1 of 10 selected)</li>
              <li><strong>East African Virtual Math Honor:</strong> 2nd place out of 3,000+ participants</li>
              <li><strong>Top National Scorer:</strong> Among top 0.3% highest performers in Ethiopia's 2023 National Exam</li>
            </ul>
          </div>
          <div style={{ maxWidth: "750px", margin: "0 auto", fontSize: "1.1rem", color: "#222" }}>
            <p className="paragraph" style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: "18px", textAlign: "center" }}>
              Hi! I'm Yordanos — a passionate software engineer and problem-solver dedicated to building impactful applications, advancing AI/ML solutions, and contributing to meaningful research through technology.
            </p>
            <p className="paragraph" style={{ marginBottom: "16px" }}>
              Currently pursuing a dual degree in Astrophysics and Computer Science-Mathematics at Columbia University (Class of 2027), I bridge computational research with practical software development. As a Columbia Science Research Fellow, I've worked on cutting-edge multimessenger astrophysics research while building production-ready applications.
            </p>
            <p className="paragraph" style={{ marginBottom: "16px" }}>
              My technical expertise spans full-stack development (React, Node.js, FastAPI), AI/ML engineering (Hugging Face, NLP), and systems programming (Rust, Python). I've built platforms serving hundreds of users, integrated multiple AI models for document processing, and developed CLI tools for mathematical theorem search. I'm proficient in cloud infrastructure (Supabase, Railway, Render), CI/CD pipelines, and modern development practices.
            </p>
            <p className="paragraph" style={{ marginBottom: "16px" }}>
              Beyond technical work, I founded EthioCare.org, a humanitarian platform connecting donors to grassroots relief efforts, and mentor students aspiring to attend top universities. I thrive in collaborative environments where I can create solutions that combine technical excellence with real-world impact.
            </p>
            
            <div style={{ 
              background: "linear-gradient(135deg, #eaf6ff, #f0f8ff)", 
              padding: "24px", 
              borderRadius: "16px", 
              margin: "24px 0",
              border: "1px solid #d0e8ff"
            }}>
              <h3 style={{ color: "#0070f3", marginBottom: "16px", fontSize: "1.2rem", textAlign: "center" }}>
                Currently Working On
              </h3>
              <ul style={{ margin: 0, paddingLeft: "20px", lineHeight: "1.7" }}>
                <li><strong>Gravitational Wave Research</strong> - Investigating time windows in multimessenger searches using LLAMA Python framework at Columbia Physics Dept</li>
                <li><strong>Rust-Based Theorem Search</strong> - Building a Lean search agent with CLI tools for mathematical theorem matching at Hidden Information Labs</li>
                <li><strong>EthioCare Humanitarian Platform</strong> - Leading development and team coordination for grassroots relief efforts in Ethiopia</li>
                <li><strong>Open Source Contributions</strong> - Contributing to scientific computing libraries and developer tools</li>
              </ul>
            </div>

            <div style={{ textAlign: "center", marginTop: "28px" }}>
              <p style={{ fontSize: "1.15rem", marginBottom: "20px", color: "#333" }}>
                <strong>Ready to collaborate?</strong> I'm actively seeking opportunities in software engineering, data science, and research computing.
              </p>
              <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                <a 
                  href="mailto:ytk2108@columbia.edu" 
                  style={{ 
                    backgroundColor: "#0070f3",
                    color: "white",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "1.05rem",
                    transition: "all 0.3s",
                    boxShadow: "0 4px 16px rgba(0,112,243,0.3)"
                  }}
                >
                  Get In Touch
                </a>
                <a 
                  href="https://github.com/ethiyor" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    backgroundColor: "#333",
                    color: "white",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "1.05rem",
                    transition: "all 0.3s",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.2)"
                  }}
                >
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
