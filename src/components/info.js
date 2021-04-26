import React, { useState, useEffect } from "react";
import "../styles/info.css";
import word from "../assets/words";

const url = "https://api.dictionaryapi.dev/api/v2/entries/"
const lang ="en_US"
const requestURL = url.concat(lang,"/",word);


const Info = (props) => {
    const [meaning, setMeaning] = useState(null);

    useEffect(async () => {
        const response = await fetch(requestURL);
        const data = await response.json();
        setMeaning(data[0].meanings[0].definitions[0].definition);
      }, []);

  return (
      <section id="info-wrapper" className={props.visibility}>
        <h2>Welcome to the museum of GIFs!</h2>
        <div className="showing info-module">
          <h3>Now showing: <span className="info-exhibition">{word}</span></h3>
          <p>An exhibition about <span className="info-meaning">{meaning}</span></p>
        </div>
        <div className="hours info-module">
          <h3>Opening hours</h3>
          <ul>
            <li>Monday 00.00 - 24.00</li>
            <li>Tuesday 00.00 - 24.00</li>
            <li>Wednesday 00.00 - 24.00</li>
            <li>Thursday 00.00 - 24.00</li>
            <li>Friday 00.00 - 24.00</li>
            <li>Saturday 00.00 - 24.00</li>
            <li>Sunday 00.00 - 24.00</li>
          </ul>
        </div>
        <div className="credits info-module">
          <h3>Thanks</h3>
          <ul>
            <li>Background image by <a href="https://unsplash.com/@thevoncomplex">Mike Von</a></li>
            <li>Sound by <a href="https://freesound.org/people/Toybox/sounds/262689/">Toybox</a></li>
          </ul>
        </div>
    </section>
  );
};

export default Info;
