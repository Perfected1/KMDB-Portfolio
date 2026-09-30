function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-5">
      {eyebrow && (
        <p className="text-uppercase small fw-semibold mb-2">
          {eyebrow}
        </p>
      )}

      <h2 className="display-5 fw-bold mb-3">
        {title}
      </h2>

      {description && (
        <p className="text-secondary mb-0">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionTitle