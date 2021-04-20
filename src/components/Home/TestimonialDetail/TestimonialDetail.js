import { useSpring } from '@react-spring/core';
import { animated } from '@react-spring/web';
import React from 'react';
import './TestimonialDetail.css'

const TestimonialDetail = (props) => {
    const { name, quote, from, image } = props.testimonial;

    const fade = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        config: {
            delay: 2000,
            duration: 3000
        }
    });
    return (
        <div className="col-md-3 mb-4 text-center review-container container">
            <animated.img style={fade} src={image} alt="" />
            <h4 className="mt-3 mb-3 text-capitalize">{name}</h4>
            <h6 className="">{from}</h6>
            <p className="text-secondary">"{quote}"</p>
        </div>
    );
};

export default TestimonialDetail;
