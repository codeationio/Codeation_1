const capabilities = [
  { label: 'Web & SaaS', href: '#services' },
  { label: 'AI & Machine Learning', href: '#services' },
  { label: 'Mobile Apps', href: '#services' },
  { label: 'Cloud & DevOps', href: '#services' },
  { label: 'Team Augmentation', href: '#services' },
]

const company = [
  { label: 'About Us', href: '#hero' },
  { label: 'Projects & Case Studies', href: '#projects' },
  { label: 'Clients & Proof', href: '#client-stories-contact' },
  { label: 'Careers', href: '#', badge: 'Hiring' },
  { label: 'Insights & Blog', href: '#' },
]

const legal = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'System Status', href: '#' },
]

function Footer() {
  return (
    <footer className="w-full bg-canvas pt-20 pb-14 text-white" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a className="group mb-6 inline-flex items-center gap-2.5" href="#">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                <span className="material-symbols-outlined text-[18px] text-white">code</span>
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-white">Codeation</span>
            </a>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-400">
              Digital product engineering and technology advisory. We turn complex business visions
              into scalable, battle-tested digital platforms.
            </p>
            <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              <span>All Systems Operational • SOC2 Type II Certified</span>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="mb-4 font-mono text-xs font-bold uppercase tracking-wider text-slate-200">Capabilities</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {capabilities.map((link) => (
                <li key={link.label}>
                  <a className="transition-colors hover:text-blue-400" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 font-mono text-xs font-bold uppercase tracking-wider text-slate-200">Company</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {company.map((link) => (
                <li key={link.label}>
                  <a className="transition-colors hover:text-blue-400" href={link.href}>
                    {link.label}
                    {link.badge && (
                      <span className="ml-1 rounded-full bg-blue-500/20 px-2 py-0.5 text-xs text-blue-300">
                        {link.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4 font-mono text-xs font-bold uppercase tracking-wider text-slate-200">Connect</h4>
            <p className="mb-2 text-sm text-slate-400">San Francisco, CA &amp; Remote Global</p>
            <a
              className="mb-4 block text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
              href="mailto:hello@codeation.com"
            >
              hello@codeation.com
            </a>
            <div className="flex items-center gap-3">
              <a
                aria-label="GitHub"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                href="#"
              >
                <span className="material-symbols-outlined text-base">terminal</span>
              </a>
              <a
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                href="#"
              >
                <span className="material-symbols-outlined text-base">share</span>
              </a>
              <a
                aria-label="X Twitter"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                href="#"
              >
                <span className="material-symbols-outlined text-base">forum</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-hairline pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© 2025 Codeation Inc. All rights reserved. Engineering excellence guaranteed.</p>
          <div className="flex items-center gap-6">
            {legal.map((link) => (
              <a key={link.label} className="transition-colors hover:text-slate-400" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
