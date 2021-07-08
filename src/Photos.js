import React from "react";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <section className="Photos">
        {props.photos.map(function(photo, index) {
          return <div key={index} >
            <img src={photo.src.tiny} alt={photo.photographer} />
          </div>
        })}
      </section>
    );
  } else {
    return null;
  }
}