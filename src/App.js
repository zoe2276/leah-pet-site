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

  const panel1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Commodo quis imperdiet massa tincidunt nunc."
  const panel2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor eget dolor morbi non arcu risus quis varius quam. Nec feugiat in fermentum posuere."
  const panel3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed viverra tellus in. Donec adipiscing tristique risus nec feugiat in."

  return (
    <>
      <Components.NavBar />
      <div className="page-container">
        <Components.Panel textComp={panel1} />
        <Components.Panel textComp={panel2} />
        <Components.Panel textComp={panel3} />
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
