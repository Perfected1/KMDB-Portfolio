import SectionTitle from '../components/common/SectionTitle'

function About() {
  return (
    <>
      <section className="section about-page">
        <div className="container">

          <div className="row g-5">

            <div className="col-lg-5">
              <SectionTitle
                eyebrow="About Me"
                title="Designing with purpose and intention."
                description="A multidisciplinary creative working across design, technology and visual communication."
              />
            </div>

            <div className="col-lg-7">

              <p className="lead mb-4">
                I’m a graphic designer, product designer and developer
                interested in solving problems through thoughtful design
                and technology.
              </p>

              <p className="text-secondary mb-4">
                My work sits at the intersection of creativity and
                technology. I enjoy transforming ideas into visual
                identities, digital products and web experiences that
                communicate clearly and serve a purpose.
              </p>

              <p className="text-secondary mb-4">
                From developing a brand identity to designing a digital
                product or building a responsive website, I approach
                each project by first understanding the problem,
                audience and objective.
              </p>

              <p className="text-secondary mb-0">
                I’m continuously learning, experimenting with new tools
                and improving my understanding of how design and
                technology can work together to create meaningful
                experiences.
              </p>

            </div>

          </div>

        </div>
      </section>

      <section className="section about-focus">
        <div className="container">

          <SectionTitle
            eyebrow="What I Value"
            title="How I approach my work."
          />

          <div className="row g-4">

            <div className="col-md-4">
              <div className="about-focus-item">
                <span className="about-focus-number">01</span>

                <h3>Clarity</h3>

                <p>
                  Good design should communicate an idea clearly
                  without unnecessary complexity.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="about-focus-item">
                <span className="about-focus-number">02</span>

                <h3>Purpose</h3>

                <p>
                  Every design decision should contribute to the
                  problem being solved and the goal being achieved.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="about-focus-item">
                <span className="about-focus-number">03</span>

                <h3>Growth</h3>

                <p>
                  I believe in continuous learning, experimentation
                  and improving through every project.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default About