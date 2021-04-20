import React from 'react';
import delivery from '../../../images/delivery.jpg'
import './About.css'

const About = () => {
    return (
        <div className="my-5 py-5 about-container">
            <div className="row">
            <div className="col-md-6 offset-1">
                <img style={{height: '400px', width: '500x'}} src={delivery} alt=""/>
            </div>
            <div className="col-md-4 ml-3">
                <h1>Learn About <span className="text-success">Aqua</span> </h1>
                <p style={{fontFamily: 'roboto'}}>There are many variations of passages of available but the majority have alteration in some form by inject humour or random words which don't look even slightly they will believe you. proident.
                We now deliver different types of bottled water. To drink the best water please come to us and give us an order and take safe and sound water for you. 
                </p>
                <button className="btn btn-info">Read more</button>
            </div>
        </div>
        </div>
    );
};

export default About;