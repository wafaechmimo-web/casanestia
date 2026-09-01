import { useEffect, useState } from "react";
import logoAsset from "@/assets/logo.png.asset.json";
import type { Copy, Lang } from "@/content/casa-nestia";

const LINKS = [
  { key: "home", href: "#accueil" },
  { key: "services", href: "#services" },
  { key: "fonctionnement", href: "#fonctionnement" },
  { key: "resultats", href: "#resultats" },
  { key: "secteurs", href: "#secteurs" },
  { key: "faq", href: "#faq" },
] as const;

export function Nav({
  copy,
  lang,
  setLang,
}: {
  copy: Copy;
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-border/70 bg-background/92 py-3 backdrop-blur-md"
          : "border-b border-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 md:px-10">
        <a href="#accueil" className="flex items-center gap-3" aria-label="Casa Nestia">
          <img
            src={logoAsset.url}
            alt="Casa Nestia"
            width={72}
            height={72}
            className={`w-auto transition-all duration-500 ${solid ? "h-10" : "h-14 drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"}`}
          />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.key}
              href={l.href}
              className={`link-underline text-[0.72rem] uppercase tracking-[0.22em] transition-colors ${solid ? "text-foreground/75 hover:text-foreground" : "text-background/85 hover:text-background"}`}
            >
              {copy.nav[l.key]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.2em]">
            {(["fr", "en"] as const).map((l, i) => (
              <span key={l} className="flex items-center gap-2">
                {i === 1 && <span className="text-border">|</span>}
                <button
                  type="button"
                  onClick={() => setLang(l)}
                  className={
                    lang === l
                      ? solid
                        ? "text-primary"
                        : "text-rose-soft"
                      : solid
                        ? "text-muted-foreground transition-colors hover:text-foreground"
                        : "text-background/60 transition-colors hover:text-background"
                  }
                  aria-pressed={lang === l}
                >
                  {l.toUpperCase()}
                </button>
              </span>
            ))}
          </div>
          <a href="#contact" className="btn-rose hidden md:inline-flex">
            {copy.nav.cta}
          </a>
          <button
            type="button"
            className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span
              className={`block h-px w-6 transition-transform ${solid ? "bg-foreground" : "bg-background"} ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 transition-transform ${solid ? "bg-foreground" : "bg-background"} ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/98 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-5 px-6 py-8">
            {LINKS.map((l) => (
              <a
                key={l.key}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[0.78rem] uppercase tracking-[0.22em] text-foreground/80"
              >
                {copy.nav[l.key]}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-rose mt-2 w-full">
              {copy.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
