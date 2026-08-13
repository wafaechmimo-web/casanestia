import storyImg from "@/assets/story.jpg";
import servicesImg from "@/assets/services.jpg";
import visionImg from "@/assets/vision.jpg";
import essaouiraImg from "@/assets/city-essaouira.jpg";
import casablancaImg from "@/assets/city-casablanca.jpg";
import marrakechImg from "@/assets/city-marrakech.jpg";
import rabatImg from "@/assets/city-rabat.jpg";
import bouskouraImg from "@/assets/city-bouskoura.jpg";
import agadirImg from "@/assets/city-agadir.jpg";
import reseauLogo from "@/assets/le-reseau-logo.png";
import signatureAsset from "@/assets/signature.png.asset.json";
import { EMAIL, PHONE_FR, PHONE_MA, type Copy } from "@/content/casa-nestia";

const CITY_IMAGES = [marrakechImg, casablancaImg, essaouiraImg, bouskouraImg, rabatImg, agadirImg];


export function Story({ copy }: { copy: Copy }) {
  return (
    <section id="casa-nestia" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
      <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <img
            src={storyImg}
            alt="Patio d'un riad marocain contemporain"
            width={1200}
            height={1504}
            loading="lazy"
            className="h-[380px] w-full object-cover md:h-[620px]"
          />
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="eyebrow">{copy.story.eyebrow}</p>
          <h2 className="mt-6 max-w-xl font-display text-[2rem] leading-[1.15] md:text-[2.9rem]">
            {copy.story.title}
          </h2>
          <div className="rule-gold mt-8 w-40" />
          <p className="mt-8 max-w-xl text-[0.97rem] leading-[1.9] text-muted-foreground">
            {copy.story.body}
          </p>
          <img
            src={signatureAsset.url}
            alt="Casa Nestia"
            width={220}
            height={110}
            loading="lazy"
            className="mt-10 h-14 w-auto opacity-70 mix-blend-multiply"
          />
        </div>
      </div>
    </section>
  );
}




export function Expertise({ copy }: { copy: Copy }) {
  return (
    <section id="expertise" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow">{copy.expertise.eyebrow}</p>
          <h2 className="mt-6 font-display text-[2rem] leading-[1.15] md:text-[2.9rem]">
            {copy.expertise.title}
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="text-[1.02rem] leading-[1.95] text-muted-foreground">
            {copy.expertise.body}
          </p>
        </div>
      </div>
    </section>
  );
}

export function Services({ copy }: { copy: Copy }) {
  const items = copy.services.items;
  return (
    <section id="services" className="border-t border-border">
      <div className="mx-auto grid max-w-[1400px] gap-0 md:grid-cols-12">
        <div className="relative md:col-span-5">
          <img
            src={servicesImg}
            alt="Détail d'artisanat marocain : plâtre sculpté et zellige"
            width={1408}
            height={1008}
            loading="lazy"
            className="h-64 w-full object-cover md:sticky md:top-0 md:h-screen"
          />
        </div>
        <div className="md:col-span-7">
          <div className="px-6 py-20 md:px-16 md:py-32">
            <p className="eyebrow">{copy.services.eyebrow}</p>
            <h2 className="mt-6 font-display text-[2rem] leading-[1.15] md:text-[2.7rem]">
              {copy.services.title}
            </h2>
            <ol className="mt-12">
              {items.map((item, i) => (
                <li
                  key={item}
                  className="group flex items-baseline gap-6 border-t border-border py-6 last:border-b"
                >
                  <span className="font-display text-sm text-primary/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[1.02rem] leading-relaxed text-foreground/85 transition-colors group-hover:text-primary">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Cities({ copy }: { copy: Copy }) {
  return (
    <section id="secteurs" className="py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <h2 className="font-display text-[2rem] leading-[1.15] md:text-[2.9rem]">
          {copy.cities.title}
        </h2>
      </div>

      <div className="scroll-x mt-14 gap-6 px-6 pb-4 md:px-10">
        {copy.cities.list.map((city, i) => (
          <article
            key={city.name}
            className="w-[78vw] shrink-0 snap-start sm:w-[46vw] lg:w-[30vw] xl:w-[24rem]"
          >
            <img
              src={CITY_IMAGES[i]}
              alt={`${city.name}, ${city.country}`}
              width={1200}
              height={1504}
              loading="lazy"
              className="h-[380px] w-full object-cover md:h-[460px]"
            />
            <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-border pt-4">
              <h3 className="font-display text-2xl">{city.name}</h3>
              <span className="text-[0.62rem] uppercase tracking-[0.22em] text-primary">
                {city.status}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{city.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}


export function Values({ copy }: { copy: Copy }) {
  return (
    <section className="border-y border-border bg-secondary/60">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <p className="eyebrow">{copy.values.eyebrow}</p>
        <h2 className="mt-6 max-w-xl font-display text-[2rem] leading-[1.15] md:text-[2.7rem]">
          {copy.values.title}
        </h2>
        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-16">
          {copy.values.items.map((v, i) => (
            <div key={v.name} className="md:border-l md:border-border md:pl-8">
              <span className="font-display text-sm text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[0.8rem] uppercase tracking-[0.28em] text-primary">
                {v.name}
              </h3>
              <p className="mt-4 text-[0.95rem] leading-[1.85] text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Results({ copy }: { copy: Copy }) {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="eyebrow">{copy.results.eyebrow}</p>
          <h2 className="mt-6 font-display text-[2rem] leading-[1.15] md:text-[2.6rem]">
            {copy.results.title}
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="text-[0.97rem] leading-[1.9] text-muted-foreground">{copy.results.body}</p>
          <dl className="mt-12 grid grid-cols-1 sm:grid-cols-2">
            {copy.results.items.map((item) => (
              <div
                key={item.label}
                className="border-t border-border py-8 sm:odd:pr-10 sm:even:border-l sm:even:pl-10"
              >
                <dd className="font-display text-4xl text-primary">{item.value}</dd>
                <dt className="mt-3 text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
                  {item.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export function Reviews({ copy }: { copy: Copy }) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">{copy.reviews.eyebrow}</p>
            <h2 className="mt-6 font-display text-[2rem] leading-[1.15] md:text-[2.6rem]">
              {copy.reviews.title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-[1.85] text-muted-foreground">
            {copy.reviews.body}
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
          {copy.reviews.items.map((r) => (
            <blockquote key={r.name} className="bg-background px-8 py-12">
              <span className="text-sm tracking-[0.3em] text-gold">★★★★★</span>
              <p className="mt-5 font-display text-xl italic leading-relaxed text-foreground/85">
                “{r.quote}”
              </p>
              <footer className="mt-8 text-[0.65rem] uppercase tracking-[0.22em] text-primary">
                {r.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reseau({ copy }: { copy: Copy }) {
  return (
    <section className="border-y border-border bg-secondary/60">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-20 md:grid-cols-12 md:px-10 md:py-24">
        <div className="md:col-span-4">
          <img
            src={reseauLogo}
            alt="Le Réseau — certification"
            width={2514}
            height={1058}
            loading="lazy"
            className="h-20 w-auto object-contain"
          />
          <p className="mt-6 text-[0.7rem] uppercase tracking-[0.28em] text-primary">
            {copy.reseau.label}
          </p>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <h2 className="font-display text-[1.8rem] leading-[1.2] md:text-[2.4rem]">
            {copy.reseau.title}
          </h2>
          <p className="mt-6 text-[0.97rem] leading-[1.9] text-muted-foreground">
            {copy.reseau.body}
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-10 gap-y-3">
            {copy.reseau.items.map((it) => (
              <li key={it} className="text-[0.68rem] uppercase tracking-[0.22em] text-foreground/70">
                {it}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Vision({ copy }: { copy: Copy }) {
  return (
    <section id="vision" className="relative">
      <img
        src={visionImg}
        alt="Terrasse marocaine contemporaine au coucher du soleil"
        width={1920}
        height={1088}
        loading="lazy"
        className="h-[560px] w-full object-cover md:h-[720px]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-anthracite/80 via-anthracite/55 to-anthracite/30" />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="text-[0.68rem] uppercase tracking-[0.32em] text-rose-soft">
              {copy.vision.eyebrow}
            </p>
            <h2 className="mt-6 font-display text-[2.1rem] leading-[1.15] text-background md:text-[3rem]">
              {copy.vision.title}
            </h2>
            <div className="mt-7 h-px w-24 bg-gold/80" />
            <p className="mt-7 text-[0.98rem] leading-[1.95] text-background/85">
              {copy.vision.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact({ copy }: { copy: Copy }) {
  return (
    <section id="contact" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
      <div className="grid gap-14 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="eyebrow">{copy.contact.eyebrow}</p>
          <h2 className="mt-6 font-display text-[2.2rem] leading-[1.1] md:text-[3.2rem]">
            {copy.contact.title}
          </h2>
          <p className="mt-7 max-w-lg text-[0.97rem] leading-[1.9] text-muted-foreground">
            {copy.contact.body}
          </p>
          <a href={`mailto:${EMAIL}`} className="btn-rose mt-10">
            {copy.contact.cta}
          </a>
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <div className="border-t border-border pt-6">
            <p className="text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
              {copy.contact.phoneLabel}
            </p>
            <div className="mt-3 space-y-1 font-display text-2xl">
              <a href={`tel:${PHONE_MA.replace(/\s/g, "")}`} className="block hover:text-primary">
                {PHONE_MA}
              </a>
              <a href={`tel:${PHONE_FR.replace(/\s/g, "")}`} className="block hover:text-primary">
                {PHONE_FR}
              </a>
            </div>
          </div>
          <div className="mt-10 border-t border-border pt-6">
            <p className="text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
              {copy.contact.emailLabel}
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-3 block break-all font-display text-xl hover:text-primary"
            >
              {EMAIL}
            </a>
          </div>
          <div className="mt-10 border-t border-border pt-6">
            <p className="text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
              {copy.contact.addressLabel}
            </p>
            <p className="mt-3 font-display text-xl">{copy.contact.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
