import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLinkedin, SiWhatsapp } from "react-icons/si";
import profilePic from "./assets/profile.jpeg";

import "./App.css";

import {
  SiPhp,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiJquery,
  SiMysql,
  SiNodedotjs,
  SiPostman,
  SiHtml5,
  SiCss3,
  SiApachespark,
  SiHackerrank,
  SiOpenjdk,
  SiVsco,
  SiGithub,
  SiPostgresql,
  SiMetabase,
  SiLinux,
  SiTypescript
} from "react-icons/si";




function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
const [errorCard, setErrorCard] = useState({ show: false, message: "" });

// Add this helper function right below it
const triggerError = (msg: any) => setErrorCard({ show: true, message: msg });
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);



  const sections = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

const projects = [
  {
    title: "Event Management Platform",
    desc: "Engineered a comprehensive social layer featuring a secure, real-time messaging system for social interaction and a granular profile management suite. Architected a bidirectional friendship engine with private account controls and search indexing, all deployed via a managed CI/CD pipeline.",
    link: "https://github.com/soc-cicd/ay2425s2-project-class-2b04-group-techies",
    // Focus on the full-stack nature and real-time capabilities
    tags: ["Full-Stack", "JavaScript", "PostgreSQL", "JWT Auth", "CI/CD", "WebSockets"]
  },
  {
    title: "Cleaning Service Platform",
    desc: "Collaborated in a dual-developer team to architect a Java-based enterprise solution. Specifically engineered the administrative management suite and implemented a robust CRUD engine for user feedback, streamlining service booking oversight and automated data processing via REST APIs.",
    link: "https://github.com/yourusername/cleaning-service-java",
    demo: "https://drive.google.com/file/d/1IHK62hwjD3nQSpMZvp1lDLauhGhpDLXR/view?usp=drive_link",
    // Focus on enterprise architecture
    tags: ["Java", "Spring Boot", "REST API", "SQL", "Admin Dashboard", "CRUD"]
  },
  {
    title: "Web Security Audit Project",
    desc: "A security-focused initiative identifying and mitigating OWASP Top 10 vulnerabilities. Successfully implemented protections against SQL Injection and Cross-Site Scripting (XSS) to harden web application defenses.",
    link: "",
    demo: "",
    // Focus on cybersecurity terminology
    tags: ["Cybersecurity", "OWASP Top 10", "Penetration Testing", "SQLi Mitigation", "XSS Defense"]
  },
  {
    title: "EduFriendZ Usability Study",
    desc: "Collaborated within a cross-functional team of four to execute a comprehensive usability study for a student productivity app. Transformed raw observational data and user interviews into actionable design insights, resulting in a high-fidelity prototype that optimizes focus-mode and task prioritization.",
    link: "https://www.figma.com/design/bqcVdLTnFAyNFmdl3MAHCd/DEUI-CA2-PROTOTYPE?node-id=0-1&p=f&t=hUTuoZrfhRuUZ3Z9-0",
    demo: "https://www.figma.com/proto/bqcVdLTnFAyNFmdl3MAHCd/DEUI-CA2-PROTOTYPE?node-id=84-172&p=f&t=hUTuoZrfhRuUZ3Z9-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A27",
    // Focus on UX Research methodology
    tags: ["UX Research", "Figma", "High-Fidelity Prototyping", "Usability Testing", "User Interviews"]
  },
  {
    title: "Driver Payroll Module",
    desc: "Developed a payroll module during my internship to automate driver earnings calculations and payment records. Built an automated printing script to streamline document output and enhance operational efficiency in internal workflows.",
    link: "",
    demo: "",
    // Focus on full-stack internal tooling
    tags: ["PHP", "MSSQL", "Linux", "Automation", "Financial Logic", "Internal Tools"]
  },
  { 
    title: "Automated Printing Script",
    desc: "Developed an automated printing script to streamline printing workflows, reducing manual effort and improving operational efficiency during internal processes.",
    link: "",
    demo: "",
    // Note: Since this is part of the project above, I combined similar tags
    tags: ["Workflow Automation", "PHP", "Scripting", "Efficiency Optimization"]
  },
];
const skills = [
  {
    category: "Languages",
    items: [
      // { name: "PHP", icon: <SiPhp /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> }, // added TypeScript
      { name: "Java", icon: <SiOpenjdk /> },
      { name: "PHP", icon: <SiPhp /> },
      { name: "HTML5 & CSS3", icon: <SiHtml5 /> },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", icon: <SiReact /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "jQuery", icon: <SiJquery /> },
    ],
  },
{
  category: "Databases",
  items: [
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MSSQL", icon: <SiMetabase  /> },
  ],
},
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git & GitHub", icon: <SiGithub /> },
      { name: "VS Code", icon: <SiVsco /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Linux", icon: <SiLinux /> }, // added Linux
    ],
  },
  {
    category: "Other Skills / Concepts",
    items: [
      { name: "RESTful API development", icon: <SiApachespark /> },
      { name: "Responsive Web Design", icon: <SiCss3 /> },
      { name: "Debugging & Testing", icon: <SiVsco /> },
      { name: "Problem-solving & Collaboration", icon: <SiHackerrank /> },
    ],
  },
];



  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
  };

  return (
    <div className="App">
      <header className="navbar">
<div className="logo">
  <div className="logo-circle">P</div>
  <div className="logo-text">Phway Phway</div>
</div>

        <div className={`nav-links ${navOpen ? "open" : ""}`}>
          {sections.map((sec) => (
            <a
              key={sec.id}
              className={activeSection === sec.id ? "active" : ""}
              onClick={() => scrollToSection(sec.id)}
            >
              {sec.label}
            </a>
          ))}

<button
  className={`dark-toggle ${darkMode ? "dark" : "light"}`}
  onClick={() => setDarkMode(!darkMode)}
>
  <span className="toggle-icon">
    {darkMode ? <FiMoon /> : <FiSun />}
  </span>
  <span className="toggle-text">
    {darkMode ? "Dark Mode" : "Light Mode"}
  </span>
</button>
        </div>

        <div className="burger" onClick={() => setNavOpen(!navOpen)}>
          <span />
          <span />
          <span />
        </div>
      </header>

      <main>
        <section id="home" className="section home">
            <div className="hero-container">
          <div className="hero">
            <div className="hero-img">
              <img src={profilePic} alt="Phway Phway" />
            </div>
            <div className="hero-text">
              <h1>Hello, I'm Phway Phway.</h1>
              <p>
                I am a passionate <strong>full-stack developer</strong> and <strong>a Diploma graduate in Information Technology from Singapore Polytechnic</strong>, 
                with hands-on experience in Java, SQL, PHP, HTML, CSS, and JavaScript. I enjoy building efficient, user-friendly applications and 
                web solutions that solve real-world problems. During my studies and internship, I collaborated on various software and web development projects,
                 tackling challenges with creative solutions and staying up-to-date with emerging technologies. 
                 These experiences strengthened my full-stack development skills and reinforced my ability to design, implement, and
                 optimize digital solutions. I am eager to contribute to innovative projects, expand my expertise, and work with teams 
                 that value creativity and technological growth.</p>
<a className="cta" href="./PhwayPhway.pdf" download="PhwayPhway_CV.pdf">
  <span className="cta-icon">
    <FaDownload />
  </span>
  Download CV
</a>
            </div>       
          </div>
          </div>
        </section>

<section id="skills" className="section skills">
  <h2>Skills</h2>
  <div className="skills-grid">
    {skills.map((category) => (
      <div className="skill-category" key={category.category}>
        <h3 className="category-title">{category.category}</h3>
        <div className="category-items">
          {category.items.map((s) => (
            <div className="skill" key={s.name}>
              <div className="skill-icon">{s.icon}</div>
              <div className="skill-name">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>


<section id="experience" className="section experience">
  <h2>Experience</h2>
  <div className="exp-card">
    <h3>Software Developer Intern</h3>
    <p>Noel Gifts International Ltd  (April 2025 - Feb 2026)</p>
    <ul>
      <li>Assisted in system development and enhancements, contributing to more efficient workflows.</li>
      <li>Supported data monitoring and system integration processes to ensure accurate reporting.</li>
      <li>Developed reports and dashboards to provide actionable business insights for internal teams.</li>
      <li>Delivered Level 1 helpdesk support, troubleshooting and resolving technical issues for users.</li>
      <li>Applied SQL and database knowledge to extract, analyze, and manage data effectively.</li>
      <li>Used PHP, Microsoft Excel, and other tools to support development and reporting tasks.</li>
    </ul>
  </div>
</section>


        <section id="projects" className="section projects">
          <h2>Projects</h2>
          <div className="projects-grid">
{projects.map((p) => (
  <div key={p.title} className="project-card">
    <h3>{p.title}</h3>
    
    <div className="tag-container">
      {p.tags.map((tag, index) => (
        <span 
          key={index} 
          className="tag-badge" 
          style={{ "--delay": `${index * 0.1}s` } as React.CSSProperties}
        >
          {tag}
        </span>
      ))}
    </div>

    <p className="project-desc">{p.desc}</p>
    
<div className="button-group">
  {/* Updated GitHub Button */}
  <button 
    onClick={() => p.link ? window.open(p.link, '_blank') : triggerError('No link available.')} 
    className="cta"
  >
    View on GitHub
  </button>

  {/* Updated Demo Button */}
  <button 
    onClick={() => p.demo ? window.open(p.demo, '_blank') : triggerError('No demo available.')} 
    className="cta outline"
  >
    View Demo
  </button>
</div>
  </div>
))}
          </div>
        </section>

<section id="contact" className="section contact">
  <h2>Contact</h2>

  <div className="contact-icons">
<a
  className="contact-icon"
  href="mailto:phway3313@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Email"
>
  <MdEmail />
</a>


    <a
      className="contact-icon"
      href="https://www.linkedin.com/in/phwayphway/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <SiLinkedin />
    </a>

    <a
      className="contact-icon"
      href="https://github.com/phway-123"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <SiGithub />
    </a>

    <a
      className="contact-icon"
      href="https://wa.me/6589035606"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <SiWhatsapp />
    </a>
  </div>
</section>

      </main>
{/* --- RETRO SYSTEM ERROR CARD --- */}
      {errorCard.show && (
        <div className="modal-overlay">
          <div className="error-window">
            <div className="window-header">
              <span className="window-title">Message</span>
            </div>
      <div className="window-content">
  <div className="error-text-body">
    <p>{errorCard.message}</p>
  </div>
  <button 
    className="cta" 
    onClick={() => setErrorCard({ show: false, message: "" })}
  >
    OK
  </button>
</div>
          </div>
        </div>
      )}
      <footer className="footer">
        <p>Copyright © {new Date().getFullYear()} Phway Phway. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;