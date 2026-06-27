import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherUnit from "./WeatherUnit";

export default function WeatherInfo(props) {
  return (
    <div>
      <h2 className="city">{props.data.city}</h2>
      <FormattedDate date={props.data.date} />
      <h3 className="text-capitalize Weather">{props.data.description}</h3>
      <h3 className="Weather">{props.data.icon}</h3>
      <div className="row d-flex align-items-center fs-3">
        <div className="col-5 d-flex  align-items-center ">
          <img className="weather-icon" src={props.data.icon_url} />
          <WeatherUnit data={props.data} />
        </div>
        <div className="col-7">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
