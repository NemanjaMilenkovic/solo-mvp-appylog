import React from "react";
import { useState, useEffect } from "react";
import appylogo from "./logo/appylog-o.svg";
import Navigation from "./components/Navigation";
import AllLogs from "./components/AllLogs";
import "./App.css";
import axios from "axios";

function App() {
  const [logs, setLogs] = useState([]);
  useEffect(() => {
    axios.get("/api/log").then(res => setLogs([...logs, ...res.data]));
  }, []);
  let body = "";
  if (logs.length < 1) {
    body = <img src={appylogo} className="App-logo" alt="logo" />;
  } else {
    body = <AllLogs logs={logs}></AllLogs>;
  }

  return (
    <div className="App">
      <Navigation />
      {body}

      <div className="container"></div>
    </div>
  );
}

export default App;
