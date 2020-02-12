import React from "react";
import { useEffect, useState } from "react";
import Log from "./Log";

export default function AllLogs(props) {
  return (
    <ul className="list-group">
      {props.logs.map(item => {
        let counter = 0;
        let totalSleep = +item.sleep;
        let average = totalSleep / counter;
        let weather = "";
        let options = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        };
        var day = new Date(item.logCreatedAt);
        day = day.toLocaleDateString("en-US", options);

        switch (item.weather) {
          case "sunny":
            weather = "☀️";
            break;
          case "partly sunny":
            weather = "🌤";
            break;
          case "cloudy":
            weather = "☁️";
            break;
          case "rainy":
            weather = "🌧";
            break;
          case "snowy":
            weather = "❄️";
            break;
          default:
            weather = "☀️";
        }
        return (
          <Log
            date={day}
            key={item.id}
            id={item.id}
            feeling={item.feeling}
            weather={weather}
            delete={props.delete}
          />
        );
      })}
    </ul>
  );
}
