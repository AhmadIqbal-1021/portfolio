import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { personal, highlights, niches } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="relative z-[1] py-24 px-[8%]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader tag="Who I Am" title="Building Tools That Actually Work" accent="Actually Work" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {personal.aboutParagraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-base text-text-2 leading-[1.9] mb-5"
                  dangerouslySetInnerHTML={{ __html: p.replace(/<strong>/g, '<strong class="text-text">') }}
                />
              ))}

              {/* Highlights */}
              <div className="flex flex-col gap-4 mt-8">
                {highlights.map((h, i) => (
                  <motion.div
                    key={h.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ x: 4, borderColor: '#00E5FF' }}
                    className="highlight-item flex items-center gap-4 px-5 py-4 bg-surface border border-border rounded cursor-default transition-colors duration-300 hover:bg-surface-2"
                  >
                    <div className="w-9 h-9 rounded bg-accent/[0.08] flex items-center justify-center text-base flex-shrink-0">
                      {h.icon}
                    </div>
                    <div className="font-mono text-[12px] text-text-2">
                      <strong className="text-text block mb-0.5 text-[13px]">
                        {h.title}
                      </strong>
                      {h.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: who hires me */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-20"
          >
            <div className="bg-surface border border-border rounded-lg p-8">
              <div className="font-mono text-[10px] tracking-widest text-accent-3 uppercase mb-5">
                // Who Hires Me
              </div>
              <div className="flex flex-col">
                {niches.map((n, i) => (
                  <div
                    key={n.title}
                    className={`flex items-start gap-3 ${
                      i < niches.length - 1
                        ? 'mb-4 pb-4 border-b border-border'
                        : ''
                    }`}
                  >
                    <div className="text-xl leading-none mt-0.5">{n.icon}</div>
                    <div>
                      <strong className="block text-sm text-text mb-1">
                        {n.title}
                      </strong>
                      <span className="text-[13px] text-text-2">{n.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
