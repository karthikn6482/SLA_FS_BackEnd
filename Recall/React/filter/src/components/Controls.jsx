const Controls = ({
    search,
    setSearch,
    category,
    setCategory,
    sort,
    setSort,
    categories
  }) => {
    return (
      <div>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search"
        />
  
        <select value={category} onChange={e => setCategory(e.target.value)}>
          {categories.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
  
        <select value={sort} onChange={e => setSort(e.target.value)}>
          <option value="">Sort</option>
          <option value="low-high">Low to High</option>
          <option value="high-low">High to Low</option>
        </select>
      </div>
    );
  };
  
  export default Controls;
  