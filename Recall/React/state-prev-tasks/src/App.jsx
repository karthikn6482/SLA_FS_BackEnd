import "./App.css";

import CounterBatch from "./components/CounterBatch";
import ObjectImmutable from "./components/ObjectImmutable";
import MultiInputForm from "./components/MultiInputForm";
import ValidationForm from "./components/ValidationForm";
import ConditionalUI from "./components/ConditionalUI";
import PrevCounter from "./components/PrevCounter";
import TogglePrev from "./components/TogglePrev";
import ArrayPrev from "./components/ArrayPrev";
import BatchUpdate from "./components/BatchUpdate";
import SubmitCounter from "./components/SubmitCounter";

function App() {
  return (
    <div className="app">
      <h1 className="center">React State & Prev State Tasks</h1>

      <div className="app-sections">
        <CounterBatch />
        <ObjectImmutable />
        <MultiInputForm />
        <ValidationForm />
        <ConditionalUI />

        <PrevCounter />
        <TogglePrev />
        <ArrayPrev />
        <BatchUpdate />
        <SubmitCounter />
      </div>
    </div>
  );
}

export default App;
