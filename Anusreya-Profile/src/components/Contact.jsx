import contactImg from "../assets/contact_illustration.png";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-left">
        <h2>Contact</h2>
        <p>Feel free to reach out for collaborations, learning opportunities, or just a tech chat!</p>

        <div className="contact-info" style={{ marginTop: "20px" }}>
          <p>
            <strong>Email:</strong>
            <a href="mailto:anusreyaanu2007@gmail.com">anusreyaanu2007@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong>
            <a href="tel:8075940760">8075940760</a>
          </p>
          <p>
            <strong>LinkedIn:</strong>
            <a href="https://www.linkedin.com/in/anusreya-pm-2800213aa?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">LinkedIn Profile</a>
          </p>
          <p>
            <strong>GitHub:</strong>
            <a href="https://github.com/Anusreya2007" target="_blank" rel="noreferrer">GitHub Profile</a>
          </p>
        </div>
      </div>

      <div className="contact-right">
        <img src={contactImg} alt="Contact Illustration" className="contact-image" />
      </div>
    </section>
  );
}

export default Contact;