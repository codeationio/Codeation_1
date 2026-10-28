import { SERVICES } from "../data";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section
      className="services-section relative z-10 w-full border-t border-slate-200 bg-panel py-24 text-slate-900"
      id="services"
    >
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
        <div className="services-container relative grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-16">
          {/* LEFT — sticky column */}
          <div className="sticky-col no-scrollbar flex max-h-[calc(100vh-110px)] flex-col justify-start overflow-y-auto lg:col-span-4">
            {/* Section header block */}
            <div className="mb-6 flex flex-col">
              <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-100/80 px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-blue-700 shadow-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-brand-blue" />
                // OUR SERVICES • CAPABILITIES
              </div>
              <h2 className="mb-3 font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
                Comprehensive Solutions for Modern Tech
              </h2>
              <p className="font-body text-sm leading-relaxed text-slate-600 md:text-base">
                From agile proof-of-concepts to enterprise cloud architectures, we design, build,
                and scale world-class software that drives measurable market impact.
              </p>
            </div>

            {/* Growth callout card */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-hairline bg-canvas p-6 text-white shadow-2xl transition-all duration-300 md:p-7">
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-blue/30 blur-[75px] transition-all duration-700 group-hover:bg-brand-blue/40" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-brand-cyan/20 blur-[80px]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[20px_20px] opacity-40" />

              <div className="relative z-10">
                <p className="mb-5 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  Partner with seasoned engineers, product architects, and designers to accelerate
                  your product timeline and outpace competition.
                </p>
              </div>

              <div className="relative z-10 flex flex-col gap-2.5 border-t border-hairline pt-4">
                <a
                  className="group/btn inline-flex w-full items-center justify-between rounded-2xl bg-white px-5 py-3 font-body text-xs font-bold uppercase tracking-wider text-slate-950 shadow-lg transition-all duration-300 hover:bg-brand-lime hover:shadow-[0_0_25px_rgba(210,255,55,0.4)] sm:text-sm"
                  href="#client-stories-contact"
                >
                  <span>Get started now!</span>
                  <span className="material-symbols-outlined text-base transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5">
                    arrow_outward
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — scrolling cards */}
          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:col-span-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
