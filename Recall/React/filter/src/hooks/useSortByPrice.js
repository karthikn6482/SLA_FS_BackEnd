export const useSortByPrice = (data, order) => {
    if (order === "low-high") {
      return [...data].sort((a, b) => a.price - b.price);
    }
    if (order === "high-low") {
      return [...data].sort((a, b) => b.price - a.price);
    }
    return data;
  };
  