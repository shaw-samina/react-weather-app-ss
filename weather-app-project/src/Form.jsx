import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <form className="enter-city-form">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a City..."
            className="form-control border-2"
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
