import React from 'react' ;
import fb from '../img/fb.png';
import insta from '../img/insta.png';
import linkedin from  '../img/Linkedin.png';
import twitter from '../img/twitter.png';
import email from '../img/email.png';
import gps from '../img/gps.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>PRODUCT</h4>
            <a href="/home">
              <p>HOME</p>
            </a>
            <a href="/news">
              <p>NEWS</p>
            </a>
            <a href="/blog">
              <p>BLOG</p>
            </a>
            <a href="/warning">
              <p>WARNING</p>
            </a>
            <a href="/weatherforecast">
              <p>WEATHERFORECAST</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>ABOUT</h4>
            <a href="/sphere">
              <p>SPHERE WEATHER</p>
            </a>
            <a href="/team">
              <p>OUR SPHERE TEAM</p>
            </a>
            <div className="contacts">
              <h4>CONTACT</h4>
              <a href="/mail" className='contact-link'>
              <img src={email} alt="" />
              <p>SPHEREWEATHER@HOTMAIL.NET</p>
              </a>
              <a href="/address" className='contact-link'>
                <img src={gps} alt="" />
                <p>BANGKOK, THAILAND 11100</p>
              </a>
            </div>
          </div>
          <div className="sb_footer-links_div">
            <h4>OUR SOCIAL</h4>
            <div className="socialmedia">
                  <p><img src={fb} alt="" /></p>
                  <p><img src={insta} alt="" /></p>
                  <p><img src={linkedin} alt="" /></p>
                  <p><img src={twitter} alt="" /></p>
            </div>
            <h4>SUBSCRIBE</h4>
            <div className="subscribe-input">
              <input type="text" placeholder='Email address'/>
              <button type="submit">Sign-up</button>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>
            ® {new Date().getFullYear()} Sphere.  All right reserved.
            </p>
          </div>
          <div className="sb_footer-below-links">
            <a href="/terms"><div>Terms & Conditions</div></a>
            <a href="/privacy"><div>Privacy</div></a>
            <a href="/security"><div>Security</div></a>
            <a href="/cookie"><div>Cookie Declaration</div></a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;