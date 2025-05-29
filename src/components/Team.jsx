import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "Jamal Kareem Cissoko",
      role: "Head of IT Department",
      expertise: "Cybersecurity, System Design, Infrastructure",
      image: "👨🏾‍💻"
    },
    {
      name: "Ange-Kenny Yapo",
      role: "Head of Graphic & Digital Design",
      expertise: "Branding, Creative Marketing Assets",
      image: "👨🏾‍🎨"
    },
    {
      name: "Horatious Harris",
      role: "Head of Web & Software Development",
      expertise: "Custom Web & App Development, UI/UX",
      image: "👨🏾‍🔧"
    }
  ];

  return (
    <section id="team" className="team">
      <div className="container">
        <h2>Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image">{member.image}</div>
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="expertise">{member.expertise}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;