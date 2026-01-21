import withCount from "../hocs/withCount";

function Like({ count, increment }) {
  return (
    <div>
      <h3>Likes: {count}</h3>
      <button onClick={increment}>Like</button>
    </div>
  );
}

export default withCount(Like);
