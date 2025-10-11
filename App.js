import React from "react";
import "./App.css";

const projects = [
  {
    title: "E-commerce App",
    description: "Cross-platform Flutter frontend with Django backend.",
    tags: ["Flutter", "Django", "MySQL"],
    link: "https://stswm.com",
  },
  {
    title: "LMS Website",
    description: "Course management platform with PHP & Bootstrap.",
    tags: ["PHP", "Bootstrap", "MySQL"],
    link: "https://ncapjtc.com",
  },
  {
    title: "Company Service Web",
    description: "Professional website showcasing services.",
    tags: ["JavaScript", "HTML/CSS", "Bootstrap"],
    link: "https://ncabgm.com",
  },
];

const skills = [
  { name: "Flutter", color: "#06b6d4" },
  { name: "HTML & CSS", color: "#f97316" },
  { name: "JavaScript", color: "#facc15" },
  { name: "Python", color: "#1e40af" },
  { name: "PHP", color: "#4f46e5" },
  { name: "MySQL", color: "#0d9488" },
  { name: "Bootstrap", color: "#7c3aed" },
  { name: "Django", color: "#047857" },
];

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>Ye Myat Soe</h1>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <p className="hello">Hello, I'm</p>
          <h2 className="name">Ye Myat Soe</h2>
          <h3 className="title">Full-Stack Developer</h3>
          <p className="description">
            Expert in cross-platform development with Flutter, Python/Django,
            and LAMP stack.
          </p>
          <div className="buttons">
            <a href="#projects" className="primaryBtn">View Projects</a>
            <a href="#contact" className="secondaryBtn">Get In Touch</a>
          </div>
        </div>
        <img
          src="/profile.jpg"
          alt="Profile"
          className="profileImage"
        />
      </section>

      {/* About Section */}
      <section className="section" id="about">
        <h2 className="sectionTitle">About Me</h2>
        <p className="sectionText">
          I am Ye Myat Soe, a dedicated Full Stack Developer specializing in
          web and mobile applications.
        </p>
      </section>

      {/* Skills Section */}
      <section className="section" id="skills">
        <h2 className="sectionTitle">Skills</h2>
        <div className="skillContainer">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="skillCard"
              style={{ backgroundColor: skill.color }}
            >
              <p className="skillText">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="section" id="projects">
        <h2 className="sectionTitle">Projects</h2>
        {projects.map((proj, idx) => (
          <div key={idx} className="projectCard">
            <h3 className="projectTitle">{proj.title}</h3>
            <p className="projectDesc">{proj.description}</p>
            <div className="projectTags">
              {proj.tags.map((tag, tIdx) => (
                <span key={tIdx} className="tag">{tag}</span>
              ))}
            </div>
            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="projectLink">
              Live Demo
            </a>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <h2 className="sectionTitle">Contact</h2>
        <p className="sectionText">Email me at: yemyatsoe888@gmail.com</p>
      </section>
    </div>
  );
}

export default App;
