import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isCorrect, setIsCorrect] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "user" && password === "password") {
      setIsLoggedIn(true);
      setIsCorrect(true);
    } else {
      console.log("wrong password");
      setIsCorrect(false);
    }
  };

  return (
    <div className="App">
      <h2>Login Page</h2>
      {!isCorrect && <p>Invalid username or password</p>}

      {!isLoggedIn ? (
        <form action="submit" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="username"
              name="name"
              id="username"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              placeholder="password"
              name="password"
              id="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Welcome, user</p>
      )}
    </div>
  );
}

export default App;