/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = () => {
    const [services, serServices] = useState([]);

    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => serServices(data))
    }, [])
    return (
        <>
            <div className="our-services mt-4">
                <h1>Our Services</h1>
                <hr />
            </div>
            <div className="services-section">
                {
                    services.map((service) =>
                        <div key={service.id} className="service-single card">
                            <img src={service.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{service.name}</h5>
                                <Link to="/">View Details</Link>
                            </div>
                        </div>
                    )
                }
            </div></>
    );
};

export default Services;