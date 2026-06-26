import React from "react";
import "./Weather.css";
import Form from "./Form";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "f0a4tbb1fc986b4d534ccb04b8291ao0";
  let city = "chicago";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Weather-app">
      <h1 className="title">Weather App</h1>
      <div className="city-weather-border rounded">
        <Form />
        <h2 className="city">Chicago</h2>
        <h3 className="Weather">Wednesday 12:00</h3>
        <h3 className="Weather">Partly Cloudy</h3>
        <div className="row d-flex align-items-center fs-3">
          <div className="col-5 d-flex  align-items-center ">
            <img
              className="weather-icon"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyN4z-Atm3KUBuE02R8YqVZIjwAgUv8xPq6VTCzcc_g&s=10"
              alt="Partly Cloudy"
              style={{ width: "95px" }}
            />
            <span className="temperature display-1 fs-1 fw-bold">6</span>
            <span className="unit fs-5 align-top">°C</span>
          </div>
          <div className="col-7">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 72%</li>
              <li>Wind: 13km/hr</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
