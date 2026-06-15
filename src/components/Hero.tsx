import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, FileDown, Menu, X } from 'lucide-react'

const FONT_SERIF = '"Playfair Display", Georgia, serif'
const FONT_MONO = '"DM Mono", monospace'
const FONT_SANS = '"DM Sans", sans-serif'

const CONTACT_EMAIL = 'adityaseth@zohomail.in'

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [menuOpen])

  const navItems = [
    { label: 'About', section: 'about' },
    { label: 'Projects', section: 'projects' },
    { label: 'Stack', section: 'stack' },
    { label: 'Contact', section: 'contact' },
  ]

  const navLinkStyle = {
    fontFamily: FONT_MONO,
    fontSize: '0.65rem',
    letterSpacing: '0.13em',
    textTransform: 'uppercase' as const,
    color: 'rgba(255,255,255,0.35)',
    textDecoration: 'none',
    background: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.65rem 0.4rem',
    cursor: 'pointer',
    transition: 'color 0.2s, background 0.2s',
    borderRadius: '3px',
    border: 'none',
  } as const

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: isMobile ? '0 5.5vw' : '0 8.5vw',
        background: 'transparent',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Horizontal rule top */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: 'absolute',
          top: isMobile ? 60 : 80,
          left: isMobile ? '5.5vw' : '8.5vw',
          right: isMobile ? '5.5vw' : '8.5vw',
          height: '1px',
          background: 'rgba(255,255,255,0.08)',
          transformOrigin: 'left',
          zIndex: 5,
        }}
      />

      {/* Navigation */}
      {isMobile ? (
        <>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{
              position: 'absolute',
              top: 18,
              right: '5.5vw',
              zIndex: 50,
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '4px',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255,255,255,0.65)',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </motion.button>

          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(6,6,6,0.55)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                zIndex: 40,
                display: 'flex',
                flexDirection: 'column',
                padding: '80px 8vw 48px',
                overflowY: 'auto',
              }}
            >
              <nav style={{ display: 'flex', flexDirection: 'column', gap: 0, flex: 1 }}>
                {navItems.map(({ label, section }) => (
                  <a
                    key={label}
                    href={`#${section}`}
                    onClick={(e) => {
                      e.preventDefault()
                      setMenuOpen(false)
                      scrollToSection(section)
                    }}
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: '0.75rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.8)',
                      textDecoration: 'none',
                      padding: '1rem 0',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                      display: 'block',
                    }}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </>
      ) : (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          style={{
            position: 'absolute',
            top: 36,
            left: '5%',
            right: '5%',
            display: 'grid',
            gridTemplateColumns: `repeat(${navItems.length}, 1fr)`,
            zIndex: 5,
          }}
        >
          {navItems.map(({ label, section }) => (
            <button
              key={label}
              onClick={() => scrollToSection(section)}
              style={navLinkStyle}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.color = 'rgba(255,255,255,0.9)'
                el.style.background = 'linear-gradient(to top, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.05) 60%, rgba(255,255,255,0) 100%)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.color = 'rgba(255,255,255,0.35)'
                el.style.background = 'transparent'
              }}
            >
              {label}
            </button>
          ))}
        </motion.nav>
      )}

      {/* Main content */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '3rem' : '4vw',
          alignItems: 'center',
          paddingTop: isMobile ? '110px' : '60px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* LEFT - typography */}
        <div>
          {/* Eyebrow tagline */}
          <div style={{ overflow: 'hidden', marginBottom: '2rem' }}>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
            >
              <div style={{ width: '28px', height: '1px', background: '#e8e0d0' }} />
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: isMobile ? '0.6rem' : '0.7rem',
                  letterSpacing: '0.12em',
                  color: '#e8e0d0',
                }}
              >
                Turning raw data into scalable, actionable infrastructure.
              </span>
            </motion.div>
          </div>

          {/* Giant name */}
          <div style={{ overflow: 'visible', marginBottom: '-0.05em' }}>
            <motion.h1
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              style={{
                fontFamily: FONT_SERIF,
                fontSize: isMobile ? 'clamp(2.8rem, 10vw, 8.5rem)' : 'clamp(3.8rem, 10vw, 8.5rem)',
                fontWeight: 800,
                lineHeight: 0.9,
                letterSpacing: '0.02em',
                color: '#fafaf8',
                margin: 0,
              }}
            >
              Aditya
            </motion.h1>
          </div>
          <div style={{ overflow: 'visible', marginBottom: isMobile ? '2rem' : '3rem' }}>
            <motion.h1
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.65, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              style={{
                fontFamily: FONT_SERIF,
                fontSize: isMobile ? 'clamp(2.8rem, 10vw, 8.5rem)' : 'clamp(3.8rem, 10vw, 8.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '0.02em',
                color: '#fafaf8',
                margin: 0,
              }}
            >
              Seth
            </motion.h1>
          </div>

          {/* Role + College */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? '1.5rem' : '3rem',
              marginBottom: isMobile ? '2rem' : '2.5rem',
            }}
          >
            <div>
              <p style={{ fontFamily: FONT_MONO, fontSize: '0.65rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                Role
              </p>
              <p style={{ fontFamily: FONT_SANS, fontSize: '0.9rem', color: '#e8e0d0', lineHeight: 1.5, margin: 0 }}>
                Data Engineer
              </p>
            </div>
            <div>
              <p style={{ fontFamily: FONT_MONO, fontSize: '0.65rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                Education
              </p>
              <p style={{ fontFamily: FONT_SANS, fontSize: '0.9rem', color: '#e8e0d0', lineHeight: 1.5, margin: 0 }}>
                B.Tech IPE<br />NIT Jalandhar • 2025 – 29
              </p>
            </div>
          </motion.div>

          {/* Status + Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            style={{ display: 'inline-flex', flexDirection: 'column', gap: '0.65rem' }}
          >
            {/* Status chip */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                border: '1px solid rgba(74,222,128,0.35)',
                borderRadius: '4px',
                background: 'rgba(74,222,128,0.06)',
              }}
            >
              <div
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#4ade80',
                  boxShadow: '0 0 8px #4ade80',
                  animation: 'pulse 2s infinite',
                }}
              />
              <span style={{ fontFamily: FONT_MONO, fontSize: '0.55rem', letterSpacing: '0.2em', color: 'rgba(74,222,128,0.9)', textTransform: 'uppercase' }}>
                Open to opportunities
              </span>
            </div>

            {/* Social row */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {[
                { icon: <Github size={14} />, href: 'https://github.com/adityaseth07', label: 'GitHub' },
                { icon: <Linkedin size={14} />, href: 'https://linkedin.com/in/adityaseth007', label: 'LinkedIn' },
                { icon: <Mail size={14} />, href: `mailto:${CONTACT_EMAIL}`, label: 'Email' },
                { icon: <FileDown size={14} />, href: '/Resume.pdf', label: 'Resume', download: 'Aditya_Seth_Resume.pdf' },
              ].map(({ icon, href, label, download }) => (
                <a
                  key={label}
                  href={href}
                  download={download}
                  target={!download && href.startsWith('http') ? '_blank' : undefined}
                  rel={!download && href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '34px',
                    height: '34px',
                    borderRadius: '4px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.4)',
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.color = 'rgba(255,255,255,0.9)'
                    el.style.borderColor = 'rgba(255,255,255,0.35)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.color = 'rgba(255,255,255,0.4)'
                    el.style.borderColor = 'rgba(255,255,255,0.1)'
                  }}
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT - profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.76, 0, 0.24, 1] }}
          style={{
            display: 'flex',
            justifyContent: isMobile ? 'center' : 'flex-end',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: isMobile ? '280px' : 'min(420px, 28vw)',
              aspectRatio: '1',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
              position: 'relative',
            }}
          >
            <img
              src="/aadi.jpeg"
              alt="Aditya Seth"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(20%) contrast(1.05)',
                opacity: 0.88,
                transition: 'filter 0.5s, opacity 0.5s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'grayscale(0%) contrast(1)'
                e.currentTarget.style.opacity = '1'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'grayscale(20%) contrast(1.05)'
                e.currentTarget.style.opacity = '0.88'
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
