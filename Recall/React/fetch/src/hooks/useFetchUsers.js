import useFetch from "./useFetch";

const useFetchUsers = () => {
  return useFetch("https://jsonplaceholder.typicode.com/users");
};

export default useFetchUsers;
