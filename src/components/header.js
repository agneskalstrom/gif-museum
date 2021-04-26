import React from "react";
import word from "../assets/words";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <div className="left">
        <h1>Museum of GIFs</h1>
        <p className="exhibition">Current exhibition: <span className="word">{word}</span></p>
      </div>
    </header>
  );
};

export default Header;
