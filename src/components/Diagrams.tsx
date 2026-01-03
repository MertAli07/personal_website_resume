const Diagrams = () => {
  const diagrams = [
    {
      title: 'AWS Agent Architecture',
      description: 'Event-driven ingestion, vector search, tool-using agents.',
    },
    {
      title: 'Scraping & Knowledge Pipeline',
      description: 'Manual trigger → S3 → embeddings → query-time retrieval.',
    },
  ]

  return (
    <section id="diagrams" className="mb-16">
      <h2 className="section-title">Architecture Diagrams</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
        {diagrams.map((diagram) => (
          <div key={diagram.title} className="card">
            <h3 className="m-0 text-[1.3rem] text-[var(--accent)]">{diagram.title}</h3>
            <p className="text-[var(--muted)] text-[0.95rem] my-[0.6rem]">{diagram.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Diagrams

