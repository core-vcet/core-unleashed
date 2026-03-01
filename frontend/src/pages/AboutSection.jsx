import React from 'react';
import './AboutSection.css';

const About = () => {
  return (
    <section className="about-core-section">
      <div className="about-core-content section-fade-content">

        <div className="about-core-text-content">
          <section className="about-core-block about-core-block-advantage">
            <h3 className="about-core-subheading about-core-subheading-advantage">
              The <span className="unleashed-word">UNLEASHED</span> Advantage
            </h3>

            <div className="about-core-cards" role="list" aria-label="Unleashed advantages">
              <article className="about-core-card" role="listitem">
                <p className="about-core-card-text">
                  <span className="about-core-strong">The Prize Pool:</span> Battle it out for a share of the ₹50,000 grand prize pool.
                </p>
              </article>

              <article className="about-core-card" role="listitem">
                <p className="about-core-card-text">
                  <span className="about-core-strong">Career Catalyst:</span> Beyond the trophies, Codezyng is offering exclusive internship opportunities to standout participants, giving you a direct path from the hackathon floor to the professional tech world.
                </p>
              </article>

              <article className="about-core-card" role="listitem">
                <p className="about-core-card-text">
                  <span className="about-core-strong">36 Hours of Hustle:</span> A concentrated burst of creativity, mentorship, and rapid prototyping to turn "just an idea" into a working MVP.
                </p>
              </article>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;
