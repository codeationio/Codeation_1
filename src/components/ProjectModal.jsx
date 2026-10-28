import { useEffect } from "react"

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return
    const onKey = (e) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [project, onClose])

  const open = project !== null
  const detail = project?.detail

  return (
    <div
      role="dialog"
      aria-hidden={!open}
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 transition-opacity duration-300 sm:p-6 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-[#0b1c30]/60 backdrop-blur-md" onClick={onClose} />
      <div
        className={`relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl transition-all duration-300 sm:rounded-3xl ${
          open ? "scale-100" : "scale-95"
        }`}
      >
        {detail && (
          <>
            <div className="relative flex-none border-b border-slate-200/80 bg-gradient-to-r from-[#004ac6] to-[#2563eb] px-6 pb-8 pt-7 text-white [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:20px_20px] sm:px-9">
              <div className="mb-4 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-[#d2ff37]" />
                  <span>{detail.category}</span>
                </div>
                <button
                  type="button"
                  aria-label="Close dialog"
                  onClick={onClose}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/20 text-white shadow-md transition-all hover:bg-white/30"
                >
                  <span className="material-symbols-outlined text-lg">close</span>
                </button>
              </div>
              <div className="mb-1 text-xs font-medium tracking-wide text-blue-100 sm:text-sm">{detail.subBrand}</div>
              <h3 className="font-display text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
                {detail.title}
              </h3>
            </div>

            <div className="space-y-6 overflow-y-auto bg-[#f8faff] p-6 text-slate-800 sm:space-y-8 sm:p-9">
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3 sm:gap-4">
                {detail.metrics.map((m) => (
                  <div key={m.label} className="flex flex-col justify-center rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
                    <div className="font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">{m.value}</div>
                    <div className="mt-1 text-xs font-medium text-slate-500">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-[#2563eb]/20 bg-[#dbe1ff]/50 p-5 text-sm leading-relaxed text-slate-700">
                <div className="mb-1 font-mono text-xs font-bold uppercase tracking-wider text-[#004ac6]">// ARCHITECTURE & SCOPE</div>
                <p>{detail.narrative}</p>
              </div>

              <div className="grid grid-cols-1 gap-8 pt-2 md:grid-cols-2">
                <div>
                  <div className="mb-4 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-orange-600">
                    <span className="material-symbols-outlined text-base">memory</span>
                    <span>TECHNOLOGY STACK</span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {detail.stack.map((tech) => (
                      <span key={tech} className="rounded-full bg-white border border-slate-200 px-3.5 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:border-[#2563eb]/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-4 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-orange-600">
                    <span className="material-symbols-outlined text-base">layers</span>
                    <span>KEY DELIVERABLES</span>
                  </div>
                  <ul className="space-y-3">
                    {detail.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-xs leading-snug text-slate-700 sm:text-sm">
                        <span className="mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded-full border border-emerald-500 bg-emerald-50 text-emerald-600">
                          <span className="material-symbols-outlined text-[10px]">check</span>
                        </span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-5">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>Case study verified by Codeation Engineering & Client Sponsor</span>
                </div>
                <a
                  href="#client-stories-contact"
                  onClick={(e) => {
                    onClose()
                    scrollToSection(e, "client-stories-contact")
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-[#004ac6] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#003ea8]"
                >
                  <span>Request Technical Deep Dive</span>
                  <span className="material-symbols-outlined text-sm">arrow_outward</span>
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function scrollToSection(event, id) {
  event.preventDefault()
  const target = id === "top" ? null : document.getElementById(id)
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" })
  } else {
    document.querySelector("main")?.scrollTo({ top: 0, behavior: "smooth" })
  }
}

export default ProjectModal