import "./App.css";

import Task1ChangeH1 from "./components/Task1ChangeH1";
import Task2BgColor from "./components/Task2BgColor";
import Task3AutoFocus from "./components/Task3AutoFocus";
import Task4UncontrolledForm from "./components/Task4UncontrolledForm";
import Task5RefCounter from "./components/Task5RefCounter";
import Task6GetPText from "./components/Task6GetPText";
import Task7ScrollSingle from "./components/Task7ScrollSingle";
import Task8MultiScroll from "./components/Task8MultiScroll";
import Task9SetInputValue from "./components/Task9SetInputValue";
import Task10PrevValue from "./components/Task10PrevValue";

function App() {
  return (
    <div className="app-container">
      <h1>🚀 React useRef Tasks</h1>

      <div className="task-box">
        <h2>1. Change H1 Text</h2>
        <Task1ChangeH1 />
      </div>

      <div className="task-box">
        <h2>2. Change Background Color</h2>
        <Task2BgColor />
      </div>

      <div className="task-box">
        <h2>3. Auto Focus Input</h2>
        <Task3AutoFocus />
      </div>

      <div className="task-box">
        <h2>4. Uncontrolled Form</h2>
        <Task4UncontrolledForm />
      </div>

      <div className="task-box">
        <h2>5. Counter using useRef</h2>
        <Task5RefCounter />
      </div>

      <div className="task-box">
        <h2>6. Get Paragraph Text</h2>
        <Task6GetPText />
      </div>

      <div className="task-box">
        <h2>7. Scroll to Section</h2>
        <Task7ScrollSingle />
      </div>

      <div className="task-box">
        <h2>8. Multiple Scroll Sections</h2>
        <Task8MultiScroll />
      </div>

      <div className="task-box">
        <h2>9. Set Input Value</h2>
        <Task9SetInputValue />
      </div>

      <div className="task-box">
        <h2>10. Previous Value using useRef</h2>
        <Task10PrevValue />
      </div>
    </div>
  );
}

export default App;
