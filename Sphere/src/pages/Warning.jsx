import React from "react";
import "./Warning.css";
import BannerImage from "../img/banner-warning.jpg";

function Warning() {
  return (
    <div className="warning-page">
      <div className="banner-bg">
        <img src={BannerImage} alt="banner" />
        <input
          className="search-warn"
          type="text"
          placeholder="Searching here..."
        />
      </div>
    </div>
  );
}

export default Warning;
