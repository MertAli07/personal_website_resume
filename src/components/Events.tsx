import { Link } from 'react-router-dom'
import { events } from '../data/events'

const Events = () => {
  return (
    <section className="mb-16">
      <h2 className="section-title">Events</h2>
      <p className="text-[var(--muted)] max-w-[720px]">
        Talks, workshops, and gatherings where I share recent work or join conversations.
      </p>

      <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
        {events.map((event) => (
          <article key={event.slug} className="card flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-[0.75rem] uppercase tracking-[0.2em] text-[var(--muted)]">
                {event.type}
              </span>
              <h3 className="m-0 text-[1.35rem] text-[var(--accent)]">{event.title}</h3>
              <p className="m-0 text-[0.95rem] text-[var(--muted)]">{event.description}</p>
            </div>

            <div className="text-[0.9rem] text-[var(--muted)]">
              <p className="m-0">Date: {event.date}</p>
              <p className="m-0">Location: {event.location}</p>
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-2">
              <span className="tag">{event.status}</span>
              <Link to={`/events/${event.slug}`} className="read-note ml-auto">
                View Details →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Events
