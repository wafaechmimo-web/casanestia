import { useEffect, useRef } from "react";
import heroImg from "@/assets/hero-riad.jpg";
import type { Copy } from "@/content/casa-nestia";

export function Hero({ copy }: { copy: Copy }) {
  const imgRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        if (y > window.innerHeight * 1.2) return;
        if (imgRef.current) {
          imgRef.current.style.transform = `translate3d(0, ${y * 0.28}px, 0) scale(${1.12 + y * 0.00012})`;
        }
        if (contentRef.current) {
          contentRef.current.style.transform = `translate3d(0, ${y * -0.08}px, 0)`;
          contentRef.current.style.opacity = String(Math.max(0, 1 - y / (window.innerHeight * 0.85)));
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="accueil"
      className="depth-scene relative min-h-[100svh] w-full overflow-hidden"
    >
      <img
        ref={imgRef}
        src={heroImg}
        alt="Entrée d'un riad contemporain à Marrakech"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full scale-[1.12] object-cover object-[68%_center] will-change-transform md:object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-anthracite/70 via-anthracite/40 to-anthracite/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-anthracite/60 via-transparent to-anthracite/25" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pb-20 pt-36 md:px-10 md:pb-28">
        <div ref={contentRef} className="max-w-2xl fade-up will-change-transform">
          <h1 className="font-display text-[2.6rem] leading-[1.05] text-background sm:text-6xl md:text-7xl">
            {copy.hero.title}
          </h1>
          <div className="mt-7 h-px w-24 bg-gold/80" />

          <p className="mt-5 text-[0.72rem] uppercase tracking-[0.28em] text-background/80">
            {copy.hero.tagline}
          </p>
          <p className="mt-6 max-w-xl text-[0.98rem] leading-relaxed text-background/85">
            {copy.hero.body}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a href="#estimation" className="btn-rose">
              {copy.hero.primary}
            </a>
            <a href="#casa-nestia" className="btn-outline-rose text-background">
              {copy.hero.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
