import React from "react";
import "./reques.css";

const Headerform = ({ step, handleStep }) => {
  return (
    <div className="requestbody">
      <div className="step-header">
        <div className="step-header__container">
          <div className={`step-header__step ${step >= 1 ? "completed" : ""}`}>
            <h2>1</h2>
          </div>
          <div className={`step-header__step ${step >= 2 ? "completed" : ""}`}>
            <h2>2</h2>
          </div>
          <div className={`step-header__step ${step >= 3 ? "completed" : ""}`}>
            <h2>3</h2>
          </div>
          <div className={`step-header__step ${step >= 4 ? "completed" : ""}`}>
            <h2>4</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headerform;
