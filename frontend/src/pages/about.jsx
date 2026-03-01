import React from 'react';
import './about.css';

const About = () => {
  return (
    <section className="about-core-section">
      <div className="about-core-content section-fade-content">

        <div className="about-core-text-content">
          <section className="about-core-block about-core-block-advantage">
            <h3 className="about-core-subheading">
              The <span className="about-core-unleashed">UNLEASHED</span> Advantage
            </h3>

            <ul className="about-core-list">
              <li className="about-core-list-item">
                <span className="about-core-strong">The Prize Pool:</span> Battle it out for a share of the ₹50,000 grand prize pool.
              </li>
              <li className="about-core-list-item">
                <span className="about-core-strong">Career Catalyst:</span> Beyond the trophies, Codezyng is offering exclusive internship opportunities to standout participants, giving you a direct path from the hackathon floor to the professional tech world.
              </li>
              <li className="about-core-list-item">
                <span className="about-core-strong">36 Hours of Hustle:</span> A concentrated burst of creativity, mentorship, and rapid prototyping to turn "just an idea" into a working MVP.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;
