import { NavLinks } from "../data"

function Navbar({ className = '' }) {
  return (
    <nav className={`hidden items-center gap-1 md:flex ${className}`} aria-label="Primary">
      {NavLinks.map((link) => (
        <a
          key={link.label}
          className="relative rounded-full px-4 py-2 font-body text-sm text-slate-300 transition-all duration-200 hover:bg-white/5 hover:text-white"
          href={link.href}
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}

export default Navbar
