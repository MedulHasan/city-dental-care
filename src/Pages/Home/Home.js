import React from 'react';
import useAuth from '../../hooks/useAuth';
import AlertMessage from '../Shared/Alert/Alert';
import Appointment from './Appointment/Appointment';
import Banner from './Banner/Banner';
import './Home.css'
import MeetCounselors from './MeetCounselors/MeetCounselors';
import Services from './Services/Services';

const Home = () => {
    const { user } = useAuth();
    const dataUrl = 'Counselors.json';
    return (
        <div id="home">
            {/* {
                user.email ? <AlertMessage /> : ''
            } */}
            <Banner />
            <Services />
            <Appointment />
            <MeetCounselors dataUrl={dataUrl} text="Meet Our Counselors" />

        </div>
    );
};

export default Home;