import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { navLinks } from '../data/portfolio'
import { useScrollSpy } from '../hooks/useScrollSpy'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const sectionIds = navLinks.map((l) => l.href.replace('#', ''))
  const activeSection = useScrollSpy(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] px-[5%] h-16 flex items-center justify-between glass transition-all duration-300 ${
        scrolled ? 'border-b border-border' : 'border-b border-transparent'
      }`}
    >
      {/* Logo */}
      <div className="font-mono text-sm text-accent tracking-widest">
        MAI<span className="text-text-2">.dev</span>
      </div>

      {/* Nav links */}
      <ul className="hidden md:flex gap-8 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <button
              onClick={() => scrollTo(link.href)}
              className={`nav-link bg-transparent border-0 cursor-pointer ${
                activeSection === link.href.replace('#', '') ? 'active' : ''
              }`}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={() => scrollTo('#contact')}
        className="font-mono text-[11px] tracking-widest py-2 px-5 border border-accent text-accent bg-transparent uppercase rounded-sm transition-all duration-200 hover:bg-accent hover:text-bg cursor-pointer"
      >
        Hire Me
      </button>
    </motion.nav>
  )
}
