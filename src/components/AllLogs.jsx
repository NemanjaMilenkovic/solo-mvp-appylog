import React from "react";
import { useEffect, useState } from "react";
import Log from "./Log";

export default function AllLogs(props) {
  return (
    <ul className="list-group">
      {props.logs.map(item => (
        <Log
          key={item.id}
          id={item.id}
          feeling={item.feeling}
          weather={item.weather}
          delete={props.delete}
        />
      ))}
    </ul>
  );
}
