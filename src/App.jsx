import React, { useState } from 'react';
import './index.css';

const resumeData = {
  personal: {
    name: "Praneeth Vardineni",
    title: "Frontend Developer",
    phone: "9100330791",
    email: "Praneethrao79@gmail.com",
    location: "5-9-220, Kishanpura, Hanumakonda, Telangana",
    github: "https://praneethrao79.github.io/VSR/"
  },
  summary: "Results-driven frontend developer and career-transitioning professional with strong technical foundation in JavaScript, React, and modern web technologies. Combining self-taught development expertise with proven sales acumen and business understanding from 5 years of experience in the Food & Accommodation segment. Passionate about building user-centric, responsive web applications.",
  skills: {
    frontend: ["HTML5", "CSS3", "JavaScript ES6", "React", "TypeScript", "Responsive Design", "Flexbox", "CSS Grid"],
    tools: ["Figma", "Adobe XD", "Git/GitHub", "VS Code", "Chrome DevTools", "GitHub Pages", "Vercel", "Netlify"],
    frameworks: ["React Hooks", "React Router", "React Context API", "Redux basic"],
    practices: ["RESTful APIs", "Async/Await", "DOM Manipulation", "State Management", "Component-Based Architecture"]
  },
  experience: [
    {
      title: "Frontend Developer (Self-Employed)",
      period: "Jan 2025 - Present",
      achievements: [
        "Developed and deployed 3 fully functional web applications using HTML5, CSS3, and JavaScript with responsive design",
        "Built interactive React applications featuring dynamic state management, routing, and component lifecycle optimization",
        "Implemented modern UI patterns including dark mode toggle, form validation, and real-time data fetching using APIs"
      ]
    },
    {
      title: "Sales Executive",
      company: "Colsh Consultants",
      period: "Jan 2021 - Dec 2024",
      achievements: [
        "Managed client relationships and identified needs, developing solutions that improved customer satisfaction by 25%",
        "Collaborated with IT teams to understand technical requirements and bridge business-development gaps",
        "Developed strong communication and negotiation skills essential for cross-functional collaboration in tech teams"
      ]
    },
    {
      title: "Family Business Operations",
      period: "Jan 2017 - Nov 2020",
      achievements: [
        "Managed operations for food accommodation business serving 100+ student clients annually",
        "Implemented process improvements, increasing business efficiency by 30%",
        "Recognized growing demand for digital solutions, inspiring transition to frontend development career"
      ]
    }
  ],
  projects: [
    {
      name: "Portfolio Website",
      description: "Personal portfolio with smooth animations, dark mode, and project showcase using React",
      features: ["Fully responsive design", "Clean, maintainable code", "Deployed on production URLs"]
    },
    {
      name: "E-Commerce Product Catalog",
      description: "Responsive product display with filtering, sorting, and cart functionality",
      features: ["Real-time filtering", "Local storage persistence", "Mobile-first responsive design"]
    },
    {
      name: "Financial Dashboard",
      description: "Interactive dashboard displaying real-time stock data and market trends using external APIs",
      features: ["Live data updates", "Chart visualizations", "Responsive layout"]
    },
    {
      name: "To-Do Application",
      description: "Task management app with local storage persistence and complex state management",
      features: ["Drag & drop functionality", "Priority sorting", "Persistent data"]
    }
  ],
  education: [
    "B.com (Prof) - St. Joseph's Degree PG College (2013-2016)",
    "Intermediate MEC - CMS Junior College (2011-2013)",
    "SSC - Tejaswi High School (2011)"
  ],
  certifications: [
    "Frontend Development Specialization (Self-Taught)",
    "Responsive Web Design",
    "Git/GitHub for Developers",
    "SEO Basics for Web Developers"
  ]
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return (
          <div className="home-content">
            <h1>{resumeData.personal.name}</h1>
            <h2>{resumeData.personal.title}</h2>
            <p>{resumeData.summary}</p>
            <div className="contact-info">
              <p>📞 {resumeData.personal.phone}</p>
              <p>✉️ {resumeData.personal.email}</p>
              <p>📍 {resumeData.personal.location}</p>
              <a href={resumeData.personal.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        );
      case 'skills':
        return (
          <div className="skills-content">
            <div className="skill-category">
              <h3>Frontend Technologies</h3>
              <div className="skill-tags">
                {resumeData.skills.frontend.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Frameworks & Libraries</h3>
              <div className="skill-tags">
                {resumeData.skills.frameworks.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Platforms</h3>
              <div className="skill-tags">
                {resumeData.skills.tools.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        );
      case 'experience':
        return (
          <div className="experience-content">
            {resumeData.experience.map((exp, i) => (
              <div key={i} className="experience-item">
                <h3>{exp.title}</h3>
                {exp.company && <h4>{exp.company}</h4>}
                <p className="period">{exp.period}</p>
                <ul>
                  {exp.achievements.map((achieve, j) => (
                    <li key={j}>{achieve}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      case 'projects':
        return (
          <div className="projects-content">
            {resumeData.projects.map((project, i) => (
              <div key={i} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul>
                  {project.features.map((feature, j) => (
                    <li key={j}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      case 'education':
        return (
          <div className="education-content">
            <h3 style={{color:"#ffd93d"}}>Education</h3>
            <ul>
              {resumeData.education.map((edu, i) => (
                <li key={i}>{edu}</li>
              ))}
            </ul><br />
            <h3 style={{color:"#ffd93d"}}>Certifications</h3>
            <ul>
              {resumeData.certifications.map((cert, i) => (
                <li key={i}>{cert}</li>
              ))}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`App ${isDark ? 'dark' : 'light'}`}>
      <header className="header">
        <nav className="nav">
          <button 
            className={`nav-btn ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => setActiveSection('home')}
          >
            Home
          </button>
          <button 
            className={`nav-btn ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveSection('skills')}
          >
            Skills
          </button>
          <button 
            className={`nav-btn ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveSection('experience')}
          >
            Experience
          </button>
          <button 
            className={`nav-btn ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveSection('projects')}
          >
            Projects
          </button>
          <button 
            className={`nav-btn ${activeSection === 'education' ? 'active' : ''}`}
            onClick={() => setActiveSection('education')}
          >
            Education
          </button>
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDark ? '☀️' : '🌙'}
          </button>
        </nav>
      </header>

      <main className="main-content">
        {renderSection()}
      </main>

      <footer className="footer">
        <p>&copy; 2025 Praneeth Vardineni. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;
