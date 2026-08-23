import logoAsset from "@/assets/logo.png.asset.json";
import { EMAIL, PHONE_FR, PHONE_MA, type Copy } from "@/content/casa-nestia";

export function Footer({ copy }: { copy: Copy }) {
  return (
    <footer className="border-t border-rose-gold/30 bg-rose-gold text-anthracite">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 md:grid-cols-12 md:px-10">
        <div className="md:col-span-4">
          <div className="inline-flex bg-ivory px-6 py-4">
            <img
              src={logoAsset.url}
              alt="Casa Nestia"
              width={120}
              height={120}
              loading="lazy"
              className="h-20 w-auto"
            />
          </div>
          <p className="mt-6 max-w-xs text-sm leading-[1.8] text-anthracite/80">
            {copy.footer.brand}
          </p>
        </div>

        <div className="md:col-span-2 md:col-start-6">
          <p className="text-[0.65rem] uppercase tracking-[0.24em] text-anthracite">
            {copy.footer.navTitle}
          </p>
          <nav className="mt-4 space-y-2 text-sm text-anthracite/80">
            {copy.footer.navLinks.map((link) => (
              <a key={link.label} href={link.href} className="block hover:text-anthracite">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="md:col-span-2">
          <p className="text-[0.65rem] uppercase tracking-[0.24em] text-anthracite">
            {copy.footer.zoneTitle}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-anthracite/80">
            {copy.footer.zone.map((z) => (
              <li key={z}>{z}</li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3 md:col-start-10">
          <p className="text-[0.65rem] uppercase tracking-[0.24em] text-anthracite">
            {copy.footer.contactTitle}
          </p>
          <div className="mt-4 space-y-2 text-sm text-anthracite/80">
            <p>{copy.footer.location}</p>
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
      </div>

      <div className="border-t border-anthracite/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-6 py-6 text-[0.65rem] uppercase tracking-[0.2em] text-anthracite/80 md:flex-row md:items-center md:justify-between md:px-10">
          <span>© {new Date().getFullYear()} Casa Nestia</span>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-anthracite">
              {copy.footer.legal}
            </a>
            <a href="#" className="hover:text-anthracite">
              {copy.footer.privacy}
            </a>
            <a href="#" className="hover:text-anthracite">
              {copy.footer.cgv}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
