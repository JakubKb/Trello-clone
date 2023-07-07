import "./App.css";
import { useState } from "react";

function LoginScreen() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const checkLogin = (password, login) => {
    if (password === "test123" && login === "test11") {
      console.log("Logged in!");
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
      <button
        className="sign-in-btn"
        onClick={() => checkLogin(password, login)}
      >
        Sign in
      </button>
    </div>
  );
}

function App() {
  return (
    <>
      <LoginScreen />
    </>
  );
}

export default App;
