const Events = () => {
  const events = [
    {
      type: 'Talk',
      title: 'Designing Reliable RAG Systems',
      description: 'A field guide to retrieval quality, evaluation loops, and failure modes.',
      date: 'Feb 14, 2026',
      location: 'Istanbul, TR',
      status: 'Upcoming',
    },
    {
      type: 'Workshop',
      title: 'Agent Orchestration Patterns',
      description: 'Hands-on session for multi-agent routing, memory, and guardrails.',
      date: 'Mar 6, 2026',
      location: 'Online',
      status: 'Registration Open',
    },
    {
      type: 'Panel',
      title: 'Data Systems for Applied AI',
      description: 'Discussion on data contracts, pipelines, and deployment realities.',
      date: 'Apr 20, 2026',
      location: 'Berlin, DE',
      status: 'Invitation',
    },
  ]

  return (
    <section className="mb-16">
      <h2 className="section-title">Events</h2>
      <p className="text-[var(--muted)] max-w-[720px]">
        Talks, workshops, and gatherings where I share recent work or join conversations.
      </p>

      <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
        {events.map((event) => (
          <article key={event.title} className="card flex flex-col gap-4">
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

            <div className="mt-auto flex flex-wrap gap-2">
              <span className="tag">{event.status}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Events
