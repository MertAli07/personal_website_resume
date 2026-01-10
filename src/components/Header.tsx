import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  const location = useLocation()
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Notes', path: '/notes' },
    { label: 'Diagrams', path: '/diagrams' },
    { label: 'CV', path: '/cv' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <header className="py-6 px-8 border-b border-[var(--border)] relative z-[1]">
      <div className="max-w-[1080px] mx-auto flex items-center justify-between">
        <nav className="flex gap-7 flex-wrap">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[var(--text)] no-underline font-medium text-[0.95rem] relative transition-colors duration-300 hover:text-[var(--accent)] ${
                location.pathname === item.path ? 'text-[var(--accent)]' : ''
              }`}
            >
              {item.label}
              <span
                className="absolute bottom-[-3px] left-0 h-[2px] bg-[var(--accent)] transition-all duration-300"
                style={{
                  width: location.pathname === item.path ? '100%' : '0%',
                }}
              />
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header

