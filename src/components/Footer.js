import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Leanna Fowler • Designed & developed with care and magic.</p>
        </footer>
    );
};

export default Footer;
