import { Link } from 'react-router-dom'

function ContactCTA() {
  return (
    <section className="section contact-cta">
      <div className="container">
        <div className="contact-cta-content">

          <p className="text-uppercase small fw-semibold mb-3">
            Have a project in mind?
          </p>

          <h2 className="contact-cta-title">
            Let’s create something meaningful.
          </h2>

          <p className="contact-cta-description">
            Whether you need a brand identity, digital product,
            website or creative design, let's talk about your idea.
          </p>

          <Link
            to="/contact"
            className="btn btn-light px-4 py-3"
          >
            Start a Conversation
            <i className="bi bi-arrow-up-right ms-2"></i>
          </Link>

        </div>
      </div>
    </section>
  )
}

export default ContactCTA