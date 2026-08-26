import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import {
  Story,
  Expertise,
  Services,
  Cities,
  Values,
  Results,
  Reviews,
  Reseau,
  Vision,
  Process,
  Faq,
} from "@/components/site/Sections";
import { Estimate } from "@/components/site/Estimate";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Ambience } from "@/components/site/Ambience";
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
        <Reveal>
          <Story copy={copy} />
        </Reveal>
        <Reveal>
          <Expertise copy={copy} />
        </Reveal>
        <Reveal>
          <Services copy={copy} />
        </Reveal>
        <Reveal>
          <Process copy={copy} />
        </Reveal>
        <Reveal>
          <Cities copy={copy} />
        </Reveal>
        <Reveal>
          <Values copy={copy} />
        </Reveal>
        <Reveal>
          <Results copy={copy} />
        </Reveal>
        <Reveal>
          <Reviews copy={copy} />
        </Reveal>
        <Reveal>
          <Reseau copy={copy} />
        </Reveal>
        <Reveal>
          <Vision copy={copy} />
        </Reveal>
        <Reveal>
          <Faq copy={copy} />
        </Reveal>
        <Reveal>
          <Estimate copy={copy} />
        </Reveal>
      </main>
      <Footer copy={copy} />
      <Ambience label={lang === "fr" ? "Activer ou couper la musique" : "Toggle background music"} />
    </div>
  );
}
