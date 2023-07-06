import "./App.css";
import logo from "./trello-assets/logo.jpg";

function LoginScreen() {
  return (
    <div className="login-screen">
      <img src={logo} alt="logo" />
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
