import React from "react";
import "./information-container.scss";
import { PersonalizedContainer } from "../personalized-container/personalized-container.component";
import data from "./data.js";

export const InformationContainer = () => {
  return (
    <div className="information-container">
      {data.map((child) => (
        <PersonalizedContainer
          title={child.title}
          information={child.information}
        />
      ))}
    </div>
  );
};
