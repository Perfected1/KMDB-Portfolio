function ProjectFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="project-filter">
      <button
        type="button"
        className={activeCategory === 'All' ? 'active' : ''}
        onClick={() => onCategoryChange('All')}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          type="button"
          className={activeCategory === category ? 'active' : ''}
          onClick={() => onCategoryChange(category)}
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default ProjectFilter