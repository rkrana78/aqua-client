import React, { useEffect, useState } from 'react';
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';

const Testimonials = () => {
    const [testimonialData, setTestimonialData] = useState([]);

    useEffect(() => {
        fetch('https://thawing-scrubland-61740.herokuapp.com/testimonials')
            .then(res => res.json())
            .then(data => setTestimonialData(data))
    }, [])
    return (
        <section className="testimonials my-5 py-5">
            <div className="container text-center">
                <div className="section-header">
                    <h4 className="text-success text-uppercase">Testimonial</h4>
                    <h1 style={{ color: '#3A4256' }}>WHAT OUR CLIENTS SAY </h1>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="w-100 row mt-5 pt-4">
                        {
                            testimonialData.map(testimonial => <TestimonialDetail testimonial={testimonial} key={testimonial.name} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

