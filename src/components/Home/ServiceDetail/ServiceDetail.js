import React from 'react';
import { Link } from 'react-router-dom';
import {useSpring, animated} from 'react-spring'
import './ServiceDetail.css'

const ServiceDetail = ({ service }) => {
    const fade = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        config: {
            delay: 3000,
            duration: 4000
        }
    });
    return (
        <div className="col-md-3 text-center bottle-container container">
            <animated.img  style={fade} src={service.imageURL} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary">{service.description}</p>
            <h5 className="text-danger">{service.price}</h5>
            <Link to={`/bookService/${service._id}`}><button  className="btn btn-success">Order Now</button></Link>
        </div>
    );
};

export default ServiceDetail;