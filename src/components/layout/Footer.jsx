import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <h4 className="fw-bold mb-3">
              KMDB
            </h4>

            <p className="text-white-50 mb-0">
              Graphic designer, product designer and developer
              creating purposeful digital experiences.
            </p>
          </div>

          <div className="col-6 col-lg-3">
            <h6 className="fw-bold mb-3">
              Navigation
            </h6>

            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white-50">
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/about" className="text-white-50">
                  About
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/projects" className="text-white-50">
                  Projects
                </Link>
              </li>

              <li>
                <Link to="/contact" className="text-white-50">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-lg-3">
            <h6 className="fw-bold mb-3">
              Connect
            </h6>

            <div className="d-flex gap-3">
              <a
                href="https://www.linkedin.com/in/chike-jerry-nnamadim?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                className="text-white fs-5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href="https://www.behance.net/chikennamadim"
                className="text-white fs-5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance"
              >
                <i className="bi bi-behance"></i>
              </a>

              <a
                href="https://www.instagram.com/chikekingmaker/"
                className="text-white fs-5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>

              <a
                href="https://github.com/Perfected1"
                className="text-white fs-5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
          <p className="text-white-50 mb-0">
            © {currentYear} KINGMAKER DESIGN & BRANDING. All rights reserved.
          </p>

          <p className="text-white-50 mb-0">
            Designed & built with React.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer