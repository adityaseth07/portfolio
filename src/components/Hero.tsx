import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Spider Web Background */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Radial web lines */}
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45) * (Math.PI / 180)
            const x2 = 50 + 45 * Math.cos(angle)
            const y2 = 50 + 45 * Math.sin(angle)
            return (
              <motion.line
                key={`radial-${i}`}
                x1="50"
                y1="50"
                x2={x2}
                y2={y2}
                stroke="#e5e7eb"
                strokeWidth="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.2 }}
              />
            )
          })}
          
          {/* Concentric circles */}
          {[15, 25, 35, 45].map((radius, i) => (
            <motion.circle
              key={`circle-${i}`}
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="#d1d5db"
              strokeWidth="0.2"
              initial={{ pathLength: 0, rotate: 0 }}
              animate={{ pathLength: 1, rotate: 360 }}
              transition={{ 
                pathLength: { duration: 1.5, delay: i * 0.3 },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
            />
          ))}
          
          {/* Connection points */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) * (Math.PI / 180)
            const radius = 20 + (i % 3) * 10
            const x = 50 + radius * Math.cos(angle)
            const y = 50 + radius * Math.sin(angle)
            return (
              <motion.circle
                key={`dot-${i}`}
                cx={x}
                cy={y}
                r="0.4"
                fill="#f9fafb"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 0] }}
                transition={{ 
                  duration: 2, 
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              />
            )
          })}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-white font-medium">Hi, I'm </span>
            <br className="md:hidden" />
            <span className="gradient-text font-black text-5xl md:text-7xl lg:text-8xl">Aditya Seth</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Data Analyst & Python Developer
            <br />
            Turning data into actionable insights with Python, SQL & Statistics
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {[
              { icon: Github, href: 'https://github.com/adityaseth07', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/adityaseth007', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:adityaseth2203@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass rounded-full hover:bg-blue-600/20 transition-colors"
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 glass hover:bg-white/10 rounded-lg font-semibold transition-colors"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Arrow positioned at bottom of section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
