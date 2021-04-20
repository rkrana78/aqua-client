import React from 'react';
import AddTestimonial from '../../Home/AddTestimonial/AddTestimonial';
import Sidebar from '../Sidebar/Sidebar';

const TestimonialDashboard = () => {
    return (
        <div>
            <div className="container-fluid row dashboard-container">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-7">
                    <AddTestimonial />
                </div>
            </div>
        </div>
    );
};

export default TestimonialDashboard;