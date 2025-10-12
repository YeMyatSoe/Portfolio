import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { BrowserRouter } from "react-router-dom";

<BrowserRouter basename="/Portfolio">
  <App />
</BrowserRouter>

// 🌟 Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.68, -0.55, 0.265, 1.55],
    },
  }),
};

// 🌟 Skill Pill
const SkillPill = ({ skill, i }) => (
  <motion.div
    custom={i}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.5 }}
    variants={fadeUp}
    className="bg-slate-800 text-teal-300 px-7 py-4 rounded-full shadow-lg shadow-slate-700/30 
               hover:bg-slate-700 hover:text-white 
               transform transition hover:-translate-y-2 hover:shadow-xl hover:shadow-teal-500/50 
               font-medium cursor-default border border-transparent"
  >
    {skill}
  </motion.div>
);

// 🌟 Project Card
const ProjectCard = ({ proj, i }) => (
  <motion.div
    custom={i}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.3 }}
    variants={fadeUp}
    className="bg-slate-800 p-8 rounded-xl shadow-2xl shadow-black/50 border border-transparent 
               transform transition hover:-translate-y-2 hover:shadow-cyan-500/50 hover:border-cyan-500/50"
  >
    <h3 className="text-2xl font-bold text-white mb-2">{proj.title}</h3>
    <p className="text-slate-400 mb-4 h-12">{proj.description}</p>
    <a
      href={proj.link}
      target="_blank"
      rel="noreferrer"
      className="text-teal-400 font-bold hover:text-teal-300 hover:underline flex items-center gap-2 transition"
    >
      Live Demo
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
      </svg>
    </a>
  </motion.div>
);

// 🌟 Skills Grid
const SkillsGrid = ({ skills }) => (
  <div className="flex flex-wrap gap-8 justify-center max-w-4xl mx-auto">
    {skills.map((skill, i) => (
      <SkillPill key={i} skill={skill} i={i} />
    ))}
  </div>
);

// 🌟 Scroll Section Wrapper
const ScrollSection = ({ id, children, className = "" }) => (
  <motion.section
    id={id} // <-- Add ID for scroll
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
    className={`relative ${className}`}
  >
    {children}
  </motion.section>
);

const App = () => {
  const skills = ["Flutter", "React", "HTML/CSS", "JavaScript", "Python", "PHP", "MySQL", "Bootstrap", "Django"];
  const projects = [
    { title: "E-commerce App", description: "Flutter + Django backend+RESTFulApi", link: "https://stswm.com" },
    { title: "LMS Website", description: "Dango+RESTFulApi+HTML+CSS+JavaScript", link: "https://ncapjtc.com" },
    { title: "Company Service Web", description: "JS + HTML/CSS + Bootstrap+ Django+ RESTFulApi", link: "https://ncabgm.com" },
  ];

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="bg-slate-950 text-gray-200 min-h-screen font-sans">

      {/* Navbar */}
      <header className="flex justify-between items-center p-6 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-2xl shadow-cyan-500/10 border-b border-cyan-700/50">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-400 tracking-wider hover:scale-105 transition duration-300">
          Ye Myat Soe
        </h1>
        <nav>
          <ul className="flex gap-8 font-medium">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <li
                key={item}
                className="text-gray-300 hover:text-sky-400 transition cursor-pointer relative group"
                onClick={() => scrollTo(item.toLowerCase())}
              >
                {item}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </li>
            ))}
          </ul>
        </nav>
      </header>

{/* Hero Section */}
<ScrollSection id="hero" className="flex flex-col md:flex-row items-center justify-between p-10 md:p-24 min-h-[85vh]">
  {/* Left Content */}
  <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
    <p className="text-xl text-sky-400 mb-2 font-mono">Hi, my name is</p>
    <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">Ye Myat Soe.</h2>
    <p className="text-2xl md:text-3xl font-semibold text-teal-400 mb-6">I build modern web & mobile applications.</p>
    <p className="text-slate-400 text-lg mb-8 max-w-lg">Full-Stack Developer skilled in Flutter, Python/Django, and modern development practices.</p>

    {/* Buttons */}
    <div className="flex gap-4 mb-8">
      <button 
        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} 
        className="bg-sky-500 text-slate-950 font-bold px-8 py-3 rounded-full shadow-lg shadow-sky-500/40 hover:bg-sky-400 transform hover:scale-105 transition duration-300 focus:ring-4 focus:ring-sky-500/70"
      >
        View Projects
      </button>
      <button 
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} 
        className="border-2 border-teal-400 text-teal-400 font-bold px-8 py-3 rounded-full hover:bg-teal-400 hover:text-slate-950 transform hover:scale-105 transition duration-300 focus:ring-4 focus:ring-teal-400/70"
      >
        Get In Touch
      </button>
    </div>

    {/* Social Icons */}
    <div className="flex gap-6 text-3xl">
      <a href="https://github.com/YeMyatSoe" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-125 transition duration-300">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/yemyat-soe-241775244/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-125 transition duration-300">
        <FaLinkedin />
      </a>
      <a href="mailto:yemyatsoe888@gmail.com" className="text-gray-400 hover:text-white hover:scale-125 transition duration-300">
        <FaEnvelope />
      </a>
    </div>
  </div>

{/* Right Content - Profile Image */}
<div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0 flex-shrink-0">
  <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-500">
  <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="Profile" ... />
  </div>
</div>
</ScrollSection>


      {/* About */}
      <ScrollSection id="about" className="p-10 md:p-20 bg-slate-900 rounded-xl m-6 md:m-20 shadow-2xl shadow-cyan-500/10">
        <h2 className="text-4xl font-bold text-sky-400 mb-6 border-b-2 border-teal-600/50 pb-2">About Me</h2>
        <p className="text-slate-300 text-lg leading-relaxed">
         Hello! I’m <span><b>Ye Myat Soe</b></span>, a passionate web and mobile developer from Yangon, Myanmar.
        I was born on November 1, 1995, and hold a <span><i>Higher National Diploma (HND)</i></span> from the University of Greenwich (UK), which I completed in 2022.
        I have a strong interest in creating clean, user-friendly digital experiences using modern web and app technologies. Over the years, I’ve dedicated myself to continuously learning and improving in software development, especially in areas that combine creativity with problem-solving.
        I’m fluent in English across all four skills — reading, writing, listening, and speaking — and I enjoy collaborating with others, sharing ideas, and building meaningful projects that help people and businesses grow.
        </p>
      </ScrollSection>

      {/* Skills */}
      <ScrollSection id="skills" className="p-10 md:p-20">
        <h2 className="text-4xl font-bold text-sky-400 mb-12 text-center">My Toolkit</h2>
        <SkillsGrid skills={skills} />
      </ScrollSection>

      {/* Projects */}
      <ScrollSection id="projects" className="p-10 md:p-20 bg-slate-900 rounded-xl m-6 md:m-20 shadow-2xl shadow-cyan-500/10">
        <h2 className="text-4xl font-bold text-sky-400 mb-12 border-b-2 border-teal-600/50 pb-2">Featured Work</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((proj, i) => <ProjectCard key={i} proj={proj} i={i} />)}
        </div>
      </ScrollSection>

      {/* Contact */}
      <ScrollSection id="contact" className="p-10 md:p-20 text-center">
        <h2 className="text-4xl font-bold text-sky-400 mb-4">Let's Connect</h2>
        <p className="text-slate-300 text-xl mb-8 max-w-2xl mx-auto">I'm open for new projects. Reach out to discuss your ideas!</p>
        <p className="text-teal-400 text-2xl font-mono mb-8">yemyatsoe888@gmail.com</p>
        <button onClick={() => (window.location.href = 'mailto:yemyatsoe888@gmail.com')} className="bg-teal-500 text-slate-950 font-bold px-10 py-4 rounded-full text-lg shadow-xl shadow-teal-500/50 hover:bg-teal-400 transform hover:scale-105 transition duration-300 focus:ring-4 focus:ring-teal-500/70">
          Send Email 📩
        </button>
      </ScrollSection>

      {/* Footer */}
      <footer className="text-center p-6 text-slate-500 border-t border-slate-700/50">
        © 2025 Ye Myat Soe. Crafted with <span className="text-red-500">❤️</span> and Tailwind CSS.
      </footer>
    </div>
  );
};

export default App;
