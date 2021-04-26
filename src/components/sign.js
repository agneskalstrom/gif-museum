import React from "react";
import "../styles/sign.css";

const Sign = (props) => {
  return (
    <div className="sign">
      <h3 className="title">{props.title}</h3>
      <span className="year">{props.year}</span>
    </div>
  );
};

export default Sign;
