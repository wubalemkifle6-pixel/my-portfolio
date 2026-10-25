
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./index.css";
import profilePicture from "./assets/profile.jpg";

const projects = [
  {
    number: "01",
    name: "EthioMarket",
    type: "E-commerce Marketplace",
    description:
      "A marketplace concept designed to connect sellers and customers in Ethiopia and internationally, with product browsing and a seller-focused experience.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    status: "In progress",
    link: "https://github.com/wubalemkifle6-pixel/Ethiomarket",
  },
  {
    number: "02",
    name: "School Management System",
    type: "Academic Project",
    description:
      "A student management application concept for handling student records, administrator approval, and role-based access.",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
    status: "Academic project",
  link: "https://github.com/wubalemkifle6-pixel/SMS",
  },
  {
    number: "03",
    name: "Sydro Application",
    type: "Distributed Systems",
    description:
      "A group software project exploring Java RMI and client-server communication, with media-related functionality.",
    technologies: ["Java", "RMI", "Windows Server"],
    status: "Group project",
    link: "https://github.com/wubalemkifle6-pixel/sydro",
  },
];

const skills = [
  { name: "Java", category: "Programming", percent: 75 },
  { name: "JavaScript", category: "Programming", percent: 70 },
  { name: "React", category: "Frontend", percent: 65 },
  { name: "HTML", category: "Frontend", percent: 85 },
  { name: "CSS3", category: "Frontend", percent: 80 },
  { name: "Node.js", category: "Backend basics", percent: 55 },
  { name: "Express.js", category: "Backend basics", percent: 50 },
  { name: "MongoDB", category: "Database", percent: 60 },
  { name: "MySQL", category: "Database", percent: 70 },
  { name: "Git & GitHub", category: "Tools", percent: 65 },
  { name: "Java RMI", category: "Distributed systems", percent: 60 },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleContactSubmit = async (event) => {
    // Stop the browser from opening a blank page.
    event.preventDefault();

    if (sending) return;

    const formElement = event.currentTarget;

    setSending(true);
    setFormStatus("");
    setEmailSent(false);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setFormStatus(
        "Email setup is incomplete. Please check your EmailJS settings."
      );
      setSending(false);
      return;
    }

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formElement,
        { publicKey }
      );

      setEmailSent(true);
      setFormStatus(
        "Success! Your message has been sent. Thank you for contacting me!"
      );

      formElement.reset();
    } catch (error) {
      console.error("EmailJS error:", error);

      setFormStatus(
        "Sorry, your message could not be sent. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <header className="site-header">
        <nav className="navbar container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">W</span>
            <span>
              MyPortfolio<span className="brand-dot">.</span>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#education" onClick={closeMenu}>Education</a>
            <a
              className="nav-contact"
              href="#contact"
              onClick={closeMenu}
            >
              Contact me ↗
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* HOME SECTION */}
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="availability">
                <span className="status-dot"></span>
                I am Wubalem Kifle — Software Engineering student
              </div>

              <p className="eyebrow">
                HELLO, WELCOME TO MY PORTFOLIO
              </p>

              <h1>
                Building ideas into{" "}
                <span className="gradient-text">
                  useful software.
                </span>
              </h1>

              <p className="hero-description">
                I&apos;m a Software Engineering student at Wachemo
                University interested in Java development, web
                technologies, databases, and building practical
                software projects.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Explore my projects <span>↗</span>
                </a>

                <a className="button button-secondary" href="#about">
                  About me
                </a>
              </div>

              <div className="hero-socials">
                <a
                  href="https://github.com/wubalemkifle6-pixel"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>

                <span className="social-divider">/</span>

                <a href="#contact">Let&apos;s connect ↗</a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-glow"></div>

              <div className="code-window">
                <div className="window-bar">
                  <span className="window-dot red"></span>
                  <span className="window-dot yellow"></span>
                  <span className="window-dot green"></span>
                  <span className="window-title">developer.java</span>
                </div>

                <div className="code-content">
                  <p>
                    <span className="code-purple">public class</span>{" "}
                    <span className="code-yellow">Developer</span> {"{"}
                  </p>

                  <p className="indent">
                    <span className="code-purple">String</span> name ={" "}
                    <span className="code-green">
                      &quot;Wubalem Kifle&quot;
                    </span>;
                  </p>

                  <p className="indent">
                    <span className="code-purple">String</span> focus ={" "}
                    <span className="code-green">
                      &quot;Java & Web&quot;
                    </span>;
                  </p>

                  <p className="indent">
                    <span className="code-purple">boolean</span> learning ={" "}
                    <span className="code-orange">true</span>;
                  </p>

                  <br />

                  <p className="indent">
                    <span className="code-purple">void</span>{" "}
                    <span className="code-yellow">build</span>() {"{"}
                  </p>

                  <p className="indent double-indent">learn();</p>
                  <p className="indent double-indent">create();</p>
                  <p className="indent double-indent">improve();</p>
                  <p className="indent">{"}"}</p>
                  <p>{"}"}</p>

                  <div className="code-cursor"></div>
                </div>

                <div className="code-footer">
                  <span>● Ready to learn</span>
                  <span>Java</span>
                </div>
              </div>

              <div className="floating-card floating-card-top">
                <span className="floating-icon">{"</>"}</span>
                <div>
                  <strong>Clean code</strong>
                  <small>One step at a time</small>
                </div>
              </div>

              <div className="floating-card floating-card-bottom">
                <span className="floating-icon purple-icon">✦</span>
                <div>
                  <strong>Always learning</strong>
                  <small>Building practical skills</small>
                </div>
              </div>
            </div>
          </div>

          <div className="container hero-bottom">
            <span>SCROLL TO DISCOVER</span>
            <a href="#about" aria-label="Scroll to about section">
              ↓
            </a>
            <span className="hero-line"></span>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="section about-section" id="about">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">GET TO KNOW ME</p>
              <h2>
                About <span className="gradient-text">me</span>
              </h2>
              <p className="section-subtitle">
                A student, a problem solver, and a developer in progress.
              </p>
            </div>

            <div className="about-grid">
              <div className="about-card about-intro">
                <div className="profile-photo-wrapper">
                  <img
                    src={profilePicture}
                    alt="Wubalem Kifle profile"
                    className="profile-photo"
                  />
                </div>

                <p className="eyebrow">MY STORY</p>
                <h3>Learning today. Building for tomorrow.</h3>

                <p>
                  I am a Software Engineering student at Wachemo
                  University, Ethiopia. I enjoy learning how software
                  works and turning ideas into applications that solve
                  real problems.
                </p>

                <p>
                  My learning journey includes Java programming,
                  software design patterns, databases, and modern
                  frontend development. I am also exploring how frontend
                  applications communicate with backend services.
                </p>

                <p>
                  My goal is to keep improving through practical
                  projects, teamwork, and real-world development
                  experience.
                </p>
              </div>

              <div className="about-details">
                <article className="detail-card">
                  <span className="detail-icon">⌘</span>
                  <div>
                    <h3>What I enjoy</h3>
                    <p>
                      Programming, solving problems, designing
                      applications, and learning new technologies.
                    </p>
                  </div>
                </article>

                <article className="detail-card">
                  <span className="detail-icon">⚙</span>
                  <div>
                    <h3>What I&apos;m learning</h3>
                    <p>
                      Java, React, databases, API integration, and good
                      software engineering practices.
                    </p>
                  </div>
                </article>

                <article className="detail-card">
                  <span className="detail-icon">↗</span>
                  <div>
                    <h3>My goal</h3>
                    <p>
                      Gain practical experience, contribute to useful
                      projects, and grow into a professional software
                      developer.
                    </p>
                  </div>
                </article>

                <a
                  className="button button-secondary about-button"
                  href="#contact"
                >
                  Get in touch <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="section skills-section" id="skills">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">MY TOOLKIT</p>
              <h2>
                Skills &amp;{" "}
                <span className="gradient-text">technologies</span>
              </h2>
              <p className="section-subtitle">
                Technologies I have studied or used in learning and
                academic projects. Percentages are my own estimates.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((skill) => (
                <article className="skill-card" key={skill.name}>
                  <div className="skill-heading">
                    <div>
                      <h3>{skill.name}</h3>
                      <p>{skill.category}</p>
                    </div>

                    <span className="skill-percent">
                      {skill.percent}%
                    </span>
                  </div>

                  <div
                    className="skill-progress"
                    role="progressbar"
                    aria-label={`${skill.name} self-assessed skill level`}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={skill.percent}
                  >
                    <div
                      className="skill-progress-fill"
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                </article>
              ))}
            </div>

            <p className="skills-note">
              My skills are growing through coursework, practice, and
              project development. Update the percentages as your
              experience improves.
            </p>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">
                WHAT I&apos;VE BEEN WORKING ON
              </p>
              <h2>
                Selected <span className="gradient-text">projects</span>
              </h2>
              <p className="section-subtitle">
                Academic and personal projects that support my software
                development journey.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-top">
                    <span className="project-number">
                      {project.number}
                    </span>
                    <span className="project-status">
                      {project.status}
                    </span>
                  </div>

                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="tech-list">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub <span>↗</span>
                  </a>
                </article>
              ))}
            </div>

            <div className="github-callout">
              <div>
                <p className="eyebrow">MORE CODE, MORE LEARNING</p>
                <h3>Explore my GitHub profile</h3>
                <p>
                  Visit my profile to see available repositories and
                  project updates.
                </p>
              </div>

              <a
                className="button button-primary"
                href="https://github.com/wubalemkifle6-pixel"
                target="_blank"
                rel="noreferrer"
              >
                Visit GitHub ↗
              </a>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section className="section education-section" id="education">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">MY LEARNING JOURNEY</p>
              <h2>
                Education &amp;{" "}
                <span className="gradient-text">growth</span>
              </h2>
            </div>

            <div className="education-card">
              <div className="education-icon">⌂</div>

              <div className="education-content">
                <span className="education-label">
                  UNIVERSITY EDUCATION
                </span>
                <h3>Wachemo University</h3>
                <p className="education-degree">Software Engineering</p>
                <p>
                  Studying programming, software design, database
                  systems, distributed systems, and the principles of
                  building reliable software applications.
                </p>
              </div>

              <span className="education-location">Ethiopia</span>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION — EMAILJS CONNECTED */}
        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">LET&apos;S CONNECT</p>
              <h2>
                Have an idea?{" "}
                <span className="gradient-text">Let&apos;s talk.</span>
              </h2>
              <p className="section-subtitle">
                Interested in a project, collaboration, or learning
                opportunity? I would be happy to hear from you.
              </p>
            </div>

            <div className="contact-grid">
              <div className="contact-info">
                <h3>Get in touch</h3>
                <p>
                  You can contact me by email or find my code and
                  project updates on GitHub.
                </p>

                <a
                  className="contact-method"
                  href="mailto:wubalemkifle6@gmail.com"
                >
                  <span className="contact-icon">✉</span>
                  <span>
                    <small>Email</small>
                    <strong>wubalemkifle6@gmail.com</strong>
                  </span>
                  <span className="contact-arrow">↗</span>
                </a>

                <a
                  className="contact-method"
                  href="https://github.com/wubalemkifle6-pixel"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-icon">⌘</span>
                  <span>
                    <small>GitHub</small>
                    <strong>wubalemkifle6-pixel</strong>
                  </span>
                  <span className="contact-arrow">↗</span>
                </a>
              </div>

              <form
                className="contact-form"
                onSubmit={handleContactSubmit}
              >
                <label htmlFor="name">Your name</label>
                <input
                  id="name"
                  name="user_name"
                  type="text"
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                />

                <label htmlFor="email">Your email</label>
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />

                <label htmlFor="message">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me what you have in mind..."
                  required
                ></textarea>

                <button
                  className="button button-primary submit-button"
                  type="submit"
                  disabled={sending}
                >
                  {sending ? "Sending..." : "Send Message"}
                  {!sending && <span> ↗</span>}
                </button>

                {formStatus && (
                  <p
                    className={`form-note ${
                      emailSent ? "form-success" : "form-error"
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    {formStatus}
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-content">
          <a className="brand" href="#home">
            <span className="brand-mark">W</span>
            <span>
              MyPortfolio<span className="brand-dot">.</span>
            </span>
          </a>

          <p>
            Designed and built with React. Always learning, always improving.
          </p>

          <a href="#home" className="back-to-top">
            Back to top ↑
          </a>
        </div>

        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} My Portfolio</span>
          <span>Made with curiosity in Ethiopia.</span>
        </div>
      </footer>
    </>
  );
}

export default App;
