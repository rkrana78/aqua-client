import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faList, faPlus, faSignOutAlt, faTh, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://thawing-scrubland-61740.herokuapp.com/checkAdmin?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [loggedInUser.email])
    return (
        <div className="sidebar d-flex flex-column justify-content-between  py-5 px-4 bg-info" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
            <li>
                    <Link to="/home" className="text-white">
                        <h6>Home</h6>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard" className="text-white">
                        <h6>Dashboard</h6>
                    </Link>
                </li>
                
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faList} /> <span>Order list</span>
                    </Link>
                </li>
                <li>
                    <Link to="/bookService/:id" className="text-white">
                        <FontAwesomeIcon icon={faCartPlus} /> <span>Book Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/testimonial" className="text-white">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Review</span>
                    </Link>
                </li>
                {
                    isAdmin && <div>

                        <li>
                            <Link to="/addService" className="text-white">
                                <FontAwesomeIcon icon={faPlus} /> <span>Add service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addAdmin" className="text-white">
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Make admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/manageService" className="text-white" >
                                <FontAwesomeIcon icon={faTh} /> <span>Manage Services</span>
                            </Link>
                        </li>
                    </div>
                }
            </ul>
            <div>
                <h6 className="text-dark">{loggedInUser.name}</h6>
                <Link to="/" className="text-danger">
                    <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;