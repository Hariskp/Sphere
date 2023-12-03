import React from 'react' ;
import fb from '../img/fb.png';
import insta from '../img/insta.png';
import linkedin from  '../img/Linkedin.png';
import twitter from '../img/twitter.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>PRODUCT</h4>
            <a href="/employer">
              <p>HOME</p>
            </a>
            <a href="/healthplan">
              <p>NEWS</p>
            </a>
            <a href="/individual">
              <p>BLOG</p>
            </a>
            <a href="/individual">
              <p>WARNING</p>
            </a>
            <a href="/individual">
              <p>WEATHERFORECAST</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>ABOUT US</h4>
            <a href="/about">
              <p>ABOUT SPHERE</p>
            </a>
            <a href="/press">
              <p>ABOUT TEAM</p>
            </a>
            <a href="/career">
              <p>Career</p>
            </a>
            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Coming soon on</h4>
            <div className="socialmedia">
                  <p><img src={fb} alt="" /></p>
                  <p><img src={insta} alt="" /></p>
                  <p><img src={linkedin} alt="" /></p>
                  <p><img src={twitter} alt="" /></p>
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