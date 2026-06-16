import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import logoImg from '../assets/logo.png'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' },
  ]

  const socials = [
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/kinjalkharva/', label: 'LinkedIn' },
    { icon: FiGithub, href: 'https://github.com/kinjalkharva', label: 'GitHub' },
    { icon: SiLeetcode, href: 'https://leetcode.com/u/kinjalkharva/', label: 'LeetCode' },
  ]

  return (
    <footer className="relative bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-200 dark:bg-gray-800" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gray-900 dark:bg-white flex items-center justify-center shadow-md overflow-hidden">
                <img src={logoImg} alt="KK Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-gray-900 dark:text-white text-xl font-orbitron">
                Kinjal<span className="text-gray-600 dark:text-gray-400">.</span>
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              Computer Science undergraduate focused on Backend systems, Machine Learning, and Competitive Programming.
            </p>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4 font-medium text-base">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-gray-700 dark:text-gray-300 text-base hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4 font-medium text-base">Contact Me

            </h4>
            <div className="space-y-2 text-base text-gray-700 dark:text-gray-300">
              <p>kinjalkharva47@gmail.com</p>
              <p>+91-9104825041</p>
              <p>Vadodara, India</p>
            </div>
            <div className="flex gap-3 mt-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {year} Kinjal Kharva. All rights reserved.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1">
            Made with <FiHeart className="text-red-500" size={14} /> React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
