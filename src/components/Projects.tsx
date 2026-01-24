const Projects = () => {
  const projects = [
    {
      rank: 'A-Rank Quest',
      title: 'LLM-Powered Knowledge Agent',
      description: 'A retrieval-augmented system balancing cost, clarity, and control.',
      tag: 'AI / RAG',
      statusLabel: 'Quest Completed',
      statusClass: 'status-completed',
      linkLabel: 'View Quest Details',
      link: '#',
    },
    {
      rank: 'B-Rank Quest',
      title: 'Financial Forecasting Lab',
      description: 'Experimental models combining price trends with sentiment signals.',
      tag: 'ML / Time-Series',
      statusLabel: 'In Progress',
      statusClass: 'status-progress',
      linkLabel: 'View Quest Details',
      link: '#',
    },
    {
      rank: 'S-Rank Quest',
      title: 'Personal Data Inventory System',
      description: 'A structured pipeline to collect and classify knowledge sources.',
      tag: 'Data Engineering',
      statusLabel: 'Legendary Achievement',
      statusClass: 'status-legendary',
      linkLabel: 'View Quest Details',
      link: '#',
    },
  ]

  return (
    <section className="mb-16">
      <h2 className="section-title">Selected Projects</h2>
      <div className="quest-grid">
        {projects.map((project) => (
          <article key={project.title} className="quest-card">
            <div className="quest-pin"></div>
            <div className="ribbon"></div>
            <div className="wax-seal"></div>
            <div className="corner-tear tear-tl"></div>
            <div className="corner-tear tear-tr"></div>
            <div className="parchment-texture"></div>

            <header className="quest-header">
              <span className="quest-rank">{project.rank}</span>
              <h3 className="quest-title">{project.title}</h3>
              <p className="quest-description">{project.description}</p>
            </header>

            <div className="quest-body">
              <div className={`quest-status ${project.statusClass}`}>
                <span className="status-dot"></span>
                <span>{project.statusLabel}</span>
              </div>

              <div className="quest-tags">
                <span className="quest-tag">{project.tag}</span>
              </div>

              <a href={project.link} className="accept-quest">
                {project.linkLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects

