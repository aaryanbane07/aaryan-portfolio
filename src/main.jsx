import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, MapPin, Menu, X, Code2,
  BarChart3, Database, Terminal, ExternalLink, BriefcaseBusiness,
  GraduationCap, Layers3, ChevronDown, GitBranch, Server, LineChart,
  FileCode2, Workflow
} from "lucide-react";
import "./styles.css";

const skills = [
  { group: "Programming", icon: <Terminal size={18}/>, items: ["Python", "R Programming", "JavaScript"] },
  { group: "Data & Analytics", icon: <LineChart size={18}/>, items: ["SQL", "Tableau"] },
  { group: "Frontend Development", icon: <Code2 size={18}/>, items: ["HTML5", "CSS3", "React"] },
  { group: "Backend & Databases", icon: <Database size={18}/>, items: ["Python Flask", "Node.js", "MySQL", "REST APIs"] },
  { group: "Developer Tools", icon: <GitBranch size={18}/>, items: ["Git", "GitHub", "VS Code", "Android Studio", "Firebase"] },
];

const projects = [
  {
    number: "01", type: "FULL-STACK WEB APPLICATION", name: "LocalJobPortal", subtitle: "Local Job Portal",
    description: "A job portal built to connect job seekers and employers through a structured, database-driven platform.",
    points: ["Student, company and admin workflows", "Job listings and application management", "Flask backend with MySQL database"],
    stack: ["Python", "Flask", "MySQL", "HTML", "CSS", "JavaScript"],
    href: "https://github.com/aaryanbane07/LocalJobPortal", cta: "View on GitHub", visual: "jobs"
  }
];

const nav = [["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Education", "#education"], ["Contact", "#contact"]];

function ProjectVisual({ type }) {
  return <div className={`project-visual ${type}`}>
    <div className="visual-window">
      <div className="visual-top"><span className="window-dots"><i/><i/><i/></span><span>localjobportal / dashboard</span><span className="window-status">LIVE PREVIEW</span></div>
      <div className="visual-body">
        <aside className="visual-sidebar"><b>LJP</b><span/><span/><span/><span/><span/></aside>
        <div className="visual-main">
          <div className="visual-heading"><i/><i/></div>
          <div className="visual-metrics"><i/><i/><i/></div>
          <div className="visual-chart"><div className="chart-bars"><i/><i/><i/><i/><i/><i/><i/><i/></div><div className="chart-line"/></div>
          <div className="visual-table"><i/><i/><i/><i/></div>
        </div>
      </div>
    </div>
    <div className="visual-label"><BarChart3 size={14}/> PRODUCT INTERFACE</div>
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return <div className="site-shell">
    <div className="grid-overlay"/><div className="glow glow-a"/><div className="glow glow-b"/>
    <header className="topbar">
      <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">AB</span><span>AARYAN<span className="brand-dot">.</span></span></a>
      <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>{nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}<a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a></nav>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> OPEN TO INTERNSHIPS & FRESHER ROLES</div>
          <p className="hero-overline">SOFTWARE DEVELOPMENT <span>×</span> DATA ANALYTICS</p>
          <h1>Building software.<br/><span>Making data useful.</span></h1>
          <p className="hero-lead">Hey, I'm <strong>Aaryan Bane</strong> — a B.Sc. Information Technology student who enjoys building practical web applications and turning data into clear, useful insights.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="button button-ghost" href="mailto:aaryan.bane@icloud.com"><Mail size={16}/> Contact me</a></div>
          <div className="quick-facts"><span><MapPin size={14}/> Thane, Maharashtra</span><span><GraduationCap size={15}/> B.Sc. IT · Third Year</span></div>
        </div>
        <div className="hero-visual">
          <div className="code-panel">
            <div className="code-top"><span><i/><i/><i/></span><b>developer.profile</b><span className="code-live">● AVAILABLE</span></div>
            <div className="code-content"><div className="code-line"><em>const</em> developer <b>=</b> {'{'}</div><div className="code-line indent"><small>name:</small> <strong>"Aaryan Bane"</strong>,</div><div className="code-line indent"><small>focus:</small> [</div><div className="code-line indent2"><strong>"Software Development"</strong>,</div><div className="code-line indent2"><strong>"Data Analytics"</strong></div><div className="code-line indent">],</div><div className="code-line indent"><small>stack:</small> [<strong>"Python", "SQL", "React"</strong>]</div><div className="code-line">{'}'};</div><div className="code-cursor"/></div>
            <div className="code-footer"><span><Terminal size={13}/> BUILD</span><span><Database size={13}/> ANALYZE</span><span><Workflow size={13}/> IMPROVE</span></div>
          </div>
          <div className="float-chip chip-python"><Terminal size={15}/> Python</div><div className="float-chip chip-sql"><Database size={15}/> SQL</div><div className="float-chip chip-react"><Code2 size={15}/> React</div>
        </div>
        <a className="scroll-cue" href="#about"><span/> SCROLL TO EXPLORE <ChevronDown size={14}/></a>
      </section>

      <section className="section-wrap section-block" id="about">
        <div className="section-kicker">01 / ABOUT</div><div className="section-heading-row"><h2>Curious mind.<br/><span>Practical builder.</span></h2><p className="section-intro">I like solving problems from two angles: writing software that works and understanding the data behind decisions.</p></div>
        <div className="about-grid"><div className="about-main panel"><div className="panel-icon"><Layers3 size={20}/></div><h3>Connecting development with data.</h3><p>I'm pursuing a B.Sc. in Information Technology at Satish Pradhan Dnyansadhna College, Thane. My interests span full-stack web development, databases, programming, and data visualization.</p><p>I enjoy learning by building: designing application workflows, connecting backend systems, working with relational databases, and presenting information in a clear way. I'm looking for an opportunity to contribute, learn from a team, and grow through real-world projects.</p></div>
          <div className="about-side"><div className="mini-panel"><span className="mini-label">EDUCATION</span><strong>B.Sc. Information Technology</strong><small>Third Year · Expected 2027</small></div><div className="mini-panel"><span className="mini-label">ACADEMIC RESULT</span><strong>7.70 CGPA</strong><small>Fourth semester</small></div><div className="mini-panel"><span className="mini-label">INTEREST AREAS</span><strong>Software · Analytics</strong><small>Internship & entry-level roles</small></div></div>
        </div>
      </section>

      <section className="section-wrap section-block" id="skills">
        <div className="section-kicker">02 / TECHNICAL TOOLKIT</div><div className="section-heading-row"><h2>Tools for<br/><span>building & analysis.</span></h2><p className="section-intro">Technologies and tools I've worked with across programming, application development, databases, and visualization.</p></div>
        <div className="skills-grid">{skills.map((s, i) => <div className="skill-card" key={s.group}><div className="skill-card-top"><span className="skill-icon">{s.icon}</span><span className="skill-index">0{i+1}</span></div><h3>{s.group}</h3><div className="skill-tags">{s.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div>
      </section>

      <section className="section-wrap section-block" id="projects">
        <div className="section-kicker">03 / SELECTED PROJECTS</div><div className="section-heading-row"><h2>Built with<br/><span>purpose.</span></h2><p className="section-intro">A featured project demonstrating my interest in software development, backend systems, and practical problem-solving.</p></div>
        <div className="projects-list">{projects.map(p => <article className="project-card" key={p.name}><ProjectVisual type={p.visual}/><div className="project-info"><div className="project-meta"><span>{p.type}</span><span>{p.number} / 01</span></div><h3>{p.name}<span> — {p.subtitle}</span></h3><p>{p.description}</p><ul>{p.points.map(x => <li key={x}>{x}</li>)}</ul><div className="project-stack">{p.stack.map(x => <span key={x}>{x}</span>)}</div><a className="text-link" href={p.href} target="_blank" rel="noreferrer">{p.cta} <ExternalLink size={15}/></a></div></article>)}</div>
      </section>

      <section className="section-wrap section-block" id="education">
        <div className="section-kicker">04 / EDUCATION & CERTIFICATIONS</div><div className="section-heading-row"><h2>Always learning.<br/><span>Always improving.</span></h2></div>
        <div className="timeline"><div className="timeline-item"><div className="timeline-dot"/><div><span className="timeline-date">EXPECTED 2027</span><h3>B.Sc. — Information Technology</h3><p>Satish Pradhan Dnyansadhna College, Thane</p><small>Third Year · Fourth-semester CGPA: 7.70</small></div></div></div>
        <div className="cert-grid"><div className="cert-card"><div className="cert-icon"><BarChart3 size={19}/></div><div><span>JULY 2026</span><h3>Data Visualisation</h3><p>Tata / Forage</p></div></div><div className="cert-card"><div className="cert-icon"><FileCode2 size={19}/></div><div><span>CERTIFICATION</span><h3>Full Stack Web Development</h3><p>Internshala</p></div></div></div>
      </section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div className="section-kicker">05 / GET IN TOUCH</div><h2>Let's build<br/><span>something useful.</span></h2><p>I'm open to internship and fresher opportunities in Software Development, Data Analytics, Data Visualization, and Python development.</p><a className="button button-primary contact-button" href="mailto:aaryan.bane@icloud.com">aaryan.bane@icloud.com <ArrowUpRight size={17}/></a><div className="social-links"><a href="https://www.linkedin.com/in/aaryanbane" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={14}/></a><a href="https://github.com/aaryanbane07" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={14}/></a><a href="tel:8263872088"><BriefcaseBusiness size={17}/> 8263872088</a></div></div></section>
    </main>
    <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">AB</span><span>AARYAN<span className="brand-dot">.</span></span></a><span>Software · Data · Continuous learning</span><span>© {new Date().getFullYear()} Aaryan Bane</span></footer>
  </div>;
}

createRoot(document.getElementById("root")).render(<App/>);
