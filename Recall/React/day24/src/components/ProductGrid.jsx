function ProductGrid({ products }) {
    if (products.length === 0) {
      return <h2 className="empty">No products available in this category</h2>;
    }
  
    return (
      <div className="grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>₹ {product.price}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default ProductGrid;
  