import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import keys from "./keys";
import "./App.css";

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
};

function App() {
  const dataBuild = (d) => {
    let date = String(new window.Date());
    date = date.slice(3, 15);
    return date;
  };
  return (
    <>
      <div className="App">
        <Header />
        <main>
          <div className="search-container">
            <input type="text" placeholder="Search..." className="search-bar" />
          </div>

          <div>
            <div className="location-container">
              <div className="location">Bangkok, Thailand</div>
              <div className="date">Nov 30 2023</div>
            </div>
            <div className="weather-container">
              <div className="temp">30°C</div>
              <div className="weather">Cold</div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
