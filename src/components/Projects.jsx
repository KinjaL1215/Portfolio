import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub, FiCode } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'PrivacyGuard AI Financial RAG',
    category: 'AI & Backend',
    description:
      'A privacy-preserving Retrieval-Augmented Generation (RAG) assistant for secure financial documents. Features semantic search, vector storage, and PII masking.',
    tech: ['Python', 'Flask', 'ChromaDB', 'SQLite', 'Pandas'],
    color: '#3b82f6',
    github: 'https://github.com/kinjalkharva/PrivacyGuard-AI-Financial-RAG-Assistant',
    demo: '#',
    highlights: [
      'Engineered privacy-preserving secure RAG pipeline',
      'Integrated ChromaDB vector search for precision',
      'Implemented PII detection and masking techniques',
    ],
  },
  {
    id: 2,
    title: 'AI Behavioral Analysis System',
    category: 'AI & Backend',
    description:
      'A real-time behavioral analysis platform evaluating facial expressions, blink rates, and vocal patterns using computer vision and speech processing.',
    tech: ['Python', 'Flask', 'OpenCV', 'MediaPipe', 'Librosa', 'MongoDB', 'WebRTC'],
    color: '#6366f1',
    github: 'https://github.com/kinjalkharva/AI-Based-Behavioral-Truth-Analysis',
    demo: '#',
    highlights: [
      'Face tracking & blink detection with OpenCV/MediaPipe',
      'Extracted audio features using Librosa processing',
      'Created WebRTC stream pipeline on Flask server',
    ],
  },
   {
    id: 3,
    title: 'Gesture-Controlled Virtual Mouse',
    category: 'AI & Backend',
    description:
      'A Windows-based Python application that uses a webcam to control the mouse with hand gestures, featuring an AI assistant named Proton.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'Eel', 'PyAutoGUI'],
    color: '#8b5cf6',
    github: 'https://github.com/KinjaL1215/Gesture-Controlled-Virtual-Mouse',
    demo: '#',
    highlights: [
      'Hand gesture mouse control (Click, Drag, Scroll)',
      'Proton voice assistant for desktop commands',
      'Interactive Desktop UI built using the Eel framework',
    ],
  },
  {
    id: 4,
    title: 'Todo List with Email Reminders',
    category: 'Full Stack',
    description:
      'A Flask-based task management app that automatically sends email notifications via SMTP when scheduled task times arrive.',
    tech: ['Python', 'Flask', 'SMTP', 'HTML/CSS', 'SQLite'],
    color: '#10b981',
    github: 'https://github.com/KinjaL1215/Todo_app.git',
    demo: 'https://taskflow-5b7b.onrender.com/',
    highlights: ['Automated SMTP email reminders', 'Task scheduling'],
  },
  {
    id: 5,
    title: 'Weather App',
    category: 'Frontend',
    description:
      'A responsive weather application that fetches live weather data from an external API and displays temperature and conditions dynamically.',
    tech: ['JavaScript', 'HTML', 'CSS', 'REST API'],
    color: '#f59e0b',
    github: 'https://github.com/KinjaL1215/Weather.git',
    demo: 'https://weather-kinjal.vercel.app',
    highlights: ['Live API data fetching', 'Dynamic UI updates'],
  },
  {
    id: 6,
    title: 'MovieExplorer',
    category: 'Frontend',
    description:
      'A movie details web app using JavaScript and OMDb API to fetch and display real-time movie information dynamically with search functionality.',
    tech: ['JavaScript', 'HTML', 'CSS', 'OMDb API'],
    color: '#ef4444',
    github: 'https://github.com/KinjaL1215/MovieExplorer.git',
    demo: 'https://movie-explorer-kinjal.vercel.app',
    highlights: ['OMDb API integration', 'Real-time search'],
  },
  
]

function ProjectCard({ project, index, inView }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
      className="border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-800/40 backdrop-blur-sm p-8 flex flex-col justify-between group hover:border-blue-200 dark:hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl rounded-2xl shadow-sm"
    >
      <div>
        {/* Top bar with category & status */}
        <div className="flex justify-between items-center mb-6 text-xs font-bold uppercase tracking-widest">
          <span
            className="px-2 py-1 border"
            style={{
              background: `${project.color}15`,
              color: project.color,
              borderColor: `${project.color}20`,
            }}
          >
            {project.category}
          </span>
          <span className="text-gray-400 dark:text-gray-500">0{project.id}</span>
        </div>

        {/* Project Title */}
        <h3 className="text-gray-900 dark:text-white font-bold text-xl mb-4 uppercase transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 font-sans">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mb-6 space-y-2">
          <span className="text-gray-500 dark:text-gray-500 text-xs font-bold uppercase tracking-widest block mb-2">Key Highlights:</span>
          {project.highlights.map((h, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300 font-sans">
              <span style={{ color: project.color }} className="mt-0.5">▸</span>
              <span>{h}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2.5 py-1 border bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-800 font-bold uppercase rounded-md"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-6 pt-5 border-t border-gray-200 dark:border-gray-800 text-sm font-bold uppercase tracking-wider">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FiGithub size={14} />
            <span>Code</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FiExternalLink size={14} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'AI & Backend', 'Full Stack', 'Frontend']

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-24 lg:py-32 relative bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-200 dark:bg-gray-800" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-gray-500 dark:text-gray-400 tracking-widest uppercase text-xs font-semibold">Portfolio</span>
          <h2 className="section-heading mt-2 text-gray-900 dark:text-white">
             <span className="text-gradient">FEATURED PROJECTS</span>
          </h2>
          <div className="mt-4 w-16 h-[1px] bg-gray-300 dark:bg-gray-700 mx-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 dark:text-gray-400 font-medium uppercase text-sm tracking-wider max-w-2xl mx-auto mb-12"
        >
         A selection of projects that reflect my skills in AI development, backend engineering, and full-stack web development.
        </motion.p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 border rounded-full ${
                filter === cat
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-gray-900 dark:border-white shadow-lg shadow-gray-200 dark:shadow-none'
                  : 'text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                inView={inView}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center border-t border-gray-100 dark:border-gray-800 pt-16"
        >
          <p className="text-gray-700 dark:text-gray-300 text-xl font-medium mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com/KinjaL1215"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3 px-8 py-3"
          >
            <FiGithub size={20} />
            <span>View All on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
