import React, { useState } from "react";
import "./Weather.css";
import Form from "./Form";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,

      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,

      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      icon_url: response.data.condition.icon_url,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather-app">
        <h1 className="title">Weather App</h1>
        <div className="city-weather-border rounded">
          <Form />
          <h2 className="city">{weatherData.city}</h2>
          <h3 className="text-capitalize Weather">wednesday</h3>
          <h3 className="text-capitalize Weather">{weatherData.description}</h3>
          <h3 className="Weather">{weatherData.icon}</h3>
          <div className="row d-flex align-items-center fs-3">
            <div className="col-5 d-flex  align-items-center ">
              <img className="weather-icon" src={weatherData.icon_url} />
              <span className="temperature display-1 fs-1 fw-bold">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit fs-5 align-top">°F</span>
            </div>
            <div className="col-7">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind}mph</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f0a4tbb1fc986b4d534ccb04b8291ao0";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
