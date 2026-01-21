import withShowHide from "../hocs/withShowHide";

function HideBox({ show, toggle }) {
  return (
    <div>
      <button onClick={toggle}>
        {show ? "Hide" : "Show"}
      </button>

      {!show && <h3>I am hidden</h3>}
    </div>
  );
}

export default withShowHide(HideBox);
