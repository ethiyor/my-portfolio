import React from "react";


export default function Home() {
  return (
    <main className="main-content">
      <section className="section" style={{ display: "flex", alignItems: "flex-start", gap: "40px" }}>
        <div style={{ flex: 1 }}>
          <h1 className="title">Yordanos Tiruneh Kassa</h1>
          <p className="subtitle">
            Aspiring Software Engineer | Columbia Junior in Astrophysics |{' '}
            <a
              href="https://drive.google.com/file/d/1xfg6keeL-ITgJ_U7Ds6WgFDUQW2Zgx5o/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#0070f3', textDecoration: 'underline', fontWeight: 500 }}
            >
              Former Undergraduate Researcher
            </a>
          </p>
          <p className="paragraph">
            Hi! I’m Yordanos — a passionate developer and problem-solver dedicated to building meaningful web applications, advancing AI/ML solutions, and tackling complex challenges through technology. Currently pursuing my degree at Columbia University, I combine a strong foundation in computer science with a background in astrophysics research, where I applied data analysis and computational modeling to study galaxy dynamics.
          </p>
          <p className="paragraph">
            My hands-on experience spans designing scalable backend systems, developing intuitive user interfaces, and integrating advanced AI models to enhance data-driven applications. I’m proficient in a variety of technologies including React, Node.js, FastAPI, Supabase, and Java, and have a solid understanding of cloud infrastructure and API design. These skills enable me to bridge the gap between complex algorithms and practical, user-friendly software solutions.
          </p>
          <p className="paragraph">
            I thrive in environments where I can learn quickly, collaborate with diverse teams, and create solutions that have real-world impact. I am now seeking internship opportunities where I can contribute my technical skills, analytical mindset, and creative problem-solving to projects at the intersection of software engineering, AI, and scientific innovation.
          </p>
        </div>
          <img src={process.env.PUBLIC_URL + "/images/yorr.jpeg"} alt="Yordanos Tiruneh Kassa" className="about-image" style={{
            width: "160px",
            height: "160px",
            objectFit: "cover",
            borderRadius: "50%",
            boxShadow: "0 2px 8px rgb(0 0 0 / 0.12)",
            marginTop: "8px"
          }} />
      </section>
    </main>
  );
}
