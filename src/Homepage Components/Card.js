import React from 'react';

import { Link } from 'react-router-dom';

// images import
import construct from '../Assets/constructionimg.jpg'
import abouts from '../Assets/aboutus.jpg'
import teamimg from '../Assets/teamwork.jpg'
import AboutHome from './AboutHome';

import './Card.css';

const Card = () => {
  return (
    <>
       <section className="card-section">
        <div className="card-wrap">
          <div className="first-card-wrap">
            <div className="img-card">
              <img src={construct} alt="construction" />
            </div>
            <div className="wrap-text-area">
              <h3 className="card-heading">CONSTRUCTION</h3>
              <p className="card-para">We specialize in all kinds of construction works. Our certified team provides
                the
                services in time and on the highest level.</p>
              <div className="card-anchr">
                <Link href="#">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="first-card-wrap">
            <div className="img-card">
              <img src={abouts} alt="aboutus" />
            </div>
            <div className="wrap-text-area">
              <h3 className="card-heading">ABOUT US</h3>
              <p className="card-para">Constico is completely client-oriented company. We are able meet schedule
                deadlines
                with top quality.</p>
              <div className="card-anchr">
                <Link href="#">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="first-card-wrap">
            <div className="img-card">
              <img src={teamimg} alt="teamwk" />
            </div>
            <div className="wrap-text-area">
              <h3 className="card-heading">EFFECTIVE TEAMWORK</h3>
              <p className="card-para">We have a very good team-based and teamwork attitude, working together to find
                the
                best solutions.</p>
              <div className="card-anchr">
                <Link href="#">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutHome />
    </>
  )
}

export default Card;