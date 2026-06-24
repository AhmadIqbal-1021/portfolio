import { motion } from 'framer-motion'

export default function SectionHeader({ tag, title, accent }) {
  // title can be a string; accent portions wrapped in <span>
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-tag font-mono text-[11px] tracking-[3px] text-accent uppercase mb-4"
      >
        {tag}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-tight mb-14 leading-[1.1]"
        dangerouslySetInnerHTML={{
          __html: title.replace(
            accent,
            `<span class="text-accent">${accent}</span>`
          ),
        }}
      />
    </div>
  )
}
