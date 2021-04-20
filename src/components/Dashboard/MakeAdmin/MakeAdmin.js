import React from 'react';
import AddAdmin from '../../AddAdmin/AddAdmin';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    return (
        <div>
            <div className="container-fluid row dashboard-container">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-7">
                    <AddAdmin />
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;