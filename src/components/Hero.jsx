import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Innovative IT Solutions for Your Business</h1>
        <p>Customized technology services to help your business thrive in the digital world</p>
        <div className="cta-buttons">
          <Link to="services" smooth={true} duration={500} className="btn primary">Our Services</Link>
          <Link to="contact" smooth={true} duration={500} className="btn secondary">Get in Touch</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;