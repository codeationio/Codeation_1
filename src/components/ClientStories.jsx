import { useEffect, useState } from 'react'
import { TESTIMONIALS } from '../data'

const STORY_INTERVAL = 6000
const pad = (n) => String(n).padStart(2, '0')

function ClientStories() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % TESTIMONIALS.length)
    }, STORY_INTERVAL)
    return () => clearInterval(timer)
  }, [paused])

  const goTo = (idx) =>
    setCurrent(((idx % TESTIMONIALS.length) + TESTIMONIALS.length) % TESTIMONIALS.length)

  return (
    <div
      className="relative flex flex-col justify-between bg-white p-8 md:p-10 lg:col-span-5 lg:p-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Decorative quote mark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-8 top-4 select-none font-serif text-[140px] font-bold leading-none text-slate-100 opacity-60 md:right-12 md:text-[200px]"
      >
        &ldquo;
      </div>

      <div className="relative z-10">
        <div className="mb-4 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-blue-600">
          <span className="inline-block h-2 w-2 rounded-full bg-blue-600 shadow-sm" />
          // CLIENT STORIES
        </div>
        <h3 className="mb-8 max-w-md font-display text-xl font-bold uppercase leading-snug tracking-tight text-slate-900 md:text-2xl">
          What our customer&apos;s say
        </h3>

        <div aria-live="polite" className="relative mb-8 min-h-[220px] md:min-h-[200px]">
          {TESTIMONIALS.map((story, idx) => (
            <div
              key={story.id}
              className={`flex flex-col justify-between transition-all duration-300 ease-out ${
                idx === current ? 'opacity-100 translate-y-0' : 'absolute inset-0 hidden opacity-0 translate-y-2'
              }`}
            >
              <blockquote className="mb-6 text-base font-medium leading-relaxed tracking-normal text-slate-700 md:text-lg">
                &ldquo;{story.quote}&rdquo;
              </blockquote>
              <div className="pt-2">
                <div className="text-base font-bold text-slate-900 md:text-lg">{story.name}</div>
                <div className="mt-0.5 text-xs font-medium text-slate-500 md:text-sm">{story.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="relative z-10 flex items-center justify-between border-t border-slate-100 pt-6">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs font-semibold tracking-widest text-slate-900">
            {pad(current + 1)} / {pad(TESTIMONIALS.length)}
          </span>
          <div className="flex items-center gap-1.5">
            {TESTIMONIALS.map((story, idx) => (
              <button
                key={story.id}
                aria-label={`Go to story ${idx + 1}`}
                className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                  idx === current ? 'w-6 bg-blue-600' : 'w-2 bg-slate-200 hover:bg-slate-300'
                }`}
                type="button"
                onClick={() => goTo(idx)}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            aria-label="Previous Testimonial"
            className="flex cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm transition-colors hover:border-blue-500 hover:text-blue-600 active:scale-95"
            type="button"
            onClick={() => goTo(current - 1)}
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            aria-label="Next Testimonial"
            className="flex cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm transition-colors hover:border-blue-500 hover:text-blue-600 active:scale-95"
            type="button"
            onClick={() => goTo(current + 1)}
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ClientStories
