import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'
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
