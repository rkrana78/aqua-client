import React from 'react';
import ManageServices from '../../ManageServices/ManageServices';
import Sidebar from '../Sidebar/Sidebar';

const ManageDashboard = () => {
    return (
        <div>
            <div className="container-fluid row dashboard-container">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-7">
                    <ManageServices />
                </div>
            </div>
        </div>
    );
};

export default ManageDashboard;
