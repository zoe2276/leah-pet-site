import * as React from "react";
import './App.css';
import "./funcs.css";
import logo from './logo.svg';
import * as Components from "./components/index.js";

function App() {
  return (
    <>
      <Components.NavBar />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This site is under construction.<br />Check back soon!
          </p>
        </header>
      </div>
    </>
  );
}

export default App;