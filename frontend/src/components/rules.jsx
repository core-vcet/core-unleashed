import React from 'react'
import '../assets/fonts/fonts.css'

const Rules = () => {
  return (
    <main className="rules-page">
      <section className="rules-content">
        <h1 className="rules-heading">
          How to "<span style={{ fontFamily: 'Blowbrush', color: '#E8B88A', fontWeight: 400 }}>UNLEASH</span>"?
        </h1>

        <div className="rules-section">
          <div className="rules-list">
            <ul>
              <li>
                <span style={{ fontFamily: 'GomariceNoContinue', fontWeight: 700, color: '#E8B88A' }}>Form Your Squad!:</span> Gather your most reliable teammates.
              </li>
              <li>
                <span style={{ fontFamily: 'GomariceNoContinue', fontWeight: 700, color: '#E8B88A' }}>Pick a Challenge:</span> Choose from our diverse technical tracks.
              </li>
              <li>
                <span style={{ fontFamily: 'GomariceNoContinue', fontWeight: 700, color: '#E8B88A' }}>Build Non-Stop:</span> 36 hours to code, design, and deploy.
              </li>
              <li>
                <span style={{ fontFamily: 'GomariceNoContinue', fontWeight: 700, color: '#E8B88A' }}>Pitch to the Pros:</span> Present your solution to a panel of industry experts.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Rules
