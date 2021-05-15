import React from "react";
import "../assets/styles/components/Footer.scss";

const Footer = () => (
    <footer className="footer">
        <div className="footer__made">
            Made by
            <a
                href="https://www.linkedin.com/in/carlos-poblete-o/"
                rel="noopener noreferrer"
                target="_blank"
                className="logo"
            >
                <span className="logo-img">&lt;&gt;</span> <span>Carlos Poblete</span>
            </a>
        </div>
        <div className="footer_location">
            CH,
            <span>Curiyork</span>, 2021
        </div>
    </footer>
);

export default Footer;