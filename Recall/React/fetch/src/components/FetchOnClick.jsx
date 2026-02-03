import useFetchOnClick from "../hooks/useFetchOnClick";

const FetchOnClick = () => {
  const { data, loading, error, refetch } =
    useFetchOnClick("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      <button onClick={refetch}>Fetch Posts</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {data.slice(0, 5).map(post => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

export default FetchOnClick;
