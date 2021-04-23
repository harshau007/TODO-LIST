import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className="App">
      <nav className="navigation">
          <Link className="navbar-text" to="/">
            {props.title}
          </Link>
          <Link className="navbar-text about-txt" to="/about">
            About
          </Link>
      </nav>
    </div>
  );
}
