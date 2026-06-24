import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { skillCategories } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="relative z-[1] py-24 px-[8%] bg-bg-2">
      <div className="max-w-6xl mx-auto">
        <SectionHeader tag="Expertise" title="Tech Stack" accent="Stack" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
            >
              <div className="font-mono text-[11px] tracking-widest text-text-3 uppercase py-2 border-b border-border mb-3">
                {cat.title}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: ci * 0.1 + si * 0.05 }}
                    whileHover={{ y: -4, borderColor: '#1E2D3D' }}
                    className={`skill-card relative overflow-hidden bg-surface border rounded-md px-4 py-5 text-center cursor-default transition-all duration-300 hover:bg-surface-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] ${
                      skill.accent ? 'border-accent/30' : 'border-border'
                    }`}
                  >
                    <div className="skill-card-line" />
                    <span className="text-3xl mb-2.5 block">{skill.icon}</span>
                    <div
                      className={`font-mono text-[11px] tracking-wide ${
                        skill.accent ? 'text-accent' : 'text-text-2'
                      }`}
                    >
                      {skill.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
