import { useEffect, useMemo } from 'react'
import { matchPath, useLocation } from 'react-router-dom'
import { diagrams } from '../data/diagrams'
import { events } from '../data/events'
import { notes } from '../data/notes'
import { projects } from '../data/projects'

const siteName = 'Mert Ali Yalçın'

const pageTitles: Record<string, string> = {
  '/': `${siteName} — AI & Data Engineering Portfolio`,
  '/projects': `Projects | ${siteName} — AI & Data Engineering Portfolio`,
  '/cv': `CV | ${siteName} — AI Engineer & Data Engineer`,
  '/contact': `Contact | ${siteName}`,
  '/notes': `Notes | ${siteName} — Technical Notes`,
  '/diagrams': `Diagrams | ${siteName} — Architecture Diagrams`,
  '/events': `Events | ${siteName} — Timeline`,
}

function findSlug(pathname: string, pattern: string) {
  return matchPath(pattern, pathname)?.params.slug
}

function getPageTitle(pathname: string) {
  if (pageTitles[pathname]) {
    return pageTitles[pathname]
  }

  const projectSlug = findSlug(pathname, '/projects/:slug')
  if (projectSlug) {
    const project = projects.find((item) => item.slug === projectSlug)
    return project
      ? `${project.title} | ${siteName} — AI & Data Engineering Portfolio`
      : pageTitles['/projects']
  }

  const noteSlug = findSlug(pathname, '/notes/:slug')
  if (noteSlug) {
    const note = notes.find((item) => item.slug === noteSlug)
    return note ? `${note.title} | ${siteName} — Technical Notes` : pageTitles['/notes']
  }

  const diagramSlug = findSlug(pathname, '/diagrams/:slug')
  if (diagramSlug) {
    const diagram = diagrams.find((item) => item.slug === diagramSlug)
    return diagram
      ? `${diagram.title} | ${siteName} — Architecture Diagrams`
      : pageTitles['/diagrams']
  }

  const eventSlug = findSlug(pathname, '/events/:slug')
  if (eventSlug) {
    const event = events.find((item) => item.slug === eventSlug)
    return event ? `${event.title} | ${siteName} — Timeline` : pageTitles['/events']
  }

  return pageTitles['/']
}

function PageTitle() {
  const { pathname } = useLocation()
  const title = useMemo(() => getPageTitle(pathname), [pathname])

  useEffect(() => {
    document.title = title
  }, [title])

  return null
}

export default PageTitle
