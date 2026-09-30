function Skills() {
  const skills = [
    'Brand Identity',
    'Graphic Design',
    'UI/UX Design',
    'Product Design',
    'Web Development',
    'React.js',
    'JavaScript',
    'Figma',
    'Adobe Creative Suite',
    'AI Creative Tools',
  ]

  return (
    <section className="section skills-section">
      <div className="container">

        <div className="row g-5 align-items-start">

          <div className="col-lg-4">
            <p className="text-uppercase small fw-semibold text-secondary mb-2">
              Capabilities
            </p>

            <h2 className="display-5 fw-bold mb-0">
              Creative thinking meets technology.
            </h2>
          </div>

          <div className="col-lg-8">
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div
                  className="skill-item"
                  key={skill}
                >
                  <span className="skill-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="skill-name">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Skills