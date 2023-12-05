import React from 'react';
import './Homepage.css'
import image from '../img/strom.webp'
import icon from '../img/icon_rainy.png'
import logo from '../img/Spherelogo.png';
import image_1 from '../img/whatsSphere.jpg'
import Header from '../components/Header';
import Footer from '../components/Footer';
import sevdays from '../img/7daysforecast.png'


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
        {/* What is Sphere ? */}
        <div className="whats-sphere">
            <div className="header-logo">
                <img src={logo} alt="logo" />
                <h4>SPHERE</h4>
            </div>
            <div className="content-container">
                <div className="sphere-blog">
                    <h1>What is Sphere ?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quia placeat optio beatae sed. Impedit aut vero unde perferendis sint quidem aliquid accusamus velit veniam animi nesciunt illo vel ut nisi, deserunt consectetur molestias, harum fugit corporis saepe. Mollitia eius dolores tempora neque odit. Ea rem delectus labore nemo ducimus quae cupiditate voluptatibus voluptatum, aspernatur incidunt a, quisquam minima alias, debitis harum sunt pariatur recusandae sed quos architecto magni eligendi consequatur. Vel nisi voluptatem ipsam, pariatur a quam ipsa dolorum enim delectus, saepe veritatis asperiores quaerat sint quisquam quas. Ratione, iste. Aperiam aut libero accusamus rerum corporis eaque, voluptates perspiciatis, saepe ex mollitia, esse necessitatibus! Officiis blanditiis modi repellendus, impedit rerum recusandae neque nulla corrupti nesciunt cupiditate, nobis numquam deleniti porro aspernatur, amet fuga. Commodi, quod asperiores? Voluptates veniam a expedita saepe in officia delectus ut similique praesentium dolor nesciunt vero officiis deleniti dignissimos animi voluptatibus earum amet nobis, accusamus placeat est perspiciatis doloremque natus? Nulla eos fugiat fugit libero necessitatibus eligendi nesciunt laudantium in. Repellendus necessitatibus quam, nisi id earum illo! Dicta mollitia nihil vel fugiat, laboriosam culpa possimus soluta? Minus debitis quibusdam libero provident quam voluptatem voluptates accusantium asperiores saepe eos unde, neque eligendi tenetur repudiandae quas temporibus!</p>
                </div>
                <div className="img-whatssphere">
                    <img src={image_1} alt="" />
                </div>
            </div>
        {/* Weather News */}
        <div className="weathernews-content">
            <div className="sevdays-forecast">
                <img src={sevdays} alt="7days-forecast" />
            </div>
            <div className="weather-news">
                <h1>Weather News</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At nesciunt maiores, nam nihil, nobis impedit quam quas temporibus saepe nostrum ullam, molestias iste quae sed vero totam dolorum cum voluptas illo consequatur odit! Quo, sapiente error. Nihil animi enim impedit laborum, quasi dicta illum nostrum rem nisi amet cum accusamus ullam iusto beatae blanditiis deserunt provident aliquid molestiae assumenda pariatur eaque quae, quibusdam veritatis. Tenetur neque, dolore quis blanditiis odit eligendi at ipsam non dicta vero cumque voluptates. Dolorem, perferendis asperiores. Reiciendis a velit asperiores cumque consequatur architecto, qui inventore assumenda modi alias aspernatur vel corrupti ex culpa beatae aperiam?</p>
            </div>
            <div className="dots">
                <span className='dot'></span>
                <span className='dot'></span>
                <span className='dot'></span>
            </div>
        </div>

        {/* Recent Warning */}
        <div className="recent-logo">
            
            <div className="recent-warning">
                <p>Hello</p>
                <p>Hi</p>
            </div>
        </div>
        

        {/* Bolg */}

        </div>
        <Footer />
        </>
    );
}

export default Homepage