import React from "react";
import "./Score.css";

//stateless component
//allows for score to be shown and ultimately the messaging if you have won or lost
const Score = props => (
  <div className="gameScore">
    <h3 className="score">Your Score: {props.total}</h3>
    <h3 className="status">{props.status}</h3>
  </div>
);

export default Score;
