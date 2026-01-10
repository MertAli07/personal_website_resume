import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="mb-16">
      <section className="mb-16 text-center">
        <h1 className="font-display text-[2.8rem] mb-[0.35rem] m-0 text-[var(--accent)]">
          Mert Ali Yalçın
        </h1>
        <p className="max-w-[700px] mx-auto text-[var(--muted)] text-[1.1rem] mb-8">
          A wandering engineer in the lands of data, distributed systems, and applied AI.{' '}
          Welcome to my personal lab — a place of slow thoughts, quiet spells, and crafted journeys.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="section-title">Welcome</h2>
        <p className="text-[var(--muted)] text-[1.05rem] leading-relaxed mb-6">
          Explore my projects, read my notes, browse architecture diagrams, view my CV, or get in touch.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="section-title">Quick Links</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
          <Link to="/projects" className="card no-underline block hover:scale-[1.02] transition-transform">
            <h3 className="m-0 text-[1.3rem] text-[var(--accent)] mb-2">Projects</h3>
            <p className="text-[var(--muted)] text-[0.95rem] m-0">
              Selected projects and experiments
            </p>
          </Link>
          <Link to="/notes" className="card no-underline block hover:scale-[1.02] transition-transform">
            <h3 className="m-0 text-[1.3rem] text-[var(--accent)] mb-2">Notes</h3>
            <p className="text-[var(--muted)] text-[0.95rem] m-0">
              Essays, design decisions, and patterns
            </p>
          </Link>
          <Link to="/diagrams" className="card no-underline block hover:scale-[1.02] transition-transform">
            <h3 className="m-0 text-[1.3rem] text-[var(--accent)] mb-2">Diagrams</h3>
            <p className="text-[var(--muted)] text-[0.95rem] m-0">
              Architecture and system diagrams
            </p>
          </Link>
          <Link to="/cv" className="card no-underline block hover:scale-[1.02] transition-transform">
            <h3 className="m-0 text-[1.3rem] text-[var(--accent)] mb-2">CV</h3>
            <p className="text-[var(--muted)] text-[0.95rem] m-0">
              Education, experience, and publications
            </p>
          </Link>
          <Link to="/contact" className="card no-underline block hover:scale-[1.02] transition-transform">
            <h3 className="m-0 text-[1.3rem] text-[var(--accent)] mb-2">Contact</h3>
            <p className="text-[var(--muted)] text-[0.95rem] m-0">
              Get in touch
            </p>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home

