import React from "react";
import "./information-container.scss";
import { PersonalizedContainer } from "../personalized-container/personalized-container.component";
import data from "./data.js";

export const InformationContainer = () => {
  return (
    <div className="information-container" id="information">
      {data.map((child, index) => (
        <PersonalizedContainer
          title={child.title}
          information={child.information}
          key={index}
        />
      ))}
    </div>
  );
};
