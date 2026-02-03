import { useEffect, useState } from "react";
import { useSearch } from "./hooks/useSearch";
import { useFilterByCategory } from "./hooks/useFilterByCategory";
import { useSortByPrice } from "./hooks/useSortByPrice";
import { useUniqueCategories } from "./hooks/useUniqueCategories";
import Controls from "./components/Controls";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const searched = useSearch(products, search);
  const filtered = useFilterByCategory(searched, category);
  const sorted = useSortByPrice(filtered, sort);
  const categories = useUniqueCategories(products);

  return (
    <div>
      <Controls
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        categories={categories}
      />
      <ProductList products={sorted} />
    </div>
  );
}

export default App;
