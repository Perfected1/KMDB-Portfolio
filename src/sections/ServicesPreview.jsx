import { Link } from 'react-router-dom'

import SectionTitle from '../components/common/SectionTitle'
import { services } from '../data/services'

function ServicesPreview() {
  return (
    <section className="section services-preview">
      <div className="container">

        <div className="row g-5">

          <div className="col-lg-4">
            <SectionTitle
              eyebrow="What I Do"
              title="Services"
              description="Creative and digital solutions built around your goals."
            />

            <Link
              to="/services"
              className="btn-outline-custom"
            >
              Explore Services
            </Link>
          </div>

          <div className="col-lg-8">
            <div className="services-list">

              {services.map((service) => (
                <div
                  className="service-item"
                  key={service.id}
                >
                  <span className="service-number">
                    {service.number}
                  </span>

                  <div>
                    <h3 className="service-title">
                      {service.title}
                    </h3>

                    <p className="service-description">
                      {service.description}
                    </p>
                  </div>

                  <i className="bi bi-arrow-up-right service-icon"></i>
                </div>
              ))}

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ServicesPreview