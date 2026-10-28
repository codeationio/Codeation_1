import { useEffect, useState } from "react"

function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const words = ["design", "build", "scale"]

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <section className="relative z-10 w-full pt-8 pb-6 md:pt-12 md:pb-8 bg-gradient-to-b from-[#e8f1fd] via-[#eef4ff] to-white" id="hero">
      {/* Subtle decorative ambient lights */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[760px] h-[480px] rounded-full bg-[#bfdbfe]/40 blur-[120px]" />
        <div className="absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-[#00d2ff]/20 blur-[100px]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto pt-4">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-[#2563eb]/20 shadow-[0_2px_8px_rgba(37,99,235,0.08)] mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-[#2563eb] animate-ping" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#004ac6]">
              Digital Product & Technology Partner
            </span>
          </div>
          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-[62px] text-[#0b1c30] font-extrabold tracking-tight leading-[1.12] mb-6">
            Bridge the gap
            <br />
            between{' '}
            <span className="italic font-normal text-[#004ac6]">
              Technology
            </span>{' '}
            and{' '}
            <span className="italic font-normal text-[#004ac6]">
              Business
            </span>
          </h1>
          {/* Subtext with dynamic text rotation */}
          <p className="text-[17px] md:text-lg text-[#334155] max-w-2xl leading-relaxed flex items-center justify-center flex-wrap gap-1.5 mb-10">
            We{' '}
            <span className="relative inline-block h-7 w-20 overflow-hidden bg-white/80 rounded-md border border-[#2563eb]/30 shadow-sm px-2 py-0.5">
              <span
                className={`absolute inset-0 flex items-center justify-center font-bold text-[#2563eb] font-mono text-[15px] transition-all duration-500 ease-in-out ${
                  wordIndex === 0 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
                }`}
              >
                {words[0]}
              </span>
              <span
                className={`absolute inset-0 flex items-center justify-center font-bold text-[#2563eb] font-mono text-[15px] transition-all duration-500 ease-in-out ${
                  wordIndex === 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
                }`}
              >
                {words[1]}
              </span>
              <span
                className={`absolute inset-0 flex items-center justify-center font-bold text-[#2563eb] font-mono text-[15px] transition-all duration-500 ease-in-out ${
                  wordIndex === 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
                }`}
              >
                {words[2]}
              </span>
            </span>{' '}
            mission-critical digital products.
          </p>
          {/* CTAs */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#004ac6] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[0_4px_14px_0_rgba(37,99,235,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#003ea8] hover:shadow-[0_6px_20px_0_rgba(37,99,235,0.45)] active:translate-y-0"
              href="#client-stories-contact"
            >
              <span>Initiate Project</span>
              <span className="material-symbols-outlined text-base">arrow_outward</span>
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#2563eb]/30 bg-white/70 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-[#0b1c30] backdrop-blur-sm transition-all duration-300 hover:border-[#2563eb]/50 hover:bg-white"
              href="#what-we-build-scene"
            >
              Explore Capabilities
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero