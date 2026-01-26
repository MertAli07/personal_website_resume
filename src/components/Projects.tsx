import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

const Projects = () => {
  return (
    <section className="mb-16">
      <h2 className="section-title">Projects</h2>
      <div className="quest-grid">
        {projects.map((project) => (
          <article key={project.title} className="quest-card">
            <div className="quest-pin"></div>
            <div className="ribbon"></div>
            <div className="wax-seal"></div>
            <div className="corner-tear tear-tl"></div>
            <div className="corner-tear tear-tr"></div>
            <div className="parchment-texture"></div>

            <header className="quest-header">
              <span className="quest-rank">{project.rank}</span>
              <h3 className="quest-title">{project.title}</h3>
              <p className="quest-description">{project.description}</p>
            </header>

            <div className="quest-body">
              <div className={`quest-status ${project.statusClass}`}>
                <span className="status-dot"></span>
                <span>{project.statusLabel}</span>
              </div>

              <div className="quest-tags">
                <span className="quest-tag">{project.tag}</span>
              </div>

              <Link to={`/projects/${project.slug}`} className="accept-quest">
                View Project Details
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects

