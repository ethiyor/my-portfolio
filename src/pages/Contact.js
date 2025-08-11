import React from "react";


const contactInfo = {
  email: "ytk2108@columbia.edu",
  linkedIn: "https://www.linkedin.com/in/yordanos-kassa-624302295/",
  github: "https://github.com/ethiyor",
};

export default function Contact() {
  return (
    <main className="main-content">
      <section className="section">
        <h2 className="section-title">Contact</h2>
        <p>Feel free to reach out to me via email or connect on LinkedIn or GitHub!</p>
        <ul className="contact-list">
          <li>
            Email:{" "}
            <a href={`mailto:${contactInfo.email}`} target="_blank" rel="noreferrer">
              {contactInfo.email}
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a href={contactInfo.linkedIn} target="_blank" rel="noreferrer">
              https://www.linkedin.com/in/yordanos-kassa-624302295/
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a href={contactInfo.github} target="_blank" rel="noreferrer">
              github.com/ethiyor
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
