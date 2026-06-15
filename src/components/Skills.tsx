import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const FONT_SERIF = '"Playfair Display", Georgia, serif'
const FONT_MONO = '"DM Mono", monospace'
const FONT_SANS = '"DM Sans", sans-serif'

const C = {
  lang: '#a78bfa',
  data: '#60a5fa',
  viz: '#f472b6',
  web: '#10b981',
}

type Skill = {
  name: string
  icon: string | null
  materialIcon: string | null
  invert?: boolean
}

type Category = {
  label: string
  color: string
  skills: Skill[]
}

const CATEGORIES: Category[] = [
  {
    label: 'Languages',
    color: C.lang,
    skills: [
      { name: 'Python', icon: '/python-svgrepo-com.svg', materialIcon: null },
      { name: 'C++', icon: null, materialIcon: 'memory' },
    ],
  },
  {
    label: 'Data & ML',
    color: C.data,
    skills: [
      { name: 'Pandas', icon: '/pandas.svg', materialIcon: null, invert: true },
      { name: 'NumPy', icon: '/numpy.svg', materialIcon: null },
      { name: 'PostgreSQL', icon: '/postgres.svg', materialIcon: null },
      { name: 'Excel', icon: '/excel.svg', materialIcon: null },
      { name: 'scikit-learn', icon: null, materialIcon: 'psychology' },
    ],
  },
  {
    label: 'Visualization',
    color: C.viz,
    skills: [
      { name: 'Matplotlib', icon: null, materialIcon: 'pie_chart' },
      { name: 'Seaborn', icon: null, materialIcon: 'trending_up' },
      { name: 'Power BI', icon: '/powerbi.svg', materialIcon: null, invert: true },
    ],
  },
  {
    label: 'Backend',
    color: C.web,
    skills: [
      { name: 'Flask', icon: '/flask.svg', materialIcon: null, invert: true },
    ],
  },
]

function Tile({ skill, isMobile }: { skill: Skill; isMobile: boolean }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '9px',
        width: isMobile ? '80px' : '94px',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '7px',
          alignItems: 'center',
          justifyContent: 'center',
          height: '40px',
        }}
      >
        {skill.icon ? (
          <img
            src={skill.icon}
            alt={skill.name}
            loading="lazy"
            style={{ width: '38px', height: '38px', objectFit: 'contain', display: 'block', filter: skill.invert ? 'brightness(0) invert(1)' : undefined }}
          />
        ) : (
          <span
            className="material-symbols-outlined"
            style={{ fontSize: '32px', color: 'rgba(255,255,255,0.55)' }}
          >
            {skill.materialIcon}
          </span>
        )}
      </div>
      <div
        style={{
          fontFamily: FONT_SANS,
          fontSize: '0.72rem',
          color: 'rgba(255,255,255,0.55)',
          textAlign: 'center',
          lineHeight: 1.3,
        }}
      >
        {skill.name}
      </div>
    </div>
  )
}

export default function Skills() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section
      id="stack"
      style={{
        padding: isMobile ? '4rem 4vw' : '4rem 6vw 10rem',
        background: 'transparent',
        position: 'relative',
      }}
    >
      {/* Section header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: isMobile ? '3rem' : '5rem' }}>
        <span style={{ fontFamily: FONT_MONO, fontSize: '0.62rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
          Stack
        </span>
        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr',
          gap: isMobile ? '3rem' : '8vw',
          alignItems: 'start',
        }}
      >
        {/* LEFT - sticky heading */}
        <div
          style={{
            position: isMobile ? 'relative' : 'sticky',
            top: isMobile ? '0' : '6rem',
            marginBottom: isMobile ? '2rem' : '0',
          }}
        >
          <div style={{ overflow: 'hidden' }}>
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
                margin: '0 0 1.2rem',
              }}
            >
              Tools I build with.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{
              fontFamily: FONT_SANS,
              fontSize: '0.88rem',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.48)',
              maxWidth: '260px',
            }}
          >
            Used in real projects. Not just tutorials.
          </motion.p>
        </div>

        {/* RIGHT - categories */}
        <div>
          {CATEGORIES.map((cat, ci) => (
            <div
              key={cat.label}
              style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '1.3rem' : '24px',
                alignItems: 'center',
                padding: ci === 0 ? '0 0 24px' : '24px 0',
                borderTop: ci === 0 ? 'none' : '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: '0.62rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: cat.color,
                  width: isMobile ? '100%' : '118px',
                  flexShrink: 0,
                  lineHeight: 1.5,
                  textAlign: isMobile ? 'center' : 'left',
                }}
              >
                {cat.label}
              </div>
              <div
                style={
                  isMobile
                    ? { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '22px 14px', width: '100%' }
                    : { display: 'flex', flexWrap: 'wrap', gap: '22px 24px' }
                }
              >
                {cat.skills.map((s) => (
                  <Tile key={s.name} skill={s} isMobile={isMobile} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
