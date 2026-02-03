import useFetchProducts from "../hooks/useFetchProducts";

const Products = () => {
  const { data, loading, error } = useFetchProducts();

  if (loading) return <h3>Loading products...</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <div>
      <h2>Products</h2>
      {data.map(p => (
        <div key={p.id}>
          <h4>{p.title}</h4>
          <p>₹ {p.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
