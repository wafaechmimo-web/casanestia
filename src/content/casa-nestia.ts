import ambienceAsset from "@/assets/ambience.mp3.asset.json";

export type Lang = "fr" | "en";

export const PHONE_MA = "+212 783 419 978";
export const PHONE_FR = "+33 7 46 33 15 07";
export const EMAIL = "casa.nestia.immobilier@gmail.com";

/**
 * Ambient background music.
 * Upload the audio file (mp3) and paste its URL here to activate the player.
 * Leave empty to hide the sound control entirely.
 */
export const AMBIENCE_URL = ambienceAsset.url;

export const content = {
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      fonctionnement: "Fonctionnement",
      resultats: "Résultats",
      secteurs: "Secteurs",
      faq: "FAQ",
      cta: "Demander un audit gratuit",
    },
    hero: {
      location: "",
      tagline: "Conciergerie & Gestion Immobilière",
      title: "L'art de prendre soin de votre bien",
      body: "Casa Nestia accompagne les propriétaires dans la gestion de leurs locations courte et longue durée, avec une approche fondée sur la confiance, la qualité et la sérénité.",
      primary: "Demander un audit gratuit",
      secondary: "Découvrir Casa Nestia",
      scroll: "Faire défiler",
    },
    story: {
      eyebrow: "Casa Nestia",
      title: "Une autre manière de prendre soin de l'immobilier.",
      body: "Casa Nestia est née d'une conviction simple : chaque propriétaire mérite une gestion sereine, transparente et efficace de son bien. Passionnée par l'immobilier, la finance et la qualité de service, j'ai créé Casa Nestia pour accompagner les propriétaires qui souhaitent déléguer la gestion de leur location tout en optimisant leurs revenus et en offrant une expérience soignée à leurs voyageurs.",
    },

    expertise: {
      eyebrow: "Expertise",
      title: "Une expertise au service de votre bien.",
      body: "Chez Casa Nestia, nous accompagnons les propriétaires dans la gestion de leurs biens en location courte et longue durée à travers une approche alliant excellence opérationnelle, rigueur et sens du détail. De la mise en valeur du bien à la gestion quotidienne, chaque prestation est assurée avec le plus haut niveau d'exigence afin d'offrir une expérience fluide aux propriétaires comme à leurs occupants.",
    },
    services: {
      eyebrow: "Services",
      title: "Ce que nous prenons en charge.",
      items: [
        "Gestion des locations courte et longue durée",
        "Optimisation des revenus / Revenue Management",
        "Création et optimisation des annonces",
        "Communication avec les voyageurs 7j/7",
        "Coordination du ménage et de la maintenance",
        "Check-in / Check-out",
        "Suivi de la qualité et de la satisfaction client",
        "Gestion administrative et opérationnelle",
        "Valorisation du bien et amélioration de son attractivité",
      ],
    },
    cities: {
      eyebrow: "Secteurs",
      title: "Secteurs",
      body: "",
      list: [
        {
          name: "Marrakech",
          country: "Maroc",
          status: "Secteur actif",
          note: "La ville ocre, première destination touristique du Royaume, avec une demande locative soutenue toute l'année.",
        },
        {
          name: "Casablanca",
          country: "Maroc",
          status: "Secteur actif",
          note: "Le poumon économique du Maroc offre un marché locatif dynamique et une demande constante.",
        },
        {
          name: "Essaouira",
          country: "Maroc",
          status: "Secteur actif",
          note: "La perle de l'Atlantique séduit par son charme côtier et son attractivité touristique.",
        },
        {
          name: "Bouskoura",
          country: "Maroc",
          status: "Secteur actif",
          note: "Quartier résidentiel haut de gamme en pleine expansion avec forte demande locative.",
        },
        {
          name: "Rabat",
          country: "Maroc",
          status: "Secteur actif",
          note: "La capitale administrative attire une clientèle professionnelle et diplomatique exigeante.",
        },
        {
          name: "Agadir",
          country: "Maroc",
          status: "Secteur actif",
          note: "Destination touristique majeure garantissant des taux d'occupation élevés toute l'année.",
        },
      ],
    },

    process: {
      eyebrow: "Fonctionnement",
      title: "4 étapes pour passer le relais en toute confiance",
      body: "Un parcours simple, du premier échange à la gestion quotidienne de votre bien.",
      steps: [
        {
          name: "Estimation gratuite",
          body: "On étudie votre bien et votre secteur pour estimer vos revenus potentiels sous 48h.",
        },
        {
          name: "Visite & mise en place",
          body: "Shooting photo, rédaction de l'annonce et installation des équipements nécessaires.",
        },
        {
          name: "Mise en ligne",
          body: "Diffusion multi-plateformes et gestion des premières réservations dès la première semaine.",
        },
        {
          name: "Gestion au quotidien",
          body: "Accueil, ménage, support voyageurs et reporting mensuel — vous n'avez plus rien à gérer.",
        },
      ],
    },
    faq: {
      eyebrow: "Questions fréquentes",
      title: "Tout ce que nos propriétaires nous demandent",
      items: [
        {
          q: "Comment estimez-vous mes revenus potentiels ?",
          a: "Nous analysons votre bien (localisation, surface, équipements) ainsi que les données de réservation constatées sur des biens comparables du secteur pour vous fournir une estimation réaliste sous 48h, sans engagement.",
        },
        {
          q: "Quelle commission appliquez-vous et qu'est-ce qui est inclus ?",
          a: "Notre commission varie de 18 % à 26 % selon la formule choisie, sans frais cachés. Elle couvre a minima l'annonce, la diffusion multi-plateformes, la tarification dynamique et le support voyageurs 24/7.",
        },
        {
          q: "Comment gérez-vous le ménage et le linge entre chaque séjour ?",
          a: "Une équipe de ménage professionnelle intervient systématiquement entre deux séjours, avec un contrôle qualité par photos et un linge hôtelier fourni et blanchi par nos soins.",
        },
        {
          q: "Puis-je garder l'usage de mon bien pour mes propres vacances ?",
          a: "Bien sûr. Vous nous indiquez vos dates de blocage à l'avance directement depuis votre tableau de bord, et nous ajustons le calendrier de réservation en conséquence.",
        },
        {
          q: "Sur quelles plateformes diffusez-vous mon annonce ?",
          a: "Votre bien est diffusé simultanément sur Airbnb, Booking.com et Abritel, avec un calendrier synchronisé pour éviter tout risque de double réservation.",
        },
        {
          q: "Que se passe-t-il en cas de problème pendant le séjour d'un voyageur ?",
          a: "Notre hotline est disponible 24/7. En cas d'imprévu (panne, question pratique, météo), un membre de l'équipe intervient ou coordonne un artisan local sans que vous ayez à intervenir.",
        },
      ],
    },
    values: {
      eyebrow: "Valeurs",
      title: "Trois principes, sans compromis.",
      items: [
        {
          name: "Confiance",
          body: "Des relations fondées sur la fiabilité, la transparence et le respect de nos engagements.",
        },
        {
          name: "Qualité",
          body: "Une attention constante portée au service, à l'expérience et à chaque aspect de la gestion.",
        },
        {
          name: "Sérénité",
          body: "La tranquillité de savoir votre bien entre de bonnes mains.",
        },
      ],
    },
    results: {
      eyebrow: "Résultats",
      title: "Des chiffres qui parlent, saison après saison",
      body: "Des résultats mesurables sur l’ensemble des biens gérés dans les différents territoires du Maroc.",
      note: "",
      items: [
        { label: "de revenus moyens constatés", value: "+35 %" },
        { label: "biens gérés", value: "120+" },
        { label: "note moyenne voyageurs", value: "4,9/5" },
        { label: "taux d'occupation en été", value: "96 %" },
      ],
    },
    reviews: {
      eyebrow: "Témoignages",
      title: "Avis clients",
      body: "Les retours des propriétaires qui nous ont confié la gestion de leur bien.",
      placeholder: "",
      author: "",
      items: [
        {
          quote:
            "Grâce à Casa Nestia, mes revenus ont augmenté de 38 % en 4 mois. Professionnalisme remarquable.",
          name: "Ahmed",
        },
        {
          quote:
            "Une gestion impeccable et une transparence totale. Je recommande vivement leurs services.",
          name: "Sophie",
        },
        {
          quote:
            "Mon appartement affiche 91 % d'occupation grâce à leur expertise. Communication exceptionnelle.",
          name: "Karim",
        },
        {
          quote:
            "Service voyageurs irréprochable. Mes avis 5 étoiles se multiplient depuis que je leur ai confié mon bien.",
          name: "Nadia",
        },
        {
          quote:
            "Réactivité exceptionnelle et intervention rapide. Une équipe disponible et professionnelle.",
          name: "Laurent",
        },
        {
          quote: "Enfin une conciergerie qui tient ses promesses. Transparence et rigueur au rendez-vous.",
          name: "Amina",
        },
      ],
    },
    reseau: {
      label: "✓ Certifié par Le Réseau",
      badge: "Certifié par Le Réseau",
      tagline: "L’écosystème de la courte durée au Maroc",
      title: "Membre d’un réseau de conciergeries d’excellence",
      body: "Cette conciergerie fait partie d’un écosystème de professionnels sélectionnés autour de standards de qualité rigoureux, d’un partage de bonnes pratiques et d’un engagement commun envers l’hospitalité.",
      items: ["Standards de qualité", "Réseau professionnel", "Confiance et excellence"],
      note: "",
    },

    vision: {
      eyebrow: "Vision",
      title: "Notre vision",
      body: "Notre vision est de faire de Casa Nestia une référence de confiance dans la gestion immobilière, en offrant un accompagnement où l'exigence, l'hospitalité et l'humain se rencontrent. Nous souhaitons bâtir des relations durables avec nos clients et contribuer à révéler le plein potentiel de chaque bien qui nous est confié.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Parlons de votre bien.",
      body: "Vous souhaitez déléguer la gestion de votre propriété ou simplement échanger sur votre projet ? Casa Nestia est à votre écoute.",
      cta: "Prendre contact",
      phoneLabel: "Téléphone",
      emailLabel: "Email",
      addressLabel: "Adresse",
      address: "Marrakech · Maroc",
    },
    estimate: {
      eyebrow: "Estimation gratuite",
      title: "Prêt à maximiser vos revenus ?",
      body: "Avec Casa Nestia, votre bien peut générer des revenus optimisés grâce à notre expertise en gestion locative.",
      points: ["Réponse sous 48h", "Aucun engagement", "Étude basée sur votre secteur exact"],
      formTitle: "Recevoir mon estimation",
      formBody: "Remplissez le formulaire, on vous recontacte rapidement.",
      name: "Nom et prénom",
      email: "Email",
      phone: "Téléphone",
      address: "Adresse du bien",
      submit: "Recevoir mon estimation gratuite",
      success: "Merci ! Votre demande a bien été envoyée, nous revenons vers vous sous 48h.",
    },
    footer: {
      tagline: "Conciergerie & Gestion Immobilière",
      brand: "Casa Nestia : Prendre soin de votre bien comme s'il était le nôtre, avec excellence et confiance.",
      location: "Marrakech · Maroc",
      scope: "Locations courte & longue durée",
      navTitle: "Navigation",
      navLinks: [
        { label: "Services", href: "#services" },
        { label: "Fonctionnement", href: "#fonctionnement" },
        { label: "Résultats", href: "#resultats" },
        { label: "Secteurs", href: "#secteurs" },
        { label: "FAQ", href: "#faq" },
      ],
      zoneTitle: "Zone couverte",
      zone: ["Marrakech", "Casablanca", "Essaouira", "Bouskoura", "Rabat", "Agadir"],
      contactTitle: "Contact",
      legal: "Mentions légales",
      privacy: "Politique de confidentialité",
      cgv: "CGV",
      rights: "Tous droits réservés.",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      fonctionnement: "How it works",
      resultats: "Results",
      secteurs: "Areas",
      faq: "FAQ",
      cta: "Request a free audit",
    },
    hero: {
      location: "",
      tagline: "Property Concierge & Management",
      title: "The art of taking care of your property",
      body: "Casa Nestia supports property owners in managing their short- and long-term rentals through an approach built on trust, quality and peace of mind.",
      primary: "Request a free audit",
      secondary: "Discover Casa Nestia",
      scroll: "Scroll",
    },
    story: {
      eyebrow: "Casa Nestia",
      title: "A different way of caring for property.",
      body: "Casa Nestia was born from a simple conviction: every owner deserves calm, transparent and effective management of their property. Driven by a passion for real estate, finance and service excellence, I created Casa Nestia for owners who wish to delegate the management of their rental while optimising their revenue and offering their guests a genuinely considered experience.",
    },

    expertise: {
      eyebrow: "Expertise",
      title: "Expertise at the service of your property.",
      body: "At Casa Nestia, we support owners in managing their short- and long-term rentals through an approach that combines operational excellence, rigour and attention to detail. From presenting the property at its best to day-to-day management, every service is delivered to the highest standard, offering a seamless experience to owners and occupants alike.",
    },
    services: {
      eyebrow: "Services",
      title: "What we take care of.",
      items: [
        "Short- and long-term rental management",
        "Revenue optimisation / Revenue management",
        "Listing creation and optimisation",
        "Guest communication, seven days a week",
        "Housekeeping and maintenance coordination",
        "Check-in / Check-out",
        "Quality and guest-satisfaction monitoring",
        "Administrative and operational management",
        "Property enhancement and improved appeal",
      ],
    },
    cities: {
      eyebrow: "Areas",
      title: "Areas",
      body: "",
      list: [
        {
          name: "Marrakech",
          country: "Morocco",
          status: "Active area",
          note: "The ochre city, Morocco's leading tourist destination, with sustained rental demand all year round.",
        },
        {
          name: "Casablanca",
          country: "Morocco",
          status: "Active area",
          note: "Morocco's economic powerhouse offers a dynamic rental market and constant demand.",
        },
        {
          name: "Essaouira",
          country: "Morocco",
          status: "Active area",
          note: "The pearl of the Atlantic, with its coastal charm and strong tourist appeal.",
        },
        {
          name: "Bouskoura",
          country: "Morocco",
          status: "Active area",
          note: "An upscale residential district in full expansion with strong rental demand.",
        },
        {
          name: "Rabat",
          country: "Morocco",
          status: "Active area",
          note: "The administrative capital attracts a demanding professional and diplomatic clientele.",
        },
        {
          name: "Agadir",
          country: "Morocco",
          status: "Active area",
          note: "A major tourist destination ensuring high occupancy rates all year round.",
        },
      ],
    },

    process: {
      eyebrow: "How it works",
      title: "Four steps to hand over with complete confidence",
      body: "A simple journey, from the first conversation to the day-to-day management of your property.",
      steps: [
        {
          name: "Free estimate",
          body: "We study your property and your area to estimate your potential revenue within 48h.",
        },
        {
          name: "Visit & setup",
          body: "Photo shoot, listing copywriting and installation of the necessary equipment.",
        },
        {
          name: "Going live",
          body: "Multi-platform publishing and handling of the first bookings from the very first week.",
        },
        {
          name: "Day-to-day management",
          body: "Check-in, housekeeping, guest support and monthly reporting — you have nothing left to manage.",
        },
      ],
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "Everything our owners ask us",
      items: [
        {
          q: "How do you estimate my potential revenue?",
          a: "We analyse your property (location, surface area, amenities) along with booking data observed on comparable properties in the area to provide a realistic estimate within 48h, with no commitment.",
        },
        {
          q: "What commission do you charge and what is included?",
          a: "Our commission ranges from 18% to 26% depending on the plan chosen, with no hidden fees. It covers at minimum the listing, multi-platform distribution, dynamic pricing and 24/7 guest support.",
        },
        {
          q: "How do you handle housekeeping and linen between stays?",
          a: "A professional housekeeping team systematically works between two stays, with photo-based quality control and hotel-grade linen supplied and laundered by us.",
        },
        {
          q: "Can I keep using my property for my own holidays?",
          a: "Of course. You give us your blocked dates in advance directly from your dashboard, and we adjust the booking calendar accordingly.",
        },
        {
          q: "Which platforms do you list my property on?",
          a: "Your property is published simultaneously on Airbnb, Booking.com and Abritel, with a synchronised calendar to avoid any risk of double booking.",
        },
        {
          q: "What happens if there is a problem during a guest's stay?",
          a: "Our hotline is available 24/7. In case of an unexpected issue (breakdown, practical question, weather), a team member steps in or coordinates a local craftsman without you having to intervene.",
        },
      ],
    },
    values: {
      eyebrow: "Values",
      title: "Three principles, without compromise.",
      items: [
        {
          name: "Trust",
          body: "Relationships built on reliability, transparency and the commitments we keep.",
        },
        {
          name: "Quality",
          body: "Constant attention to service, to experience and to every aspect of management.",
        },
        {
          name: "Peace of mind",
          body: "The calm of knowing your property is in the right hands.",
        },
      ],
    },
    results: {
      eyebrow: "Results",
      title: "Figures that speak, season after season",
      body: "Results measured across all properties managed in Casablanca and across Morocco.",
      note: "",
      items: [
        { label: "average revenue uplift", value: "+35%" },
        { label: "properties managed", value: "120+" },
        { label: "average guest rating", value: "4.9/5" },
        { label: "summer occupancy rate", value: "96%" },
      ],
    },
    reviews: {
      eyebrow: "Testimonials",
      title: "Client Reviews",
      body: "Feedback from the owners who have entrusted us with their property.",
      placeholder: "",
      author: "",
      items: [
        {
          quote:
            "Thanks to Casa Nestia, my revenue increased by 38% in 4 months. Remarkable professionalism.",
          name: "Ahmed",
        },
        {
          quote: "Impeccable management and total transparency. I highly recommend their services.",
          name: "Sophie",
        },
        {
          quote:
            "My apartment reaches 91% occupancy thanks to their expertise. Exceptional communication.",
          name: "Karim",
        },
        {
          quote:
            "Flawless guest service. My 5-star reviews keep coming since I entrusted them with my property.",
          name: "Nadia",
        },
        {
          quote: "Exceptional responsiveness and fast intervention. An available, professional team.",
          name: "Laurent",
        },
        {
          quote: "Finally a concierge service that keeps its promises. Transparency and rigour throughout.",
          name: "Amina",
        },
      ],
    },
    reseau: {
      label: "✓ Certified by Le Réseau",
      badge: "Certifié par Le Réseau",
      tagline: "L’écosystème de la courte durée au Maroc",
      title: "Member of a network of concierge services of excellence",
      body: "This concierge service is part of an ecosystem of selected professionals built around rigorous quality standards, shared best practices and a common commitment to hospitality.",
      items: ["Quality standards", "Professional network", "Trust and excellence"],
      note: "",
    },

    vision: {
      eyebrow: "Vision",
      title: "Our Vision",
      body: "Our vision is for Casa Nestia to become a trusted reference in property management, offering support where high standards, hospitality and genuine human care meet. We want to build lasting relationships with our clients and help reveal the full potential of every property entrusted to us.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's Talk About Your Property.",
      body: "Would you like to delegate the management of your property, or simply discuss your project? Casa Nestia is here to listen.",
      cta: "Get in touch",
      phoneLabel: "Telephone",
      emailLabel: "Email",
      addressLabel: "Address",
      address: "Marrakech · Morocco",
    },
    estimate: {
      eyebrow: "Free estimate",
      title: "Ready to maximise your revenue?",
      body: "With Casa Nestia, your property can generate optimised revenue thanks to our rental management expertise.",
      points: ["Reply within 48h", "No commitment", "Study based on your exact area"],
      formTitle: "Get my estimate",
      formBody: "Fill in the form and we will get back to you shortly.",
      name: "Full name",
      email: "Email",
      phone: "Phone",
      address: "Property address",
      submit: "Get my free estimate",
      success: "Thank you! Your request has been sent, we will get back to you within 48h.",
    },
    footer: {
      tagline: "Property Concierge & Management",
      brand: "Casa Nestia: caring for your property as if it were our own, with excellence and trust.",
      location: "Marrakech · Morocco",
      scope: "Short & long-term rentals",
      navTitle: "Navigation",
      navLinks: [
        { label: "Services", href: "#services" },
        { label: "How it works", href: "#fonctionnement" },
        { label: "Results", href: "#resultats" },
        { label: "Areas", href: "#secteurs" },
        { label: "FAQ", href: "#faq" },
      ],
      zoneTitle: "Areas covered",
      zone: ["Marrakech", "Casablanca", "Essaouira", "Bouskoura", "Rabat", "Agadir"],
      contactTitle: "Contact",
      legal: "Legal notice",
      privacy: "Privacy policy",
      cgv: "Terms of sale",
      rights: "All rights reserved.",
    },
  },
};

export type Copy = (typeof content)["fr"];
