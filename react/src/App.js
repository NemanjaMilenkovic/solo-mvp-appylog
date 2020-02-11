import React from "react";
import { useState, useEffect } from "react";
import appylogo from "./logo/appylog-o.svg";
import Navigation from "./components/Navigation";
import AllLogs from "./components/AllLogs";
import NewLog from "./components/NewLog";
import "./App.css";
import axios from "axios";

function App() {
  const [logs, setLogs] = useState([]);
  const [currentView, setCurrentView] = useState("LOADING");
  const [navAction, setNavAction] = useState("+");

  function deleteLog(id) {
    document.getElementById("navbar").style.color = "red";
    setTimeout(() => {
      document.getElementById("navbar").style.color = "white";
    }, 500);
    axios.delete(`/api/log/${id}`).then(res => {
      setLogs(
        logs.filter(log => {
          return log.id !== id;
        })
      );
    });
  }
  function addLog() {
    navAction == "+" ? setNavAction("-") : setNavAction("+");

    currentView == "ADD_LOG"
      ? setCurrentView("ALL_LOGS")
      : setCurrentView("ADD_LOG");
  }

  // useEffect(() => {
  //   axios.post("/api/log").then(res => setLogs([...logs, ...res.data]));
  // }, []);

  useEffect(() => {
    axios.get("/api/log").then(res => setLogs([...logs, ...res.data]));
    setCurrentView("ALL_LOGS");
  }, []);

  let body = "";

  if (currentView == "LOADING") {
    body = <img src={appylogo} className="App-logo" alt="logo" />;
  } else if (currentView == "ALL_LOGS") {
    body = <AllLogs logs={logs} delete={deleteLog}></AllLogs>;
  } else if (currentView == "ADD_LOG") {
    body = <NewLog />;
  }

  return (
    <div className="App">
      <Navigation add={addLog} action={navAction} />
      <div className="container">{body}</div>
    </div>
  );
}

export default App;
