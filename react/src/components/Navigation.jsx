import React from "react";

export default function NewLogForm(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="navbar-brand" id="navbar" onClick={() => props.add()}>
        {props.action}
      </div>
    </nav>
  );
}
