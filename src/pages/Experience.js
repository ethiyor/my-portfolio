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
            <div className="experience-item">
              <h3 className="experience-role">Undergraduate Researcher</h3>
              <div className="experience-org-date">Columbia University | Sep 2024 – JUly 2025</div>
              <ul className="experience-desc">
                <li>Conducted astrophysics research analyzing multi-messenger signals from gravitational waves and neutrinos, contributing to cutting-edge scientific understanding.</li>
                <li>Developed and optimized Python tools for large-scale data processing and statistical analysis, improving efficiency and accuracy of data workflows.</li>
                <li>Collaborated with a multidisciplinary team of researchers to co-author papers and prepare findings for conferences.</li>
                <li>Utilized libraries such as NumPy, SciPy, and Matplotlib for data modeling and visualization.</li>
                <li>Presented research updates and findings to faculty and peer groups, enhancing communication and scientific presentation skills.</li>
              </ul>
            </div>

            <div className="experience-item">
              <h3 className="experience-role">Software Engineering Student</h3>
              <div className="experience-org-date">CodePath.org | June 2025 - Aug 2023,</div>
              <ul className="experience-desc">
                <li>Completed CodePath’s Intro to Web Development course, gaining practical experience with React, JavaScript, HTML, CSS, and backend integration using Express and Supabase.</li>
                <li>Built and deployed full-stack projects, including user authentication, file uploads, and responsive UI design, following agile development practices.</li>
                <li>Collaborated with peers through code reviews and team projects, enhancing communication and version control skills using Git and GitHub.</li>
                <li>Applied industry best practices for frontend-backend integration, API design, and cloud storage.</li>
              </ul>
            </div>

      </section>
    </main>
  );
}
