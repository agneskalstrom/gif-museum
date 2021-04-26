import React from "react";
import "../styles/painting.css";

const Painting = (props) => {
  return <img src={props.gif} alt="Random GIF" className="gif" />;
};

export default Painting;
