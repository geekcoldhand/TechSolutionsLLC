import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">TechSolutions LLC</div>
        <nav>
          <ul>
            <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li><Link to="team" smooth={true} duration={500}>Team</Link></li>
            <li><Link to="pricing" smooth={true} duration={500}>Pricing</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;