import "./footer.styles.scss";
import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text-container">
        <span className="footer-symbol">OGA</span>
        <span className="footer-year">2021</span>
      </div>
      <div className="footer-icons-container">
        <a href="https://github.com/NoelCov" target="blank">
          {<GitHubIcon className="footer-icon" />}
        </a>
        <a href="https://twitter.com/No3l_Codes" target="blank">
          {<TwitterIcon className="footer-icon" />}
        </a>
        <a href="https://www.instagram.com/no3lcodes/" target="blank">
          {<InstagramIcon className="footer-icon" />}
        </a>
      </div>
    </footer>
  );
};
