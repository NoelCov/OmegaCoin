import "./contribute.styles.scss";
import React from "react";
import contribute from "../../assets/images/contribute.png";
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

export const Contribute = () => {
  return (
    <div className="contribute-container">
      <div className="information-container">
        <p className="contribute-title">Contribute to OmegaCoin</p>
        <p className="contribute-text">
          OmegaCoin is here for everyone. We want everyone to contribute to our
          project. If you have any experience in the field, or if you are a
          programmer and you think you can contribute with something. You can.
        </p>
        <Button className="contribute-link" variant="contained" color="primary" startIcon={<GitHubIcon />}>
        GitHub
      </Button>
      </div>
      <img src={contribute} className="contribute-image" alt="contribute img" />
    </div>
  );
};
