import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center min-vh-100">

          <div className="col-lg-8">

            <p className="hero-eyebrow">
              GRAPHIC DESIGNER · PRODUCT DESIGNER · DEVELOPER
            </p>

            <h1 className="hero-title">
              I create digital experiences that
              <span> look good and work well.</span>
            </h1>

            <p className="hero-description">
              I combine design, branding and technology to create
              meaningful visual identities, digital products and
              experiences for businesses and people.
            </p>

            <div className="hero-actions">

              <a
                href="#projects"
                className="btn-primary  btn btn-lg"
              >
                View My Work
              </a>

              <Link
                to="/contact"
                className="btn-outline btn btn-lg"
              >
                Let's Work Together
              </Link>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero