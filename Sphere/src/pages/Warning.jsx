import React from "react";
import "./Warning.css";
import BannerImage from "../img/banner-warning.jpg";

function Warning() {
    return (
        <div className="warning-page">
            <div className="banner-bg">
                <img src={BannerImage} alt="banner" />
                <input className='search-warn' type="text" placeholder='Searching here...'/>
            </div>
            <div className="recent-font">
                <h1>Recent Warning</h1>
            </div>
            <div className="recent-container">

            </div>
            <div className="old-container">
                <div className="header-recent">
                    <h1>Warning</h1>
                </div>
                <div className="column-2">
                    <div className="item1"></div>
                    <div className="item2"></div>
                    <div className="item3"></div>
                </div>
                <div className="column-3">
                    <div className="item4"></div>
                    <div className="item5"></div>
                    <div className="item6"></div>
                </div>
            </div>
        </div>
    )
}

export default Warning;
