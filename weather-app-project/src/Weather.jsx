import React, { useState } from "react";
import "./Weather.css";
import Form from "./Form";
import WeatherInfo from "./WeatherInfo";
import DailyForecast from "./DailyForecast";
import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState("Chicago");
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      icon_url: response.data.condition.icon_url,
    });
  }

  function searchCity(searchCityName) {
    setCity(searchCityName);
    setWeatherData({ ready: false });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather-app">
        <h1 className="title">Weather App</h1>
        <div className="city-weather-border rounded">
          <Form onSearch={searchCity} city={city} />
          <WeatherInfo data={weatherData} />
          <DailyForecast city={weatherData.city} />
        </div>
      </div>
    );
  } else {
    const apiKey = "f0a4tbb1fc986b4d534ccb04b8291ao0";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
