import React from 'react';
import Appointment from './Appointment/Appointment';
import Banner from './Banner/Banner';
import './Home.css'
import MeetCounselors from './MeetCounselors/MeetCounselors';
import Services from './Services/Services';

const Home = () => {
    const dataUrl = 'Counselors.json';
    return (
        <div id="home">
            <Banner />
            <Services />
            <Appointment />
            <MeetCounselors dataUrl={dataUrl} text="Meet Our Counselors" />
        </div>
    );
};

export default Home;