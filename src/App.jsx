import "./App.css";

function LoginScreen() {
  return (
    <div className="login-screen">
      <h1>Trello list</h1>
      <input type="text" placeholder="Login" className="login-input" />
      <input type="password" placeholder="Password" className="login-input" />
      <button className="sign-in-btn">Sign in</button>
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
