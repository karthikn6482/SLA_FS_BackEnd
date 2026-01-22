import "./App.css";

import LiveInput from "./components/LiveInput";
import ButtonShow from "./components/ButtonShow";
import AgeCheck from "./components/AgeCheck";
import EvenList from "./components/EvenList";
import OddCheck from "./components/OddCheck";
import NumberArray from "./components/NumberArray";

function App() {
  return (
    <div className="container">
      <h1>State & Form Handling</h1>

      <LiveInput />
      <ButtonShow />
      <AgeCheck />
      <EvenList />
      <OddCheck />
      <NumberArray />
    </div>
  );
}

export default App;
