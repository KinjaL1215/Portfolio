import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiServer, FiCode, FiGitBranch, FiLayout, FiCpu } from 'react-icons/fi'
import { MdOutlineApi } from 'react-icons/md'
import { BiBrain } from 'react-icons/bi'

const services = [
  {
    icon: FiServer,
    title: 'Backend Development',
    color: '#3b82f6',
    desc: 'Building robust, scalable server-side applications using Python/Flask and Express.js. Focused on API performance, security, and clean architecture.',
    tags: ['Python', 'Flask', 'Express.js', 'MongoDB'],
  },
  {
    icon: MdOutlineApi,
    title: 'API Development',
    color: '#6366f1',
    desc: 'Designing and implementing RESTful APIs that are well-structured, documented, and secure, ensuring smooth frontend or third-party integration.',
    tags: ['REST APIs', 'SQLAlchemy', 'Postman', 'Integration'],
  },
  {
    icon: BiBrain,
    title: 'Problem Solving (DSA)',
    color: '#8b5cf6',
    desc: 'Strong algorithmic thinking with expertise in complex data structures, search algorithms, and competitive programming platforms.',
    tags: ['DSA', 'LeetCode', 'CodeChef', 'Optimization'],
  },
  {
    icon: FiLayout,
    title: 'Full Stack Web Dev',
    color: '#ec4899',
    desc: 'End-to-end web development. Building interactive user interfaces using React and connecting them with secure backend services.',
    tags: ['React.js', 'Flask', 'Express.js', 'Tailwind CSS'],
  },
  {
    icon: FiCpu,
    title: 'Machine Learning & CV',
    color: '#06b6d4',
    desc: 'Implementing intelligent systems utilizing Computer Vision (OpenCV), face tracking (MediaPipe), audio processing (Librosa), and RAG pipelines.',
    tags: ['OpenCV', 'MediaPipe', 'RAG', 'ChromaDB'],
  },
  {
    icon: FiGitBranch,
    title: 'Cloud & DevOps Tools',
    color: '#10b981',
    desc: 'Proficient with Git workflows for team collaboration and deploying backend/frontend projects to cloud environments.',
    tags: ['AWS', 'Git & GitHub', 'VS Code'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="py-24 lg:py-32 relative bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-200 dark:bg-gray-800" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-gray-500 dark:text-gray-400 tracking-widest uppercase text-xs font-semibold">What I Offer</span>
          <h2 className="section-heading mt-2 text-gray-900 dark:text-white">
            MY <span className="text-gradient">SERVICES</span>
          </h2>
          <div className="mt-4 w-16 h-[1px] bg-gray-300 dark:bg-gray-700 mx-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 dark:text-gray-400 font-medium uppercase text-sm tracking-wider max-w-2xl mx-auto mb-16"
        >
          Functional solutions and technical expertise designed to execute complex software requirements.
        </motion.p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-800/40 backdrop-blur-sm p-8 group cursor-default relative overflow-hidden transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-500/30 hover:shadow-2xl rounded-2xl"
              >
                {/* Corner accent */}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none" style={{ background: service.color }} />

                {/* Icon */}
                <div
                  className="w-14 h-14 border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-inner"
                  style={{ borderColor: `${service.color}20` }}
                >
                  <Icon size={24} style={{ color: service.color }} />
                </div>

                {/* Title */}
                <h3 className="text-gray-900 dark:text-white font-bold text-base tracking-wide uppercase mb-4 transition-colors">
                  {service.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 font-sans">
                  {service.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 border font-bold tracking-wider rounded"
                      style={{
                        background: `${service.color}10`,
                        color: service.color,
                        borderColor: `${service.color}25`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
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
