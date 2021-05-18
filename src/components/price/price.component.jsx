import React from "react";
import "./price.styles.scss";
import coinImage from "../../assets/images/gold.png";

export const Price = () => {
  return (
    <div className="price-container">
      <img src={coinImage} alt="Omega Coin" className="image" />
      <div className="info-container">
        <p className="coin-symbol">OGA</p>
        <p className="coin-name">Omega Coin</p>
        <p className="coin-price">$1,345.49</p>
      </div>
    </div>
  );
};
