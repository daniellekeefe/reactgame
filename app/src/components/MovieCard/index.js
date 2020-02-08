import React from "react";
import "./style.css";

//Below are the details that populate on the bottom of each movie tils card
//also the funcation for the click handler
function MovieCard(props) {
  return (
    <div
      className="card img-container hover"
      onClick={() => props.handler(props.id)}
    >
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Quote:</strong> {props.quote}
          </li>
          <li>
            <strong>Year:</strong> {props.year}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MovieCard;
