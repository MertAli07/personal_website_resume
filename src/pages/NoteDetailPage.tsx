import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Link, useParams } from 'react-router-dom'
import { notes } from '../data/notes'
import remarkObsidian from '../utils/remarkObsidian'

const attachmentUrls = import.meta.glob('../assets/notes/attachments/*', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const resolveAttachmentUrl = (src?: string) => {
  if (!src) {
    return src
  }

  if (/^(https?:|data:|blob:)/i.test(src)) {
    return src
  }

  const filename = src.replace(/^\.\//, '').split('/').pop()
  if (!filename) {
    return src
  }

  // Decode URL-encoded characters (e.g., %20 -> space)
  const decodedFilename = decodeURIComponent(filename)

  const match = Object.entries(attachmentUrls).find(([path]) =>
    path.endsWith(`/${decodedFilename}`)
  )

  return match ? match[1] : src
}

const NoteDetailPage = () => {
  const { slug } = useParams()
  const note = notes.find((entry) => entry.slug === slug)

  if (!note) {
    return (
      <section className="mb-16">
        <Link className="read-note note-back inline-flex items-center gap-2" to="/notes">
          ← Back to Notes
        </Link>
        <h2 className="section-title mt-6">Note not found</h2>
        <p className="text-[var(--muted)]">
          The note you are looking for is not available yet.
        </p>
      </section>
    )
  }

  return (
    <section className="mb-16">
      <Link className="read-note note-back inline-flex items-center gap-2" to="/notes">
        ← Back to Notes
      </Link>
      <h2 className="section-title note-title mt-3">{note.title}</h2>
      <p className="text-[var(--muted)] max-w-[720px]">{note.subtitle}</p>

      <div className="note-detail-meta">
        <div className="meta-item">
          <span className="meta-icon">📅</span>
          <span>{note.date}</span>
        </div>
        <div className="meta-item">
          <span className="meta-icon">⏱</span>
          <span>{note.readTime}</span>
        </div>
      </div>

      <div className="note-markdown">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkBreaks, remarkObsidian]}
          rehypePlugins={[rehypeRaw]}
          components={{
            img: ({ src, alt }) => (
              <img src={resolveAttachmentUrl(src)} alt={alt ?? ''} loading="lazy" />
            ),
          }}
        >
          {note.content ?? 'No content yet.'}
        </ReactMarkdown>
      </div>
    </section>
  )
}

export default NoteDetailPage
