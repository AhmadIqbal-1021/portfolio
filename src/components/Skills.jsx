import { motion } from 'framer-motion'
import {
  Atom,          // React
  Globe,         // HTML5
  Paintbrush,    // CSS3
  SquareCode,    // JavaScript
  Server,        // Node.js
  Train,         // Express.js
        // PHP — no elephant in lucide, use FileCode
  Link,          // REST APIs
  Leaf,          // MongoDB
  Database,      // MySQL
  GitBranch,     // Git
  Bot,           // Gemini API
  Puzzle,        // Chrome Extension
         // Web Scraping — no spider, use Bug
  FileDown,      // CSV Export
  SearchCode,    // SEO Tools
  FileCode,      // PHP fallback
  Bug,           // Web Scraping fallback
} from 'lucide-react'
import SectionHeader from './SectionHeader'

// ── Skill categories with Lucide icons ───────────────────────────────────────
const skillCategories = [
  {
    title: '// Frontend',
    skills: [
      { icon: <Atom size={26} />,       name: 'React' },
      { icon: <Globe size={26} />,      name: 'HTML5' },
      { icon: <Paintbrush size={26} />, name: 'CSS3' },
      { icon: <SquareCode size={26} />, name: 'JavaScript' },
    ],
  },
  {
    title: '// Backend',
    skills: [
      { icon: <Server size={26} />,   name: 'Node.js' },
      { icon: <Train size={26} />,    name: 'Express.js' },
      { icon: <FileCode size={26} />, name: 'PHP' },
      { icon: <Link size={26} />,     name: 'REST APIs' },
    ],
  },
  {
    title: '// Databases & Tools',
    skills: [
      { icon: <Leaf size={26} />,      name: 'MongoDB' },
      { icon: <Database size={26} />,  name: 'MySQL' },
      { icon: <GitBranch size={26} />, name: 'Git' },
      { icon: <Bot size={26} />,       name: 'Gemini API' },
    ],
  },
  {
    title: '// Specialty',
    skills: [
      { icon: <Puzzle size={26} />,    name: 'Chrome Ext' },
      { icon: <Bug size={26} />,       name: 'Web Scraping'  },
      { icon: <FileDown size={26} />,  name: 'CSV Export' },
      { icon: <SearchCode size={26} />, name: 'SEO Tools' },
    ],
  },
]

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
              {/* Category title */}
              <div className="font-mono text-[11px] tracking-widest text-text-3 uppercase py-2 border-b border-border mb-3">
                {cat.title}
              </div>

              {/* Skill cards grid */}
              <div className="grid grid-cols-2 gap-3">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: ci * 0.1 + si * 0.05 }}
                    whileHover={{ y: -4 }}
                    className={`skill-card relative overflow-hidden bg-surface border rounded-md px-4 py-5 text-center cursor-default transition-all duration-300 hover:bg-surface-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] ${
                      skill.accent ? 'border-accent/30' : 'border-border'
                    }`}
                  >
                    {/* Top shimmer line on hover */}
                    <div className="skill-card-line" />

                    {/* Icon */}
                    <div
                      className={`flex justify-center mb-2.5 ${
                        skill.accent ? 'text-accent' : 'text-text-2'
                      }`}
                    >
                      {skill.icon}
                    </div>

                    {/* Name */}
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
