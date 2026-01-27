import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <section className="mb-16">
        <h2 className="section-title">Project not found</h2>
        <p className="text-[var(--muted)]">This project does not exist yet.</p>
        <Link to="/projects" className="text-[var(--accent)] hover:underline text-sm">
          Back to projects →
        </Link>
      </section>
    )
  }

  return (
    <section className="mb-16">
      <h2 className="section-title">{project.title}</h2>
      <p className="text-[var(--muted)] text-[0.95rem] my-[0.6rem]">{project.description}</p>

      <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="card card-static">
          <h3 className="m-0 text-[1.2rem] text-[var(--accent)]">Overview</h3>
          <p className="text-[var(--muted)] mt-3">{project.details}</p>

          <div className="mt-6">
            <h4 className="m-0 text-[1rem] text-[var(--text)]">Highlights</h4>
            <ul className="mt-3 mb-0 pl-5 text-[var(--muted)]">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="mb-2">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card card-static flex flex-col gap-4">
          <div>
            <span className="text-[0.75rem] uppercase tracking-[0.2em] text-[var(--muted)]">
              Timeline
            </span>
            <p className="m-0 text-[0.95rem] text-[var(--muted)] mt-2">{project.timeline}</p>
          </div>

          <div>
            <span className="text-[0.75rem] uppercase tracking-[0.2em] text-[var(--muted)]">
              Role
            </span>
            <p className="m-0 text-[0.95rem] text-[var(--muted)] mt-2">{project.role}</p>
          </div>

          <div>
            <span className="text-[0.75rem] uppercase tracking-[0.2em] text-[var(--muted)]">
              Stack
            </span>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="quest-tag stack-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="text-[0.75rem] uppercase tracking-[0.2em] text-[var(--muted)]">
              Focus
            </span>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="tag">{project.tag}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetailPage
