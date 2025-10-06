import { motion } from 'framer-motion'
import { useState } from 'react'
import { PieChart, TrendingUp, Terminal, LucideIcon } from 'lucide-react'

export default function Skills() {
  const [flippedCards, setFlippedCards] = useState<number[]>([])

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const skills = [
    {
      name: 'Python',
      iconPath: '/python-svgrepo-com.svg',
      bgColor: 'from-blue-50 to-yellow-50',
      borderColor: 'border-blue-200',
      shadowColor: 'shadow-blue-100',
      description: 'Used extensively in SamvaadAI chatbot for backend logic, API integration with Gemini, and data processing. Core language for all my data analysis and web development projects.',
      level: 95
    },
    {
      name: 'JavaScript',
      iconPath: '/js-official-svgrepo-com.svg',
      bgColor: 'from-yellow-50 to-amber-50',
      borderColor: 'border-yellow-200',
      shadowColor: 'shadow-yellow-100',
      description: 'Dynamic programming language for web development. Used for interactive features, DOM manipulation, and modern ES6+ features.',
      level: 85
    },
    {
      name: 'TypeScript',
      iconPath: '/typescript-svgrepo-com.svg',
      bgColor: 'from-blue-50 to-indigo-50',
      borderColor: 'border-blue-200',
      shadowColor: 'shadow-blue-100',
      description: 'Strongly typed superset of JavaScript. Provides better code quality, error detection, and enhanced development experience for large applications.',
      level: 80
    },
    {
      name: 'HTML',
      iconPath: '/html-5-svgrepo-com.svg',
      bgColor: 'from-orange-50 to-red-50',
      borderColor: 'border-orange-200',
      shadowColor: 'shadow-orange-100',
      description: 'Foundation of web development. Used to structure web pages and create semantic markup for better accessibility and SEO optimization.',
      level: 90
    },
    {
      name: 'Tailwind CSS',
      iconPath: '/tailwind-css-svgrepo-com.svg',
      bgColor: 'from-cyan-50 to-teal-50',
      borderColor: 'border-cyan-200',
      shadowColor: 'shadow-cyan-100',
      description: 'Utility-first CSS framework used in this portfolio. Enables rapid UI development with consistent design system and responsive utilities.',
      level: 90
    },
    {
      name: 'Flask',
      iconPath: '/flask.svg',
      bgColor: 'from-gray-50 to-slate-50',
      borderColor: 'border-gray-200',
      shadowColor: 'shadow-gray-100',
      description: 'Used to build the web framework for SamvaadAI chatbot. Created RESTful APIs, handled routing, and integrated frontend with backend services.',
      level: 80
    },
    {
      name: 'MongoDB',
      iconPath: '/mongo.svg',
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      shadowColor: 'shadow-green-100',
      description: 'NoSQL database for modern applications. Excellent for storing flexible data structures and scaling applications with complex data requirements.',
      level: 75
    },
    {
      name: 'Docker',
      iconPath: '/docker.svg',
      bgColor: 'from-blue-50 to-sky-50',
      borderColor: 'border-blue-200',
      shadowColor: 'shadow-blue-100',
      description: 'Containerization platform for consistent deployment environments. Used for packaging applications and ensuring consistent behavior across different systems.',
      level: 70
    },
    {
      name: 'Pandas',
      iconPath: '/pandas.svg',
      bgColor: 'from-indigo-50 to-purple-50',
      borderColor: 'border-indigo-200',
      shadowColor: 'shadow-indigo-100',
      description: 'Powerful library for data manipulation and analysis. Perfect for cleaning datasets, performing data transformations, and preparing data for visualization.',
      level: 90
    },
    {
      name: 'NumPy',
      iconPath: '/numpy.svg',
      bgColor: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      shadowColor: 'shadow-blue-100',
      description: 'Foundation for numerical computing in Python. Essential for mathematical operations, array manipulations, and scientific computing tasks.',
      level: 85
    },
    {
      name: 'PostgreSQL',
      iconPath: '/postgres.svg',
      bgColor: 'from-blue-50 to-indigo-50',
      borderColor: 'border-blue-200',
      shadowColor: 'shadow-blue-100',
      description: 'Advanced relational database system with powerful features for complex queries, data integrity, and scalability in enterprise applications.',
      level: 80
    },
    {
      name: 'CSS',
      iconPath: '/css.svg',
      bgColor: 'from-blue-50 to-indigo-50',
      borderColor: 'border-blue-200',
      shadowColor: 'shadow-blue-100',
      description: 'Styling language for creating beautiful and responsive web interfaces. Experienced with modern CSS features, animations, and responsive design.',
      level: 85
    },
    {
      name: 'Matplotlib',
      icon: PieChart,
      bgColor: 'from-orange-50 to-amber-50',
      borderColor: 'border-orange-200',
      shadowColor: 'shadow-orange-100',
      description: 'Primary plotting library for creating static, animated, and interactive visualizations. Great for generating publication-quality charts and graphs.',
      level: 85
    },
    {
      name: 'Seaborn',
      icon: TrendingUp,
      bgColor: 'from-teal-50 to-cyan-50',
      borderColor: 'border-teal-200',
      shadowColor: 'shadow-teal-100',
      description: 'Statistical data visualization library built on matplotlib. Excellent for creating beautiful and informative statistical graphics with minimal code.',
      level: 85
    },
    {
      name: 'Linux',
      icon: Terminal,
      bgColor: 'from-gray-50 to-zinc-50',
      borderColor: 'border-gray-200',
      shadowColor: 'shadow-gray-100',
      description: 'Used Linux environment for SamvaadAI development and deployment. Comfortable with command line operations, system administration, and development workflows.',
      level: 75
    }
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Full-stack development skills spanning data analysis, web technologies, and modern development tools
          </p>
          <p className="text-sm text-blue-400 animate-pulse">✨ Tap cards to flip and see details ✨</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon as LucideIcon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1, hover: { duration: 0.15 } }}
                viewport={{ once: true }}
                className="relative h-48 cursor-pointer group"
                onClick={() => toggleFlip(index)}
              >
                <div
                  className={`absolute inset-0 w-full h-full transition-transform duration-700 preserve-3d ${
                    flippedCards.includes(index) ? 'rotate-y-180' : ''
                  }`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front Side */}
                  <div className={`absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br ${skill.bgColor} backdrop-blur-sm border-2 ${skill.borderColor} rounded-2xl p-6 ${skill.shadowColor} shadow-lg group-hover:shadow-xl transition-all duration-150`}>
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl shadow-md">
                        {skill.iconPath ? (
                          <img 
                            src={skill.iconPath} 
                            alt={skill.name}
                            className="w-10 h-10 object-contain"
                          />
                        ) : (
                          <IconComponent className="text-gray-700" size={28} />
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">{skill.name}</h3>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br ${skill.bgColor} backdrop-blur-sm border-2 ${skill.borderColor} rounded-2xl p-4 ${skill.shadowColor} shadow-lg flex items-center justify-center overflow-hidden`}>
                    <div className="text-center h-full flex flex-col justify-center">
                      <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-lg shadow-md">
                        {skill.iconPath ? (
                          <img 
                            src={skill.iconPath} 
                            alt={skill.name}
                            className="w-7 h-7 object-contain"
                          />
                        ) : (
                          <IconComponent className="text-gray-700" size={20} />
                        )}
                      </div>
                      <h3 className="text-sm font-bold mb-2 text-gray-800">{skill.name}</h3>
                      <p className="text-gray-700 text-xs leading-tight overflow-y-auto max-h-24">{skill.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
