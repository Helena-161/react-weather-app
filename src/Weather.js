import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [apiDetails, setApiDetails] = useState({ loaded: false });
  const [unit, setUnit] = useState("celsius");

  // Data integration from API
  function displayWeather(response) {
    setApiDetails({
      loaded: true,
      coord: response.data.coord,
      city: response.data.name,
      country: response.data.sys.country,
      date: response.data.dt * 1000,
      temperature: response.data.main.temp,
      feelslike: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }

  // Search current weather by city (API call)
  function searchWeather() {
    let apiKey = "b61fef651891eb9cf133b7845c0e062a";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city) {
      searchWeather(city);
    } else {
      alert(`Enter a city to submit your search`);
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  // API call by current location
  function gpsSearch(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let units = "metric";
    let apiKey = "b61fef651891eb9cf133b7845c0e062a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function fetchLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(gpsSearch);
  }

  if (apiDetails.loaded) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit} className="Search">
          <input
            type="Search"
            placeholder="Enter a city.."
            onChange={updateCity}
            autoComplete="off"
            className="search-input rounded border border-dark me-2"
          />
          <input
            type="submit"
            value="Search"
            className="search-button btn btn-dark me-2"
          />
          <button
            type="button"
            onClick={fetchLocation}
            className="location-button btn btn-dark"
          >
            Location
          </button>
        </form>
        <WeatherInfo apiData={apiDetails} unit={unit} setUnit={setUnit} />
        <Forecast coord={apiDetails.coord} unit={unit} setUnit={setUnit} />
      </div>
    );
  } else {
    searchWeather();
    return (
      <div className="Loading">
        <h1>Loading...</h1>
      </div>
    );
  }
}
