import React, { useEffect, useState } from 'react';
import './MeetCounselors.css';

const MeetCounselors = () => {
    const [counselors, setCounselors] = useState([]);
    useEffect(() => {
        fetch('Counselors.json')
            .then(res => res.json())
            .then(data => setCounselors(data))
    }, [])
    return (
        <div className="py-5">
            <div className="counselor-text">
                <h1>Meet Our Counselors</h1>
                <p>Elit sit risus lorem proin eget eu molestie nibh odioa non neque turpis proin viverra velarcu venenatis Elit sit risus lorem proin.</p>
            </div>
            <div className="counselor-container">
                {
                    counselors.map(counselor =>
                        <div key={counselor.id} className="counselor card">
                            <img src={counselor.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{counselor.name}</h5>
                                <p className="card-text">{counselor.sub}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MeetCounselors;