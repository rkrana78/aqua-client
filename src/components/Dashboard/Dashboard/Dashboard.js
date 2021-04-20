import React from 'react';
import Orders from '../../Orders/Orders';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div>
            <div className="container-fluid row dashboard-container">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-7">
                    <Orders/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;