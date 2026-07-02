import React, { useState } from "react";
import "./WeatherUnit.css";

export default function WeatherUnit(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="d-inline-flex flex-row align-items-baseline gap-1">
        <span className="temperature fs-5">
          {Math.round(props.data.temperature)}
        </span>
        <span className="units fs-5">
          °F |{" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    let celsius = ((props.data.temperature - 32) * 5) / 9;

    return (
      <div className="d-inline-flex flex-row align-items-baseline">
        <span className="temperature">{Math.round(celsius)}</span>
        <span className="units">
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>{" "}
          | °C
        </span>
      </div>
    );
  }
}
