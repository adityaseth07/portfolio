import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Mail, Github, Linkedin, MapPin } from 'lucide-react'

const FONT_SERIF = '"Playfair Display", Georgia, serif'
const FONT_MONO = '"DM Mono", monospace'
const FONT_SANS = '"DM Sans", sans-serif'

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false)
  const [copyToast, setCopyToast] = useState<string | null>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('adityaseth@zohomail.in')
      setCopyToast('Email copied!')
      setTimeout(() => setCopyToast(null), 1600)
    } catch {
      setCopyToast('Could not copy')
      setTimeout(() => setCopyToast(null), 1800)
    }
  }

  const links = [
    { label: 'Email', value: 'adityaseth@zohomail.in', href: 'mailto:adityaseth@zohomail.in', icon: <Mail size={14} /> },
    { label: 'GitHub', value: 'github.com/adityaseth07', href: 'https://github.com/adityaseth07', icon: <Github size={14} /> },
    { label: 'LinkedIn', value: 'linkedin.com/in/adityaseth007', href: 'https://linkedin.com/in/adityaseth007', icon: <Linkedin size={14} /> },
    { label: 'Location', value: 'Jalandhar, India', href: 'https://maps.google.com/?q=Jalandhar,India', icon: <MapPin size={14} /> },
  ]

  return (
    <section
      id="contact"
      style={{
        padding: isMobile ? '4rem 4vw 3rem' : '4rem 6vw 3rem',
        background: 'transparent',
        position: 'relative',
      }}
    >
      {/* Section header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: isMobile ? '2rem' : '5rem' }}>
        <span style={{ fontFamily: FONT_MONO, fontSize: '0.62rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
          Contact
        </span>
        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
      </div>

      <div style={{ overflow: 'hidden', marginBottom: isMobile ? '2rem' : '3rem' }}>
        <motion.h2
          initial={{ y: '100%' }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          style={{
            fontFamily: FONT_SERIF,
            fontSize: isMobile ? 'clamp(1.8rem, 7vw, 4rem)' : 'clamp(2.6rem, 4.5vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '0.02em',
            color: '#fafaf8',
            margin: 0,
          }}
        >
          Let's connect.
        </motion.h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '3rem' : '8vw',
          alignItems: 'start',
        }}
      >
        {/* LEFT - description */}
        <div>
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 16px',
              border: '1px solid rgba(74,222,128,0.35)',
              borderRadius: '4px',
              marginBottom: '1.5rem',
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
                flexShrink: 0,
              }}
            />
            <span style={{ fontFamily: FONT_MONO, fontSize: '0.55rem', letterSpacing: '0.2em', color: 'rgba(74,222,128,0.9)', textTransform: 'uppercase' }}>
              Always Open to Opportunities
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: FONT_SANS,
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '400px',
              textAlign: 'justify',
              textJustify: 'inter-word',
            }}
          >
            Whether it's a data engineering challenge, an interesting project collaboration,
            or just a conversation about building better data systems — I'm always up for it.
            Currently exploring the intersection of geospatial ML, pipeline architecture,
            and making data actually useful at scale.
          </motion.p>
        </div>

        {/* RIGHT - contact links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '0' }}
        >
          {links.map(({ label, value, href, icon }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ x: 4 }}
              onClick={
                label === 'Email'
                  ? (e) => { e.preventDefault(); void copyEmail() }
                  : undefined
              }
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderBottomColor = 'rgba(255,255,255,0.35)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderBottomColor = 'rgba(255,255,255,0.05)'
              }}
            >
              <span style={{ color: 'rgba(255,255,255,0.4)', width: '16px' }}>
                {icon}
              </span>
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: FONT_MONO, fontSize: '0.58rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '2px' }}>
                  {label}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <p style={{ fontFamily: FONT_SANS, fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
                    {value}
                  </p>
                  {label === 'Email' && copyToast && (
                    <motion.p
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      style={{
                        fontFamily: FONT_SANS,
                        fontSize: '0.78rem',
                        color: '#4ade80',
                        border: '1px solid rgba(74,222,128,0.35)',
                        background: 'rgba(74,222,128,0.06)',
                        borderRadius: '999px',
                        padding: '4px 10px',
                        whiteSpace: 'nowrap',
                        margin: 0,
                      }}
                    >
                      {copyToast}
                    </motion.p>
                  )}
                </div>
              </div>
              <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.7rem' }}>
                ↗
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <div
        style={{
          textAlign: 'center',
          marginTop: isMobile ? '5rem' : '8rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        <span
          style={{
            fontFamily: FONT_MONO,
            fontSize: '0.6rem',
            letterSpacing: '0.12em',
            color: 'rgba(255,255,255,0.5)',
            textTransform: 'uppercase',
          }}
        >
          © 2026 Aditya Seth • Designed & Built with ♥
        </span>
      </div>
    </section>
  )
}
