import * as React from "react";

import './App.css';
import "./funcs.css";
import "./fonts.css";

// import logo from './logo.svg';
import * as Components from "./components/index.js";

function App() {

  document.onclick = e => {
    if (!e.target.parentElement || (
        !e.target.classList.contains("open") &&
        !e.target.classList.contains("svg-menu") &&
        !e.target.parentElement.classList.contains("svg-menu"))) {
      document.querySelectorAll(".open").forEach(f => {
        f.classList.remove("open");
      })
      document.querySelectorAll(".active-button").forEach(f => {
        f.classList.remove("active-button");
      })
    }
  }

  React.useEffect(() => {
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    const navbarHeight = document.querySelector(".navbar").clientHeight;
    document.querySelectorAll(".page-container").forEach(e => {
      e.setAttribute("style", `top: ${navbarHeight}px`);
    })
    document.querySelectorAll(".nav-links").forEach(e => {
      e.setAttribute("style", `top: ${navbarHeight}px; height: ${vh - navbarHeight}px`);
    })
  })

  return (
    <>
      <Components.NavBar />
      <div className="page-container">
        <Components.Panel />
        <Components.Panel />
        <Components.Panel />
      </div>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <span className="header">This site is under construction.</span><br />Check back soon!
          </p>
        </header>
      </div> */}
    </>
  );
}

export default App;
