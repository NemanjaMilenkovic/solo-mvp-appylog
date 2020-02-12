import React from "react";

export default function Log(props) {
  return (
    <li
      className="list-group-item"
      id={props.id}
      onClick={() => props.delete(props.id)}
    >
      <div>
        <p>{props.date}</p>
        <p>
          <b>{props.feeling}</b> and the weather is <b>{props.weather}</b>
        </p>
      </div>
    </li>
  );
}
