import SectionTitle from '../components/common/SectionTitle'

function AboutPreview() {
  return (
    <section className="section about-preview">
      <div className="container">
        <div className="row g-5 align-items-start">

          <div className="col-lg-5">
            <SectionTitle
              eyebrow="About Me"
              title="Design with purpose."
            />
          </div>

          <div className="col-lg-7">
            <p className="about-preview-lead">
              I’m a graphic designer, product designer and developer
              focused on creating visual identities and digital
              experiences that are both purposeful and engaging.
            </p>

            <p className="text-secondary">
              My approach combines creative thinking with technology.
              Whether I'm developing a brand identity, designing a
              digital product or building a web experience, I focus on
              understanding the problem first and creating a solution
              that communicates clearly.
            </p>

            <a
              href="/about"
              className="btn-outline-custom mt-3"
            >
              More About Me
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutPreview