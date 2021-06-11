import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [city, setCity] = useState("");
  let [details, setDetails] = useState({});
  const [loaded, setLoaded] = useState(false);

  // Integration of details from API
  function displayWeather(response) {
    setLoaded(true);
    setDetails({
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      feelslike: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  // Search current weather by city (API call)
  function searchWeather(city) {
    let apiKey = "2ccfd3ff79016dcd8763eb6a62db444b";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city) {
      searchWeather(city);
      setCity("");
    } else {
      alert(`Enter a city to submit your search`);
      setCity("");
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (loaded) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="Search"
            placeholder="Enter a city.."
            onChange={updateCity}
            autoComplete="off"
          />
          <input type="submit" value="Search" />
        </form>
        <ul>
          <li>
            <strong>
              {" "}
              Current weather in {details.city}, {details.country}
            </strong>
          </li>
          <li>Temperature: {Math.round(details.temperature)}°C</li>
          <li>Feels like: {Math.round(details.feelslike)}°C</li>
          <li>Humidity: {details.humidity}%</li>
          <li>Wind: {details.wind} m/s</li>
          <li>Description: {details.description}</li>
          <li>
            <img src={details.icon} alt={details.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="Search"
          placeholder="Enter a city.."
          onChange={updateCity}
          autoComplete="off"
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}