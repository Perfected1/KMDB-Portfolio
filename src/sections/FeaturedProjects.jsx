import { Link } from 'react-router-dom'

import SectionTitle from '../components/common/SectionTitle'
import ProjectGrid from '../components/portfolio/ProjectGrid'
import { projects } from '../data/projects'

function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 4)

  return (
    <section className="section featured-projects" id="projects">
      <div className="container">

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-4 mb-5">

          <SectionTitle
            eyebrow="Selected Work"
            title="A selection of my work."
            description="Brand identity, graphic design and digital experiences."
          />

          <Link
            to="/projects"
            className="btn-outline-custom mb-md-5"
          >
            View All Projects
          </Link>

        </div>

        <ProjectGrid projects={featuredProjects} />

      </div>
    </section>
  )
}

export default FeaturedProjects