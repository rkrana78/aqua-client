import React from 'react';
import AddService from '../../Home/AddService/AddService';
import Sidebar from '../Sidebar/Sidebar';

const ServiceDashboard = () => {
    return (
        <div>
            <div className="container-fluid row dashboard-container">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-7">
                    <AddService/>
                </div>
            </div>
        </div>
    );
};

export default ServiceDashboard;