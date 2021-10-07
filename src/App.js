import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <form>
        <input type="text" placeholder="Task name" />
        <button>Create Task</button>
      </form>

      <ul>
        <li>
          <input checked="true" checked="true" type="checkbox" />
          <span>Learn React</span>
        </li>
        <li>
          <input type="checkbox" />
          <span>Learn Hook</span>
        </li>
        <li>
          <input type="checkbox" />
          <span>Keep on Keeping on</span>
        </li>
      </ul>
    </main>
  );
}

export default App;
