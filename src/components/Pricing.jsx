import React from 'react';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Web Design & Hosting",
      price: "$1,500+",
      features: ["Custom website", "Mobile optimization", "Basic SEO", "1 year hosting"],
      bestValue: false
    },
    {
      name: "IT Support",
      price: "$500+/mo",
      features: ["Monthly retainer", "Priority support", "System maintenance", "Basic troubleshooting"],
      bestValue: true
    },
    {
      name: "Custom App Development",
      price: "$3,000+",
      features: ["Tailored to your needs", "User testing", "Documentation", "1 month support"],
      bestValue: false
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2>Pricing Plans</h2>
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.bestValue ? 'highlight' : ''}`}>
              {plan.bestValue && <div className="best-value">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price">{plan.price}</div>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className="btn primary">Get Started</button>
            </div>
          ))}
        </div>
        <div className="custom-quote">
          <p>Need something custom? We offer AI consultation at $250/hr and cybersecurity assessments starting at $750.</p>
          <button className="btn secondary">Request a Quote</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;