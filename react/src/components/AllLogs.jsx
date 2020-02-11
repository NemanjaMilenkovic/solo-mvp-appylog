import React from "react";
import { useEffect, useState } from "react";
import Log from "./Log";

export default function AllLogs(props) {
  return (
    <ul className="list-group">
      {props.logs.map(item => (
        <Log key={item.id} item={item.id} />
      ))}
    </ul>
  );
}
