import taxDiagramPreview from '../assets/images/tax_diagram.png'

export type Diagram = {
  slug: string
  title: string
  description: string
  url?: string
  previewImage?: string
}

export const diagrams: Diagram[] = [
  {
    slug: 'aws-agent-architecture',
    title: 'METU Student Affairs',
    description: 'Multi-agent METU Student Affairs Assistant System',
  },
  {
    slug: 'scraping-knowledge-pipeline',
    title: 'Scraping & Knowledge Pipeline',
    description: 'Manual trigger → S3 → embeddings → query-time retrieval.',
  },
  {
    slug: 'aws-presentation',
    title: 'Turkish Revenue Administration',
    description: 'Multimodal Regulation Assistant System',
    url: 'https://mertali07.github.io/aws_presentation/',
    previewImage: taxDiagramPreview,
  },
]

