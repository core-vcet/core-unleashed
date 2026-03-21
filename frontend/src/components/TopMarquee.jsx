const MarqueeMessage = () => (
  <p className="top-marquee-message">
    Registrations now end on March
    <span className="top-marquee-number">31st</span>
    !
  </p>
)

export default function TopMarquee() {
  return (
    <div className="top-marquee-shell">
      <span className="sr-only">Registrations now end on March 31st!</span>

      <div className="top-marquee" aria-hidden="true">
        <div className="top-marquee-track">
          <MarqueeMessage />
          <MarqueeMessage />
          <MarqueeMessage />
          <MarqueeMessage />
        </div>
      </div>
    </div>
  )
}
