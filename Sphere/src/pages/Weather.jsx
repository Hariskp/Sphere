import React from "react";
import "../App.css";
import "./Weather.css";

const Weather = () => {
  return (
    <div className="Weather">
      <main>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-bar" />
        </div>
        <div className="container"></div>
      </main>
    </div>
  );
};

export default Weather;
