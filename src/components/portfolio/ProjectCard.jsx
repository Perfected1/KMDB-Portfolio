import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
  return (
    <article className="project-card">

      <Link to={`/projects/${project.id}`} className="project-card-image">
        <img
          src={project.image}
          alt={project.title}
        />
      </Link>

      <div className="project-card-content">

        <p className="project-card-category">
          {project.category}
        </p>

        <h3 className="project-card-title">
          <Link to={`/projects/${project.id}`}>
            {project.title}
          </Link>
        </h3>

        <p className="project-card-description">
          {project.description}
        </p>

        <Link
          to={`/projects/${project.id}`}
          className="project-card-link"
        >
          View Project
          <i className="bi bi-arrow-up-right"></i>
        </Link>

      </div>

    </article>
  )
}

export default ProjectCard