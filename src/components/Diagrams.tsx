import { Link } from 'react-router-dom'
import { diagrams } from '../data/diagrams'

const Diagrams = () => {

  return (
    <section className="mb-16">
      <h2 className="section-title">Architecture Diagrams</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
        {diagrams.map((diagram) => (
          <Link
            key={diagram.title}
            to={`/diagrams/${diagram.slug}`}
            className="card block no-underline hover:shadow-lg transition-shadow"
          >
            <div className="-mx-6 -mt-6 mb-4 rounded-t-[10px] overflow-hidden border-b border-[var(--border)] bg-[var(--card)]">
              {diagram.previewImage ? (
                <img
                  src={diagram.previewImage}
                  alt={`${diagram.title} preview`}
                  className="w-full h-[160px] object-cover"
                  loading="lazy"
                />
              ) : diagram.url ? (
                <iframe
                  src={diagram.url}
                  className="w-full h-[160px] border-0 pointer-events-none"
                  title={`${diagram.title} preview`}
                  scrolling="no"
                />
              ) : (
                <div className="w-full h-[160px] flex items-center justify-center text-[var(--muted)] text-sm">
                  Preview coming soon
                </div>
              )}
            </div>
            <h3 className="m-0 text-[1.3rem] text-[var(--accent)]">{diagram.title}</h3>
            <p className="text-[var(--muted)] text-[0.95rem] my-[0.6rem]">{diagram.description}</p>
            <span className="text-[var(--accent)] hover:underline text-sm mt-2 inline-block">
              View Diagram →
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Diagrams

