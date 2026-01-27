import { useState, useEffect } from "react";
import "./Home.css";
import aboutImg from "./assets/illu1.png";
import img2 from "./assets/illu2.png";
import html from "./assets/icon/html.png";
import css from "./assets/icon/css.png";
import js from "./assets/icon/js.png";
import c from "./assets/icon/c.png";
import excel from "./assets/icon/excel.png";
import figma from "./assets/icon/figma.png";
import powerbi from "./assets/icon/powerbi.png";
import python from "./assets/icon/python.png";
import react from "./assets/icon/react.png";
import sql from "./assets/icon/sql.png";
import email from "./assets/icon/email.png";
import github from "./assets/icon/Github.png";
import youtube from "./assets/icon/youtube.png";
import linkedin from "./assets/icon/Linkedin.png";
import hackerrank from "./assets/icon/Hackerrank.png";
import link from "./assets/icon/link.png";


/* PROJECT DATA */
const projects = [
 
  {
    title: "F1 Team Performance Dashboard",
    desc: `Created an interactive dashboard to analyze Formula 1 team performance of 2024 season. 
    The dashboard visualizes key metrics such as race results, constructor standings and points to help compare teams and players.`,
    tools: "Power BI, Excel, SQL",
    links: {github:"https://github.com/Harinivanitha25/F1-2024-Team-Dashboard"},
  },
  {
    title: "Carbon Footprint Calculator for Cement Production",
    desc: `Developed a machine learning–based carbon footprint calculator to estimate CO₂ emissions generated during cement production.`,
    tools: "Python, Machine Learning (Random Forest Regression), Streamlit",
    links: {github:"https://github.com/Harinivanitha25/Cement_Carbon_Emission_Predictor"},
  },
   {
    title: "YouTube Channel Analysis",
    desc: `Recently, I have started a YouTube Channel named "Quick Wisdom"
    which creates AI educational, motivational and historic videos.
    Findings: 0.53% engagement rate, 50 subscribers from shorts.`,
    tools: "YouTube Analytics, Power BI",
    links: {github:"https://github.com/Harinivanitha25/Quick_Wisdom", 
      youtube:"https://www.youtube.com/@Quick_Wisdom25"},
  },
  {
    title: "Guess_The_Number",
    desc: `Long time ago, I have done the "Guess the Number" game in python which I wanted to develop into a website.
     Here! It is. Click the link below to play it.`,
    tools: "HTML, CSS, React JS, GitHub Pages",
    links:{github:"https://github.com/Harinivanitha25/Guess_the_Number", 
      link:"https://harinivanitha25.github.io/Guess_the_Number/"},
  },
   {
    title: "Missing Money Matters - SQL",
    desc: `Investigated the Missing Money problem given by the WSDA Music using my SQL skills to get the prime suspect who had theft the amount.
    This project is provided by the LinkedIn learning course (SQL Essential Training)`,
    tools: "SQL, Database",
    links:{github:"https://github.com/Harinivanitha25/WSDA_Music", 
      linkedin:"https://www.linkedin.com/learning/sql-essential-training-20685933"},
  },
];
const iconMap = {
  github: github,
  youtube: youtube,
  link: link,
  linkedin: linkedin
};
const normalizeLinks = (links) => {
  if (typeof links === "object" && !Array.isArray(links)) {
    return links;
  }
  if (Array.isArray(links)) {
    const result = {};
    links.forEach((type) => {
      result[type] = "#"; 
    });
    return result;
  }
  return {};
};

export default function Home() {
 const [menuOpen, setMenuOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 900);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  useEffect(() => {
  document.body.style.overflow = menuOpen ? "hidden" : "auto";
}, [menuOpen]);


  const slidePercentage = isMobile ? 100 : 50;

  const slideStyle = {
    transform: `translateX(-${index * slidePercentage}%)`,
  };


  return (
    <div className="main">

      <nav className="nav">
        <div className="logo">Harini</div>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>

      {/* HOME */}
      <section className="home" id="home">
        <div className="home-content">
          <div className="home-line"></div>
          <div className="home-text">
            <h1>Hi.<br />I’m Harini.</h1>
            <p>I am into Web Development and Data Science.</p>
            <a href="#about">Learn More</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-left">
          <h2>About Me</h2>
          <p>
            As a Computer Science Engineering student with a strong passion
            for Data Science and Full Stack Development, I combine my love
            for drawing and problem solving skills to build interactive
            websites.
          <br></br>
          <br></br>
            I am continuously exploring new ways to enhance my knowledge
            and contribute to impactful projects.
          </p>
          <a href="#skills">My skills</a>
        </div>
        <div className="about-right">
          <img src={aboutImg} alt="About" />
        </div>
      </section>

    {/* SKILLS */}
      <section className="skills" id="skills">
        <h2>Skills</h2>

        <div className="skills-grid">


          <div className="skill-box">
            <h3>Programming language</h3>
            <div className="icons">
              <span><img src={c}/></span>
              <span><img src={python}/></span>
            </div>
          </div>


          <div className="skill-box">
            <h3>UI/UX Design</h3>
            <div className="icons">
              <span><img src={figma}  style={{ width: "190px" }}/></span>
            </div>
          </div>


          <div className="skill-box wide">
            <h3>Web Development</h3>
            <div className="icons">
              <span><img src={html}/></span>
              <span><img src={css}/></span>
              <span><img src={js}/></span>
              <span><img src={react}/></span>
            </div>
          </div>


          <div className="skill-box">
            <h3>Data Analysis & Visualization</h3>
            <div className="icons">
              <span><img src={excel} style={{ height:"120px" }}/></span>
              <span><img src={powerbi} style={{ height:"120px" }}/></span>
              <span><img src={sql} style={{ height:"120px" }}/></span>
            </div>
          </div>


        </div>
      </section>


      {/* PROJECTS */}
      <section className="project" id="projects">
        <h2>Projects</h2>

        <div className="project-viewport">
          <div className="project-track" style={slideStyle}>
            {projects.map((p, i) => (
              <div className="project-card" key={i}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <p><b>Tools:</b> {p.tools}</p>
                
                <div className="project-links">
                 {Object.entries(normalizeLinks(p.links)).map(([type, url], index) => (
                 <a
                   key={index}
                   href={url}
                   target="_blank"
                   rel="noreferrer"
                 >
                <img src={iconMap[type]} alt={type} />
                </a>
                ))}
               </div>
              </div>
            ))}
          </div>
        </div>

        {/* ONE DOT PER PROJECT */}
        <div className="project-dots">
          {projects.map((_, i) => (
            <span
              key={i}
              className={`dot ${index === i ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        <p className="project-footer">
          For more interesting projects, visit my{" "}
          <a href="https://github.com/Harinivanitha25">GitHub</a>
        </p>
      </section>


      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-left">
          <h2>Contact</h2>
          <p>
            Feel free to reach out for collaboration, project inquiries, or any other professional opportunities via any given contact.
             I am always open to meaningful conversation that lead to impactful work.
          </p>

          <div className="contact-icons">
            <a href="https://mail.google.com/mail/?view=cm&to=harini.vanitha25@gmail.com" target="_blank"><img src={email}/></a>
            <a href="https://www.linkedin.com/in/harini-s-v-430b90262/" target="_blank"><img src={linkedin}/></a>
            <a href="https://github.com/Harinivanitha25" target="_blank"><img src={github}/></a>
            <a href="http://hackerrank.com/harini_vanitha25" target="_blank"><img src={hackerrank}/></a>
          </div>
        </div>

        <div className="contact-right">
          <img src={img2} alt="Contact" />
        </div>
      </section>

    </div>
  );
}
