import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight, faMapMarkerAlt, faMobileAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons'
import './Footer.css';

import facebook from '../../../images/social-icon/facebook-square-brands.svg';
import twitter from '../../../images/social-icon/twitter-square-brands.svg';
import instagram from '../../../images/social-icon/instagram-square-brands.svg';

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="footer-about-us">
                    <h1>About us</h1>
                    <hr />
                    <ul className="mt-5" >
                        <li><FontAwesomeIcon className="me-3" icon={faMapMarkerAlt} /> 73 Canal Street, New York, NY</li>
                        <li><FontAwesomeIcon className="me-3" icon={faMobileAlt} /> +123456789</li>
                        <li><FontAwesomeIcon className="me-3" icon={faPhoneAlt} /> +123456789</li>
                        <li><FontAwesomeIcon className="me-3" icon={faEnvelope} /> support@citydental.com</li>
                    </ul>
                    <div className="footer-social-icon">
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={instagram} alt="" />
                        {/* <FontAwesomeIcon className="social-icon" icon={faFacebook} />
                    <FontAwesomeIcon className="social-icon" icon={faTwitter} />
                    <FontAwesomeIcon className="social-icon" icon={faInstagram} /> */}
                    </div>
                </div>
                <div className="footer-services">
                    <h1>Services</h1>
                    <hr />
                    <h6 className="service-item mt-5 mb-4"><FontAwesomeIcon icon={faAngleRight} /> Dental Fillings</h6>
                    <h6 className="service-item mb-4"><FontAwesomeIcon icon={faAngleRight} /> Orthodontics</h6>
                    <h6 className="service-item mb-4"><FontAwesomeIcon icon={faAngleRight} /> Root Canal Treatment</h6>
                    <h6 className="service-item mb-4"><FontAwesomeIcon icon={faAngleRight} /> Routine Dental Exam</h6>
                    <h6 className="service-item mb-4"><FontAwesomeIcon icon={faAngleRight} /> Teeth Whitening</h6>
                    <h6 className="service-item mb-4"><FontAwesomeIcon icon={faAngleRight} /> Tooth Extraction</h6>
                </div>
                <div className="footer-opening-hours">
                    <h1>Opening Hours</h1>
                    <hr />
                    <div className="time mt-5">
                        <p> <FontAwesomeIcon icon={faClock} /> Monday</p>
                        <h6>8.00 AM - 9.00 PM</h6>
                    </div>
                    <div className="time">
                        <p> <FontAwesomeIcon icon={faClock} /> Tuesday</p>
                        <h6>8.00 AM - 9.00 PM</h6>
                    </div>
                    <div className="time">
                        <p> <FontAwesomeIcon icon={faClock} /> Wednesday</p>
                        <h6>8.00 AM - 9.00 PM</h6>
                    </div>
                    <div className="time">
                        <p> <FontAwesomeIcon icon={faClock} /> Thursday</p>
                        <h6>8.00 AM - 9.00 PM</h6>
                    </div>
                    <div className="time">
                        <p> <FontAwesomeIcon icon={faClock} /> Friday</p>
                        <h6>8.00 AM - 9.00 PM</h6>
                    </div>
                    <div className="time">
                        <p> <FontAwesomeIcon icon={faClock} /> Saturday</p>
                        <h6>8.00 AM - 9.00 PM</h6>
                    </div>
                    <div className="time">
                        <p> <FontAwesomeIcon icon={faClock} /> Sunday</p>
                        <h6>CLOSED</h6>
                    </div>
                </div>

            </div>
            <div className="copyrignt">
                <p>Copyright &copy; 2021, City Dental Care. All Rights Reserved.</p>
            </div>
        </>
    );
};

export default Footer;