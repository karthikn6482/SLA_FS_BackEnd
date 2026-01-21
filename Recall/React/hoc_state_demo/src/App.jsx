import Like from "./components/Like";
import Dislike from "./components/Dislike";
import ShowBox from "./components/ShowBox";
import LightMode from "./components/LightMode";
import DarkMode from "./components/DarkMode";
import EvenOdd from "./components/EvenOdd";
import PositiveNegative from "./components/PositiveNegative";
import OnOff from "./components/OnOff";
import Voting from "./components/Voting";
import PasswordToggle from "./components/PasswordToggle";
import SquareCube from "./components/SquareCube";
import CharCounter from "./components/CharCounter";
import PassFail from "./components/PassFail";
import ColorToggle from "./components/ColorToggle";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>HOC & useState Tasks</h1>

      <hr />
      <Like />
      <Dislike />

      <hr />
      <ShowBox />

      <hr />
      <LightMode />
      <DarkMode />

      <hr />
      <EvenOdd />

      <hr />
      <PositiveNegative />

      <hr />
      <OnOff />

      <hr />
      <Voting />

      <hr />
      <PasswordToggle />

      <hr />
      <SquareCube />

      <hr />
      <CharCounter />

      <hr />
      <PassFail />

      <hr />
      <ColorToggle />
    </div>
  );
}

export default App;
