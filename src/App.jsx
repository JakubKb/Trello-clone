import "./App.css";
import { useState } from "react";

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

function TrelloDashboard() {
  return (
    <div className="dashboard">
      <h1>test</h1>
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
