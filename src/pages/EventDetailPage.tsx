import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Link, useParams } from 'react-router-dom'
import { events } from '../data/events'

const EventDetailPage = () => {
  const { slug } = useParams()
  const event = events.find((entry) => entry.slug === slug)
  const images = event?.images ?? []
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setCurrentIndex(0)
  }, [event?.slug])

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

      {images.length > 0 && (
        <div className="mt-6 grimoire-card event-carousel-frame">
          <div className="card-corner corner-tl"></div>
          <div className="card-corner corner-tr"></div>
          <div className="card-corner corner-bl"></div>
          <div className="card-corner corner-br"></div>
          <div className="preview-area event-carousel-preview">
            <img
              key={`${event.slug}-image-${currentIndex}`}
              src={images[currentIndex]}
              alt={`${event.title} - Image ${currentIndex + 1}`}
              loading="lazy"
            />
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setCurrentIndex((index) => (index - 1 + images.length) % images.length)
                  }
                  className="event-carousel-nav nav-prev"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentIndex((index) => (index + 1) % images.length)}
                  className="event-carousel-nav nav-next"
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}
          </div>
          {images.length > 1 && (
            <div className="event-carousel-controls">
              {images.map((_, index) => (
                <button
                  key={`${event.slug}-dot-${index}`}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`event-carousel-dot ${index === currentIndex ? 'active' : ''}`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}

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
