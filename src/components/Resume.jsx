import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBook, FiBriefcase, FiAward, FiCalendar, FiMapPin } from 'react-icons/fi'

const education = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'Parul University, Vadodara',
    period: '2023 – 2027',
    grade: 'CGPA: 8.60 / 10.0',
    location: 'Vadodara, India',
    desc: 'Pursuing a Bachelor of Technology in Computer Science with a strong focus on Data Structures, Algorithms, OOP, Database Management, and Machine Learning.',
    highlights: ['DSA & OOP', 'DBMS & Networks', 'Machine Learning', 'Python & Java'],
    color: '#f5a623',
  },
]

const achievements = [
  {
    role: 'Competitive Programming',
    company: 'LeetCode & CodeChef',
    period: 'Active Solver',
    type: 'Self-paced',
    desc: 'Solved over 500 coding problems across various online platforms, specializing in dynamic programming, graphs, and search algorithms.',
    highlights: [
      'LeetCode Rating: 1463 (330+ solved)',
      'CodeChef DSA Rating: 1336 (190+ solved)',
      'Strong grasp of space-time complexity analysis',
    ],
    color: '#8b5cf6',
  },
  {
    role: 'Environmental Hackathon Participant',
    company: 'Selected among Top 17 Teams',
    period: '2025',
    type: 'Team Collaboration',
    desc: 'Designed and presented a tech-driven ecological solution, finishing in the top tier of competitive entries.',
    highlights: [
      'Engineered an innovative environmental tracking prototype',
      'Collaborated in a team of developers under tight deadlines',
      'Awarded participation and excellence certificates',
    ],
    color: '#10b981',
  },
]

const certifications = [
  {
    name: 'NPTEL – Computer Networks & Protocols',
    issuer: 'NPTEL (IIT)',
    color: '#06b6d4',
  },
  {
    name: 'Environmental Hackathon Excellence Certificate',
    issuer: 'Hackathon Organizing Committee',
    color: '#10b981',
  },
]

function TimelineItem({ item, isLeft, index, inView, type }) {
  const Icon = type === 'education' ? FiBook : FiBriefcase

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className={`relative flex ${isLeft ? 'justify-end md:pr-12' : 'justify-start md:pl-12'} mb-10`}
    >
      {/* Dot on timeline */}
      <div
        className="absolute top-6 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-[#020816] z-10 hidden md:block"
        style={{ background: item.color, boxShadow: `0 0 12px ${item.color}60` }}
      />

      <div className={`w-full md:w-[calc(50%-2rem)] glass-card p-6 rounded-2xl group`}>
        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${item.color}20`, border: `1px solid ${item.color}40` }}
          >
            <Icon size={18} style={{ color: item.color }} />
          </div>
          <div>
            <h3 className="text-white font-bold text-base leading-tight">
              {item.degree || item.role}
            </h3>
            <p className="font-semibold text-sm mt-0.5" style={{ color: item.color }}>
              {item.institution || item.company}
            </p>
          </div>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-3 mb-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <FiCalendar size={12} />
            {item.period}
          </span>
          {(item.location || item.type) && (
            <span className="flex items-center gap-1">
              <FiMapPin size={12} />
              {item.location || item.type}
            </span>
          )}
          {item.grade && (
            <span
              className="px-2 py-0.5 rounded-full font-medium"
              style={{ background: `${item.color}20`, color: item.color }}
            >
              {item.grade}
            </span>
          )}
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.desc}</p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2">
          {item.highlights.map(h => (
            <span
              key={h}
              className="text-xs px-2.5 py-1 rounded-lg"
              style={{
                background: `${item.color}12`,
                color: item.color,
                border: `1px solid ${item.color}25`,
              }}
            >
              {h}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Resume() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="resume" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-[#060d1f]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-yellow-400 font-medium tracking-widest uppercase text-sm">My Background</span>
          <h2 className="section-heading mt-2 text-white">
            Education & <span className="text-gradient">Experience</span>
          </h2>
          <div className="mt-4 w-16 h-1 gold-gradient rounded-full mx-auto" />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 text-xl font-bold text-white mb-8"
            >
              <FiBook className="text-yellow-400" size={22} />
              Education
            </motion.h3>

            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 timeline-line opacity-30" />
              {education.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  className="relative pl-14"
                >
                  <div
                    className="absolute left-3.5 top-6 w-4 h-4 rounded-full border-2 border-[#060d1f]"
                    style={{ background: item.color, boxShadow: `0 0 10px ${item.color}60` }}
                  />
                  <div className="glass-card p-6 rounded-2xl mb-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div>
                        <h4 className="text-white font-bold text-base">{item.degree}</h4>
                        <p className="font-semibold text-sm mt-1" style={{ color: item.color }}>
                          {item.institution}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><FiCalendar size={11} /> {item.period}</span>
                      <span className="flex items-center gap-1"><FiMapPin size={11} /> {item.location}</span>
                      <span className="px-2 py-0.5 rounded-full font-medium" style={{ background: `${item.color}20`, color: item.color }}>
                        {item.grade}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{item.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map(h => (
                        <span key={h} className="text-xs px-2.5 py-1 rounded-lg"
                          style={{ background: `${item.color}12`, color: item.color, border: `1px solid ${item.color}25` }}>
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 text-xl font-bold text-white mb-8"
            >
              <FiAward className="text-yellow-400" size={22} />
              Achievements
            </motion.h3>

            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 timeline-line opacity-30" />
              {achievements.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  className="relative pl-14"
                >
                  <div
                    className="absolute left-3.5 top-6 w-4 h-4 rounded-full border-2 border-[#060d1f]"
                    style={{ background: item.color, boxShadow: `0 0 10px ${item.color}60` }}
                  />
                  <div className="glass-card p-6 rounded-2xl mb-6">
                    <h4 className="text-white font-bold text-base">{item.role}</h4>
                    <p className="font-semibold text-sm mt-1 mb-3" style={{ color: item.color }}>{item.company}</p>
                    <div className="flex flex-wrap gap-3 mb-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><FiCalendar size={11} /> {item.period}</span>
                      <span className="flex items-center gap-1"><FiMapPin size={11} /> {item.type}</span>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {item.highlights.map((h, hi) => (
                        <li key={hi} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-yellow-400 flex-shrink-0 mt-0.5">▸</span> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="flex items-center justify-center gap-3 text-xl font-bold text-white mb-8">
            <FiAward className="text-yellow-400" size={22} />
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="glass-card p-5 rounded-xl flex items-start gap-3"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${cert.color}20`, border: `1px solid ${cert.color}40` }}
                >
                  <FiAward size={18} style={{ color: cert.color }} />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{cert.name}</p>
                  <p className="text-gray-500 text-xs mt-1">{cert.issuer}</p>
                  {cert.detail && (
                    <p className="text-xs mt-1 font-medium" style={{ color: cert.color }}>{cert.detail}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
