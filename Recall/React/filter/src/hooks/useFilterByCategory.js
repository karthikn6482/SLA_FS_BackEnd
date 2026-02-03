export const useFilterByCategory = (data, category) => {
    if (category === "all") return data;
    return data.filter(item => item.category === category);
  };
  