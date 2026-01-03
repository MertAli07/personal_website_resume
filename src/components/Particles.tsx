import { useEffect, useRef } from 'react'

const Particles = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const particles: HTMLDivElement[] = []
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.left = Math.random() * 100 + '%'
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

  return <div className="particles" id="particles" ref={containerRef}></div>
}

export default Particles

