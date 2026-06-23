import heroImg from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="hero-small">Hello, I'm</p>
        <h1>Anusreya P M</h1>
        <h2>React Developer / Back-End Developer</h2>

        <p className="hero-desc">
          I'm Anusreya P M from Thrissur, Kerala. I am a first-year B.Tech AI & Data Science
          student at Mentor Engineering College, Muvattupuzha. I have knowledge of C Programming,
          Python, HTML, and I recently worked on a project called "Fix-IT-Now".
          I am interested in AI, Data Science, and Web development. 
        </p>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#contact" className="resume-btn" style={{ textDecoration: "none", display: "inline-block" }}>Contact Me</a>
          <a href="#projects" className="resume-btn" style={{ textDecoration: "none", display: "inline-block", background: "#08133d", color: "white", border: "2px solid white" }}>View Projects</a>
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImg} alt="Anusreya P M" className="profile-image" />
      </div>
    </section>
  );
}

export default Hero;