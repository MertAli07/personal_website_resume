import { Link } from 'react-router-dom'
import { notes } from '../data/notes'

const Notes = () => {
  return (
    <section className="mb-16">
      <h2 className="section-title">Notes & Field Logs</h2>
      <p className="text-[var(--muted)] max-w-[720px]">
        Short essays, design decisions, and field experiments — a living archive of patterns and
        observations.
      </p>

      <div className="spell-grid mt-8">
        {notes.map((note) => (
          <article key={note.title} className="spell-card">
            <div className="note-particles">
              <span className="note-particle" />
              <span className="note-particle" />
              <span className="note-particle" />
              <span className="note-particle" />
            </div>

            <div className="spell-header">
              <div className="spell-circle">
                <span className="spell-rune">{note.rune}</span>
              </div>
              <span className="spell-rank">{note.rank}</span>
              <h3 className="spell-name">{note.title}</h3>
              <p className="spell-subtitle">{note.subtitle}</p>
            </div>

            <div className="spell-body">
              <p className="spell-description">{note.description}</p>

              <div className="spell-meta">
                <div className="meta-item">
                  <span className="meta-icon">📅</span>
                  <span>{note.date}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">⏱</span>
                  <span>{note.readTime}</span>
                </div>
              </div>

              <div className="spell-tags">
                {note.tags.map((tag) => (
                  <span key={tag} className="note-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {note.slug ? (
                <Link className="read-note" to={`/notes/${note.slug}`}>
                  Read Note
                </Link>
              ) : (
                <button type="button" className="read-note">
                  Read Note
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Notes

