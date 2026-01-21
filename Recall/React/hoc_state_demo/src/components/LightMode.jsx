import withToggle from "../hocs/withToggle";

function LightMode({ isOn, toggle }) {
  return (
    <div>
      <button onClick={toggle}>Toggle Light</button>
      <h3>{isOn ? "Light Mode" : "Off"}</h3>
    </div>
  );
}

export default withToggle(LightMode);
