export const useSearch = (data, text) => {
    return data.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
  };
  