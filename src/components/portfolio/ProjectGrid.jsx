import ProjectCard from './ProjectCard'

function ProjectGrid({ projects }) {
  return (
    <div className="row g-4">
      {projects.map((project) => (
        <div
          className="col-md-6"
          key={project.id}
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  )
}

export default ProjectGrid