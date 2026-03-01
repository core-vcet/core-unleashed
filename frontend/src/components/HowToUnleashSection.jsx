import React from 'react'
import '../assets/fonts/fonts.css'

const HowToUnleash = () => {
  return (
    <main className="rules-page">
      <section className="rules-content">
        <h1 className="rules-heading">
          How to "<span className="unleashed-word">UNLEASH</span>"?
        </h1>

        <div className="rules-journey" role="list" aria-label="How to Unleash steps">
          <article className="rules-step-card" role="listitem">
            <div className="rules-step-badge">01</div>
            <p className="rules-step-text">
              <span className="rules-step-title">Form Your Squad!:</span> Gather your most reliable teammates.
            </p>
          </article>

          <article className="rules-step-card" role="listitem">
            <div className="rules-step-badge">02</div>
            <p className="rules-step-text">
              <span className="rules-step-title">Pick a Challenge:</span> Choose from our diverse technical tracks.
            </p>
          </article>

          <article className="rules-step-card" role="listitem">
            <div className="rules-step-badge">03</div>
            <p className="rules-step-text">
              <span className="rules-step-title">Build Non-Stop:</span> 36 hours to code, design, and deploy.
            </p>
          </article>

          <article className="rules-step-card" role="listitem">
            <div className="rules-step-badge">04</div>
            <p className="rules-step-text">
              <span className="rules-step-title">Pitch to the Pros:</span> Present your solution to a panel of industry experts.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default HowToUnleash
