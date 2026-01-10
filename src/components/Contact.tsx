const Contact = () => {
  return (
    <section className="mb-16">
      <h2 className="section-title">Contact</h2>
      <p className="mb-8 text-[var(--muted)]">Feel free to reach out if something resonates.</p>
      
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
        {/* Email */}
        <div className="card">
          <h3 className="m-0 text-[1.3rem] text-[var(--accent)] mb-3">Email</h3>
          <a 
            href="mailto:mertaliyalcin07@gmail.com" 
            className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors break-all"
          >
            mertaliyalcin07@gmail.com
          </a>
        </div>

        {/* Location */}
        <div className="card">
          <h3 className="m-0 text-[1.3rem] text-[var(--accent)] mb-3">Location</h3>
          <p className="text-[var(--muted)] m-0">Ankara, Türkiye</p>
        </div>

        {/* GitHub */}
        <div className="card">
          <h3 className="m-0 text-[1.3rem] text-[var(--accent)] mb-3">GitHub</h3>
          <a 
            href="https://github.com/MertAli07" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            github.com/MertAli07
          </a>
        </div>

        {/* LinkedIn */}
        <div className="card">
          <h3 className="m-0 text-[1.3rem] text-[var(--accent)] mb-3">LinkedIn</h3>
          <a 
            href="https://linkedin.com/in/mert-ali-yalcin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            linkedin.com/in/mert-ali-yalcin
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact

