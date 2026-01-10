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
    {
      title: 'AWS Presentation',
      description: 'AWS services and architecture overview.',
      url: 'https://mertali07.github.io/aws_presentation/',
      embed: true,
    },
  ]

  return (
    <section className="mb-16">
      <h2 className="section-title">Architecture Diagrams</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
        {diagrams.map((diagram) => (
          <div key={diagram.title} className="card">
            <h3 className="m-0 text-[1.3rem] text-[var(--accent)]">{diagram.title}</h3>
            <p className="text-[var(--muted)] text-[0.95rem] my-[0.6rem]">{diagram.description}</p>
            {diagram.url && (
              <a 
                href={diagram.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline text-sm mt-2 inline-block"
              >
                View Diagram →
              </a>
            )}
          </div>
        ))}
      </div>
      {/* Embedded diagram section */}
      <div className="mt-8">
        {diagrams.filter(d => d.embed && d.url).map((diagram) => (
          <div key={diagram.title} className="card">
            <h3 className="text-[1.3rem] text-[var(--accent)] mb-4">{diagram.title}</h3>
            <div className="w-full" style={{ minHeight: '600px' }}>
              <iframe
                src={diagram.url}
                className="w-full border-0 rounded-lg"
                style={{ height: '600px', minHeight: '600px' }}
                title={diagram.title}
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Diagrams

