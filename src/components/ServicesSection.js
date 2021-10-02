import React from 'react';
// Icons
import clock from './../images/clock.svg';
import diaphragm from './../images/diaphragm.svg';
import money from './../images/money.svg';
import teamwork from './../images/teamwork.svg';
import home2 from './../images/home2.png';

const ServicesSection = () => {
    return (
        <div className="services">
            <div className="decription">
                <h2>High <span>quality</span> service</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={ clock } alt="" />
                            <h3>Efficient</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={ teamwork } alt="" />
                            <h3>Teamwork</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={ diaphragm } alt="" />
                            <h3>Diaphragm</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={ money } alt="" />
                            <h3>Affordable</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={ home2 } alt="" />
            </div>
        </div>
    );
}

export default ServicesSection;
