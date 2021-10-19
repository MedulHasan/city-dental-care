import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../images/banner/1.png';
import slider2 from '../../../images/banner/3.png';
import sld from '../../../images/banner/2.png';
import slider3 from '../../../images/banner/6.png';
import './Banner.css'

const Banner = () => {
    return (
        <div className="home-banner">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="slider d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />
                    <img className="banner2" src={sld} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="slider d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;