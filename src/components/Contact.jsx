import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'mdsahilshaikh1506@gmail.com',
    href: 'mailto:mdsahilshaikh1506@gmail.com',
    color: '#f5a623',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91 9313840864',
    href: 'tel:+919313840864',
    color: '#8b5cf6',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Vadodara, Gujarat, India',
    href: 'https://maps.google.com/?q=Vadodara,India',
    color: '#06b6d4',
  },
]

const socials = [
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/mshahil/', label: 'LinkedIn' },
  { icon: FiGithub, href: 'https://github.com/MdShahil13', label: 'GitHub' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/Md_Shahil/', label: 'LeetCode' },
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

    // Construct mailto link
    const subject = encodeURIComponent(form.subject || `Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    const mailtoUrl = `mailto:mdsahilshaikh1506@gmail.com?subject=${subject}&body=${body}`;

    // Open mail client
    window.location.href = mailtoUrl;

    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-[#020816]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-yellow-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-yellow-400 font-medium tracking-widest uppercase text-sm">Get In Touch</span>
          <h2 className="section-heading mt-2 text-white">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <div className="mt-4 w-16 h-1 gold-gradient rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Let's Work{' '}
                <span className="text-gradient">Together</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I'm currently open to internship and entry-level opportunities in backend development,
                full-stack development, or DSA-focused roles. Feel free to reach out — I'd love to connect!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 glass-card p-4 rounded-xl group"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: `${color}20`, border: `1px solid ${color}40` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wide">{label}</p>
                    <p className="text-white text-sm font-medium mt-0.5 break-all">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p className="text-gray-500 text-sm mb-3">Connect on social media:</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-500/40 hover:bg-yellow-500/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-2xl hover:transform-none space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="text-gray-400 text-sm block mb-1.5">
                    Name <span className="text-yellow-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-yellow-500/50 focus:bg-yellow-500/5 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-gray-400 text-sm block mb-1.5">
                    Email <span className="text-yellow-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-yellow-500/50 focus:bg-yellow-500/5 transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="text-gray-400 text-sm block mb-1.5">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-yellow-500/50 focus:bg-yellow-500/5 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-gray-400 text-sm block mb-1.5">
                  Message <span className="text-yellow-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-yellow-500/50 focus:bg-yellow-500/5 transition-all resize-none"
                />
              </div>

              {/* Error */}
              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              {/* Submit */}
              <button
                id="contact-submit"
                type="submit"
                disabled={sending || sent}
                className="w-full btn-primary text-[#020816] font-bold py-4 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#020816]/30 border-t-[#020816] rounded-full animate-spin" />
                    Sending...
                  </>
                ) : sent ? (
                  <>
                    ✓ Message Sent Successfully!
                  </>
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
