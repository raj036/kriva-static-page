import React from 'react';

import './AboutHome.css';

// icons import
import { FaAdn } from 'react-icons/fa';
import { TbClockHour3 } from 'react-icons/tb'
import WorkingPage from './WorkingPage';
import { useState } from 'react';
import Minus from "../Assets/minusicn.png";
import plusicn from '../Assets/plsicn.png';


const AboutHome = () => {

    const [show, setShow] = useState(false)
    const [showCreative, setShowCreative] = useState(false)
    const [showHonest, setShowHonest] = useState(false)

    // const creativePart = () => {
    //     return show(false);
    // }

    return (
        <>
            <section className="about-us-sec">
                <div className="about-us-wrap">
                    <div className="about-us-left-part">
                        <h2 className="abot-heading-name">About Us</h2>
                        <div className="about-built-part">
                            <h4 className="builtwall-txt">BuiltWall Construction More Than 30 Years on Building Market</h4>
                            <p className="builtwall-para">Constico is a diversified construction company, made up of teams of people
                                who are proven in their industries. All working to design, build, transport, operate, and
                                maintain projects all over the USA. But we believe that projects are about more than concrete
                                and steel.</p>
                        </div>
                        <div className="about-img-txt-part">
                            <div className="about-img">
                                <FaAdn className='icons-adn' size="40px" />
                            </div>
                            <div className="about-txt">
                                <h4 className="trust-part">We believe in trust in the places where we do business.</h4>
                                <p>Whether that’s by engaging honestly, by giving back, by putting safety first, or by looking
                                    for smarter, more sustainable ways to get the job done right.</p>
                            </div>
                        </div>
                        <div className="about-img-txt-part">
                            <div className="about-img">
                                <TbClockHour3 className='icons-clock' size="40px" />
                            </div>
                            <div className="about-txt">
                                <h4 className="trust-part">We believe in trust in the places where we do business.</h4>
                                <p>Whether that’s by engaging honestly, by giving back, by putting safety first, or by looking
                                    for smarter, more sustainable ways to get the job done right.</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-us-right-part">
                        <div className="wrap-our-mision">
                            <div className="create-img-wrap">
                                <h4 className="our-mission">Our Company Mission</h4>
                                {
                                    show ? <img src={Minus} onClick={() => setShow(!show)} alt="" id="honest-part" /> :
                                        <img src={plusicn} onClick={() => setShow(!show)} alt="" id="honest-part" />
                                }
                            </div>
                            {
                                show ? <p className="our-mission-para">Committed to building <br />
                                    <span> We endeavor to place a Constico signature on all our projects by consistently meeting the
                                        requirements of the specifications and by delivering sustainable projects that are a
                                        superior
                                        value to the owner. We take pride in providing a quality product on time. </span>
                                </p> : null
                            }

                        </div>
                        <div className="wrap-our-mision">
                            <div className="create-img-wrap">
                                <h4 className="creative-powerful">Creative and Powerful</h4>
                                {
                                    showCreative ? <img src={Minus} onClick={() => setShowCreative(!showCreative)} alt="" id="honest-part" /> :
                                        <img src={plusicn} onClick={() => { return setShowCreative(!showCreative)} } alt="" id="honest-part" />
                                }
                            </div>
                            {
                                showCreative ? <p className="creative-powerful-para">Committed to building <br />
                                    <span> We take pride in providing a quality product on time. We endeavor to place a Constico
                                        signature
                                        on all our projects by consistently meeting the requirements of the specifications and by
                                        delivering sustainable projects that are a superior value to the owner. </span>
                                </p> : null
                            }

                        </div>
                        <div className="wrap-our-mision">
                            <div className="create-img-wrap">
                                <h4 className="honest-dependable">Honest and Dependable </h4>
                                {
                                    showHonest ? <img src={Minus} onClick={() => setShowHonest(!showHonest)} alt="" id="honest-part" /> :
                                        <img src={plusicn} onClick={() => setShowHonest(!showHonest)} alt="" id="honest-part" />
                                }

                            </div>
                            {
                                showHonest ? <p className="honest-dependable-para">Committed to building <br />
                                    <span> We endeavor to place a Constico signature on all our projects by consistently meeting the
                                        requirements of the specifications and by delivering sustainable projects that are a
                                        superior
                                        value to the owner. </span>
                                </p> : null
                            }

                        </div>
                    </div>
                </div>
            </section>
            <WorkingPage />
        </>
    )
}

export default AboutHome;