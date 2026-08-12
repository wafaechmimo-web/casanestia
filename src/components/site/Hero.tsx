import heroImg from "@/assets/hero-riad.jpg";
import type { Copy } from "@/content/casa-nestia";

export function Hero({ copy }: { copy: Copy }) {
  return (
    <section id="accueil" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Entrée d'un riad contemporain à Marrakech"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover object-[68%_center] md:object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-anthracite/70 via-anthracite/40 to-anthracite/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-anthracite/60 via-transparent to-anthracite/25" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pb-20 pt-36 md:px-10 md:pb-28">
        <div className="max-w-2xl fade-up">
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
            <a href="#contact" className="btn-rose">
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
