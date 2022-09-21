import React from "react";
import logo from "../images/safscp-logo.svg";

function Nav() {
  return (
    <div className="Nav">
      <div className="ul-list">
        <img className="logo" src={logo}></img>
        <div className="title">
          <li>React-Intro</li>
        </div>
        <ul>
          <li>Home</li>
          <li>Courss</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
