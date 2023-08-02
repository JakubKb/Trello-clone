import "./App.css";
import { useState } from "react";
import profileIcon from "./trello-assets/profile-icon.svg";
import doorIcon from "./trello-assets/door-icon.svg";
import check from "./trello-assets/check.svg";

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
    </div>
  );
}

function TrelloDashboard({ setLoggedIn }) {
  const [boards, setBoards] = useState([]);
  const [input, setInput] = useState();
  const [boardInput, setBoardInput] = useState();

  const addTodo = (boardId, event) => {
    event.preventDefault();

    if (!input) {
      return;
    }

    const newTodo = {
      id: Math.random(),
      todo: input,
    };
    setBoards((prevBoards) => {
      const updatedBoards = prevBoards.map((board) => {
        if (board.boardId === boardId) {
          return {
            ...board,
            lists: [...board.lists, newTodo],
          };
        }
        return board;
      });
      return updatedBoards;
    });

    setInput("");
  };

  const createBoard = () => {
    if (!boardInput) {
      return;
    }

    const newBoard = {
      boardId: Math.random(),
      title: boardInput,
      lists: [],
    };

    setBoards((prevBoards) => [...prevBoards, newBoard]);
    setBoardInput("");
  };

  const deleteTodo = (boardId, id) => {
    setBoards((prevBoards) => {
      const updatedBoards = prevBoards.map((board) => {
        if (board.boardId === boardId) {
          return {
            ...board,
            lists: board.lists.filter((todo) => todo.id !== id),
          };
        }
        return board;
      });
      return updatedBoards;
    });
  };

  const deleteBoard = (boardId) => {
    setBoards((prevBoards) => {
      const updatedBoards = prevBoards.filter(
        (board) => board.boardId !== boardId
      );
      return updatedBoards;
    });
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
        {boards.map((board) => (
          <div className="task-board" key={board.boardId}>
            <div className="board-header">
              <h5 className="board-title">{board.title}</h5>
              <button
                className="board-header-x"
                onClick={() => deleteBoard(board.boardId)}
              >
                {" "}
                X{" "}
              </button>
            </div>
            <div className="task">
              <ul>
                {board.lists.map((todo) => (
                  <li key={todo.id}>
                    {todo.todo}
                    <button
                      className="x-button"
                      onClick={() => deleteTodo(board.boardId, todo.id)}
                    >
                      X
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <form
              onSubmit={(e) => addTodo(board.boardId, e)}
              className="task-add-form"
            >
              <input
                type="text"
                placeholder="Add a new task.."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    addTodo(board.boardId, e);
                  }
                }}
              />
              <button className="task-add-btn">
                <img src={check} alt="check icon" />
              </button>
            </form>
          </div>
        ))}
        <div className="add-a-board">
          <button className="board-btn" onClick={createBoard}>
            Add a new board
          </button>
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
