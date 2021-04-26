import React, { useState, useEffect } from "react";
import Painting from "./painting";
import word from "../assets/words";
import Sign from "./sign";
import "../styles/gallery.css";

const url = "https://api.giphy.com/v1/gifs/";
const endpoint = "search";
const key = "IqdLsOzm8Gkb6zIxHdzT3rnxJo9QUCwe";
const limit = 50;
const requestURL = url.concat(
  endpoint,
  "?api_key=",
  key,
  "&q=",
  word,
  "&limit=",
  limit,
  "&offset=0&rating=pg-13&lang=en"
);

const Gallery = () => {
  const [gifs, setGifs] = useState(null);

  useEffect(async () => {
    const response = await fetch(requestURL);
    const data = await response.json();
    const gifData = Object.values(data.data);
    setGifs(gifData);
  }, []);

  return (
    <main>
      {gifs &&
        gifs.map((currentGif) => {
          return (
            <div className="display" key={currentGif.id}>
              <Painting gif={currentGif.images.original.url} />
              <Sign
                title={currentGif.title ? currentGif.title : "Untitled"}
                year={currentGif.import_datetime.slice(0, 4)}
              />
            </div>
          );
        })}
    </main>
  );
};

export default Gallery;