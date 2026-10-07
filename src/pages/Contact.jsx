import SectionTitle from '../components/common/SectionTitle'

function Contact() {
  return (
    <section className="section contact-page">
      <div className="container">

        <div className="row g-5">

          <div className="col-lg-5">

            <SectionTitle
              eyebrow="Contact"
              title="Let's work together."
              description="Have a project, idea or opportunity you'd like to discuss? Send me a message and let's talk."
            />

            <div className="contact-details">

              <div className="contact-detail">
                <span>Email</span>
                <a href="mailto:chikennamadim65@gmail.com">
                  KMDB
                </a>
              </div>

              <div className="contact-detail">
                <span>Location</span>
                <p>Lagos, Nigeria</p>
              </div>

              <div className="contact-detail">
                <span>Availability</span>
                <p>Available for selected projects</p>
              </div>

            </div>

          </div>

          <div className="col-lg-7">

            <form className="contact-form">

              <div className="row g-4">

                <div className="col-md-6">
                  <label htmlFor="name">
                    Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email">
                    Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="chikennamadim65@gmail.com"
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="project">
                    Project Type
                  </label>

                  <select
                    id="project"
                    name="project"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="brand-identity">
                      Brand Identity
                    </option>

                    <option value="graphic-design">
                      Graphic Design
                    </option>

                    <option value="product-design">
                      Product Design
                    </option>

                    <option value="web-development">
                      Web Development
                    </option>

                    <option value="other">
                      Other
                    </option>
                  </select>
                </div>

                <div className="col-12">
                  <label htmlFor="message">
                    Tell me about your project
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="7"
                    placeholder="Tell me a little about your project, goals and timeline..."
                  ></textarea>
                </div>

                <div className="col-12">
                  <button
                    type="submit"
                    className="btn-primary-custom btn btn-lg"
                  >
                    Send Enquiry
                    <i className="bi bi-arrow-up-right ms-2"></i>
                  </button>
                </div>

              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact