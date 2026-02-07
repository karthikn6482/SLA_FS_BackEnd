import "./App.css"
import Task1 from "./tasks/Task1/Search"
import Task2 from "./tasks/Task2/ScrollPage"
import Task3 from "./tasks/Task3/Form"
import Task4 from "./tasks/Task4/Controller"
import Task5 from "./tasks/Task5/Todo"
import Task6 from "./tasks/Task6/Settings"

export default function App() {
  return (
    <div className="app">
      <div className="task"><Task1 /></div>
      <div className="task"><Task2 /></div>
      <div className="task"><Task3 /></div>
      <div className="task"><Task4 /></div>
      <div className="task"><Task5 /></div>
      <div className="task"><Task6 /></div>
    </div>
  )
}
