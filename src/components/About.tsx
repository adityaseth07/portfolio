import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const FONT_SERIF = '"Playfair Display", Georgia, serif'
const FONT_MONO = '"DM Mono", monospace'
const FONT_SANS = '"DM Sans", sans-serif'

const capabilities = [
  {
    title: 'Pipeline Architecture',
    desc: 'Designing end-to-end ETL/ELT pipelines that move data reliably from source to insight — batch or streaming, with built-in validation.',
  },
  {
    title: 'Analytics & Modeling',
    desc: 'Statistical analysis, machine learning, and predictive modeling with Python, scikit-learn, and modern data science tools.',
  },
  {
    title: 'Database & SQL Mastery',
    desc: 'Complex queries, schema design, indexing strategies, and performance tuning across PostgreSQL and relational systems.',
  },
]

const exploring = [
  'Building geospatial ML systems with LightGBM and SHAP interpretability.',
  'Flask-powered APIs serving real-time predictions and dashboards.',
  'Competitive programming in C++ for algorithmic thinking.',
]

export default function About() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        background: 'transparent',
        padding: isMobile ? '4rem 4vw' : '4rem 0 0',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <div style={isMobile ? {} : { padding: '0.85rem 6vw 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <span style={{ fontFamily: FONT_MONO, fontSize: '0.62rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
              About
            </span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
          </div>

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
                margin: 0,
              }}
            >
              Building the pipes that make data flow.
            </motion.h2>
          </div>
        </div>

        {/* Content */}
        <div>
          <div style={{ padding: isMobile ? '2rem 0 0' : '1.5rem 6vw 2rem' }}>
            {/* Brand thesis */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{
                fontFamily: FONT_SANS,
                fontSize: isMobile ? '1rem' : '1.05rem',
                lineHeight: 1.65,
                color: '#e8e0d0',
                marginBottom: isMobile ? '2rem' : '2.5rem',
                borderLeft: '2px solid rgba(232,224,208,0.3)',
                paddingLeft: '1rem',
                maxWidth: '520px',
              }}
            >
              Data should flow, not just exist.
            </motion.p>

            {/* Two-column grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: isMobile ? '3rem' : '6vw',
                alignItems: 'start',
              }}
            >
              {/* LEFT - story */}
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  style={{
                    fontFamily: FONT_SANS,
                    fontSize: '0.95rem',
                    lineHeight: 1.8,
                    color: 'rgba(255,255,255,0.62)',
                    marginBottom: '1.2rem',
                    maxWidth: '580px',
                    textAlign: 'justify',
                    textJustify: 'inter-word',
                  }}
                >
                  Started as a curious student exploring data patterns — spreadsheets, then Python scripts, then full pipelines. The transition from 
                  "analyzing data" to "engineering systems that make data useful at scale" happened naturally. When you see how much potential is lost to 
                  broken pipelines and unstructured storage, building the infrastructure stops being optional.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  style={{
                    fontFamily: FONT_SANS,
                    fontSize: '0.95rem',
                    lineHeight: 1.8,
                    color: 'rgba(255,255,255,0.62)',
                    marginBottom: '1.2rem',
                    maxWidth: '580px',
                    textAlign: 'justify',
                    textJustify: 'inter-word',
                  }}
                >
                  Now at NIT Jalandhar pursuing B.Tech in Industrial & Production Engineering, I bring an engineer's mindset to data problems — 
                  Python, SQL, and statistical modeling aren't just tools, they're the foundation for building systems that transform raw data 
                  into reliable, scalable, actionable intelligence. Every pipeline I build is designed to earn the trust of whoever depends on its output.
                </motion.p>
              </div>

              {/* RIGHT - pillars + exploring */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {capabilities.map(({ title, desc }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1.2rem',
                        padding: '1.4rem 1.6rem',
                        borderRadius: '8px',
                        border: '1px solid rgba(255,255,255,0.15)',
                        background: 'transparent',
                      }}
                    >
                      <div
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          background: '#e8e0d0',
                          marginTop: '7px',
                          flexShrink: 0,
                          opacity: 0.6,
                        }}
                      />
                      <div>
                        <p style={{ fontFamily: FONT_SERIF, fontWeight: 800, fontSize: '0.95rem', color: '#fafaf8', marginBottom: '6px' }}>
                          {title}
                        </p>
                        <p style={{ fontFamily: FONT_SANS, fontSize: '0.83rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.58)', textAlign: 'justify', textJustify: 'inter-word', margin: 0 }}>
                          {desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* What I'm Exploring */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.24, duration: 0.5 }}
                  style={{
                    padding: '1.2rem 1.5rem',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '6px',
                  }}
                >
                  <p style={{ fontFamily: FONT_MONO, fontSize: '0.55rem', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '0.9rem' }}>
                    What I'm Exploring
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                    {exploring.map((line, i) => (
                      <p
                        key={i}
                        style={{
                          fontFamily: FONT_SANS,
                          fontSize: '0.83rem',
                          lineHeight: 1.5,
                          color: 'rgba(255,255,255,0.45)',
                          margin: 0,
                          textAlign: 'justify',
                          textJustify: 'inter-word',
                        }}
                      >
                        — {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
