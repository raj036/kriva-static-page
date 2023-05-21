import React from 'react';

import './SwiperPart.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

// import images
import constructleftim from '../Assets/secondbackimg.jpg'
import slideOneIm from '../Assets/young-woman-ppe-holds-tablet-blueprint-construction-site-background-194022816.jpg';
import slideTwoIm from '../Assets/istockphoto-1250318692-612x612.jpg'; 



import { Link } from 'react-router-dom';
import Card from './Card';


const SwiperPart = () => {
    return (
        <>
            <div className='wrap-l-r'>

                <div className='wrap-left'>
                    <div className='img-side'>
                        <img src={constructleftim} alt='leftsideconstruction' />
                        <div className='text-img-side'>

                            <h5 className='quality-heading'>HIGH QUALITY GARANTIED</h5>
                            <h2 className='const-business'>CONSTRUCTING <br />
                                IS OUR LIFE BUSINESS</h2>
                            <Link>Our Services</Link>
                            <Link>About Us</Link>
                        </div>
                    </div>
                </div>

                <div className='wrap-right'>
                    <Swiper
                        pagination={{
                            type: "fraction",
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >

                        <SwiperSlide className='slide-one'><img src={slideOneIm} alt='slideone'/></SwiperSlide>
                        <SwiperSlide className='slide-two'><img src={slideTwoIm} alt='slidetwo'/></SwiperSlide>
                    </Swiper>
                </div>

            </div>
            <Card />
        </>
    )
}

export default SwiperPart;