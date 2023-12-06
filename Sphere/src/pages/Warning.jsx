import React from 'react';
import './Warning.css';
import BannerImage from '../img/banner-warning.jpg';

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
                <div className="card-1">
                    <h1>Warning</h1>
                </div>
                <div className="card-2">2</div>
                <div className="card-3">3</div>
            </div>
        </div>
    )
}

export default Warning