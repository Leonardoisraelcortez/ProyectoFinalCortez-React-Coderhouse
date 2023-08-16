import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <footer className="footer">
            <div className="footerText">
                <p>Bonsai Studio 2023 © Todos los derechos reservados © By Leo</p>
            </div>
            <div className="footerRedes">
                <Link to="https://twitter.com/" target="_blank"><TwitterIcon className="footerI" /></Link>
                <Link to="https://www.facebook.com/" target="_blank"><FacebookIcon className="footerI" /></Link>
                <Link to="https://www.instagram.com/" target="_blank"><InstagramIcon className="footerI" /></Link>
            </div>
        </footer>
    );
}

export default Footer;
