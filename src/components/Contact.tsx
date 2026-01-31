const Contact = () => {
  return (
    <section className="mb-16">
      <h2 className="section-title">Contact</h2>
      <p className="mb-8 text-[var(--muted)]">Feel free to reach out if something resonates.</p>
      
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
        {/* Email */}
        <a
          className="card block"
          href="mailto:mertaliyalcin07@gmail.com"
          aria-label="Email Mert Ali Yalcin"
        >
          <h3 className="m-0 text-[1.3rem] text-[var(--accent)] mb-3">Email</h3>
          <span className="text-[var(--muted)] transition-colors break-all">
            mertaliyalcin07@gmail.com
          </span>
        </a>

        {/* Location */}
        <div className="card">
          <h3 className="m-0 text-[1.3rem] text-[var(--accent)] mb-3">Location</h3>
          <p className="text-[var(--muted)] m-0">Ankara, Türkiye</p>
        </div>

        {/* GitHub */}
        <a
          className="card block"
          href="https://github.com/MertAli07"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitHub profile"
        >
          <h3 className="m-0 text-[1.3rem] text-[var(--accent)] mb-3">GitHub</h3>
          <span className="text-[var(--muted)] transition-colors">
            github.com/MertAli07
          </span>
        </a>

        {/* LinkedIn */}
        <a
          className="card block"
          href="https://linkedin.com/in/mert-ali-yalcin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit LinkedIn profile"
        >
          <h3 className="m-0 text-[1.3rem] text-[var(--accent)] mb-3">LinkedIn</h3>
          <span className="text-[var(--muted)] transition-colors">
            linkedin.com/in/mert-ali-yalcin
          </span>
        </a>
      </div>
    </section>
  )
}

export default Contact

