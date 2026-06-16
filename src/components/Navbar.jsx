import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiBriefcase, FiLayers, FiFileText, FiMail, FiSun, FiMoon } from 'react-icons/fi'
import logoImg from '../assets/logo.png'

const navItems = [
  { label: 'Home', href: '#home', icon: FiHome },
  { label: 'About', href: '#about', icon: FiUser },
  { label: 'Skills', href: '#skills', icon: FiCode },
  { label: 'Services', href: '#services', icon: FiBriefcase },
  { label: 'Projects', href: '#projects', icon: FiLayers },
  { label: 'Resume', href: '#resume', icon: FiFileText },
  { label: 'Contact', href: '#contact', icon: FiMail },
]

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  
  // Track button refs to manually animate the underline
  const navRefs = useRef([])
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, opacity: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Check if we are at the bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
        setActiveSection(navItems[navItems.length - 1].href.slice(1))
        return
      }

      const sections = navItems.map(item => item.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          // If the top of the section is near the top of the viewport
          if (rect.top <= 200) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    // Trigger on mount and listen for scroll
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Listen for resize to recalculate positions
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  // Calculate indicator position whenever activeSection changes
  useEffect(() => {
    const activeIndex = navItems.findIndex(item => item.href.slice(1) === activeSection)
    if (activeIndex !== -1 && navRefs.current[activeIndex]) {
      const el = navRefs.current[activeIndex]
      // 12px is half of the w-6 (24px) indicator to center it perfectly
      setIndicatorStyle({
        left: el.offsetLeft + el.offsetWidth / 2 - 12,
        opacity: 1
      })
    }
  }, [activeSection])

  const scrollTo = (href) => {
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -80, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 sm:top-6 left-1/2 w-full sm:w-[90%] max-w-7xl z-50 transition-all duration-500 sm:rounded-2xl border-b sm:border border-gray-200 dark:border-gray-800 ${
        scrolled
          ? 'bg-white/85 dark:bg-gray-900/85 backdrop-blur-2xl shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className={`relative flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
          {/* Logo (Left) */}
          <div className="flex flex-1 justify-start">
            <button
              onClick={() => scrollTo('#home')}
              className="flex items-center gap-2 group focus:outline-none"
            >
              <div 
                className="w-10 h-10 rounded-xl bg-gray-900 dark:bg-white flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg overflow-hidden"
                style={{ boxShadow: '0 0 12px rgba(59, 130, 246, 0.3)' }}
              >
                <img src={logoImg} alt="KK Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-gray-900 dark:text-white text-xl hidden sm:block transition-colors tracking-tight">
                Kinjal<span className="text-gray-400">.</span>
              </span>
            </button>
          </div>

          {/* Desktop Nav (Center) */}
          <div className="relative hidden lg:flex items-center justify-center gap-1 xl:gap-2 flex-none whitespace-nowrap px-2">
            {navItems.map((item, index) => {
              const Icon = item.icon
              const isActive = activeSection === item.href.slice(1)
              return (
                <button
                  key={item.label}
                  ref={el => navRefs.current[index] = el}
                  onClick={() => scrollTo(item.href)}
                  className="relative group px-2 xl:px-3 py-2 focus:outline-none"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-1.5 xl:gap-2 text-sm font-bold transition-colors duration-300 tracking-wide uppercase ${
                      isActive ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    <Icon size={14} className={isActive ? 'text-blue-500' : 'group-hover:text-blue-500 transition-colors'} />
                    {item.label}
                  </motion.div>
                </button>
              )
            })}
            
            {/* Absolute Sliding Indicator */}
            <motion.div
              className="absolute bottom-1 w-6 h-0.5 bg-blue-500 rounded-full pointer-events-none"
              initial={false}
              animate={{ 
                left: indicatorStyle.left,
                opacity: indicatorStyle.opacity 
              }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
            />
          </div>

          {/* CTA & Mobile Toggle (Right) */}
          <div className="flex flex-1 justify-end items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            <div className="hidden sm:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo('#contact')}
                className="btn-primary text-sm px-6 py-2.5 font-bold rounded-xl shadow-md shadow-blue-500/10"
              >
                Hire Me
              </motion.button>
            </div>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-xl text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-white transition-colors focus:outline-none"
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-3xl border-t border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.href.slice(1)
                return (
                  <button
                    key={item.label}
                    onClick={() => scrollTo(item.href)}
                    className={`w-full flex items-center gap-3 px-4 py-3 font-semibold text-sm transition-all tracking-widest uppercase rounded-lg ${
                      isActive
                        ? 'text-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Icon size={16} />
                    {item.label}
                  </button>
                )
              })}
              <button
                onClick={() => scrollTo('#contact')}
                className="w-full mt-4 btn-primary text-xs py-3 text-center sm:hidden"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
