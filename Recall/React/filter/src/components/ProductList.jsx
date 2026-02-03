const ProductList = ({ products }) => {
    return (
      <div>
        {products.map(p => (
          <div key={p.id}>
            <h4>{p.title}</h4>
            <p>₹ {p.price}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductList;
  