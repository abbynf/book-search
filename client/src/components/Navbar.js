import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <ul>
            <li>
                <Link to="/">Homepage</Link>
            </li>
            <li>
                <Link to="/saved">Saved Books</Link>
            </li>
        </ul>
    )
};

export default Navbar;