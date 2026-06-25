import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowRight } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="relative z-[1] py-24 px-[8%]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader tag="Work" title="Featured Projects" accent="Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Project Card ──────────────────────────────────────────────────────────────
function ProjectCard({ project, index }) {
  const isFeatured = project.featured

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6, borderColor: '#00E5FF' }}
      className={`project-card bg-surface border border-border rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(0,229,255,0.1)] hover:border-accent ${
        isFeatured ? 'col-span-1 md:col-span-2' : ''
      }`}
    >
      {/* ── Thumbnail ──────────────────────────────────────────────────── */}
      <div
        className={`relative overflow-hidden bg-surface-2 ${
          isFeatured ? 'h-60' : 'h-48'
        }`}
      >
        {/* Large icon bg */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-8xl opacity-[0.07] pointer-events-none select-none"
          whileHover={{ scale: 1.1, opacity: 0.12 }}
          transition={{ duration: 0.4 }}
        >
          {project.icon}
        </motion.div>

        {/* Code snippet overlay */}
        <pre className="thumb-code">{project.thumbCode}</pre>

        {/* Number badge */}
        <div className="absolute top-4 left-4 font-mono text-[11px] text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-sm">
          {project.number}
          {project.label && ` — ${project.label}`}
        </div>
      </div>

      {/* ── Body ───────────────────────────────────────────────────────── */}
      <div className="p-7">
        <h3
          className={`font-bold text-text mb-2.5 ${
            isFeatured ? 'text-2xl' : 'text-xl'
          }`}
        >
          {project.title}
        </h3>

        <p className="text-sm text-text-2 leading-[1.7] mb-5">
          {project.desc}
        </p>

        {/* Features list */}
        <ul className="list-none mb-5">
          {project.features.map((f) => (
            <li
              key={f}
              className="font-mono text-[11px] text-text-2 py-1 border-b border-border flex items-center gap-2"
            >
              <ArrowRight size={11} className="text-accent flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] px-2.5 py-1 bg-accent-2/10 border border-accent-2/20 text-accent-2 rounded-sm tracking-wide"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wide px-4 py-2 border border-border-2 text-text-2 rounded-sm uppercase transition-all duration-200 hover:border-text-2 hover:text-text"
          >
            <Github size={13} /> GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wide px-4 py-2 border border-accent/30 text-accent rounded-sm uppercase transition-all duration-200 hover:bg-accent hover:text-bg"
          >
            <ExternalLink size={13} /> Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}
