import { useCallback, useState } from "react"
import { PROJECTS, PROJECT_TONES } from "../data"
import ProjectModal from "./ProjectModal"

function ProjectCard({ project, index, total, onOpen }) {
  const tone = PROJECT_TONES[project.tone]

  return (
    <article
      id={`project-${index + 1}`}
      role="button"
      tabIndex={0}
      onClick={() => onOpen(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onOpen(project)
        }
      }}
      className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl md:p-7 lg:sticky lg:z-10`}
      style={{ top: `${120 + index * 20}px` }}
    >
      <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-200/80 bg-slate-100">
        <img
          alt={project.imageAlt}
          src={project.image}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <span className={`absolute left-3 top-3 rounded-md border border-white/20 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md ${tone.badge}`}>
          {project.tag}
        </span>
      </div>

      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-xs font-medium text-slate-500">
          {`0${index + 1} / 0${total}`}
        </span>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors group-hover:bg-slate-200 group-hover:text-slate-900">
          <span className="material-symbols-outlined text-sm">north_east</span>
        </div>
      </div>

      <h3 className="mb-2 font-display text-xl font-bold text-slate-900">{project.name}</h3>
      <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-slate-600">{project.description}</p>

      <div className="flex items-center justify-between border-t border-slate-100 pt-4">
        <div className="flex flex-wrap items-center gap-1.5">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded border border-slate-200 bg-white px-2 py-0.5 font-mono text-[11px] text-slate-600">
              {tech}
            </span>
          ))}
        </div>
        <span className="flex items-center gap-1 text-xs font-semibold text-slate-600 group-hover:text-slate-900">View case study →</span>
      </div>
    </article>
  )
}

function ProjectsSection() {
  const [openProject, setOpenProject] = useState(null)
  const closeModal = useCallback(() => setOpenProject(null), [])

  return (
    <>
      <section id="projects" className="relative z-10 w-full border-t border-slate-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left column - Sticky index */}
            <div className="flex max-h-[calc(100vh-110px)] flex-col justify-start overflow-y-auto hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:block lg:sticky lg:top-[120px] lg:self-start lg:col-span-5 lg:z-20">
              <div className="mb-8 flex flex-col">
                <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#2563eb]/30 bg-[#dbe1ff]/80 px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-[#004ac6] shadow-sm">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#2563eb]" />
                  // FEATURED WORK • CASE STUDIES
                </div>
                <h2 className="mb-3 font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
                  Engineering Scalable Impact
                </h2>
                <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                  Explore production-grade platforms, high-velocity SaaS ecosystems, and intelligent AI architectures crafted for global scale and mission-critical reliability.
                </p>
              </div>

              <nav className="flex flex-col gap-3" aria-label="Project index">
                {PROJECTS.map((project, i) => (
                  <a
                    key={project.name}
                    href={`#project-${i + 1}`}
                    className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-white hover:text-slate-900 hover:shadow-md"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 font-mono text-xs font-bold text-slate-500 transition-all group-hover:bg-[#2563eb] group-hover:text-white">
                      0{i + 1}
                    </span>
                    <span className="hidden sm:block truncate">{project.name}</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Right column - Project cards */}
            <div className="grid grid-cols-1 gap-8 lg:col-span-7">
              {PROJECTS.map((project, i) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  index={i}
                  total={PROJECTS.length}
                  onOpen={setOpenProject}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProjectModal project={openProject} onClose={closeModal} />
    </>
  )
}

export default ProjectsSection