import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Our Company</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Making Digital Tools Accessible</h3>
            <p>
              TechSolutions LLC is an IT services provider specializing in customized solutions for small and medium-sized businesses. 
              Founded in [Year], we've helped numerous clients navigate digital transformation with reliable, secure, 
              and innovative technology services.
            </p>
            <p>
              Our mission is to make digital tools accessible, secure, and tailored to the real needs of our clients 
              through collaborative, innovative, and cost-efficient IT services.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h4>50+</h4>
              <p>Satisfied Clients</p>
            </div>
            <div className="stat">
              <h4>100%</h4>
              <p>Client Retention</p>
            </div>
            <div className="stat">
              <h4>24/7</h4>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;