import SectionTitle from '../components/common/SectionTitle'
import { services } from '../data/services'

function Services() {
  return (
    <section className="section services-page">
      <div className="container">

        <SectionTitle
          eyebrow="Services"
          title="Design and digital solutions."
          description="A range of creative and digital services tailored to help ideas, businesses and products communicate clearly."
        />

        <div className="services-page-list">

          {services.map((service) => (
            <article
              className="services-page-item"
              key={service.id}
            >
              <span className="services-page-number">
                {service.number}
              </span>

              <div className="services-page-content">
                <h2>
                  {service.title}
                </h2>

                <p>
                  {service.description}
                </p>
              </div>

              <i className="bi bi-arrow-up-right"></i>
            </article>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Services