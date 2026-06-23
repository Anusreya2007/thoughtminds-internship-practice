function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        <div className="project-card">
          <h3>Fix-IT-Now</h3>
          <p style={{ fontWeight: "600", color: "#08133d", marginBottom: "15px" }}>
            Smart Campus Issue Management & PG Discovery Application
          </p>
          <p>
            FixITNow is a digital platform that enhances student life by enabling smart campus issue reporting and resolution tracking. The app also features a PG Finder module that helps students find verified and affordable accommodations based on location, budget, and reviews.
          </p>

          <h4>Key Features</h4>
          <ul>
            <li>Smart Issue Reporting – Report electrical, water, cleanliness, or network problems easily.</li>
            <li>Real-Time Status Tracking – Monitor progress and resolution updates transparently.</li>
            <li>PG Finder Module – Find verified paying guest accommodations near campus.</li>
          </ul>

          <div className="tech">
            <span>HTML & CSS</span>
            <span>JavaScript</span>
            <span>Python</span>
            <span>Firebase</span>
            <span>Figma</span>
          </div>

          <div className="project-buttons">
            <a href="https://github.com/Anusreya2007/fix-it-now-.git" target="_blank" rel="noreferrer">
              <button>GitHub Link</button>
            </a>
            <a href="#">
              <button style={{ marginLeft: "15px", background: "transparent", color: "#08133d", border: "2px solid #08133d" }}>Live Demo</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;