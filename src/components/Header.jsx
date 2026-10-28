import { useState } from 'react'
import Navbar from './Navbar'
import { NavLinks } from '../data'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-hairline bg-glass backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <a className="group flex items-center gap-2.5" href="#hero">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-transform duration-300 ease-out group-hover:scale-105">
            <span className="material-symbols-outlined text-[18px] text-white">code</span>
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-brand-cyan">
            Codeation
          </span>
        </a>

        {/* Desktop navigation */}
        <Navbar />

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 font-body text-xs font-bold uppercase tracking-wider text-slate-950 shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-brand-lime hover:shadow-[0_0_24px_rgba(210,255,55,0.4)] active:translate-y-0"
            href="#client-stories-contact"
          >
            Initiate Project ↗
          </a>
          <button
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-slate-300 transition-colors hover:bg-white/5 hover:text-white md:hidden"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="material-symbols-outlined text-xl">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {menuOpen && (
        <nav className="border-t border-hairline bg-glass px-6 py-3 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {NavLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="block rounded-lg px-3 py-2.5 font-body text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
