import { useState } from "react";
import Questions from "./Question";
import "./App.css";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    var element = document.body;
    element.classList.toggle("dark-mode");
  };
  return (
    <div className="App">
      <div className="head-main">
        <h1>Quiz</h1>
        {darkTheme && (
          <span class="theme-icon" onClick={() => toggleTheme("")}>
            ☀️
          </span>
        )}
        {!darkTheme && (
          <span class="theme-icon" onClick={() => toggleTheme("dark-mode")}>
            🌙
          </span>
        )}
      </div>
      <Questions />
    </div>
  );
}
