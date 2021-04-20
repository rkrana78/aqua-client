import React from 'react';
import BookService from '../../BookService/BookService';
import Sidebar from '../Sidebar/Sidebar';

const BookDashboard = () => {
    return (
        <div>
            <div className="container-fluid row dashboard-container">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-7">
                    <BookService />
                </div>
            </div>
        </div>
    );
};

export default BookDashboard;