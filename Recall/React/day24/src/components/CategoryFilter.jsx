function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
    return (
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="dropdown"
      >
        <option value="">Select Category</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    );
  }
  
  export default CategoryFilter;
  