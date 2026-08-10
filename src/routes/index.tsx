import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import {
  Story,
  Founder,
  Expertise,
  Services,
  Cities,
  Values,
  Results,
  Reviews,
  Reseau,
  Vision,
  Contact,
} from "@/components/site/Sections";
import { Footer } from "@/components/site/Footer";
import { content, type Lang } from "@/content/casa-nestia";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa Nestia — Conciergerie & Gestion Immobilière à Marrakech" },
      {
        name: "description",
        content:
          "Casa Nestia accompagne les propriétaires de Marrakech dans la gestion de leurs locations courte et longue durée : confiance, qualité, sérénité.",
      },
      {
        property: "og:title",
        content: "Casa Nestia — Conciergerie & Gestion Immobilière à Marrakech",
      },
      {
        property: "og:description",
        content:
          "Gestion de locations courte et longue durée à Marrakech. L'art de prendre soin de votre bien.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [lang, setLang] = useState<Lang>("fr");
  const copy = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen bg-background">
      <Nav copy={copy} lang={lang} setLang={setLang} />
      <main>
        <Hero copy={copy} />
        <Story copy={copy} />
        <Founder copy={copy} />
        <Expertise copy={copy} />
        <Services copy={copy} />
        <Cities copy={copy} />
        <Values copy={copy} />
        <Results copy={copy} />
        <Reviews copy={copy} />
        <Reseau copy={copy} />
        <Vision copy={copy} />
        <Contact copy={copy} />
      </main>
      <Footer copy={copy} />
    </div>
  );
}
