import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiBriefcase, FiLayers, FiFileText, FiMail } from 'react-icons/fi'
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

export default function Navbar() {
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
      className={`fixed top-0 sm:top-4 left-1/2 w-full sm:w-[95%] max-w-7xl z-50 transition-all duration-500 sm:rounded-2xl ${
        scrolled
          ? 'bg-[#1c1a1f]/70 backdrop-blur-2xl border border-yellow-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
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
              <img
                src={logoImg}
                alt="Mohammad Shahil Logo"
                className="w-10 h-10 rounded-xl object-cover group-hover:scale-110 transition-transform duration-300 shadow-lg"
                style={{ boxShadow: '0 0 12px rgba(149,150,80,0.4)' }}
              />
              <span className="font-bold text-white text-lg hidden sm:block group-hover:text-yellow-400 transition-colors">
                Shahil<span className="text-yellow-400">.</span>
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
                  className="relative group px-2 xl:px-3 py-2 rounded-xl focus:outline-none"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-1.5 xl:gap-2 text-sm font-medium transition-colors duration-300 ${
                      isActive ? 'text-yellow-400' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <Icon size={16} className={isActive ? 'drop-shadow-[0_0_8px_rgba(149,150,80,0.8)]' : 'group-hover:text-yellow-400 transition-colors'} />
                    {item.label}
                  </motion.div>
                </button>
              )
            })}
            
            {/* Absolute Sliding Indicator */}
            <motion.div
              className="absolute bottom-0 w-6 h-1 bg-yellow-400 rounded-full pointer-events-none"
              initial={false}
              animate={{ 
                left: indicatorStyle.left,
                opacity: indicatorStyle.opacity 
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{ boxShadow: '0 0 8px rgba(149,150,80,0.8)' }}
            />
          </div>

          {/* CTA & Mobile Toggle (Right) */}
          <div className="flex flex-1 justify-end items-center gap-4">
            <div className="hidden sm:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo('#contact')}
                className="btn-primary text-sm px-6 py-2.5 rounded-xl font-semibold text-[#111011] shadow-lg shadow-yellow-500/20"
              >
                Hire Me
              </motion.button>
            </div>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-xl text-gray-300 hover:text-yellow-400 hover:bg-white/10 transition-colors focus:outline-none"
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
            className="lg:hidden bg-[#1c1a1f]/95 backdrop-blur-3xl border-t border-yellow-500/10 rounded-b-2xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.href.slice(1)
                return (
                  <button
                    key={item.label}
                    onClick={() => scrollTo(item.href)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                      isActive
                        ? 'text-yellow-400 bg-yellow-400/10'
                        : 'text-gray-300 hover:text-yellow-400 hover:bg-white/5'
                    }`}
                  >
                    <Icon size={18} />
                    {item.label}
                  </button>
                )
              })}
              <button
                onClick={() => scrollTo('#contact')}
                className="w-full mt-4 btn-primary text-sm py-3 rounded-xl text-center text-[#111011] sm:hidden"
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
