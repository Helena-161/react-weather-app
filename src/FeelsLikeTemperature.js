import React from "react";

export default function FeelsLikeTemperature(props) {
  function feelsLikeTemp() {
    let temperature = Math.round(props.tempCelsius);
    if (props.unit !== "celsius") {
      temperature = Math.round((temperature * 9) / 5 + 32);
      return `Feels like: ${temperature} °F`;
    } else {
      return `Feels like: ${temperature} °C`;
    }
  }
  return <p className="FeelsLikeTemperature">{feelsLikeTemp()}</p>;
}
