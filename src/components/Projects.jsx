import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub, FiChevronDown, FiChevronUp, FiStar, FiGitBranch } from 'react-icons/fi'

const featuredProjects = [
  {
    id: 1,
    title: 'PrivacyGuard AI Financial RAG',
    category: 'AI & Backend',
    description:
      'A privacy-preserving Retrieval-Augmented Generation (RAG) assistant for secure financial documents. Features semantic search, vector storage, and PII masking.',
    tech: ['Python', 'Flask', 'ChromaDB', 'SQLite', 'Pandas'],
    color: '#f5a623',
    featured: true,
    github: 'https://github.com/MdShahil13/PrivacyGuard-AI-Financial-RAG-Assistant',
    live: 'https://github.com/MdShahil13/PrivacyGuard-AI-Financial-RAG-Assistant',
    highlights: [
      'Engineered privacy-preserving secure RAG pipeline',
      'Integrated ChromaDB vector search for precision',
      'Implemented PII detection and masking techniques',
    ],
  },
  {
    id: 2,
    title: 'AI Behavioral Analysis System',
    category: 'Machine Learning',
    description:
      'A real-time behavioral analysis platform evaluating facial expressions, blink rates, and vocal patterns using computer vision and speech processing.',
    tech: ['Python', 'Flask', 'OpenCV', 'MediaPipe', 'Librosa', 'MongoDB', 'WebRTC'],
    color: '#8b5cf6',
    featured: true,
    github: 'https://github.com/MdShahil13/AI-Based-Behavioral-Truth-Analysis',
    live: 'https://github.com/MdShahil13/AI-Based-Behavioral-Truth-Analysis',
    highlights: [
      'Face tracking & blink detection with OpenCV/MediaPipe',
      'Extracted audio features using Librosa processing',
      'Created WebRTC stream pipeline on Flask server',
    ],
  },
  {
    id: 3,
    title: 'CivicEyes Platform',
    category: 'Full Stack',
    description:
      'A web-based application aimed at improving civic engagement and public issue reporting. Enables users to report, track, and resolve community issues.',
    tech: ['React.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Node.js'],
    color: '#06b6d4',
    featured: true,
    github: 'https://github.com/MdShahil13/CivicEyes',
    live: 'https://github.com/MdShahil13/CivicEyes',
    highlights: [
      'Designed mobile-responsive React/Tailwind UI',
      'Developed Node/Express REST APIs with MongoDB',
      'Created multi-role civic engagement workflow',
    ],
  },
]

const allProjects = [
  {
    id: 4,
    title: 'InferIQ',
    category: 'AI & Backend',
    description:
      'An intelligent inference engine built with Python for smart data analysis and question-answering capabilities using AI-powered techniques.',
    tech: ['Python', 'AI/ML', 'NLP'],
    color: '#ec4899',
    github: 'https://github.com/MdShahil13/InferIQ',
    live: 'https://github.com/MdShahil13/InferIQ',
  },
  {
    id: 5,
    title: 'JobFit AI',
    category: 'AI & Backend',
    description:
      'An AI-powered job fitness analyzer that matches candidate profiles with job descriptions using intelligent scoring and recommendation algorithms.',
    tech: ['Python', 'AI/ML', 'NLP', 'Flask'],
    color: '#10b981',
    github: 'https://github.com/MdShahil13/JobFit-AI',
    live: 'https://github.com/MdShahil13/JobFit-AI',
  },

  {
    id: 7,
    title: 'Todo List with Email Reminders',
    category: 'Full Stack',
    description:
      'A Flask-based task management app that automatically sends email notifications via SMTP when scheduled task times arrive.',
    tech: ['Python', 'Flask', 'SMTP', 'HTML/CSS', 'SQLite'],
    color: '#3b82f6',
    github: 'https://github.com/MdShahil13/Todo-List-',
    live: 'https://github.com/MdShahil13/Todo-List-',
  },
  {
    id: 8,
    title: 'Weather App',
    category: 'Frontend',
    description:
      'A responsive weather application that fetches live weather data from an external API and displays temperature and conditions dynamically.',
    tech: ['JavaScript', 'HTML', 'CSS', 'REST API'],
    color: '#0ea5e9',
    github: 'https://github.com/MdShahil13/Weather',
    live: 'https://github.com/MdShahil13/Weather',
  },
  {
    id: 9,
    title: 'MovieExplorer',
    category: 'Frontend',
    description:
      'A movie details web app using JavaScript and OMDb API to fetch and display real-time movie information dynamically with search functionality.',
    tech: ['JavaScript', 'HTML', 'CSS', 'OMDb API'],
    color: '#ef4444',
    github: 'https://github.com/MdShahil13/MovieExplorer',
    live: 'https://github.com/MdShahil13/MovieExplorer',
  },

]

const categories = ['All', 'AI & Backend', 'Full Stack', 'Frontend']

function FeaturedProjectCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="glass-card rounded-2xl overflow-hidden group relative"
    >
      {/* Top colored bar */}
      <div
        className="h-1.5 w-full"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />

      {/* Category Badge */}
      <div className="absolute top-6 right-6">
        <span
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: `${project.color}20`,
            color: project.color,
            border: `1px solid ${project.color}40`,
          }}
        >
          {project.category}
        </span>
      </div>

      <div className="p-7">
        {/* Project number */}
        <div
          className="text-6xl font-black opacity-10 mb-2 select-none"
          style={{ color: project.color }}
        >
          0{project.id}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors pr-20">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Highlights */}
        <ul className="space-y-2 mb-6">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="mt-1 text-yellow-400 flex-shrink-0">▸</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map(t => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-lg font-medium"
              style={{
                background: `${project.color}12`,
                color: project.color,
                border: `1px solid ${project.color}25`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-gray-300 hover:text-white hover:border-white/30 text-sm transition-all duration-200"
          >
            <FiGithub size={15} />
            Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
            style={{
              background: `${project.color}20`,
              color: project.color,
              border: `1px solid ${project.color}40`,
            }}
          >
            <FiExternalLink size={15} />
            Live Demo
          </a>
        </div>
      </div>

      {/* Bottom hover line */}
      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-700"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />
    </motion.div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="glass-card rounded-xl overflow-hidden group relative hover:scale-[1.02] transition-transform duration-300"
    >
      {/* Top colored accent */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}40)` }}
      />

      <div className="p-5">
        {/* Header row */}
        <div className="flex items-start justify-between mb-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
            style={{
              background: `${project.color}15`,
              border: `1px solid ${project.color}30`,
            }}
          >
            <FiGitBranch style={{ color: project.color }} size={18} />
          </div>
          <span
            className="text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider"
            style={{
              background: `${project.color}15`,
              color: project.color,
              border: `1px solid ${project.color}30`,
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map(t => (
            <span
              key={t}
              className="text-[10px] px-2 py-0.5 rounded-md font-medium"
              style={{
                background: `${project.color}10`,
                color: `${project.color}cc`,
                border: `1px solid ${project.color}20`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pt-3 border-t border-white/5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/25 text-xs transition-all duration-200"
          >
            <FiGithub size={12} />
            Source
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300"
            style={{
              background: `${project.color}15`,
              color: project.color,
              border: `1px solid ${project.color}30`,
            }}
          >
            <FiExternalLink size={12} />
            View
          </a>
        </div>
      </div>

      {/* Bottom hover glow */}
      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [showAll, setShowAll] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects =
    activeFilter === 'All'
      ? allProjects
      : allProjects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-[#020816]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-yellow-400 font-medium tracking-widest uppercase text-sm">What I've Built</span>
          <h2 className="section-heading mt-2 text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="mt-4 w-16 h-1 gold-gradient rounded-full mx-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-16"
        >
          A selection of projects that reflect my skills in AI development,
          backend engineering, and full-stack web development.
        </motion.p>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {featuredProjects.map((project, idx) => (
            <FeaturedProjectCard key={project.id} project={project} index={idx} inView={inView} />
          ))}
        </div>

        {/* Divider & Toggle for All Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="flex items-center gap-4 justify-center mb-8">
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-yellow-500/30" />
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 px-6 py-3 rounded-full border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 transition-all duration-300 text-sm font-medium"
            >
              <FiStar size={14} className="group-hover:rotate-72 transition-transform duration-300" />
              {showAll ? 'Show Less' : `View All Projects (${allProjects.length} more)`}
              {showAll ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
            </button>
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-yellow-500/30" />
          </div>
        </motion.div>

        {/* Expandable All Projects Section */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              {/* Category Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border ${
                      activeFilter === cat
                        ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40'
                        : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* More Projects Grid */}
              <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project, idx) => (
                    <ProjectCard key={project.id} project={project} index={idx} />
                  ))}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Want to see more of my work?</p>
          <a
            href="https://github.com/MdShahil13"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-outline"
          >
            <FiGithub size={18} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
