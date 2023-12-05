import React from 'react';
import './Warning.css';
import BannerImage from '../img/banner-warning.jpg';

function Warning() {
    return (
        <div className="warning-page">
            <div className="banner-bg">
                <img src={BannerImage} alt="banner" />
            </div>
            <div className="warning-old">
            </div>
        </div>
    )
}

export default Warning