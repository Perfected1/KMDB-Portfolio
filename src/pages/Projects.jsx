import { useMemo, useState } from 'react'

import SectionTitle from '../components/common/SectionTitle'
import ProjectFilter from '../components/portfolio/ProjectFilter'
import ProjectGrid from '../components/portfolio/ProjectGrid'
import { projects } from '../data/projects'

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = [
    ...new Set(projects.map((project) => project.category)),
  ]

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projects
    }

    return projects.filter(
      (project) => project.category === activeCategory
    )
  }, [activeCategory])

  return (
    <section className="section projects-page">
      <div className="container">

        <SectionTitle
          eyebrow="Portfolio"
          title="Selected work."
          description="A collection of branding, graphic design and digital projects."
        />

        <ProjectFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <ProjectGrid projects={filteredProjects} />

      </div>
    </section>
  )
}

export default Projects