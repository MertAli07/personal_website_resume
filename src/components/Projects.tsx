const Projects = () => {
  const projects = [
    {
      title: 'LLM-Powered Knowledge Agent',
      description: 'A retrieval-augmented system balancing cost, clarity, and control.',
      tag: 'AI / RAG',
    },
    {
      title: 'Financial Forecasting Lab',
      description: 'Experimental models combining price trends with sentiment signals.',
      tag: 'ML / Time-Series',
    },
    {
      title: 'Personal Data Inventory System',
      description: 'A structured pipeline to collect and classify knowledge sources.',
      tag: 'Data Engineering',
    },
  ]

  return (
    <section id="projects" className="mb-16">
      <h2 className="section-title">Selected Projects</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
        {projects.map((project) => (
          <div key={project.title} className="card">
            <h3 className="m-0 text-[1.3rem] text-[var(--accent)]">{project.title}</h3>
            <p className="text-[var(--muted)] text-[0.95rem] my-[0.6rem]">{project.description}</p>
            <span className="tag">{project.tag}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

