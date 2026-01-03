import { useEffect, useRef } from 'react'

const Particles = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Get CSS variable value for accent color
    const accentColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--accent')
      .trim() || '#7a99c1'

    const particles: HTMLDivElement[] = []
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      // Set inline styles as fallback
      particle.style.position = 'absolute'
      particle.style.width = '3px'
      particle.style.height = '3px'
      particle.style.backgroundColor = accentColor
      particle.style.borderRadius = '50%'
      particle.style.opacity = '0'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.bottom = '0px'
      particle.style.animationDelay = Math.random() * 5 + 's'
      particle.style.animationDuration = (12 + Math.random() * 6) + 's'
      containerRef.current.appendChild(particle)
      particles.push(particle)
    }

    return () => {
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle)
        }
      })
    }
  }, [])

  return (
    <div 
      className="particles" 
      id="particles" 
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    ></div>
  )
}

export default Particles

