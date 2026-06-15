import { useEffect, useRef, useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [thumbRatio, setThumbRatio] = useState(0.2)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const onScroll = () => {
      const max = el.scrollHeight - el.clientHeight
      setScrollProgress(max > 0 ? el.scrollTop / max : 0)
      setThumbRatio(el.scrollHeight > 0 ? el.clientHeight / el.scrollHeight : 1)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div style={{ position: 'relative', minHeight: '100dvh' }}>
      <div ref={scrollRef} className="hologram-interface">
        <div className="hologram-content">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </div>

      {/* Scroll progress pill */}
      <div
        style={{
          position: 'fixed',
          right: '6px',
          top: '1rem',
          bottom: '1rem',
          width: '3px',
          zIndex: 998,
          borderRadius: '3px',
          background: 'rgba(255,255,255,0.05)',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            width: '100%',
            height: `${Math.max(thumbRatio * 100, 8)}%`,
            top: `${scrollProgress * (100 - Math.max(thumbRatio * 100, 8))}%`,
            borderRadius: '3px',
            background: 'rgba(255,255,255,0.22)',
          }}
        />
      </div>
    </div>
  )
}

export default App
