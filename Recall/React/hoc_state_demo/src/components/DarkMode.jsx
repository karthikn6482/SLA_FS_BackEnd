import withToggle from "../hocs/withToggle";

function DarkMode({ isOn, toggle }) {
  return (
    <div>
      <button onClick={toggle}>Toggle Dark</button>
      <h3>{isOn ? "Dark Mode" : "Off"}</h3>
    </div>
  );
}

export default withToggle(DarkMode);
