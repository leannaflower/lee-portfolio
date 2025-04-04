import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/" className="logo">
                Lee :)
            </NavLink>
            <div className="nav-links">
                <NavLink to="/" end activeClassName="active">Home</NavLink>
                <NavLink to="/projects" activeClassName="active">Projects</NavLink>
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
