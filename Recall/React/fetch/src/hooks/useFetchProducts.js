import useFetch from "./useFetch";

const useFetchProducts = () => {
  return useFetch("https://fakestoreapi.com/products");
};

export default useFetchProducts;
