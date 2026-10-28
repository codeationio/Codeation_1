import { Accents } from "../data";

function ServiceCard({ service }) {
  const accent = Accents[service.accent]

  return (
    <article
      className={`service-card group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl md:p-8 ${accent.border}`}
    >
      <div>
        <div className="mb-5 flex items-center justify-between">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl border shadow-sm transition-all duration-300 group-hover:text-white ${accent.iconWrap}`}
          >
            <span className="material-symbols-outlined text-2xl">{service.icon}</span>
          </div>
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${accent.arrowWrap}`}
          >
            <span className="material-symbols-outlined text-base transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              north_east
            </span>
          </div>
        </div>

        <span className={`mb-1 block font-mono text-xs font-bold uppercase tracking-wider ${accent.label}`}>
          {service.index} / {service.category}
        </span>
        <h3 className={`mb-2.5 font-display text-xl font-bold text-slate-900 transition-colors ${accent.title}`}>
          {service.title}
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-slate-600">{service.description}</p>
      </div>

      <div
        className={`flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-semibold text-slate-600 transition-colors ${accent.footer}`}
      >
        <span>{service.stack}</span>
      </div>
    </article>
  )
}

export default ServiceCard;