import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { projectData } from '../utils/projectData'

type SectionProps = {
  theme: "light" | "dark"
}

const Projects = ({ theme }: SectionProps) => {
  return (
    <div id="projects" className="mx-auto mb-30 px-6 md:px-0 overflow-hidden md:overflow-auto">
      <h2 className={`text-2xl md:text-4xl bg-gradient-to-r ${theme === 'dark'? 'from-blue-500 to-yellow-300' : 'from-blue-500 via-blue-700 to-black'} bg-clip-text text-transparent font-zen-dots text-center mb-8`}>
        Projects
      </h2>
      <div className="projects-container flex flex-col items-center mx-auto space-y-16 w-full">
        {projectData.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            theme={theme}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects