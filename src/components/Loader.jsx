import { motion } from 'framer-motion'
import logoImg from '../assets/logo.png'

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div 
            className="w-20 h-20 rounded-2xl bg-gray-900 dark:bg-white flex items-center justify-center mx-auto shadow-2xl overflow-hidden"
          >
            <img src={logoImg} alt="KK Logo" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="loader-ring" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-widest font-medium"
        >
          <div className="mb-1 text-center">Initializing</div>
          <div className="mb-1 text-center">Loading Assets</div>
          <div className="text-center">Welcome</div>
        </motion.div>
      </div>
    </motion.div>
  )
}
