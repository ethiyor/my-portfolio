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
            <span style={{ fontWeight: 700, fontSize: "1.25rem" }}>Software Engineer | Astrophysics Research Fellow | Columbia University '27</span><br/>
            <span style={{ color: '#0070f3', fontWeight: 600, fontSize: "1.1rem" }}>Building the future through code and science</span>
          </p>
          <div style={{ maxWidth: "750px", margin: "0 auto", fontSize: "1.1rem", color: "#222" }}>
            <p className="paragraph" style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: "18px", textAlign: "center" }}>
              Bridging the gap between cutting-edge astrophysics research and modern software engineering
            </p>
            <p className="paragraph" style={{ marginBottom: "16px" }}>
              I'm a passionate software engineer and research fellow at Columbia University, where I combine my love for astrophysics with advanced computing to unlock the mysteries of the universe. My work spans from analyzing gravitational wave signals to building AI-powered web applications that solve real-world problems.
            </p>
            <p className="paragraph" style={{ marginBottom: "16px" }}>
              <strong>What drives me:</strong> The intersection of scientific discovery and technological innovation. Whether I'm processing terabyte-scale astronomical datasets or developing full-stack applications, I bring the same analytical rigor and creative problem-solving approach that makes breakthrough research possible.
            </p>
            
            <div style={{ 
              background: "linear-gradient(135deg, #eaf6ff, #f0f8ff)", 
              padding: "24px", 
              borderRadius: "16px", 
              margin: "24px 0",
              border: "1px solid #d0e8ff"
            }}>
              <h3 style={{ color: "#0070f3", marginBottom: "16px", fontSize: "1.2rem", textAlign: "center" }}>
                🚀 Currently Working On
              </h3>
              <ul style={{ margin: 0, paddingLeft: "20px", lineHeight: "1.7" }}>
                <li><strong>Multi-messenger Astrophysics Research</strong> - Developing Python tools to analyze correlations between gravitational waves and neutrino signals</li>
                <li><strong>AI-Powered Applications</strong> - Building intelligent document processing systems using modern NLP techniques</li>
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
                  📧 Get In Touch
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
                  💻 View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
