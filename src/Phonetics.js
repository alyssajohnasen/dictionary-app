import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  const audio = new Audio(props.phonetics.audio);
  const playSound = () => {
    audio.play();
  };

  return (
    <div className="Phonetics">
      <i className="fas fa-volume-up" onClick={playSound}></i>
      <span className="text">{props.phonetics.text}</span>
    </div>
  )
}