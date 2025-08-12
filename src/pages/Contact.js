import React from "react";


const contactInfo = {
  email: "ytk2108@columbia.edu",
  linkedIn: "https://www.linkedin.com/in/yordanos-kassa-624302295/",
  github: "https://github.com/ethiyor",
};

export default function Contact() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <img
        src={process.env.PUBLIC_URL + "/images/time_square.jpeg"}
        alt="NYC Times Square"
        className="contact-bg"
      />
      <div className="contact-overlay">
        <h2 className="section-title">Contact</h2>
        <p>Feel free to reach out to me via email or connect on LinkedIn or GitHub!</p>
        <ul className="contact-list">
          <li>
            <a href={`mailto:${contactInfo.email}`} target="_blank" rel="noreferrer">
              Email
            </a>
          </li>
          <li>
            <a href={contactInfo.linkedIn} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={contactInfo.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
