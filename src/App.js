import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import "./components/style/navbar.css";

function App() {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(true);
  const [active, setActive] = useState("home");

  const toggleNavbar = () => setCollapsed(!collapsed);
  const navState = collapsed ? "collapse navbar-collapse" : "navbar-collapse";

  const spaNavigate = e => {
    e.preventDefault();
    setActive(e.currentTarget.name);
    history.push(`/${e.currentTarget.name}`);
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="/" name="home" onClick={spaNavigate}>
          𝝺
        </a>
        <button
          className="navbar-toggler"
          onClick={toggleNavbar}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggle navbar-toggler-icon"></span>
        </button>
        <div className={navState} id="navbarNav">
          <ul className="navbar-nav">
            <li className={active === "home" ? "nav-item active" : "nav-item"}>
              <a
                className="nav-link"
                href="/"
                name="home"
                onClick={spaNavigate}
              >
                Home
              </a>
            </li>
            <li
              className={active === "projects" ? "nav-item active" : "nav-item"}
            >
              <a
                className="nav-link"
                href="/projects"
                name="projects"
                onClick={spaNavigate}
              >
                Projects
              </a>
            </li>
            <li
              className={active === "contact" ? "nav-item active" : "nav-item"}
            >
              <a
                className="nav-link disabled"
                href="/contact"
                name="contact"
                onClick={spaNavigate}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <DashBoard />
    </div>
  );
}

export default App;
