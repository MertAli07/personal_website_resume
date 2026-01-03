import { Link } from '@mui/material'

const Header = () => {
  const navItems = [
    { label: 'Projects', href: '#projects' },
    { label: 'Notes', href: '#notes' },
    { label: 'Diagrams', href: '#diagrams' },
    { label: 'CV', href: '#cv' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="py-12 px-8 pb-8 border-b border-[var(--border)] text-center relative z-[1]">
      <h1 className="font-display text-[2.8rem] mb-[0.35rem] m-0 text-[var(--accent)]">
        Mert Ali Yalcin
      </h1>
      <p className="max-w-[700px] mx-auto text-[var(--muted)] text-[1.1rem]">
        A wandering engineer in the lands of data, distributed systems, and applied AI.{' '}
        Welcome to my personal lab — a place of slow thoughts, quiet spells, and crafted journeys.
      </p>
      <nav className="mt-7 flex justify-center gap-7 flex-wrap">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-[var(--text)] no-underline font-medium text-[0.95rem] relative transition-colors duration-300 hover:text-[var(--accent)]"
            sx={{
              '&::after': {
                content: '""',
                display: 'block',
                width: 0,
                height: '2px',
                backgroundColor: 'var(--accent)',
                transition: 'width 0.3s ease',
                position: 'absolute',
                bottom: '-3px',
                left: 0,
              },
              '&:hover::after': {
                width: '100%',
              },
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Header

