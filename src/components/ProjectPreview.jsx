import { PROJECTS } from "../data";

function ProjectsPreview() {
  return (
    <div className="projects-preview absolute inset-0 overflow-hidden bg-canvas px-5 pt-20 text-white sm:px-8 sm:pt-24 lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[24px_24px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-hairline bg-white/5 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-brand-cyan sm:text-xs">
          <span className="h-2 w-2 rounded-full bg-brand-cyan" />
          // FEATURED WORK • CASE STUDIES
        </div>

        <h2 className="mb-3 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          Engineering Scalable Impact
        </h2>

        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
          Explore production-grade platforms, high-velocity SaaS ecosystems,
          and intelligent AI architectures crafted for global scale.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {PROJECTS.slice(0, 3).map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-2xl border border-hairline bg-[#0c1222]/90 p-3 shadow-xl sm:p-4"
            >
              <div className="mb-3 aspect-16/10 overflow-hidden rounded-xl bg-slate-900">
                <img
                  src={project.image}
                  alt=""
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-brand-cyan">
                {project.tag}
              </p>

              <h3 className="mb-2 font-display text-base font-bold text-white sm:text-lg">
                {project.title}
              </h3>

              <p className="line-clamp-2 text-xs leading-relaxed text-slate-400 sm:text-sm">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPreview;
