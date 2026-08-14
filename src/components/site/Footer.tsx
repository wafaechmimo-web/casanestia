import logoAsset from "@/assets/logo.png.asset.json";
import { EMAIL, PHONE_FR, PHONE_MA, type Copy } from "@/content/casa-nestia";

export function Footer({ copy }: { copy: Copy }) {
  return (
    <footer className="border-t border-rose-gold/30 bg-rose-gold text-anthracite">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <img
            src={logoAsset.url}
            alt="Casa Nestia"
            width={120}
            height={120}
            loading="lazy"
            className="h-20 w-auto"
          />
          <p className="mt-6 text-[0.7rem] uppercase tracking-[0.28em] text-anthracite/90">
            Casa Nestia
          </p>
          <p className="mt-2 text-sm text-anthracite/80">{copy.footer.tagline}</p>
          <p className="mt-1 text-sm text-anthracite/80">{copy.footer.location}</p>
          <p className="mt-1 text-sm text-anthracite/80">{copy.footer.scope}</p>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <p className="text-[0.65rem] uppercase tracking-[0.24em] text-anthracite">
            {copy.contact.eyebrow}
          </p>
          <div className="mt-4 space-y-2 text-sm text-anthracite/80">
            <a href={`tel:${PHONE_MA.replace(/\s/g, "")}`} className="block hover:text-anthracite">
              {PHONE_MA}
            </a>
            <a href={`tel:${PHONE_FR.replace(/\s/g, "")}`} className="block hover:text-anthracite">
              {PHONE_FR}
            </a>
            <a href={`mailto:${EMAIL}`} className="block break-all hover:text-anthracite">
              {EMAIL}
            </a>
          </div>
        </div>

        <div className="md:col-span-3 md:col-start-10">
          <p className="text-[0.65rem] uppercase tracking-[0.24em] text-anthracite">
            {copy.reseau.label}
          </p>
          <div className="mt-4 space-y-2 text-sm text-anthracite/80">
            <a href="#" className="block hover:text-anthracite">
              {copy.footer.legal}
            </a>
            <a href="#" className="block hover:text-anthracite">
              {copy.footer.privacy}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-anthracite/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-6 py-6 text-[0.65rem] uppercase tracking-[0.2em] text-anthracite/80 md:flex-row md:justify-between md:px-10">
          <span>© {new Date().getFullYear()} Casa Nestia</span>
          <span>{copy.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}
