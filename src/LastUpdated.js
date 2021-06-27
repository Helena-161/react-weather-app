import React from "react";

export default function LastUpdated(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let now = new Date(props.date);
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let day = days[now.getDay()];

  return (
    <div className="LastUpdated">
      Last updated: {day} at {hours}:{minutes}
    </div>
  );
}
