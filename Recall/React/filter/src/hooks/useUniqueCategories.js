export const useUniqueCategories = (data) => {
    return ["all", ...new Set(data.map(item => item.category))];
  };
  