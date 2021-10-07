import logo from './logo.svg';
import './App.css';
import { TaskItem } from "./TaskItem";

function App() {
  return (
    <main>
      <form>
        <input type="text" placeholder="Task name" />
        <button>Create Task</button>
      </form>

      <ul>
        <TaskItem isChecked={true} taskName="Learn React" />
        <TaskItem isChecked={false} taskName="Learn Hook" />
        <TaskItem isChecked={false} taskName="Keep on Keeping on" />
      </ul>
    </main>
  );
}

export default App;
