import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 15
        if (next >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 300)
          return 100
        }
        return next
      })
    }, 80)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[1000] flex flex-col items-center justify-center gap-6"
        style={{ background: '#080C10' }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="font-mono text-2xl font-bold text-accent tracking-widest"
        >
          MAI<span className="text-text-2">.dev</span>
        </motion.div>

        <div className="font-mono text-xs text-accent tracking-[3px] uppercase">
          Initializing...
        </div>

        {/* Progress bar */}
        <div className="w-48 h-[2px] bg-border rounded overflow-hidden">
          <motion.div
            className="h-full bg-accent"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        <div className="font-mono text-xs text-text-3">
          {Math.round(Math.min(progress, 100))}%
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
