import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Link, useParams } from 'react-router-dom'
import { events } from '../data/events'

const EventDetailPage = () => {
  const { slug } = useParams()
  const event = events.find((entry) => entry.slug === slug)

  if (!event) {
    return (
      <section className="mb-16">
        <Link className="read-note note-back inline-flex items-center gap-2" to="/events">
          ← Back to Events
        </Link>
        <h2 className="section-title mt-6">Event not found</h2>
        <p className="text-[var(--muted)]">
          The event you are looking for is not available yet.
        </p>
      </section>
    )
  }

  return (
    <section className="mb-16">
      <Link className="read-note note-back inline-flex items-center gap-2" to="/events">
        ← Back to Events
      </Link>
      <h2 className="section-title note-title mt-3">{event.title}</h2>
      <p className="text-[var(--muted)] max-w-[720px]">{event.description}</p>

      <div className="note-detail-meta">
        <div className="meta-item">
          <span className="meta-icon">📅</span>
          <span>{event.date}</span>
        </div>
        <div className="meta-item">
          <span className="meta-icon">📍</span>
          <span>{event.location}</span>
        </div>
        <div className="meta-item">
          <span className="tag">{event.status}</span>
        </div>
      </div>

      <div className="note-markdown">
        {event.details ? (
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkBreaks]}
            rehypePlugins={[rehypeRaw]}
          >
            {event.details}
          </ReactMarkdown>
        ) : (
          <p className="text-[var(--muted)]">Details coming soon.</p>
        )}
      </div>
    </section>
  )
}

export default EventDetailPage
