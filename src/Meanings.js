import React from "react";

export default function Meanings(props) {
  console.log(props.meanings);
  return (
    <div className="Meanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      <p>{props.meanings.definitions[0].definition}</p>
      <p>{props.meanings.definitions[0].example}</p>
    </div>
  )
}