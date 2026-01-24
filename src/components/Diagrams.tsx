import { Link } from 'react-router-dom'
import { diagrams } from '../data/diagrams'

const Diagrams = () => {
  const runeSet = ['⟐', '◈', '✧', '✦', '⟡']

  return (
    <section className="mb-16">
      <h2 className="section-title">Architecture Diagrams</h2>
      <div className="grimoire-grid">
        {diagrams.map((diagram, index) => (
          <Link
            key={diagram.title}
            to={`/diagrams/${diagram.slug}`}
            className="grimoire-card block no-underline"
          >
            <div className="card-corner corner-tl"></div>
            <div className="card-corner corner-tr"></div>
            <div className="card-corner corner-bl"></div>
            <div className="card-corner corner-br"></div>
            <div className="rune-decoration">{runeSet[index % runeSet.length]}</div>

            <div className="preview-area">
              {diagram.previewImage ? (
                <img
                  src={diagram.previewImage}
                  alt={`${diagram.title} preview`}
                  loading="lazy"
                />
              ) : diagram.url ? (
                <iframe
                  src={diagram.url}
                  className="pointer-events-none"
                  title={`${diagram.title} preview`}
                />
              ) : (
                <span className="preview-placeholder">Preview coming soon</span>
              )}
            </div>

            <div className="card-content">
              <h3 className="card-title">{diagram.title}</h3>
              <p className="card-description">{diagram.description}</p>
              <span className="view-diagram">View Diagram</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Diagrams

