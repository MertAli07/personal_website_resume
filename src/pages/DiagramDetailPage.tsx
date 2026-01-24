import { Link, useParams } from 'react-router-dom'
import { diagrams } from '../data/diagrams'
import metuMailDiagram from '../assets/html/metu_mail_diagram.html?url'
import mebTtkbDiagram from '../assets/html/meb_ttkb_diagram.html?url'

const DiagramDetailPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const diagram = diagrams.find((item) => item.slug === slug)

  if (!diagram) {
    return (
      <section className="mb-16">
        <h2 className="section-title">Diagram not found</h2>
        <p className="text-[var(--muted)]">This diagram does not exist yet.</p>
        <Link to="/diagrams" className="text-[var(--accent)] hover:underline text-sm">
          Back to diagrams →
        </Link>
      </section>
    )
  }

  const iframeSource =
    diagram.slug === 'aws-agent-architecture'
      ? metuMailDiagram
      : diagram.slug === 'ministry-of-education'
        ? mebTtkbDiagram
        : diagram.url

  return (
    <section className="mb-16">
      <h2 className="section-title">{diagram.title}</h2>
      <p className="text-[var(--muted)] text-[0.95rem] my-[0.6rem]">{diagram.description}</p>
      <div className="mt-6">
        {iframeSource ? (
          <div className="card">
            <div className="w-full" style={{ minHeight: '600px', backgroundColor: '#ffffff' }}>
              <iframe
                src={iframeSource}
                className="w-full border-0 rounded-lg"
                style={{ height: '900px', minHeight: '600px', backgroundColor: '#ffffff' }}
                title={diagram.title}
                allowFullScreen
              />
            </div>
          </div>
        ) : (
          <div className="card">
            <p className="text-[var(--muted)]">Diagram content coming soon.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default DiagramDetailPage

