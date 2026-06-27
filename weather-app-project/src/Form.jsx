import React, { useState } from "react";
import "./Form.css";

export default function Form(props) {
  const [city, setCity] = useState(props.city);

  function handleSubmit(event) {
    event.preventDefault();

    if (city && city.trim() !== "") {
      props.onSearch(city);
    }
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  return (
    <form className="enter-city-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a City..."
            className="form-control border-2"
            onChange={handleCityChange}
            value={city || ""}
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-secondary w-100"
          />
        </div>
      </div>
    </form>
  );
}
