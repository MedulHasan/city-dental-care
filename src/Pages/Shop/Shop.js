import React, { useEffect, useState } from 'react';
import './Shop.css';
import shopBanner from '../../images/shop/1.png';

const Shop = () => {
    const [drags, setDrags] = useState([]);
    useEffect(() => {
        fetch('shop.json')
            .then(res => res.json())
            .then(data => setDrags(data))
    }, [])
    return (
        <div id="shop">
            <div className="shop-banner">
                <div className="shop-banner-text">
                    <h1>Eco drinkfor daily dosing</h1>
                    <p>There are a number of different drugs your dentist may prescribe, depending on your condition. Some medications are prescribed to fight certain oral diseases, to prevent or treat infections, or to control pain and relieve anxiety.</p>
                </div>
                <img src={shopBanner} alt="" />
            </div>
            <div className="featured-product">
                <div className="flex-container">
                    <hr />
                    <h3>Featured products:</h3>
                    <hr />
                </div>
                <div className="drag-container">
                    {
                        drags.map(drag =>
                            <div key={drag.id} className=" inside-card">
                                <img src={drag.img} className="card-img-top" alt="..." />
                                <div className="card-body mt-3">
                                    <h5 className="card-title">{drag.name}</h5>
                                    <p className="card-text">${drag.price}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;