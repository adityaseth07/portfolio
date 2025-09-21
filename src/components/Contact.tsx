import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle, Send, Heart } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'adityaseth2203@gmail.com',
      href: 'mailto:adityaseth2203@gmail.com',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-500/10'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9465263180',
      href: 'tel:+919465263180',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Jalandhar, Punjab',
      href: 'https://maps.google.com/?q=NIT+Jalandhar',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10'
    }
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="inline-block mb-4"
          >
            <MessageCircle className="w-16 h-16 text-blue-400" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on your next data project? Let's chat!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.href}
              target={info.title === 'Location' ? '_blank' : '_self'}
              rel={info.title === 'Location' ? 'noopener noreferrer' : ''}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className={`group relative overflow-hidden rounded-2xl p-8 text-center ${info.bgColor} backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`inline-flex p-4 rounded-full bg-gradient-to-br ${info.color} mb-4 shadow-lg`}
              >
                <info.icon className="text-white" size={32} />
              </motion.div>
              
              <h3 className="text-xl font-bold mb-2 text-white">{info.title}</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                {info.value}
              </p>
              
              {/* Hover effect arrow */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute top-4 right-4"
              >
                <Send className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </motion.div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="glass p-6 rounded-2xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-red-400 mr-2" />
              <span className="text-lg text-gray-300">Always excited to discuss new opportunities</span>
            </div>
            <p className="text-gray-400">
              Whether it's data analysis, web development, or just a friendly chat about technology - 
              I'm just one click away!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
