import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCode, FiDatabase, FiCpu, FiTarget } from 'react-icons/fi'
import profilePhoto from '../assets/profile.jpeg'
import resumePDF from '../assets/resume.pdf'

const highlights = [
  { icon: FiCode, label: 'Full Stack', desc: 'Flask, Python' },
  { icon: FiDatabase, label: 'Backend & ML', desc: 'Flask, ChromaDB,SQL, MongoDB' },
  { icon: FiCpu, label: 'DSA Solver', desc: '500+ Problems' },
  { icon: FiTarget, label: 'CGPA Integrity', desc: '8.72 / 10.0' },
]

const infoItems = [
  { label: 'Name', value: 'Kinjal Kharva' },
  { label: 'Email', value: 'kinjalkharva47@gmail.com' },
  { label: 'Phone', value: '+91-9104825041' },
  { label: 'Location', value: 'Vadodara,Gujarat,India' },
  { label: 'Institution', value: 'Parul University' },
  { label: 'Program', value: 'B.Tech CSE (2023–2027)' },
  { label: 'CGPA', value: '8.72 / 10.0' },
  { label: 'Availability', value: 'Open to Opportunities' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="about" className="py-24 lg:py-32 relative bg-gray-50 dark:bg-gray-900">
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-200 dark:bg-gray-800" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gray-600 dark:text-gray-400 font-medium text-sm uppercase">Who I Am</span>
          <h2 className="section-heading mt-2 text-gray-900 dark:text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="mt-4 w-16 h-[1px] bg-gray-300 dark:bg-gray-700 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image + highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative"
          >
            {/* Image */}
            <motion.div variants={itemVariants} className="relative mx-auto lg:mx-0 w-72 sm:w-80">
              <div className="relative border-2 border-gray-300 dark:border-gray-700 p-1 bg-white dark:bg-gray-800">
                <img
                  src={profilePhoto}
                  alt="Kinjal Kharva"
                  className="w-full aspect-[3/4] object-cover object-top"
                />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 px-5 py-3 shadow-lg">
                <div className="text-xl font-bold text-gray-900 dark:text-white">PU CSE</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Expected May 27</div>
              </div>
            </motion.div>

            {/* Highlight cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 mt-10">
              {highlights.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="glass-card p-4 border border-gray-200 dark:border-gray-700 flex items-start gap-3"
                >
                  <div className="w-8 h-8 border border-gray-300 dark:border-gray-600 flex items-center justify-center flex-shrink-0 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
                    <Icon size={14} />
                  </div>
                  <div>
                    <div className="text-gray-900 dark:text-white font-semibold text-sm">{label}</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm mt-0.5">{desc}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-gray-900 dark:text-white">
              Hi There! I'm Kinjal Kharva
            </motion.h3>
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 text-base font-medium mb-5">
              Computer Science Engineer / Backend & ML Developer
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-4 font-sans">
              I'm a Computer Science undergraduate at {' '}
              <span className="text-gray-900 dark:text-white font-semibold">Parul University</span>. with a strong foundation in Data Structures & Algorithms, Object-Oriented Programming, and backend systems engineering.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-8 font-sans">
              My engineering focus is centered around developing secure, AI-integrated software solutions. I enjoy designing backend pipelines
              like secure <strong>RAG systems</strong> that protect sensitive data (PII masking), and implementing computer vision systems
              using OpenCV and MediaPipe. I am also passionate about algorithm optimization, having solved numerous algorithmic problems.
            </motion.p>

            {/* Info Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-800">
              {infoItems.map(({ label, value }) => (
                <div key={label} className="flex items-start gap-2 text-sm">
                  <span className="text-gray-900 dark:text-white">▸</span>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">{label}: </span>
                    <span className="text-gray-900 dark:text-white font-semibold">{value}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="flex gap-4">
              <a
                href={resumePDF}
                download="Kinjal_Kharva_Resume.pdf"
                className="btn-primary"
              >
                Download Resume
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
              >
                Contact Me
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
