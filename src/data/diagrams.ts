import taxDiagramPreview from '../assets/images/tax_diagram.png'
import metuMailDiagramPreview from '../assets/images/metu_mail_diagram.png'
import ministryOfEducationDiagramPreview from '../assets/images/meb_ttkb_diagram.png'

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
    previewImage: metuMailDiagramPreview
  },
  {
    slug: 'ministry-of-education',
    title: 'Ministry of Education',
    description: 'Scrape multimodal sources and build a knowledge pipeline',
    previewImage: ministryOfEducationDiagramPreview
  },
  {
    slug: 'aws-presentation',
    title: 'Turkish Revenue Administration',
    description: 'Multimodal Regulation Assistant System',
    url: 'https://mertali07.github.io/aws_presentation/',
    previewImage: taxDiagramPreview,
  },
]

