import { motion } from 'framer-motion'
import logoImg from '../assets/logo.png'

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#111011]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo / Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <img
            src={logoImg}
            alt="Darshan Patel"
            className="w-20 h-20 rounded-2xl object-cover mx-auto"
            style={{ boxShadow: '0 0 30px rgba(149,150,80,0.4)' }}
          />
        </motion.div>

        {/* Spinner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="loader-ring" />
        </motion.div>

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          className="text-yellow-400/70 text-sm font-medium tracking-widest uppercase"
        >
          Loading Portfolio...
        </motion.p>
      </div>
    </motion.div>
  )
}
