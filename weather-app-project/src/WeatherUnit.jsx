import React, { useState } from "react";

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
      <div className="d-inline-flex flex-column align-items-center">
        <span className="temperature">
          {Math.round(props.data.temperature)}
        </span>
        <span className="units">
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
      <div className="d-inline-flex flex-column align-items-center">
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
