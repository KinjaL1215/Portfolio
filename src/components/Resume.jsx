import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBook, FiAward, FiCalendar, FiMapPin, FiExternalLink } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'

const education = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'Parul University, Vadodara',
    period: '2023 – 2027',
    grade: 'CGPA: 8.72 / 10.0',
    location: 'Vadodara, India',
    desc: 'Pursuing a Bachelor of Technology in Computer Science with a strong focus on Data Structures, Algorithms, OOP, Database Management, and Machine Learning.',
    highlights: ['DSA & OOP', 'DBMS & Networks', 'Machine Learning', 'Python & Java'],
    color: '#3b82f6',
  },
]

const achievements = [
  {
    role: 'Competitive Programming',
    company: 'LeetCode & CodeChef',
    period: 'Active Solver',
    type: 'Self-paced',
    desc: 'Maintains active algorithmic profiles on LeetCode and CodeChef, focusing on data structures, graphs, dynamic programming, and complexity tuning.',
    highlights: [
      'LeetCode : 330+ solved',
      'CodeChef : 190+ solved',
      'Strong grasp of space-time complexity analysis',
    ],
    color: '#6366f1',
  },
]

const certifications = [
  {
    name: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM SkillsBuild',
    link: 'https://www.credly.com/badges/300b30d2-5dcc-49c7-a26d-e27e0293ac0b/public_url',
    color: '#3b82f6',
  },
  {
    name: 'AI Fundamentals with IBM SkillsBuild',
    issuer: 'Cisco Networking Academy',
    link: 'https://www.credly.com/badges/38020dae-fd77-4fb6-9698-1e89a0ca36ca/public_url',
    color: '#6366f1',
  },
  {
    name: 'AWS Academy Graduate – Cloud Foundations',
    issuer: 'Amazon Web Services Training and Certification',
    link: 'https://www.credly.com/badges/67f597df-73d2-4c78-8e86-3fea1ad66e9a/public_url',
    color: '#8b5cf6',
  },
 
  {
    name: 'Design and Analysis of Algorithms',
    issuer: 'CodeTantra',
    link: 'https://drive.google.com/file/d/1ohVbmdGGWvvp1_LiqO4lszYclgrHsiqB/view?usp=sharing',
    color: '#3b82f6',
  },
  {
    name: 'NPTEL Certification – Computer Networks',
    issuer: 'NPTEL (IIT)',
    link: 'https://drive.google.com/file/d/1rBrE-tuKRluFJogYQDWCxj4mnYV5bb3G/view?usp=sharing',
    color: '#06b6d4',
  },
 {
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    link: 'https://www.credly.com/badges/38020dae-fd77-4fb6-9698-1e89a0ca36ca/public_url',
    color: '#10b981',
  },]

export default function Resume() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="resume" className="py-24 lg:py-32 relative bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-200 dark:bg-gray-800" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gray-500 dark:text-gray-400 tracking-widest uppercase text-xs font-semibold">Qualifications</span>
          <h2 className="section-heading mt-2 text-gray-900 dark:text-white">
            EDUCATION & <span className="text-gradient">ACHIEVEMENTS</span>
          </h2>
          <div className="mt-4 w-16 h-[1px] bg-gray-300 dark:bg-gray-700 mx-auto" />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 text-base font-bold tracking-widest text-gray-900 dark:text-white mb-8 uppercase"
            >
              <FiBook className="text-blue-500" size={18} />
              01 // EDUCATION
            </motion.h3>

            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-[1px] bg-gray-200 dark:bg-gray-800" />
              {education.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  className="relative pl-14"
                >
                  <div
                    className="absolute left-3.5 top-6 w-3 h-3 rounded-full border-2 border-white dark:border-gray-900 z-10"
                    style={{ background: item.color }}
                  />
                  <div className="border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/40 p-6 mb-6">
                    <h4 className="text-gray-900 dark:text-white font-bold tracking-wide text-base uppercase">{item.degree}</h4>
                    <p className="text-sm font-bold mt-1" style={{ color: item.color }}>
                      {item.institution}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 my-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
                      <span className="flex items-center gap-1"><FiCalendar size={11} /> {item.period}</span>
                      <span className="flex items-center gap-1"><FiMapPin size={11} /> {item.location}</span>
                      <span className="px-2 py-0.5 border font-bold" style={{ borderColor: `${item.color}30`, color: item.color, background: `${item.color}10` }}>
                        {item.grade}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed font-sans">{item.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map(h => (
                        <span key={h} className="text-xs px-2.5 py-1 border bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-800 font-bold uppercase">
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
              className="flex items-center gap-3 text-base font-bold tracking-widest text-gray-900 dark:text-white mb-8 uppercase"
            >
              <SiLeetcode className="text-indigo-500" size={18} />
              02 // ACHIEVEMENTS
            </motion.h3>

            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-[1px] bg-gray-200 dark:bg-gray-800" />
              {achievements.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  className="relative pl-14"
                >
                  <div
                    className="absolute left-3.5 top-6 w-3 h-3 rounded-full border-2 border-white dark:border-gray-900 z-10"
                    style={{ background: item.color }}
                  />
                  <div className="border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/40 p-6 mb-6">
                    <h4 className="text-gray-900 dark:text-white font-bold tracking-wide text-base uppercase">{item.role}</h4>
                    <p className="text-sm font-bold mt-1" style={{ color: item.color }}>{item.company}</p>
                    
                    <div className="flex flex-wrap gap-3 my-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
                      <span className="flex items-center gap-1"><FiCalendar size={11} /> {item.period}</span>
                      <span className="flex items-center gap-1"><FiMapPin size={11} /> {item.type}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed font-sans">{item.desc}</p>
                    <ul className="space-y-2 mb-4 font-sans text-sm">
                      {item.highlights.map((h, hi) => (
                        <li key={hi} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                          <span style={{ color: item.color }} className="flex-shrink-0 mt-0.5">▸</span> {h}
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
          <h3 className="flex items-center justify-center gap-3 text-sm font-bold tracking-widest text-gray-900 dark:text-white mb-8 uppercase">
            <FiAward className="text-blue-500" size={18} />
            03 // CERTIFICATIONS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, i) => (
              <motion.a
                key={i}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                whileHover={{ y: -5, borderColor: cert.color }}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.08 }}
                className="border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/40 p-5 flex items-start gap-4 transition-all duration-300 group shadow-sm hover:shadow-md"
              >
                <div
                  className="w-11 h-11 border flex items-center justify-center flex-shrink-0 bg-white dark:bg-gray-900 shadow-sm"
                  style={{ borderColor: `${cert.color}40` }}
                >
                  <FiAward size={20} style={{ color: cert.color }} />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white text-sm font-bold tracking-wide uppercase leading-tight group-hover:text-blue-500 transition-colors flex items-center gap-1.5">
                    {cert.name}
                    <FiExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 text-[11px] font-bold mt-1 uppercase tracking-wider">ISSUER: {cert.issuer}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
