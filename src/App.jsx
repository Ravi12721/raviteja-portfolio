
import './App.css'

const projects = [
  {
    number: '01',
    title: 'Student Management System',
    description:
      'A React application to manage student records with add, edit, delete, search, sorting and pagination features.',
    tech: ['React', 'JavaScript', 'Bootstrap', 'localStorage'],
    github: 'https://github.com/Ravi12721',
  },
  {
    number: '02',
    title: 'INKWELL Blogging Application',
    description:
      'A full-stack blogging application with authentication, blog management and profile image upload features.',
    tech: ['React', 'Spring Boot', 'MySQL', 'REST API'],
    github: 'https://github.com/Ravi12721/inkwell-blogging-application',
  },
]

const skills = {
  Backend: ['Java', 'Spring Boot', 'Hibernate', 'JDBC', 'REST APIs'],
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap'],
  Database: ['MySQL', 'SQL'],
  Tools: ['Git', 'GitHub', 'Maven', 'Postman', 'VS Code'],
}

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="logo" href="#home">R<span>.</span></a>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-button" href="#contact">Let's Connect ↗</a>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <p className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</p>
            <h1>Hi, I'm <span>Raviteja Reddy.</span></h1>
            <h2>Java Full Stack Developer</h2>
            <p className="hero-description">
              I build practical web applications using Java, Spring Boot,
              React and MySQL. I'm passionate about learning, solving problems
              and creating useful software.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Explore My Work ↘</a>
              <a className="button secondary" href="#contact">Contact Me</a>
            </div>
            <div className="hero-meta">
              <span>📍 Hyderabad, India</span>
              <a href="https://github.com/Ravi12721" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/raviteja-reddy-027ba1317/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Developer illustration">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="code-card">
              <div className="window-dots"><i /><i /><i /></div>
              <p className="code-muted">// My developer mindset</p>
              <p><span className="code-purple">const</span> developer = {'{'}</p>
              <p className="indent">name: <span className="code-green">'Raviteja'</span>,</p>
              <p className="indent">role: <span className="code-green">'Full Stack'</span>,</p>
              <p className="indent">learning: <span className="code-green">'Every day'</span>,</p>
              <p className="indent">build: <span className="code-blue">true</span></p>
              <p>{'}'}</p>
              <div className="terminal-line"><span>➜</span> ready_to_build<span className="cursor">_</span></div>
            </div>
            <div className="floating-tag tag-java">☕ Java</div>
            <div className="floating-tag tag-react">⚛ React</div>
            <div className="floating-tag tag-spring">✦ Spring Boot</div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">GET TO KNOW ME</p>
            <h2>About <span>Me</span></h2>
          </div>
          <div className="about-card">
            <div className="about-symbol">{"< />"}</div>
            <div>
              <h3>Learning today. Building for tomorrow.</h3>
              <p>
                I'm a B.Sc. graduate developing my skills in Java Full Stack
                Development. Through hands-on projects, I'm learning how to
                build responsive user interfaces, create REST APIs and connect
                applications to databases.
              </p>
              <p>
                I'm looking for an entry-level software development opportunity
                where I can contribute, learn from experienced developers and
                grow as an engineer.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">WHAT I WORK WITH</p>
            <h2>Technical <span>Skills</span></h2>
            <p className="section-description">Technologies I'm learning and using in my projects.</p>
          </div>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <article className="skill-card" key={category}>
                <div className="skill-icon">{category === 'Backend' ? '⌘' : category === 'Frontend' ? '◈' : category === 'Database' ? '▤' : '⚙'}</div>
                <h3>{category}</h3>
                <div className="skill-tags">
                  {items.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Featured <span>Projects</span></h2>
            <p className="section-description">Practical applications built while developing my skills.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-arrow">↗</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="skill-tags">
                  {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
                <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                  View GitHub Repository ↗
                </a>
              </article>
            ))}
          </div>
          <p className="project-note">
            Project links will be most useful once the repositories contain the completed source code and README.
          </p>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card">
            <p className="eyebrow">LET'S CONNECT</p>
            <h2>Let's build something <span>meaningful.</span></h2>
            <p>I'm interested in entry-level Java Developer and Java Full Stack Developer opportunities in Hyderabad.</p>
            <div className="hero-actions">
              <a className="button primary" href="mailto:ravithejareddy.08@gmail.com">Email Me ↗</a>
              <a className="button secondary" href="https://www.linkedin.com/in/raviteja-reddy-027ba1317/" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">R<span>.</span></a>
        <p>Designed and built by Raviteja Reddy · {new Date().getFullYear()}</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
