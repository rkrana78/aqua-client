import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css'

const Services = () => {
    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        fetch('https://thawing-scrubland-61740.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [])
    return (
        <section className="bg-light services-container py-5 my-5">
            <div className="text-center">
                <h4 className="text-success mt-5">Choose your Bottle</h4>
                <h1 style={{ color: '#3A4256' }}>Bottles We Deliver</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-4 pt-4">
                    {
                        serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
                </div>

            </div>
            <div className="text-center my-5 pt-5">
                <button className="btn btn-info">View All Bottles</button>
            </div>
        </section>
    );
};

export default Services;
