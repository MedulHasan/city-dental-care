import React from 'react';
import './Blog.css';
import MeerCounselors from '../Home/MeetCounselors/MeetCounselors';

import figImage from '../../images/blog/2.jpg'

const Blog = () => {
    const dataUrl = 'News.json';
    return (
        <div>
            <div className="blog-banner">
                <h1>Our Blog</h1>
                {/* <hr /> */}
            </div>
            <div>
                <div className="figure d-flex align-items-center">
                    <img className="figure-image" src={figImage} alt="" />
                    <div>
                        <h1 className="w-75">Feugiat enim arcu cursus donec elementum</h1>
                        <p className="w-75">October 19, 2021 - No Comments</p>
                        <p className="w-75">Psych is an Elementor website template kit designed and developed specifically to help you build a professional website for psychologist, psychiatrist, mental health counselor and other services that helps people with mental health issues. When you buy our Psych Elementor template kit, you will get 20 professionally designed page & section templates.</p>
                    </div>
                </div>
            </div>
            <MeerCounselors dataUrl={dataUrl} text='Our Latest News' />
        </div>
    );
};

export default Blog;