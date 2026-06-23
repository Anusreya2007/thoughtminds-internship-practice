function Certifications() {
  return (
    <section className="certifications-section" id="certifications">
      <h2>Certifications</h2>

      <div className="certifications-grid">
        <div className="cert-card">
          <div className="cert-icon">🎓</div>
          <div className="cert-info">
            <h3>Digital Edge 101</h3>
            <p className="cert-provider">FutureSkills Prime / NASSCOM</p>
            <p className="cert-year">2026</p>
          </div>
        </div>

        <div className="cert-card">
          <div className="cert-icon">📜</div>
          <div className="cert-info">
            <h3>Web Development Workshop</h3>
            <p className="cert-provider">Inovmedia</p>
            <p className="cert-year">2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;