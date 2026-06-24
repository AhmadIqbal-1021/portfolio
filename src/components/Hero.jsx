import { motion } from 'framer-motion'
import { ArrowRight, Mail, Download } from 'lucide-react'
import { personal, stats } from '../data/portfolio'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-[8%] z-[1]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full max-w-6xl mx-auto">

        {/* ── Left ─────────────────────────────────────────────────────── */}
        <div>
          {/* Available badge */}
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-accent bg-accent/[0.06] border border-accent/20 px-4 py-1.5 rounded-sm mb-8 uppercase"
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"
              style={{ animation: 'pulse-dot 2s infinite' }}
            />
            Available for Projects
          </motion.div>

          {/* Name */}
          <motion.h1
            {...fadeUp(0.1)}
            className="text-[clamp(40px,5vw,72px)] font-extrabold leading-[1.05] tracking-tight mb-2"
          >
            <div className="text-text">{personal.firstName}</div>
            <div className="text-accent">{personal.lastName}</div>
          </motion.h1>

          {/* Role */}
          <motion.p
            {...fadeUp(0.2)}
            className="font-mono text-sm text-text-2 mb-6 tracking-wide"
          >
            {personal.role} &amp;{' '}
            <span className="text-accent-2">{personal.roleTagline}</span>
          </motion.p>

          {/* Bio */}
          <motion.p
            {...fadeUp(0.3)}
            className="text-base text-text-2 max-w-xl mb-10 leading-relaxed"
          >
            I build{' '}
            <strong className="text-text">Chrome Extensions</strong>,{' '}
            <strong className="text-text">web scrapers</strong>, and{' '}
            <strong className="text-text">full-stack apps</strong> that automate
            what slows your business down. From eCommerce data extraction to
            AI-powered tools — I ship production-grade software.
          </motion.p>

          {/* ── CTAs ───────────────────────────────────────────────────── */}
          <motion.div
            {...fadeUp(0.4)}
            className="flex gap-3 flex-wrap mb-12"
          >
            {/* View My Work */}
            <button
              onClick={() => scrollTo('#projects')}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-bg font-mono text-xs tracking-widest uppercase font-bold rounded-sm border border-accent transition-all duration-200 hover:bg-transparent hover:text-accent cursor-pointer"
            >
              <ArrowRight size={14} /> View My Work
            </button>

            {/* Hire Me */}
            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-text font-mono text-xs tracking-widest uppercase border border-border-2 rounded-sm transition-all duration-200 hover:border-accent hover:text-accent cursor-pointer"
            >
              <Mail size={14} /> Hire Me
            </button>

            {/* Download CV */}
            <a
              href="/cv.pdf"
              download="Muhammad_Ahmad_Iqbal_CV.pdf"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-bg font-mono text-xs tracking-widest uppercase font-bold rounded-sm border border-accent transition-all duration-200 hover:bg-transparent hover:text-accent cursor-pointer"
            >
              <Download size={14} /> Download CV
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.5)} className="flex gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-accent leading-none">
                  {s.num}
                </div>
                <div className="font-mono text-[10px] text-text-3 tracking-wide mt-1 uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right — Terminal ─────────────────────────────────────────── */}
        <motion.div
          {...fadeRight(0.3)}
          className="hidden lg:flex justify-center"
        >
          <Terminal />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span className="font-mono text-[10px] text-text-3 tracking-widest uppercase">
          Scroll
        </span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}

// ── Terminal widget ───────────────────────────────────────────────────────────
function Terminal() {
  return (
    <div className="bg-surface border border-border rounded-lg overflow-hidden w-full max-w-[460px] shadow-[0_0_60px_rgba(0,0,0,0.5)]">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-surface-2 border-b border-border">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        <span className="font-mono text-[11px] text-text-3 ml-2">
          ahmad@portfolio:~
        </span>
      </div>

      {/* Terminal body */}
      <div className="p-5 font-mono text-[12px] leading-loose">
        <TermLine cmd="whoami" />
        <TermOut color="accent">Muhammad Ahmad Iqbal</TermOut>

        <TermLine cmd="cat skills.json" mt />
        <TermOut>{`{`}</TermOut>
        <TermOut>
          &nbsp;&nbsp;&quot;frontend&quot;:{' '}
          <span className="text-accent-2">&quot;React, HTML, CSS&quot;</span>,
        </TermOut>
        <TermOut>
          &nbsp;&nbsp;&quot;backend&quot;:{' '}
          <span className="text-accent-2">&quot;Node.js, Express&quot;</span>,
        </TermOut>
        <TermOut>
          &nbsp;&nbsp;&quot;databases&quot;:{' '}
          <span className="text-accent-2">&quot;MongoDB, MySQL&quot;</span>,
        </TermOut>
        <TermOut>
          &nbsp;&nbsp;&quot;specialty&quot;:{' '}
          <span className="text-accent-3">&quot;Chrome Extensions, AI&quot;</span>
        </TermOut>
        <TermOut>{`}`}</TermOut>

        <TermLine cmd="status" mt />
        <TermOut color="accent">
          ● Open for freelance work{' '}
          <span className="term-cursor" />
        </TermOut>
      </div>
    </div>
  )
}

function TermLine({ cmd, mt = false }) {
  return (
    <div className={`flex gap-2 ${mt ? 'mt-2' : ''}`}>
      <span className="text-accent">$</span>
      <span className="text-text">{cmd}</span>
    </div>
  )
}

function TermOut({ children, color }) {
  const colorClass =
    color === 'accent'
      ? 'text-accent'
      : color === 'accent3'
      ? 'text-accent-3'
      : 'text-text-2'
  return <div className={`pl-4 ${colorClass}`}>{children}</div>
}
