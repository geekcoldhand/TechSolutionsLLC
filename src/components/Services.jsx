import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Web Design & Development",
      description: "Professional websites with React.js, Next.js, and mobile optimization",
      icon: "💻"
    },
    {
      title: "Graphic Design & Branding",
      description: "Logo design, branding packages, and marketing materials",
      icon: "🎨"
    },
    {
      title: "IT Support & Consulting",
      description: "Monthly retainers or hourly support for your business needs",
      icon: "🛠️"
    },
    {
      title: "Cybersecurity Assessment",
      description: "Vulnerability scans and security improvement plans",
      icon: "🔒"
    },
    {
      title: "Custom App Development",
      description: "Tailored applications for your specific business processes",
      icon: "📱"
    },
    {
      title: "AI Integration",
      description: "Automation and productivity solutions with AI technology",
      icon: "🤖"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;