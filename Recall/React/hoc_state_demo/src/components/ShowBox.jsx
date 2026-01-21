import withShowHide from "../hocs/withShowHide";

function ShowBox({ show, toggle }) {
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {show && <h3>I am visible</h3>}
    </div>
  );
}

export default withShowHide(ShowBox);
