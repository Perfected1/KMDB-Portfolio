import SectionTitle from '../components/common/SectionTitle'
import { testimonials } from '../data/testimonials'

function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="container">

        <SectionTitle
          eyebrow="Testimonials"
          title="What clients say."
          description="A few words from people I've had the opportunity to work with."
        />

        <div className="row g-4">

          {testimonials.map((testimonial) => (
            <div
              className="col-md-6 col-lg-4"
              key={testimonial.id}
            >
              <article className="testimonial-card">

                <i className="bi bi-quote testimonial-icon"></i>

                <p className="testimonial-quote">
                  “{testimonial.quote}”
                </p>

                <div className="testimonial-author">
                  <p className="testimonial-name">
                    {testimonial.name}
                  </p>

                  <p className="testimonial-role">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>

              </article>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Testimonials