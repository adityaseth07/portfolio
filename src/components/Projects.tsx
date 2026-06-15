import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Github } from 'lucide-react'

const FONT_SERIF = '"Playfair Display", Georgia, serif'
const FONT_MONO = '"DM Mono", monospace'
const FONT_SANS = '"DM Sans", sans-serif'

type Project = {
  index: string
  title: string
  status: string
  tags: string[]
  impact: string
  summary: [string, string, string, string]
  github: string | null
  accent?: string
}

const projects: Project[] = [
  {
    index: '01',
    title: 'X-Pand — Geospatial Profitability Predictor',
    status: 'Shipped',
    tags: [
      'LightGBM + SHAP',
      'Geographically Weighted Regression',
      'Binary Integer Programming',
      'FastAPI + React SPA',
      'GeoPandas + PySAL',
      'Multi-City Support',
    ],
    impact:
      'F1 > 0.80 • 10K grid cells scored in < 5 min • BIP optimization < 60s • Full SHAP explanations per prediction',
    summary: [
      'Food delivery expansion relied on intuition — no systematic way to predict which 500m × 500m zones would be profitable within 6 months.',
      'End-to-end geospatial ML pipeline: H3 grid generation → spatial feature engineering (OSM, WorldPop) → GWR + LightGBM classification → BIP-based strategic hub placement.',
      'SHAP-based local interpretability ensures every prediction is explainable. Thompson Sampling handles exploration-exploitation tradeoffs. Financial ROI modeling synthesizes per-cell CAPEX dynamically.',
      'Multi-city coverage (Delhi, Jaipur, Kolkata, Indore, Jalandhar) with interactive Leaflet map, real-time optimization under budget/hub constraints, and live system health monitoring.',
    ],
    github: 'https://github.com/manik3160/X-Pand',
    accent: '#22d3ee',
  },
  {
    index: '02',
    title: 'Raj Siksha Mitra — AI Educational Assistant',
    status: 'Hackathon',
    tags: [
      'Google Gemini API',
      'Flask Backend',
      'PostgreSQL',
      'Speech-to-Text',
      'Multilingual (EN/HI/RAJ)',
      'Smart India Hackathon',
    ],
    impact:
      'Sole developer in 6-member team • Advanced to SIH 2025 Round 2 • Multilingual FAQ chatbot for Rajasthan institutes',
    summary: [
      'Educational institutes in Rajasthan lacked a unified, multilingual FAQ system — students navigated fragmented sources in three languages with no automated assistance.',
      'AI-powered chatbot built on Google Gemini API with Flask backend and PostgreSQL. Automated data fetching from institutional sources with speech-to-text integration.',
      'Trilingual support (English, Hindi, Rajasthani) handled natively — not post-hoc translation. Scalable architecture designed for multi-institute deployment.',
      'Advanced to SIH 2025 Internal Round 2 as sole developer. Production-grade API design with robust error handling and response validation.',
    ],
    github: 'https://github.com/adityaseth07/samvaadAI',
  },
  {
    index: '03',
    title: 'Meta Stock Analysis — Risk & Performance Study',
    status: 'Shipped',
    tags: [
      'Python + Pandas',
      'NumPy',
      'Matplotlib + Seaborn',
      'Sharpe Ratio',
      'Volatility Analysis',
      'Statistical Modeling',
    ],
    impact:
      'Full 2012–2025 analysis • 2022 crash deep-dive • Risk-adjusted performance via Sharpe Ratio • Publication-quality visualizations',
    summary: [
      "Meta's 2022 stock crash raised questions about long-term viability — no rigorous quantitative analysis existed that covered the full 2012–2025 trajectory.",
      'Data pipeline from Yahoo Finance → cleaned time-series → rolling volatility, drawdown analysis, and Sharpe Ratio computation across multiple time windows.',
      'Statistical approach: annualized returns, crash severity metrics, year-over-year volatility comparison. Visualizations built for both exploratory and presentation use.',
      'Complete risk profile covering pre-crash, crash, and recovery periods with quantified evidence for every conclusion drawn.',
    ],
    github: 'https://github.com/adityaseth07/meta-stock-risk-analysis',
  },
]

const SUMMARY_LABELS = ['Problem', 'System', 'Design', 'Outcome']

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const [hovered, setHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const accentColor = p.accent || '#e8e0d0'
  const accentBorder = p.accent
    ? `${p.accent}66`
    : 'rgba(232,224,208,0.25)'

  const statusColor =
    p.status === 'Hackathon' ? '#facc15' : '#4ade80'
  const statusBorder =
    p.status === 'Hackathon'
      ? 'rgba(250,204,21,0.35)'
      : 'rgba(74,222,128,0.35)'
  const statusBg =
    p.status === 'Hackathon'
      ? 'rgba(250,204,21,0.06)'
      : 'rgba(74,222,128,0.06)'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: isMobile ? '1.6rem' : '2.4rem',
        borderRadius: '8px',
        border: `1px solid ${hovered ? accentBorder : 'rgba(255,255,255,0.12)'}`,
        background: 'transparent',
        transition: 'border-color 0.25s',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Accent top line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: accentColor,
          opacity: hovered ? 0.7 : 0.3,
          transition: 'opacity 0.25s',
        }}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '1.5rem' : '3vw',
          alignItems: 'start',
        }}
      >
        {/* Left: header */}
        <div>
          {/* Index + status */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
            <span style={{ fontFamily: FONT_MONO, fontSize: '0.62rem', letterSpacing: '0.09em', color: 'rgba(255,255,255,0.35)' }}>
              {p.index}
            </span>
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: '0.52rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '2px 8px',
                borderRadius: '20px',
                color: statusColor,
                border: `1px solid ${statusBorder}`,
                background: statusBg,
              }}
            >
              {p.status}
            </span>
          </div>

          <h3
            style={{
              fontFamily: FONT_SERIF,
              fontWeight: 800,
              fontSize: isMobile ? '1.4rem' : '1.7rem',
              color: '#fafaf8',
              lineHeight: 1.2,
              margin: '0 0 1rem',
              letterSpacing: '0.02em',
            }}
          >
            {p.title}
          </h3>

          <p
            style={{
              fontFamily: FONT_MONO,
              fontSize: '0.62rem',
              letterSpacing: '0.06em',
              color: accentColor,
              opacity: 0.9,
              marginBottom: '1.5rem',
              lineHeight: 1.6,
            }}
          >
            {p.impact}
          </p>

          {/* GitHub link */}
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: FONT_MONO,
                fontSize: '0.62rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: accentColor,
                textDecoration: 'none',
                border: `1px solid ${accentBorder}`,
                borderRadius: '4px',
                padding: '8px 14px',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = p.accent
                  ? `${p.accent}14`
                  : 'rgba(232,224,208,0.06)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
              }}
            >
              <Github size={12} /> View Source →
            </a>
          )}
        </div>

        {/* Right: summary bullets */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
          {p.summary.map((bullet, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: '0.58rem',
                  color: 'rgba(255,255,255,0.2)',
                  marginTop: '4px',
                  flexShrink: 0,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  width: '70px',
                }}
              >
                {SUMMARY_LABELS[i]}
              </span>
              <span
                style={{
                  fontFamily: FONT_SANS,
                  fontSize: '0.85rem',
                  lineHeight: 1.65,
                  color: 'rgba(255,255,255,0.55)',
                  textAlign: 'justify',
                  textJustify: 'inter-word',
                }}
              >
                {bullet}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div
        style={{
          display: 'flex',
          gap: '5px',
          flexWrap: 'wrap',
          marginTop: '1.5rem',
          paddingTop: '1.2rem',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        {p.tags.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: FONT_MONO,
              fontSize: '0.52rem',
              letterSpacing: '0.07em',
              color: 'rgba(255,255,255,0.35)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '2px',
              padding: '3px 7px',
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section
      id="projects"
      style={{
        padding: isMobile ? '4rem 4vw' : '4rem 6vw',
        background: 'transparent',
        position: 'relative',
      }}
    >
      {/* Section header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: isMobile ? '3rem' : '5rem' }}>
        <span style={{ fontFamily: FONT_MONO, fontSize: '0.62rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
          Projects
        </span>
        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr',
          gap: isMobile ? '3rem' : '8vw',
          alignItems: 'start',
          marginBottom: isMobile ? '3rem' : '5rem',
        }}
      >
        {/* LEFT - sticky heading */}
        <div style={{ position: isMobile ? 'relative' : 'sticky', top: isMobile ? '0' : '6rem' }}>
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
              What I've built.
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
            End-to-end systems — from problem to deployed solution.
          </motion.p>
        </div>

        {/* RIGHT - project cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.index} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
