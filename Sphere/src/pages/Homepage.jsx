import React from 'react';
import './Homepage.css'
import image from '../img/strom.webp'
import icon from '../img/icon_rainy.png'
import logo from '../img/Spherelogo.png';
import image_1 from '../img/whatsSphere.jpg'
import Header from '../components/Header';
import Footer from '../components/Footer';
import sevdays from '../img/7daysforecast.png'
import chmeq from '../img/ChiangMai_eq.jpg'
import blog from '../img/blog.png'


function Homepage() {
    return (
        <>
        <Header />
        <div className='homepage'>
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
            <div className="news-dots">
                <span className='news-dot'></span>
                <span className='news-dot'></span>
                <span className='news-dot'></span>
            </div>
        </div>

        {/* Recent Warning */}
        <div className="recent-logo">
            <img src={logo} alt="logo" className='recentnews-logo'/>
            <h1>Recent Warning</h1>
        </div>
        <div className="recent-warning">
            <div className="chm-eq">
                <img src={chmeq} alt="ChiangMai_eq" />
            </div>
            <div className="chm-news">
                <h1>Chiang Mai Earth Quake</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nostrum, rem inventore est, consequuntur nulla exercitationem rerum ab cupiditate adipisci animi odio, molestiae quam officia pariatur omnis asperiores vero voluptate provident nemo. Alias voluptate minus vero, adipisci quidem odit. Error quasi non amet id, maiores cupiditate saepe sapiente voluptas necessitatibus sint odio consequuntur, in repellat eius! Nisi dolore pariatur ea eos! Aspernatur architecto officia ea, dolores quibusdam neque non ab hic, deleniti natus, quas iste distinctio vero explicabo quasi accusamus laborum? Cupiditate laboriosam vel et atque tempore laudantium dolorum nulla dolorem doloribus ullam facere, perferendis animi at officiis sunt corporis?</p>
            </div>
        </div>
        <div className="recents-dots">
            <span className='recents-dot'></span>
            <span className='recents-dot'></span>
            <span className='recents-dot'></span>
            <span className='recents-dot'></span>
            <span className='recents-dot'></span>
        </div>
        
        {/* Blog */}
        <div className="blogs">
            <h1>BLOG</h1>
            <div className="blog-content-home">
                <div className="first-blog">
                    <img src={blog} alt="blog" />
                    <div className="tag-1">5 Way to save your health when weather change.</div>
                </div>
                <div className="second-blog">
                    <img src={blog} alt="blog" />
                    <div className="tag-2">5 Way to save your health when weather change.</div>
                </div>
                <div className="third-blog">
                    <img src={blog} alt="blog" />
                    <div className="tag-3">5 Way to save your health when weather change.</div>
                </div>
            </div>
        </div>

        </div>
        <Footer />
        </>
    );
}

export default Homepage