import { useEffect, useRef, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/AboutSection"
import HowToUnleash from "./components/HowToUnleashSection"
import TimelineSection from "./components/TimelineSection"
import LazySection from "./components/LazySection"

function WhatIsUnleashedSection() {
  return (
    <section className="h-full w-full flex items-center justify-center px-5 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-12 md:py-14">
      <div className="w-full max-w-6xl text-white">
        <h2
          className="section-heading-size leading-tight mb-4 sm:mb-5 md:mb-6"
          style={{ fontFamily: "GomariceNoContinue", fontWeight: 700 }}
        >
          What is CoRE <span className="unleashed-word">UNLEASHED</span>?
        </h2>

        <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-4 sm:mb-5"
          style={{ fontFamily: "Inter", fontWeight: 500 }}
        >
          CoRE <span className="unleashed-word">UNLEASHED</span> is a high-octane 36-hour innovation marathon organized by the Center of Research Excellency (CoRE) in proud collaboration with the IEEE VCET Student Branch and our industry partner, Codezyng.
        </p>

        <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed"
          style={{ fontFamily: "Inter", fontWeight: 500 }}
        >
          Taking place from April 24th to 26th, 2026, at VCET, Puttur, this event is designed to be the ultimate testing ground for student developers, designers, and problem-solvers. We’re providing the platform; you provide the code that breaks the status quo.
        </p>
      </div>
    </section>
  )
}

// Main landing page with scrollable sections
function LandingPage() {
  const scrollContainerRef = useRef(null)
  const [showScrollTopButton, setShowScrollTopButton] = useState(false)

  useEffect(() => {
    const element = scrollContainerRef.current

    if (!element) {
      return
    }

    const onScroll = () => {
      setShowScrollTopButton(element.scrollTop > 120)
    }

    element.addEventListener('scroll', onScroll)
    onScroll()

    return () => {
      element.removeEventListener('scroll', onScroll)
    }
  }, [])

  const scrollToHome = () => {
    if (!scrollContainerRef.current) {
      return
    }

    scrollContainerRef.current.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div ref={scrollContainerRef} className="h-[100dvh] overflow-y-auto scroll-smooth snap-y snap-mandatory">
      {/* Section 1 - Home (Load immediately, it's above the fold) */}
      <section className="snap-start snap-always h-[100dvh] bg-black text-white">
        <Home />
      </section>

      {/* Section 2 - What is CoRE UNLEASHED? */}
      <LazySection className="snap-start snap-always h-[100dvh] event-section-bg text-white">
        <WhatIsUnleashedSection />
      </LazySection>

      {/* Section 3 - The UNLEASHED Advantage (Lazy load when scrolling) */}
      <LazySection className="snap-start snap-always h-[100dvh] event-section-bg text-white">
        <About />
      </LazySection>

      {/* Section 4 - How to UNLEASH? (Lazy load when scrolling) */}
      <LazySection className="snap-start snap-always h-[100dvh] event-section-bg">
        <HowToUnleash />
      </LazySection>

      {/* Section 5 - Timeline (Lazy load when scrolling) */}
      <LazySection className="snap-start snap-always h-[100dvh] event-section-bg">
        <TimelineSection />
      </LazySection>

      <button
        type="button"
        onClick={scrollToHome}
        aria-label="Scroll back to home section"
        className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 bg-[#E8B88A] text-black rounded-full h-11 w-11 sm:h-12 sm:w-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-[#d9a87b] ${showScrollTopButton ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}
      >
        <span className="text-xl leading-none" style={{ fontFamily: 'GomariceNoContinue', fontWeight: 700 }}>
          ↑
        </span>
      </button>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}
