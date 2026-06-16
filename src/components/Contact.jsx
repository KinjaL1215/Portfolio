import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'kinjalkharva47@gmail.com',
    href: 'mailto:kinjalkharva47@gmail.com',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91-9104825041',
    href: 'tel:+919104825041',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Vadodara, India',
    href: 'https://maps.google.com/?q=Vadodara,India',
  },
]

const socials = [
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/kinjalkharva/', label: 'LinkedIn' },
  { icon: FiGithub, href: 'https://github.com/kinjalkharva', label: 'GitHub' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/kinjalkharva/', label: 'LeetCode' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('Please fill all required fields.')
      return
    }

    const subject = encodeURIComponent(form.subject || `Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    const mailtoUrl = `mailto:kinjalkharva47@gmail.com?subject=${subject}&body=${body}`

    window.location.href = mailtoUrl
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative bg-white dark:bg-gray-900">
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-200 dark:bg-gray-800" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gray-600 dark:text-gray-400 font-medium text-xs uppercase">Get In Touch</span>
          <h2 className="section-heading mt-2 text-gray-900 dark:text-white">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <div className="mt-4 w-16 h-[1px] bg-gray-300 dark:bg-gray-700 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Connect with <span className="text-gradient">Kinjal</span>
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I am available for backend development, AI system design, and competitive programming collaborations. Send a message to start a technical conversation.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 glass-card p-4 group"
                >
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-medium uppercase">{label}</p>
                    <p className="text-gray-900 dark:text-white text-sm font-medium mt-0.5 break-all">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Connect on technical platforms:</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="glass-card p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-gray-700 dark:text-gray-300 text-sm block mb-2 font-medium">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white text-sm placeholder:text-gray-500 dark:placeholder:text-gray-500 focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 transition-all"
                  />
                </div>
                <div>
                  <label className="text-gray-700 dark:text-gray-300 text-sm block mb-2 font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white text-sm placeholder:text-gray-500 dark:placeholder:text-gray-500 focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-700 dark:text-gray-300 text-sm block mb-2 font-medium">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project or inquiry"
                  className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white text-sm placeholder:text-gray-500 dark:placeholder:text-gray-500 focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 transition-all"
                />
              </div>

              <div>
                <label className="text-gray-700 dark:text-gray-300 text-sm block mb-2 font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white text-sm placeholder:text-gray-500 dark:placeholder:text-gray-500 focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 transition-all resize-none"
                />
              </div>

              {error && (
                <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
              )}

              <button
                id="contact-submit"
                type="submit"
                disabled={sending || sent}
                className="w-full btn-primary font-semibold py-3 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : sent ? (
                  <>✓ Message Ready</>
                ) : (
                  <>
                    <FiSend size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
