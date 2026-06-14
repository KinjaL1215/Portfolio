import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiServer, FiCode, FiGitBranch, FiLayout, FiCpu } from 'react-icons/fi'
import { MdOutlineApi } from 'react-icons/md'
import { BiBrain } from 'react-icons/bi'

const services = [
  {
    icon: FiServer,
    title: 'Backend Development',
    color: '#f5a623',
    desc: 'Building robust, scalable server-side applications using Python/Flask and Express.js. Focused on API performance, security, and clean architecture.',
    tags: ['Python', 'Flask', 'Express.js', 'MongoDB'],
  },
  {
    icon: MdOutlineApi,
    title: 'API Development',
    color: '#8b5cf6',
    desc: 'Designing and implementing RESTful APIs that are well-structured, documented, and secure, ensuring smooth frontend or third-party integration.',
    tags: ['REST APIs', 'SQLAlchemy', 'Postman', 'Integration'],
  },
  {
    icon: BiBrain,
    title: 'Problem Solving (DSA)',
    color: '#06b6d4',
    desc: 'Strong algorithmic thinking with expertise in complex data structures, search algorithms, and competitive programming platforms.',
    tags: ['DSA', 'LeetCode', 'CodeChef', 'Optimization'],
  },
  {
    icon: FiLayout,
    title: 'Full Stack Web Dev',
    color: '#10b981',
    desc: 'End-to-end web development. Building interactive user interfaces using React and connecting them with secure backend services.',
    tags: ['React.js', 'Flask', 'Express.js', 'Tailwind CSS'],
  },
  {
    icon: FiCpu,
    title: 'Machine Learning & CV',
    color: '#f43f5e',
    desc: 'Implementing intelligent systems utilizing Computer Vision (OpenCV), face tracking (MediaPipe), audio processing (Librosa), and RAG pipelines.',
    tags: ['OpenCV', 'MediaPipe', 'RAG', 'ChromaDB'],
  },
  {
    icon: FiGitBranch,
    title: 'Cloud & DevOps Tools',
    color: '#f59e0b',
    desc: 'Proficient with Git workflows for team collaboration and deploying backend/frontend projects to cloud environments.',
    tags: ['AWS', 'Git & GitHub', 'CI/CD', 'VS Code'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-[#060d1f]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

      {/* Decorative blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-yellow-400 font-medium tracking-widest uppercase text-sm">What I Offer</span>
          <h2 className="section-heading mt-2 text-white">
            My <span className="text-gradient">Services</span>
          </h2>
          <div className="mt-4 w-16 h-1 gold-gradient rounded-full mx-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-16"
        >
          Areas where I bring value — from designing efficient backend systems
          to building polished full-stack applications.
        </motion.p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl group cursor-default relative overflow-hidden"
              >
                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 rounded-bl-3xl opacity-5 group-hover:opacity-10 transition-opacity"
                  style={{ background: service.color }}
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${service.color}18`, border: `1px solid ${service.color}30` }}
                >
                  <Icon size={26} style={{ color: service.color }} />
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {service.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{
                        background: `${service.color}15`,
                        color: service.color,
                        border: `1px solid ${service.color}25`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
