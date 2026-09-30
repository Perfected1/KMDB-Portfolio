import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'

function ProjectDetails() {
  const { id } = useParams()

  const project = projects.find(
    (project) => project.id === Number(id)
  )

  if (!project) {
    return (
      <section className="section">
        <div className="container">
          <h1>Project Not Found</h1>

          <p className="text-secondary">
            The project you're looking for doesn't exist.
          </p>

          <Link
            to="/projects"
            className="btn-primary-custom"
          >
            Back to Projects
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="container">

        <p className="text-uppercase small fw-semibold text-secondary">
          {project.category}
        </p>

        <h1 className="display-2 fw-bold mb-4">
          {project.title}
        </h1>

        <div className="row g-5">

          <div className="col-lg-8">
            <img
              src={project.image}
              alt={project.title}
              className="w-100"
            />
          </div>

          <div className="col-lg-4">
            <p className="lead">
              {project.description}
            </p>

            <Link
              to="/projects"
              className="btn-outline-custom mt-3"
            >
              Back to Projects
            </Link>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ProjectDetails