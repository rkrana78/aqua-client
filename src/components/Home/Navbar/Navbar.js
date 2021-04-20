import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Navbar.css'

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-container container">
            <div className="container-fluid">
                <Link to="/home" className="navbar-brand" ><h1 className="text-light">Aqua</h1></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <Link to="/" className="nav-link active mr-3 mt-1 text-light" aria-current="page" >Home</Link>
                        <Link to="/services" className="nav-link mr-3 mt-1 text-light" >Services</Link>
                        <Link to="/about" className="nav-link mr-3 mt-1 text-light" >About</Link>
                        <Link to="/dashboard" className="nav-link mr-3 mt-1 text-light" >Dashboard</Link>
                        <Link to="/contact" className="nav-link mr-3 mt-1 text-light" >Contact us</Link>
                        <h6 className="nav-link">{loggedInUser.isSignedIn ? loggedInUser.name : <Link to="/login" className="nav-link"><button className="btn btn-danger btn-sm mr-2">Log in</button></Link>} </h6>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;



