import React, { useState } from "react";
import Info from "./info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faVolumeUp,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import museumAmbience from "../assets/museum-ambience.wav";
import "../styles/nav.css";

const museumSounds = new Audio(museumAmbience);

const Nav = () => {
  const [playing, setPlaying] = useState(false);
  const [open, setOpen] = useState(false);

  function togglePlayer() {
    setPlaying(!playing);
    !playing ? museumSounds.play() : museumSounds.pause();
  }

  function toggleMenu() {
    setOpen(!open);
  }

  return (
    <section className="nav-wrapper">
      <nav className="buttons">
        <button
          onClick={togglePlayer}
          className="sound-toggle"
          aria-label="Toggle sounds"
        >
          <FontAwesomeIcon icon={!playing ? faVolumeMute : faVolumeUp} />
        </button>
        <button
          onClick={toggleMenu}
          className="hamburger-menu"
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={!open ? faBars : faTimes} />
        </button>
      </nav>
      {open === true ? <Info visibility="in" /> : <Info visibility="out" />}
    </section>
  );
};

export default Nav;
