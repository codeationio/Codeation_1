import { useEffect, useRef, useState } from "react";
import ProjectsPreview from "./ProjectPreview";
// import ProjectsPreview from "./ProjectsPreview";

function AccomplishmentsGateway() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMotionPreference = () => {
      setReduceMotion(media.matches);
    };

    updateMotionPreference();
    media.addEventListener("change", updateMotionPreference);

    return () => {
      media.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;

    const updateProgress = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        if (reduceMotion) {
          setProgress(1);
          return;
        }

        const rect = section.getBoundingClientRect();
        const distance = rect.height - window.innerHeight;

        const next =
          distance > 0 ? Math.max(0, Math.min(1, -rect.top / distance)) : 0;

        setProgress(next);
      });
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });
    window.addEventListener("resize", updateProgress);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [reduceMotion]);

  const previewOpacity = reduceMotion
    ? 0
    : Math.min(1, Math.max(0, (progress - 0.08) / 0.62));

  const cardFade = reduceMotion
    ? 0
    : Math.min(1, Math.max(0, (progress - 0.55) / 0.3));

  const cardScale = reduceMotion ? 1 : 1 + progress * 7;

  return (
    <section
      ref={sectionRef}
      aria-label="Our accomplishments gateway"
      className="gateway-stage relative z-20 bg-canvas"
    >
      <div className="gateway-viewport sticky top-16 flex h-[calc(100svh-4rem)] items-center justify-center overflow-hidden sm:top-16 sm:h-[calc(100svh-4rem)]">
        {/* Projects emerges behind the card */}
        <div
          className="absolute inset-0"
          style={{ opacity: previewOpacity }}
          aria-hidden="true"
        >
          <ProjectsPreview />
        </div>

        {/* Gateway card */}
        <div
          className="gateway-card relative z-10 w-[min(82vw,460px)] overflow-hidden rounded-3xl border border-white/15 bg-[#0c1222] p-7 shadow-[0_0_80px_rgba(37,99,235,0.3)] sm:p-10"
          style={{
            transform: `scale(${cardScale})`,
            opacity: 1 - cardFade,
            borderRadius: `${Math.max(0, 24 * (1 - progress))}px`,
          }}
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-blue/30 blur-[70px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-brand-cyan/20 blur-[80px]" />

          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-cyan/25 bg-brand-cyan/10 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-brand-cyan sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-brand-cyan" />
              // OUR ACCOMPLISHMENTS
            </div>

            <h2 className="mb-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              Turning Ideas Into Impact.
            </h2>

            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Explore the products, platforms, and engineering solutions we've
              built to solve real-world challenges.
            </p>

            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5 font-mono text-xs uppercase tracking-wider text-slate-400">
              <span className="h-px w-8 bg-brand-cyan" />
              Scroll to explore our work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccomplishmentsGateway;