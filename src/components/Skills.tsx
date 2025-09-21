import { motion } from 'framer-motion'
import { useState } from 'react'
import { Code, Database, BarChart3, PieChart, TrendingUp, Globe, Terminal, Cpu } from 'lucide-react'

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
      icon: Code,
      color: 'bg-yellow-500',
      description: 'Used extensively in SamvaadAI chatbot for backend logic, API integration with Gemini, and data processing. Core language for all my data analysis and web development projects.',
      level: 95
    },
    {
      name: 'SQL',
      icon: Database,
      color: 'bg-blue-500',
      description: 'Essential for database operations and complex queries. Planning to integrate with future projects for data storage and retrieval in web applications.',
      level: 90
    },
    {
      name: 'Flask',
      icon: Globe,
      color: 'bg-green-500',
      description: 'Used to build the web framework for SamvaadAI chatbot. Created RESTful APIs, handled routing, and integrated frontend with backend services.',
      level: 80
    },
    {
      name: 'Pandas',
      icon: BarChart3,
      color: 'bg-purple-500',
      description: 'Powerful library for data manipulation and analysis. Perfect for cleaning datasets, performing data transformations, and preparing data for visualization.',
      level: 90
    },
    {
      name: 'NumPy',
      icon: Cpu,
      color: 'bg-red-500',
      description: 'Foundation for numerical computing in Python. Essential for mathematical operations, array manipulations, and scientific computing tasks.',
      level: 85
    },
    {
      name: 'Matplotlib',
      icon: PieChart,
      color: 'bg-orange-500',
      description: 'Primary plotting library for creating static, animated, and interactive visualizations. Great for generating publication-quality charts and graphs.',
      level: 85
    },
    {
      name: 'Seaborn',
      icon: TrendingUp,
      color: 'bg-teal-500',
      description: 'Statistical data visualization library built on matplotlib. Excellent for creating beautiful and informative statistical graphics with minimal code.',
      level: 85
    },
    {
      name: 'Linux',
      icon: Terminal,
      color: 'bg-gray-600',
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
            Specialized in data analysis, statistical computing, and Python development
          </p>
          <p className="text-sm text-blue-400 animate-pulse">✨ Tap cards to flip and see details ✨</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative h-48 cursor-pointer"
              onClick={() => toggleFlip(index)}
            >
              <div
                className={`absolute inset-0 w-full h-full transition-transform duration-700 preserve-3d ${
                  flippedCards.includes(index) ? 'rotate-y-180' : ''
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front Side */}
                <div className={`absolute inset-0 w-full h-full backface-hidden glass p-6 rounded-2xl ${skill.color} bg-opacity-20 border-2 border-opacity-30`}
                     style={{ borderColor: skill.color.replace('bg-', '').replace('-500', '') }}>
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className={`p-4 rounded-full ${skill.color} mb-4`}>
                      <skill.icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold">{skill.name}</h3>
                  </div>
                </div>

                {/* Back Side */}
                <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 glass p-4 rounded-2xl ${skill.color} bg-opacity-20 border-2 border-opacity-30 flex items-center justify-center overflow-hidden`}
                     style={{ borderColor: skill.color.replace('bg-', '').replace('-500', '') }}>
                  <div className="text-center h-full flex flex-col justify-center">
                    <div className={`p-2 rounded-full ${skill.color} mx-auto mb-2`}>
                      <skill.icon className="text-white" size={20} />
                    </div>
                    <h3 className="text-sm font-bold mb-2">{skill.name}</h3>
                    <p className="text-gray-300 text-xs leading-tight overflow-y-auto max-h-24">{skill.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
