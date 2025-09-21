import { motion } from 'framer-motion'
import { Github, MessageCircle, Clock } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'SamvaadAI - Multilingual Chatbot',
      description: 'A Flask-based multilingual chatbot powered by Gemini API, specifically designed to handle NIT Jalandhar queries. Features intelligent conversation handling and multi-language support. 🏆 Selected in NIT Jalandhar SIH 2025 Internal Round.',
      tech: ['Python', 'Flask', 'Gemini API', 'HTML/CSS', 'JavaScript'],
      github: 'https://github.com/adityaseth07/samvaadAI',
      icon: MessageCircle,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'More Projects Coming Soon',
      description: 'Currently working on exciting new data analysis and web development projects. Stay tuned for updates on innovative solutions using Python, Flask, and data visualization.',
      tech: ['Python', 'Data Analysis', 'Flask', 'Machine Learning'],
      icon: Clock,
      gradient: 'from-gray-500 to-gray-700',
      comingSoon: true
    }
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing my work in data analysis, web development, and AI integration
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-2xl group"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} mr-4`}>
                  <project.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {!project.comingSoon && (
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </motion.a>
                </div>
              )}

              {project.comingSoon && (
                <div className="flex items-center text-gray-400">
                  <Clock size={20} className="mr-2" />
                  <span>In Development</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
