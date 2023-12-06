import React from 'react';
import './About.css';
import Haris from '../img/ris.jpg';
import Nut from '../img/nut.jpg';
import Jom from '../img/jom.jpg';
import First from '../img/first.jpg';

import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <div className="Hero-banner">
          <div className="box-sphere">
            <div className="font-header">
              <h1>THE ORIGIN OF SPHERE</h1>
            </div>
            <div className="font-information">
              <p>Climate and environment are all important things in our lives in today's world, whether we are doing various activities or tasks, but it cannot be denied that these things have a great impact on the process life because the weather and environment change every day, making daily life sometimes difficult.

                You may be concerned about participating in various activities because the weather may be unfavorable at times.

                You must forego activities and miss out on opportunities. We will also have to deal with natural disasters on occasion.

                Unexpected environmental conditions cause significant harm to people, homes, and property. However, if the weather can be predicted, including the ability to warn of disasters ahead of time, this will have a positive impact on

                Live life to the fullest.

              </p>
            </div>
          </div>
          <div className="sphere-developer">
            <div className="developer-box">
              <div className="box">
                <img src={Haris} alt="" />
                <div className="information-ris">
                  <h2>1640703169 | Haris Kirdpakdee</h2>
                  <li>Tel      : 080-584-7716</li>
                  <li>Email    : haris.kird@gmail.com</li>
                  <li>GitHub   : Hariskp</li>
                  <li>LinkedIn : Haris Kirdpakdee</li>
                  <li>Role : Developer , Designer</li>
                </div>
                <div className="quote-r">
                    <h4>" A bad day doesn’t mean you have a bad life "</h4>
                  </div>
              </div>
              <div className="box">
                <img src={Nut} alt="" />
                <div className="information-nut">
                  <h2>1640701775  | Chanut Kidwat</h2>
                  <li>Tel      : 062-595-4165</li>
                  <li>Email    : chanut.kidw@gmail.com</li>
                  <li>GitHub   : chanutkid</li>
                  <li>LinkedIn : Chanut Kidwat</li>
                  <li>Role : Developer , Designer</li>
                </div>
                <div className="quote-n">
                    <h4>" This pain is only temporary "</h4>
                </div>
              </div>
              <div className="box">
                <img src={Jom} alt="" />
                <div className="information-jom">
                  <h2>1640702344 | Jittawat Praditseree</h2>
                  <li>Tel      : 099-182-8589</li>
                  <li>Email    : jittawatofficial@gmail.com</li>
                  <li>GitHub   : Jittawatpdsr</li>
                  <li>LinkedIn : JITTAWAT P.</li>
                  <li>Role : Developer , Designer</li>
                </div>
                <div className="quote-j">
                    <h4>" One day or Day one "</h4>
                </div>
              </div>
              <div className="box">
                <img src={First} alt="" />
                <div className="information-first">
                  <h2>1640701742 | Natthaphat Netruenkunlanan</h2>
                  <li>Tel      : 063-746-3551</li>
                  <li>Email    : first3902f@gmail.com</li>
                  <li>GitHub   : NatthaphatxF1</li>
                  <li>LinkedIn : - </li>
                  <li>Role : Developer , Designer</li>
                </div>
                <div className="quote-f">
                    <h4>" The body needs a bed, and the space beside it needs you "</h4>
                  </div>
              </div>
            </div>
              <div className="developer">
                <h1>SPHERE‏‏‎ ‎‏‏‎ ‎DEVELOPER</h1>
              </div>
            </div>
            <Footer/>
          </div>
    </>
  )
}

export default About
