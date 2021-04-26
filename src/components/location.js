import React from "react";

function showPosition(position) {
  console.log(
    "Latitude: " +
      position.coords.latitude +
      " Longitude: " +
      position.coords.longitude
  );
}

const Location = () => {
  return <button onClick={showPosition}>Position</button>;
};

export default Location;
