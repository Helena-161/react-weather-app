import React from "react";
import LastUpdated from "./LastUpdated";
import CurrentTemperature from "./CurrentTemperature";
import FeelsLikeTemperature from "./FeelsLikeTemperature";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <LastUpdated date={props.apiData.date} />
      <div className="text-center">
        <h1 className="city-country">
          {props.apiData.city}, {props.apiData.country}
        </h1>
        <CurrentTemperature
          celsius={props.apiData.temperature}
          unit={props.unit}
          setUnit={props.setUnit}
        />
        <img src={props.apiData.icon} alt={props.apiData.description} />
        <h3 className="description">{props.apiData.description}</h3>
      </div>
      <FeelsLikeTemperature
        tempCelsius={props.apiData.feelslike}
        unit={props.unit}
      />
      <p>Humidity: {props.apiData.humidity} %</p>
      <p>Wind: {Math.round(props.apiData.wind)} m/s</p>
    </div>
  );
}
