import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-white border-bottom">
      <div className="container">

        <Link
          className="navbar-brand fw-bold"
          to="/"
          onClick={closeMenu}
        >
          KMDB
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="portfolioNavbar"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
          id="portfolioNavbar"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/projects"
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/services"
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>

            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <Link
                className="btn btn-dark px-4"
                to="/contact"
                onClick={closeMenu}
              >
                Contact Me
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar