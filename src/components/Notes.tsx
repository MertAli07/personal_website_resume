const Notes = () => {
  const notes = [
    {
      rank: 'Field Log',
      title: 'Understanding RAG Systems',
      subtitle: 'Retrieval-augmented pipelines',
      description:
        'A practical map of indexing, chunking, and reranking patterns that keep retrieval grounded without losing narrative flow.',
      date: 'Jan 20, 2026',
      readTime: '11 min read',
      tags: ['AI', 'RAG', 'Architecture'],
      rune: '⟐',
    },
    {
      rank: 'Workshop Notes',
      title: 'Multi-Agent Orchestration',
      subtitle: 'Coordination patterns that scale',
      description:
        'Designing agent teams with clear roles, shared memory, and conflict resolution to keep complex workflows aligned.',
      date: 'Jan 12, 2026',
      readTime: '17 min read',
      tags: ['Agents', 'Systems', 'Design'],
      rune: '◈',
    },
    {
      rank: 'Lab Journal',
      title: 'Vector Database Optimization',
      subtitle: 'Similarity search under constraints',
      description:
        'Index choices, dimensionality trade-offs, and observability checks that keep latency predictable at scale.',
      date: 'Jan 4, 2026',
      readTime: '14 min read',
      tags: ['Database', 'Vectors', 'Performance'],
      rune: '✧',
    },
    {
      rank: 'Experiment Log',
      title: 'Fine-tuning LLMs at Scale',
      subtitle: 'Reliable training and eval loops',
      description:
        'A compact field guide to dataset curation, training stability, and evaluation gates for production-grade fine-tunes.',
      date: 'Dec 27, 2025',
      readTime: '23 min read',
      tags: ['Training', 'LLM', 'ML'],
      rune: '◉',
    },
    {
      rank: 'Pattern Library',
      title: 'Prompt Engineering Patterns',
      subtitle: 'Reusable communication templates',
      description:
        'Collected patterns for prompts that keep intent crisp, reduce ambiguity, and improve response reliability.',
      date: 'Dec 19, 2025',
      readTime: '9 min read',
      tags: ['Prompting', 'Best Practices', 'Tips'],
      rune: '⬡',
    },
    {
      rank: 'Field Log',
      title: 'Building Knowledge Graphs',
      subtitle: 'Structured knowledge layers',
      description:
        'Methods for stitching entities into navigable graphs, turning unstructured notes into queryable memory.',
      date: 'Dec 10, 2025',
      readTime: '20 min read',
      tags: ['Knowledge', 'Graphs', 'Semantic'],
      rune: '⟡',
    },
  ]

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

              <button type="button" className="read-note">
                Read Note
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Notes

