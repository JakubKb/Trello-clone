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

function TrelloDashboard() {
  return (
    <div className="dashboard">
      <header>
        <div className="account">
          <img src={profileIcon} alt="Blank profile icon" />
          <p>Test User</p>
        </div>
        <h3>Trello List</h3>

        <button className="sign-out">
          <img src={doorIcon} alt="door icon" />
          Sign out
        </button>
      </header>
    </div>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {loggedIn ? (
        <TrelloDashboard />
      ) : (
        <LoginScreen setLoggedIn={setLoggedIn} />
      )}
    </>
  );
}

export default App;
