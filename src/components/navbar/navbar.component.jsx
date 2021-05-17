import React from "react";
import "./navbar.styles.scss";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <p className="navbar-title">Omega Coin</p>
      <div className="links-container">
        <a className="link" href="#">
          Buy Omega
        </a>
        <a className="link" href="#">
          About Omega
        </a>
        <a className="link" href="#">
          Docs
        </a>
      </div>
    </nav>
  );
};
