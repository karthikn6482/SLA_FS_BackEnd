import withCount from "../hocs/withCount";

function Dislike({ count, decrement }) {
  return (
    <div>
      <h3>Dislikes: {count}</h3>
      <button onClick={decrement}>Dislike</button>
    </div>
  );
}

export default withCount(Dislike);
