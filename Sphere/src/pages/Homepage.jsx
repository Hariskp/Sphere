import React from 'react';
import './Homepage.css'
import image from '../img/strom.webp'
import icon from '../img/icon_rainy.png'
import logo from '../img/Spherelogo.png';
import image_1 from '../img/whatsSphere.jpg'
import Header from '../components/Header';
import Footer from '../components/Footer';


function Homepage() {
    const backgroundStyle = {
        backgroundImage: `url(${image})`,};
    return (
        <>
        <Header />
        <div className='homepage' style={backgroundStyle}>
            <div className="search-container">
                <div className="search">
                    <p>FIND THE WEATHER YOU WANT</p></div>
                    <input type="text" 
                        placeholder='→ Searching here....'
                        className='search-bar'/>
            </div>
            <div className="right-info">
                    <div className="date">Fri 2 Dec 23</div>
                    <div className="temp">
                        27°
                        <img src={icon} alt="icon" />
                    </div>
                    <div className="location">Bangkok, Thailand</div>
            </div>
        </div>

        <div className="whats-sphere">
            <div className="header-logo">
                <img src={logo} alt="logo" />
                <h4>SPHERE</h4>
            </div>
            <div className="content-container">
                <div className="sphere-blog">
                    <h1>What is Sphere ?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo suscipit corrupti ducimus iusto architecto ipsum quaerat nihil, officia assumenda debitis consequuntur ullam voluptates, aspernatur placeat non quam quos commodi harum hic, at atque consectetur fugiat? Dolore exercitationem, facilis quae, nobis modi assumenda earum, est ipsa distinctio ut eius voluptatum explicabo.</p>
                </div>
                <div className="test">
                    <img src={image_1} alt="" />
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Homepage