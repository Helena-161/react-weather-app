import React, { useState, useEffect } from "react";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row gx-2 gy-1 text-center forecast">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 7 && index > 0) {
              return (
                <div className="col-6 col-sm-4 col-md-2" key={index}>
                  <ForecastDay data={dailyForecast} unit={props.unit} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "b61fef651891eb9cf133b7845c0e062a";
    let longtitude = props.coord.lon;
    let latitude = props.coord.lat;
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&exclude={part}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
    return (
      <div className="Loading">
        <h1>Loading...</h1>
      </div>
    );
  }
}
