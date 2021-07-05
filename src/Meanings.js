import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  console.log(props.meanings);
  return (
    <div className="Meanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      {props.meanings.definitions.map(function(definition, index) {
        return (
          <div key={index}>
            <span>
              <strong>Definition:</strong> {definition.definition}
              <br />
              <strong>Example:</strong> <em>{definition.example}</em>
              <Synonyms synonyms={definition.synonyms} />
            </span>
          </div>  
        )
      })}
    </div>
  )
}