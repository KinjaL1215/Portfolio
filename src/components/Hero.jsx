import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'
import { SiLeetcode, SiCodeforces } from 'react-icons/si'
import profilePhoto from '../assets/profile.jpeg'

const TYPING_TEXTS = [
  'Machine Learning Enthusiast',
  'DSA Solver(500+ solve)',
  'Full Stack Developer',
  'Backend Engineer',
]

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = TYPING_TEXTS[textIndex]
    let timeout

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(c => c + 1), 80)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(c => c - 1), 45)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setTextIndex(i => (i + 1) % TYPING_TEXTS.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, textIndex])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-900">
      {/* Dynamic Decorative Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-[100px] -z-10" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 20, 0] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -left-20 w-96 h-96 bg-indigo-400/10 dark:bg-indigo-500/5 rounded-full blur-[100px] -z-10" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          {/* Left Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 rounded-full text-gray-700 dark:text-gray-300 text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Status: Available
            </motion.div>

            {/* Title */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight mb-4">
              Hi, I'm <span className="text-gradient">Kinjal Kharva</span>
            </motion.h1>

            {/* Dynamic typing */}
            <motion.div variants={itemVariants} className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 font-medium mb-6 h-8">
              <span className="text-gray-900 dark:text-white font-semibold">{TYPING_TEXTS[textIndex].slice(0, charIndex)}</span>
              <span className="cursor">_</span>
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-1 max-w-xl font-sans">
              Computer Science undergraduate skilled in Backend Development, Machine Learning, and DSA, with a passion for building secure, AI-driven applications.{' '}
             
            </motion.p>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
              <button
                id="hero-portfolio-btn"
                onClick={() => scrollTo('projects')}
                className="btn-primary rounded-xl px-8 py-3 shadow-lg shadow-blue-500/20"
              >
                View My Portfolio
              </button>
              <button
                id="hero-contact-btn"
                onClick={() => scrollTo('contact')}
                className="btn-outline rounded-xl px-8 py-3"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-5">
              <span className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase">Links:</span>
              {[
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/kinjal1215/', label: 'LinkedIn' },
                { icon: FiGithub, href: 'https://github.com/KinjaL1215', label: 'GitHub' },
                { icon: SiLeetcode, href: 'https://leetcode.com/u/kinjal_kharva/', label: 'LeetCode' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-white hover:border-blue-200 dark:hover:border-gray-600 transition-all duration-300 shadow-sm"
                >
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex gap-8 mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
              {[
                { label: 'CGPA', value: '8.72' },
                { label: 'PROJECTS', value: '06' },
                { label: 'DSA SOLVED', value: '500+' },
              ].map(({ label, value }) => (
                <div key={label} className="text-left">
                  <div className="text-sm text-gray-500 dark:text-gray-500 font-medium mb-1">{label}</div>
                  <div className="text-xl font-bold text-gray-900 dark:text-white">{value}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-2xl -z-10" />
              {/* Profile Image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 border-4 border-white dark:border-gray-800 rounded-full overflow-hidden shadow-2xl bg-white dark:bg-gray-800 transition-transform duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent z-10 pointer-events-none opacity-40" />
                <img
                  src={profilePhoto}
                  alt="Kinjal Kharva - Computer Science Student"
                  className="w-full h-full object-cover object-top"
                />
              </div>

            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        <span className="text-sm font-medium uppercase">Scroll Down</span>
        <FiArrowDown size={16} />
      </motion.button>
    </section>
  )
}
