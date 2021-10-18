import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../images/banner/1.png';
import slider2 from '../../../images/banner/3.png';
import sld from '../../../images/banner/2.png';
import slider3 from '../../../images/banner/5.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div>
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
                    {/* <div className="banner-text2">
                        <h1>YOUR HEALTH</h1>
                        <h1>OUR FIRST PRIORITY</h1>
                    </div> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="slider d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;