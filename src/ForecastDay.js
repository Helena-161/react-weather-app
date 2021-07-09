import React from "react";
import WeatherIcons from "./WeatherIcons";
export default function ForecastDay(props) {
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    if (props.unit !== "celsius") {
      temperature = Math.round((temperature * 9) / 5 + 32);
    }
    return `${temperature}°`;
  }
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    if (props.unit !== "celsius") {
      temperature = Math.round((temperature * 9) / 5 + 32);
    }
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="forecastDay">
      <h3 className="forecast-day">{day()}</h3>
      <WeatherIcons code={props.data.weather[0].icon} size={38} />
      <h4 className="forecast-temp min">{minTemp()}</h4>
      <h4 className="forecast-temp max">{maxTemp()}</h4>
    </div>
  );
}
