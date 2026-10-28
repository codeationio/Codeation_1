import { PROJECT_TONES } from '../data'

function ProjectCard({ project, onOpen }) {
  const tone = PROJECT_TONES[project.tone]

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onOpen(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen(project)
        }
      }}
      className={`group relative flex w-full flex-none cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0c1222]/80 p-6 text-left shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] ${tone.border}`}
    >
      <div className={`pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full blur-[50px] transition-all duration-500 ${tone.glow}`} />

      <div className="relative z-10">
        <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900 shadow-md">
          <img
            alt={project.imageAlt}
            src={project.image}
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c1222]/80 via-transparent to-transparent" />
          <span
            className={`absolute left-3 top-3 rounded-md border border-white/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md ${tone.badge}`}
          >
            {project.tag}
          </span>
        </div>

        <div className="mb-2 flex items-center justify-between">
          <h3 className={`font-display text-xl font-bold text-white transition-colors ${tone.title}`}>
            {project.name}
          </h3>
          <div className={`flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-colors group-hover:text-white ${tone.button}`}>
            <span className="material-symbols-outlined text-sm">north_east</span>
          </div>
        </div>
        <p className="mb-6 line-clamp-2 text-sm leading-relaxed text-slate-300">{project.description}</p>
      </div>

      <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-4">
        <div className="flex flex-wrap items-center gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <span className="flex items-center gap-1 text-xs font-semibold text-[#00d2ff] group-hover:underline">
          Details →
        </span>
      </div>
    </article>
  )
}

export default ProjectCard