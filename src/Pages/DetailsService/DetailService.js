import React from 'react';
import './DetailService.css';
import { useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const DetailService = () => {
    const location = useLocation();
    const service = location.state.service;
    return (
        <div className="header-container">
            <header className="header-details">
                <h2>{service.name}</h2>
                <h6>
                    <Link style={{ textDecoration: 'none', color: '#fff' }} to="/"><FontAwesomeIcon icon={faHome} />Home </Link>
                    <span><FontAwesomeIcon icon={faChevronRight} /> {service.name}</span>
                </h6>
            </header>
            <main className="footer-main">
                <img src={service.img} alt="" />
                <div className="footer-main-text">
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                </div>
            </main>
            <section className="price-section">
                <h3 className="mb-5">Our Competitive Pricing</h3>
                <div className="home-container98">
                    <div className="home-price mb-5">
                        <div>
                            <h5>Take-Home Whitening Kits</h5>
                            <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                        </div>
                        <h5>${service.priceHome}</h5>
                    </div>
                    <div className="home-price">
                        <div>
                            <h5>In office Whitening</h5>
                            <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                        </div>
                        <h5>${service.priceOffice}</h5>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DetailService;