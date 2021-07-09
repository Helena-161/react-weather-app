import React from "react";
import "./Forecast.css";
import WeatherIcons from "./WeatherIcons";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row gx-2 gy-1 text-center forecast">
        <div className="col-6 col-sm-4 col-md-2">
          <h2 className="forecast-day">Mon</h2>
          <WeatherIcons code="01d" size={36} />
          <h3 className="forecast-temp min">11 °C</h3>
          <h3 className="forecast-temp max">14 °C</h3>
        </div>

        <div className="col-6 col-sm-4 col-md-2">
          <h2 className="forecast-day">Tue</h2>
          <WeatherIcons code="01d" size={36} />
          <h3 className="forecast-temp min">15 °C</h3>
          <h3 className="forecast-temp max">18 °C</h3>
        </div>

        <div className="col-6 col-sm-4 col-md-2">
          <h2 className="forecast-day">Wed</h2>
          <WeatherIcons code="01d" size={36} />
          <h3 className="forecast-temp min">16 °C</h3>
          <h3 className="forecast-temp max">19 °C</h3>
        </div>

        <div className="col-6 col-sm-4 col-md-2">
          <h2 className="forecast-day">Thu</h2>
          <WeatherIcons code="01d" size={36} />
          <h3 className="forecast-temp min">16 °C</h3>
          <h3 className="forecast-temp max">19 °C</h3>
        </div>
        <div className="col-6 col-sm-4 col-md-2">
          <h2 className="forecast-day">Fri</h2>
          <WeatherIcons code="01d" size={36} />
          <h3 className="forecast-temp min">16 °C</h3>
          <h3 className="forecast-temp max">19 °C</h3>
        </div>
        <div className="col-6 col-sm-4 col-md-2">
          <h2 className="forecast-day">Sat</h2>
          <WeatherIcons code="01d" size={36} />
          <h3 className="forecast-temp min">16 °C</h3>
          <h3 className="forecast-temp max">19 °C</h3>
        </div>
      </div>
    </div>
  );
}
