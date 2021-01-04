import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <ul className="nav">
                    <li className="nav-item" id="nav-page">
                        <Link to="/" className="nav-link" id="nav-page">Homepage</Link>
                    </li>
                    <li className="nav-item" id="nav-page">
                        <Link to="/saved" className="nav-link" id="nav-page">Saved Books</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar; 