import aboutImg from "../assets/about_developer.png";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-image">
        <img src={aboutImg} alt="About Me Illustration" className="about-photo" />
      </div>

      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I am a first-year <strong>B.Tech Computer Science Engineering (AI & Data Science)</strong> student at 
          <strong> Mentor Academy For Design Entrepreneurship Innovation And Technology, Muvattupuzha</strong>.
        </p>
        <p>
          I am passionate about creating interactive web solutions, exploring artificial intelligence, and analyzing data. My career goal is to become a proficient <strong>Data Analyst</strong>, bridging the gap between raw data and actionable business insights.
        </p>
        <p>
          Beyond academics, I enjoy programming in Python and C, diving into new frontend libraries like React, and working on collaborative development projects.
        </p>
      </div>
    </section>
  );
}

export default About;