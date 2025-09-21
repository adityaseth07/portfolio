import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.95)']
  )

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'h-14' : 'h-20'
        }`}>
          {/* Logo */}
          <motion.a
            href="#home"
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={`relative transition-all duration-500 ${
              scrolled ? 'w-8 h-8' : 'w-10 h-10'
            }`}>
              <img 
                src="/letter-a.png" 
                alt="Aditya Seth Logo"
                className="w-full h-full object-contain filter brightness-0 invert opacity-90 group-hover:opacity-100 transition-all duration-300"
                style={{
                  filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(200deg) brightness(1.2)'
                }}
              />
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur-md"
                initial={false}
                transition={{ duration: 0.3 }}
              />
              {/* Border glow */}
              <motion.div
                className="absolute inset-0 border border-blue-400/30 rounded-full opacity-0 group-hover:opacity-100"
                initial={false}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={`relative z-10 font-medium transition-all duration-300 ${
                  scrolled ? 'text-sm' : 'text-base'
                }`}>
                  {item.name}
                </span>
                
                {/* Hover background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Hover border */}
                <motion.div
                  className="absolute inset-0 border border-blue-400/30 rounded-full opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Active dot */}
                <motion.div
                  className="absolute -bottom-1 left-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                  initial={false}
                  animate={{ x: '-50%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <X size={scrolled ? 20 : 24} />
                ) : (
                  <Menu size={scrolled ? 20 : 24} />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
      >
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block relative group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isOpen ? 1 : 0, 
                x: isOpen ? 0 : -20 
              }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 10 }}
            >
              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                <motion.div
                  className="w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <span className="text-gray-300 group-hover:text-white font-medium">
                  {item.name}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}
