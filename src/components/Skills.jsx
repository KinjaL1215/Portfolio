import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const skillCategories = [
  {
    title: 'DSA & Core CS',
    color: '#2563eb',
    skills: [
      { name: 'Data Structures & Algorithms', level: 85 },
      { name: 'OOP Concepts', level: 85 },
      { name: 'DBMS & SQL', level: 80 },
      { name: 'OS & Computer Networks', level: 78 },
    ],
  },
  {
    title: 'Backend & Databases',
    color: '#4f46e5',
    skills: [
      { name: 'Python / Flask', level: 85 },
      { name: 'Express.js & MongoDB', level: 75 },
      { name: 'REST APIs & SQLAlchemy', level: 82 },
      { name: 'ChromaDB (Vector DB)', level: 78 },
    ],
  },
  {
    title: 'Languages',
    color: '#0284c7',
    skills: [
      { name: 'Python & Java', level: 88 },
      { name: 'C / C++', level: 80 },
      { name: 'JavaScript', level: 82 },
      { name: 'HTML & CSS', level: 85 },
    ],
  },
  {
    title: 'Technologies & Tools',
    color: '#7c3aed',
    skills: [
      { name: 'Machine Learning (OpenCV/MediaPipe)', level: 80 },
      { name: 'AWS Cloud', level: 70 },
      { name: 'Git & GitHub', level: 88 },
      { name: 'VS Code', level: 90 },
    ],
  },
]

function SkillBar({ name, level, color, delay }) {
  const [animated, setAnimated] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setAnimated(true), delay * 80)
      return () => clearTimeout(t)
    }
  }, [inView, delay])

  return (
    <div ref={ref} className="mb-5 font-tech">
      <div className="flex justify-between items-center mb-1.5 text-sm">
        <span className="text-gray-500 dark:text-gray-400 uppercase tracking-widest font-medium">{name}</span>
        <span className="font-bold tracking-widest text-base" style={{ color }}>{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-[1px] relative">
        <motion.div
          initial={{ width: 0 }}
          animate={animated ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="h-full relative"
          style={{
            background: `linear-gradient(90deg, ${color}77, ${color})`,
            boxShadow: `0 0 8px ${color}60`,
          }}
        >
          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-3 bg-white" 
            style={{ boxShadow: `0 0 5px ${color}` }} />
        </motion.div>
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const techStack = [
    'Python', 'Java', 'SQL','Node js', 'Flask', 'Express.js',
    'MongoDB', 'SQLAlchemy', 'ChromaDB', 'Machine Learning', 
    'OpenCV', 'MediaPipe', 'Pandas', 'AWS', 'Git', 'GitHub', 'VS Code', 'DSA'
  ]

  return (
    <section id="skills" className="py-24 lg:py-32 relative bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-200 dark:bg-gray-800" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-gray-500 dark:text-gray-400 tracking-widest uppercase text-xs font-semibold">Expertise</span>
          <h2 className="section-heading mt-2 text-gray-900 dark:text-white">
            MY <span className="text-gradient">SKILLS</span>
          </h2>
          <div className="mt-4 w-16 h-[1px] bg-gray-300 dark:bg-gray-700 mx-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-400 font-tech uppercase text-xs tracking-wider max-w-2xl mx-auto mb-16"
        >
          All the skills I've developed through academic learning, personal projects, and real-world problem solving — with a strong focus on backend & DSA.
        </motion.p>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              className="border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/40 p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-1.5 h-6"
                  style={{ background: category.color, boxShadow: `0 0 8px ${category.color}` }}
                />
                <h3 className="text-gray-900 dark:text-white font-bold tracking-widest text-sm uppercase">{category.title}</h3>
              </div>

              {/* Skill Bars */}
              {category.skills.map((skill, skillIdx) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={category.color}
                  delay={catIdx * 2 + skillIdx}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-gray-900 dark:text-white font-bold tracking-widest text-sm mb-6 uppercase">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.04 }}
                className="px-4 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold text-xs tracking-wider uppercase hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
