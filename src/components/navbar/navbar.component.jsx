import React from "react";
import "./navbar.styles.scss";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <p className="navbar-title">Omega Coin</p>
      <div className="links-container">
        <a className="link" href="#information">
          Buy Omega
        </a>
        <a className="link" href="#information">
          About Omega
        </a>
        <a className="link" href="https://github.com/NoelCov" target="blank">
          Docs
        </a>
      </div>
    </nav>
  );
};
