function ContactForm() {
  return (
    <div className="flex flex-col justify-between bg-brand-blue p-8 text-white md:p-10 lg:col-span-7 lg:p-12">
      <div>
        <div className="mb-3 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-slate-200">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-100" />
          // INITIATE DIALOGUE
        </div>
        <h3 className="mb-2 font-display text-2xl font-bold leading-snug tracking-tight text-white md:text-3xl">
          LET&apos;S BUILD
        </h3>
        <p className="mb-8 font-body text-sm leading-relaxed text-slate-100 md:text-base">
          Have a product, platform, or business challenge in mind? Tell us what you&apos;re building.
        </p>

        <form action="mailto:hello@codeation.io" className="space-y-4" encType="text/plain" method="POST">
          <div>
            <label className="mb-1 block font-mono text-xs font-medium uppercase text-white" htmlFor="contact-name">
              Name
            </label>
            <input
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white transition-all placeholder:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              id="contact-name"
              name="name"
              placeholder="Your name or team"
              required
              type="text"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block font-mono text-xs font-medium uppercase text-white" htmlFor="contact-email">
                Work Email
              </label>
              <input
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white transition-all placeholder:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                id="contact-email"
                name="email"
                placeholder="name@company.com"
                required
                type="email"
              />
            </div>
            <div>
              <label className="mb-1 block font-mono text-xs font-medium uppercase text-white" htmlFor="contact-company">
                Company
              </label>
              <input
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white transition-all placeholder:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                id="contact-company"
                name="company"
                placeholder="Organization name"
                type="text"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block font-mono text-xs font-medium uppercase text-white" htmlFor="contact-message">
              Tell us about your project
            </label>
            <textarea
              className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white transition-all placeholder:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              id="contact-message"
              name="message"
              placeholder="Describe your scope, timeline, or challenge..."
              required
              rows="3"
            />
          </div>
          <div className="pt-2">
            <button
              className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-3.5 font-display text-sm font-bold tracking-wide text-brand-blue shadow-sm transition-all duration-200 hover:bg-slate-100 active:translate-y-0.5"
              type="submit"
            >
              <span>LET&apos;S TALK</span>
              <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </form>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-6 font-mono text-xs text-slate-100">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          Guaranteed 24hr response
        </span>
        <a className="transition-colors hover:text-white" href="mailto:hello@codeation.io">
          hello@codeation.io
        </a>
      </div>
    </div>
  )
}

export default ContactForm
