import React from "react";
import keys from "../keys.js";
import "../App.css";
import "./Weather.css";

const Weather = () => {
  const dataBuild = (d) => {
    let date = String(new window.Date());
    date = date.slice(0, 15);
    return date;
  };

  return (
    <div className="Weather">
      <main>
        <div className="search-container">
          <input
            type="text"
            placeholder="Searching here..."
            className="search-bar"
          />
        </div>
        <div className="weather-container">
          <div>
            <div className="temperature-container">
              <div className="date">Fri 2 Dec 2023</div>
              <div className="temperature">30˚</div>
              <div className="location">Bangkok, Thailand</div>
            </div>
          </div>
          <div className="map-container">
            <div className="map">Map Test</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Weather;
