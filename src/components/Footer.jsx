import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TechSolutions LLC</h3>
            <p>Providing innovative IT solutions to help your business thrive in the digital world.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
              <li><Link to="about" smooth={true} duration={500}>About</Link></li>
              <li><Link to="team" smooth={true} duration={500}>Team</Link></li>
              <li><Link to="pricing" smooth={true} duration={500}>Pricing</Link></li>
              <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Web Development</li>
              <li>IT Support</li>
              <li>Graphic Design</li>
              <li>AI Integration</li>
              <li>Cybersecurity</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} TechSolutions LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;