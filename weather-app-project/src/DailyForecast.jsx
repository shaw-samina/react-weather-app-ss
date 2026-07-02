import React, { useEffect, useState } from "react";
import "./DailyForecast.css";
import axios from "axios";

export default function DailyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    let dayData = forecast[0];
    let iconUrl = dayData.condition.icon_url;

    let date = new Date(dayData.time * 1000);
    let dayName = date.toLocaleDateString("en-US", { weekday: "short" });

    return (
      <div className="DailyForecast row justify-content-center g-2">
        {forecast.map(function (dayData, index) {
          let date = new Date(dayData.time * 1000);
          let dayName = date.toLocaleDateString("en-US", { weekday: "short" });

          return (
            <div
              className="col d-flex flex-column align-items-center text-center"
              key={index}
            >
              <div className="forecast-day fw-bold text-muted">{dayName}</div>
              <img
                src={dayData.condition.icon_url}
                alt={dayData.condition.description}
                className="img-fluid my-1"
                style={{ width: "40px", height: "40px" }}
              />
              <div className="hi-low">
                <span className="fw-semibold">
                  {Math.round(dayData.temperature.maximum)}°
                </span>
                <span className="ms-1 text-muted">
                  {Math.round(dayData.temperature.minimum)}°
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    const apiKey = "f0a4tbb1fc986b4d534ccb04b8291ao0";
    let city = props.city || "london";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
