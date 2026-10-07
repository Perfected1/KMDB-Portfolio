import { Link, useParams } from 'react-router-dom'

import { projects } from '../data/projects'

function ProjectDetails() {
  const { id } = useParams()

  const project = projects.find(
    (project) => project.id === Number(id)
  )

  if (!project) {
    return (
      <section className="section project-details-page">
        <div className="container">

          <h1 className="display-4 fw-bold mb-3">
            Project Not Found
          </h1>

          <p className="text-secondary mb-4">
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
    <section className="section project-details-page">
      <div className="container">

        <div className="project-details-header">

          <div>
            <p className="text-uppercase small fw-semibold text-secondary mb-3">
              {project.category}
            </p>

            <h1 className="project-details-title">
              {project.title}
            </h1>
          </div>

          <Link
            to="/projects"
            className="project-back-link"
          >
            <i className="bi bi-arrow-left"></i>
            Back to Projects
          </Link>

        </div>

        <div className="project-details-image">
          <img
            src={project.image}
            alt={project.title}
          />
        </div>

        <div className="row g-5 project-details-info">

          <div className="col-lg-7">
            <p className="project-details-description">
              {project.description}
            </p>
          </div>

          <div className="col-lg-5">

            <div className="project-meta">

              <div className="project-meta-item">
                <span>Year</span>
                <strong>{project.year}</strong>
              </div>

              <div className="project-meta-item">
                <span>Services</span>

                <div>
                  {project.services.map((service) => (
                    <strong
                      className="d-block"
                      key={service}
                    >
                      {service}
                    </strong>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default ProjectDetails