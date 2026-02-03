import useFetch from "./useFetch";

const useFetchOnClick = (url) => {
  return useFetch(url, false);
};

export default useFetchOnClick;
