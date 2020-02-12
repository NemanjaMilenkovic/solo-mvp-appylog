import React from "react";

export default function Log(props) {
  return (
    <li
      className="list-group-item"
      id={props.id}
      onClick={() => props.delete(props.id)}
    >
      <p>
        feeling: {props.feeling} and the weather is ☀️{props.weather}
      </p>
    </li>
  );
}
