import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <div className="nav-container">
        <h1>Ricardo</h1>
        <ul className="nav-bar-list">
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default NavBar;
