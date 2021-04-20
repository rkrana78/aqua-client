import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

const Footer = () => {
    return (
        <div className=" text-center  ">
            <div style={{background: '#081340'}} className="row py-5 mt-5 ">
                <div className="col-md-3 ml-5 pl-5">
                    <h3 className="text-white mb-4">Address</h3>
                    <p className="text-white">Gec circle, Chittagong</p>
                </div>
                <div className="col-md-3 ">
                    <h3 className="text-white">Follow</h3>
                    <div className="row mt-4 ml-5 pl-2 ">
                        <div className="col-md-3">
                            <FontAwesomeIcon className="text-primary social-icon mb-2" icon={faFacebook} />
                        </div>
                        <div className="col-md-3">
                            <FontAwesomeIcon className="text-primary social-icon mb-2" icon={faTwitter} />
                        </div>
                        <div className="col-md-3">
                            <FontAwesomeIcon className="text-danger social-icon mb-2" icon={faYoutube} />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <h3 className="text-white mb-4">Contact</h3>
                    <p className="text-white">0182457845878</p>
                    <p className="text-white">aqua@gmail.com</p>
                </div>
            </div>
            <div style={{background: '#050D2E', height: '60px', paddingTop:'20px' }}>
            <small style={{color: '#d1d1d1' }}>© all rights reserved by aqua-company</small>
            </div>
           
        </div>
    );
};

export default Footer;