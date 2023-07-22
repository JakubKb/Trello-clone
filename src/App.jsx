import "./App.css";
import { useState } from "react";
import profileIcon from "./trello-assets/profile-icon.svg";
import doorIcon from "./trello-assets/door-icon.svg";

function LoginScreen({ setLoggedIn }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const checkLogin = () => {
    if (password === "test123" && login === "test11") {
      console.log("Logged in!");
      setLoggedIn(true);
    }
  };

  return (
    <div className="login-screen">
      <h1>Trello list</h1>
      <input
        type="text"
        placeholder="Login"
        className="login-input"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="login-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="sign-in-btn" onClick={checkLogin}>
        Sign in
      </button>
      <div className="info">
        <p>This design was based on </p>
        <a
          target="blank"
          href="https://github.com/bigardone/phoenix-trello/tree/master"
        >
          Phoenix trello
        </a>
      </div>
    </div>
  );
}

function TrelloDashboard({ setLoggedIn }) {
  const [list, setList] = useState([]);
  const [input, setInput] = useState();
  const [board, setBoard] = useState([]);
  const [boardInput, setBoardInput] = useState();

  const addTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Math.random(),
      todo: input,
    };
    setList([...list, newTodo]);

    setInput("");
  };

  const createBoard = (title) => {
    const board = {
      title: title,
      lists: [],
    };
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  const logOff = () => {
    setLoggedIn(false);
  };

  return (
    <div className="dashboard">
      <header>
        <div className="account">
          <img src={profileIcon} alt="Blank profile icon" />
          <p>Test User</p>
        </div>
        <h3>Trello List</h3>

        <button className="sign-out" onClick={() => logOff()}>
          <img src={doorIcon} alt="door icon" />
          Sign out
        </button>
      </header>
      <div className="task-dashboard-wrapper">
        <div className="task-board">
          <h5>Title</h5>
          <div className="task">
            <ul>
              {list.map((todo) => (
                <li key={todo.id}>
                  {todo.todo}

                  <button
                    className="x-button"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <form onSubmit={addTodo}>
            <input
              type="text"
              placeholder="Add a new task.."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addTodo(e);
                }
              }}
            />
          </form>
        </div>
        <div className="add-a-board">
          <button className="board-btn">Add a new board</button>
          <input
            className="title-input"
            type="text"
            value={boardInput}
            placeholder="Add a title..."
            onChange={(e) => setBoardInput(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {loggedIn ? (
        <TrelloDashboard setLoggedIn={setLoggedIn} />
      ) : (
        <LoginScreen setLoggedIn={setLoggedIn} />
      )}
    </>
  );
}

export default App;
