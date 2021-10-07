import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { TaskItem } from "./TaskItem";

function App() {
  const [tasks, setTasks] = useState([
    {
      isCompleted: true,
      name: "Learn React",
    },
    {
      isCompleted: false,
      name: "Learn Hook",
    },
    {
      isCompleted: false,
      name: "Keep on Keeping on",
    },
  ]);

  const handleTaskChange = () => {
    console.log("changed");
  };

  return (
    <main>
      <form>
        <input type="text" placeholder="Task name" />
        <button>Create Task</button>
      </form>

      <ul>
        {tasks.map((task) => {
          return (
            <TaskItem
              isChecked={task.isCompleted}
              taskName={task.name}
              onTaskChange={handleTaskChange}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default App;
