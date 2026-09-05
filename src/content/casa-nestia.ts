import ambienceAsset from "@/assets/ambience.mp3.asset.json";

export type Lang = "fr" | "en" | "ar" | "am";

export const PHONE_MA = "+212 783 419 978";
export const PHONE_FR = "+33 7 46 33 15 07";
export const EMAIL = "casa.nestia.immobilier@gmail.com";
/** WhatsApp number receiving estimate requests (digits only, international format). */
export const WHATSAPP = "212783419978";

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
      bedrooms: "Nombre de chambres",
      bedroomsPlaceholder: "– Choisissez –",
      commissionFrom: "À partir de",
      commissionValue: "18%",
      commissionCaption: "de commission",
      perks: [
        "Déco et photos de qualité",
        "Occupation optimisée",
        "Ménage de qualité hôtel",
        "Service client 24/24",
        "10 autres services en plus",
      ],
      legalNote:
        "Conformément à la loi 09-08, vous disposez d'un droit d'accès, de rectification et d'opposition au traitement de vos données personnelles.",
      consentLegal:
        "J'ai lu et j'accepte les mentions légales, notamment la mention relative à la protection des données personnelles.",
      consentMarketing:
        "J'accepte que mes données soient utilisées à des fins de prospection commerciale directe.",
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
      bedrooms: "Number of bedrooms",
      bedroomsPlaceholder: "– Choose –",
      commissionFrom: "From",
      commissionValue: "18%",
      commissionCaption: "commission",
      perks: [
        "Quality styling and photography",
        "Optimised occupancy",
        "Hotel-standard housekeeping",
        "24/24 guest support",
        "10 more services included",
      ],
      legalNote:
        "In accordance with law 09-08, you have a right of access, rectification and objection regarding your personal data.",
      consentLegal: "I have read and accept the legal notice, including personal data protection.",
      consentMarketing: "I agree that my data may be used for direct commercial prospecting.",
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
  ar: {
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      fonctionnement: "طريقة العمل",
      resultats: "النتائج",
      secteurs: "المناطق",
      faq: "الأسئلة الشائعة",
      cta: "اطلب تقييماً مجانياً",
    },
    hero: {
      location: "",
      tagline: "كونسيرج وإدارة عقارية",
      title: "فنّ العناية بعقارك",
      body: "ترافق كازا نستيا الملاك في إدارة عقاراتهم المخصّصة للكراء القصير والطويل الأمد، وفق مقاربة قوامها الثقة والجودة وراحة البال.",
      primary: "اطلب تقييماً مجانياً",
      secondary: "اكتشف كازا نستيا",
      scroll: "مرّر",
    },
    story: {
      eyebrow: "كازا نستيا",
      title: "طريقة أخرى للعناية بالعقار.",
      body: "وُلدت كازا نستيا من قناعة بسيطة: كل مالك يستحق إدارة هادئة وشفافة وفعّالة لعقاره. بشغف بالعقار والمالية وجودة الخدمة، أنشأتُ كازا نستيا لمرافقة الملاك الراغبين في تفويض إدارة كرائهم مع تحسين مداخيلهم وتقديم تجربة مُتقنة لضيوفهم.",
    },
    expertise: {
      eyebrow: "الخبرة",
      title: "خبرة في خدمة عقارك.",
      body: "في كازا نستيا، نرافق الملاك في إدارة عقاراتهم للكراء القصير والطويل الأمد عبر مقاربة تجمع بين التميّز التشغيلي والدقة والاهتمام بالتفاصيل. من إبراز قيمة العقار إلى التدبير اليومي، تُنجَز كل خدمة بأعلى مستوى من المتطلبات لتوفير تجربة سلسة للملاك ولقاطنيه.",
    },
    services: {
      eyebrow: "الخدمات",
      title: "ما نتكفّل به.",
      items: [
        "إدارة الكراء القصير والطويل الأمد",
        "تحسين المداخيل / إدارة العائدات",
        "إنشاء الإعلانات وتحسينها",
        "التواصل مع المسافرين 7 أيام في الأسبوع",
        "تنسيق التنظيف والصيانة",
        "الاستقبال والمغادرة",
        "متابعة الجودة ورضا العملاء",
        "التدبير الإداري والتشغيلي",
        "تثمين العقار وتحسين جاذبيته",
      ],
    },
    cities: {
      eyebrow: "المناطق",
      title: "المناطق",
      body: "",
      list: [
        {
          name: "مراكش",
          country: "المغرب",
          status: "منطقة نشطة",
          note: "المدينة الحمراء، الوجهة السياحية الأولى بالمملكة، بطلب كرائي قوي طوال السنة.",
        },
        {
          name: "الدار البيضاء",
          country: "المغرب",
          status: "منطقة نشطة",
          note: "العاصمة الاقتصادية للمغرب توفّر سوقاً كرائية ديناميكية وطلباً مستمراً.",
        },
        {
          name: "الصويرة",
          country: "المغرب",
          status: "منطقة نشطة",
          note: "لؤلؤة الأطلسي تجذب بسحرها الساحلي وجاذبيتها السياحية.",
        },
        {
          name: "بوسكورة",
          country: "المغرب",
          status: "منطقة نشطة",
          note: "حيّ سكني راقٍ في توسّع مستمر مع طلب كرائي مرتفع.",
        },
        {
          name: "الرباط",
          country: "المغرب",
          status: "منطقة نشطة",
          note: "العاصمة الإدارية تستقطب زبناء مهنيين ودبلوماسيين ذوي متطلبات عالية.",
        },
        {
          name: "أكادير",
          country: "المغرب",
          status: "منطقة نشطة",
          note: "وجهة سياحية كبرى تضمن نسب إشغال مرتفعة طوال السنة.",
        },
      ],
    },
    process: {
      eyebrow: "طريقة العمل",
      title: "أربع خطوات لتسليم المفاتيح بكل ثقة",
      body: "مسار بسيط، من أول تواصل إلى التدبير اليومي لعقارك.",
      steps: [
        {
          name: "تقييم مجاني",
          body: "ندرس عقارك ومنطقتك لتقدير مداخيلك المحتملة داخل 48 ساعة.",
        },
        {
          name: "الزيارة والتجهيز",
          body: "تصوير احترافي، تحرير الإعلان وتركيب التجهيزات الضرورية.",
        },
        {
          name: "النشر",
          body: "نشر على منصات متعددة وتدبير أولى الحجوزات منذ الأسبوع الأول.",
        },
        {
          name: "التدبير اليومي",
          body: "الاستقبال، التنظيف، دعم المسافرين وتقرير شهري — لم يعد عليك تدبير أي شيء.",
        },
      ],
    },
    faq: {
      eyebrow: "الأسئلة الشائعة",
      title: "كل ما يسألنا عنه الملاك",
      items: [
        {
          q: "كيف تُقدّرون مداخيلي المحتملة؟",
          a: "نحلّل عقارك (الموقع، المساحة، التجهيزات) إضافة إلى معطيات الحجوزات المسجّلة في عقارات مماثلة بالمنطقة، لنمنحك تقديراً واقعياً داخل 48 ساعة، دون أي التزام.",
        },
        {
          q: "ما هي العمولة وماذا تشمل؟",
          a: "تتراوح عمولتنا بين 18% و26% حسب الصيغة المختارة، دون مصاريف خفية. وتغطي على الأقل الإعلان، النشر على منصات متعددة، التسعير الديناميكي ودعم المسافرين على مدار الساعة.",
        },
        {
          q: "كيف تدبّرون التنظيف والبياضات بين كل إقامة؟",
          a: "يتدخّل فريق تنظيف محترف بشكل منهجي بين كل إقامتين، مع مراقبة الجودة بالصور وبياضات فندقية نوفّرها ونغسلها بأنفسنا.",
        },
        {
          q: "هل يمكنني الاستفادة من عقاري في عطلي الخاصة؟",
          a: "بالتأكيد. تُخبرنا بتواريخ الحجب مسبقاً من لوحة القيادة الخاصة بك، ونقوم بتعديل رزنامة الحجوزات وفق ذلك.",
        },
        {
          q: "على أي منصات تنشرون إعلاني؟",
          a: "يُنشر عقارك في آن واحد على Airbnb وBooking.com وAbritel، مع رزنامة متزامنة لتفادي أي حجز مزدوج.",
        },
        {
          q: "ماذا يحدث في حال وقوع مشكل أثناء إقامة مسافر؟",
          a: "خطّنا الهاتفي متاح 24/7. عند أي طارئ (عطب، سؤال عملي، طقس)، يتدخّل أحد أعضاء الفريق أو ينسّق مع حرفي محلي دون أن تتدخل أنت.",
        },
      ],
    },
    values: {
      eyebrow: "القيم",
      title: "ثلاثة مبادئ، دون تنازل.",
      items: [
        {
          name: "الثقة",
          body: "علاقات مبنية على الموثوقية والشفافية واحترام التزاماتنا.",
        },
        {
          name: "الجودة",
          body: "عناية دائمة بالخدمة وبالتجربة وبكل تفاصيل التدبير.",
        },
        {
          name: "راحة البال",
          body: "طمأنينة أن تعرف أن عقارك في أيدٍ أمينة.",
        },
      ],
    },
    results: {
      eyebrow: "النتائج",
      title: "أرقام تتحدّث، موسماً بعد موسم",
      body: "نتائج قابلة للقياس على مجموع العقارات المُدارة في مختلف مناطق المغرب.",
      note: "",
      items: [
        { label: "من المداخيل المتوسطة المسجّلة", value: "+35 %" },
        { label: "عقار مُدار", value: "120+" },
        { label: "معدل تقييم المسافرين", value: "4,9/5" },
        { label: "نسبة الإشغال في الصيف", value: "96 %" },
      ],
    },
    reviews: {
      eyebrow: "شهادات",
      title: "آراء العملاء",
      body: "انطباعات الملاك الذين أسندوا إلينا تدبير عقاراتهم.",
      placeholder: "",
      author: "",
      items: [
        {
          quote: "بفضل كازا نستيا ارتفعت مداخيلي بنسبة 38% في أربعة أشهر. احترافية لافتة.",
          name: "أحمد",
        },
        {
          quote: "تدبير لا تشوبه شائبة وشفافية تامة. أنصح بشدة بخدماتهم.",
          name: "صوفي",
        },
        {
          quote: "شقتي تسجّل 91% من الإشغال بفضل خبرتهم. تواصل استثنائي.",
          name: "كريم",
        },
        {
          quote: "خدمة المسافرين بلا عيب. تقييماتي بخمس نجوم تتضاعف منذ أسندت إليهم عقاري.",
          name: "نادية",
        },
        {
          quote: "سرعة استجابة استثنائية وتدخّل فوري. فريق متاح ومحترف.",
          name: "لوران",
        },
        {
          quote: "أخيراً كونسيرج يفي بوعوده. شفافية وصرامة في الموعد.",
          name: "أمينة",
        },
      ],
    },
    reseau: {
      label: "✓ معتمد من Le Réseau",
      badge: "معتمد من Le Réseau",
      tagline: "منظومة الكراء قصير الأمد بالمغرب",
      title: "عضو في شبكة كونسيرج من الطراز الرفيع",
      body: "تنتمي هذه الكونسيرج إلى منظومة من المهنيين المنتقين حول معايير جودة صارمة، وتبادل للممارسات الجيدة، والتزام مشترك بحسن الضيافة.",
      items: ["معايير الجودة", "شبكة مهنية", "ثقة وتميّز"],
      note: "",
    },
    vision: {
      eyebrow: "الرؤية",
      title: "رؤيتنا",
      body: "رؤيتنا هي جعل كازا نستيا مرجعاً للثقة في التدبير العقاري، عبر مرافقة تلتقي فيها الصرامة وحسن الضيافة والبعد الإنساني. نطمح إلى بناء علاقات دائمة مع عملائنا والمساهمة في الكشف عن كامل إمكانات كل عقار يُسند إلينا.",
    },
    contact: {
      eyebrow: "اتصل بنا",
      title: "لنتحدث عن عقارك.",
      body: "هل ترغب في تفويض تدبير عقارك أو ببساطة مناقشة مشروعك؟ كازا نستيا تنصت إليك.",
      cta: "تواصل معنا",
      phoneLabel: "الهاتف",
      emailLabel: "البريد الإلكتروني",
      addressLabel: "العنوان",
      address: "مراكش · المغرب",
    },
    estimate: {
      eyebrow: "تقييم مجاني",
      title: "مستعد لرفع مداخيلك؟",
      body: "مع كازا نستيا، يمكن لعقارك أن يحقق مداخيل مُحسَّنة بفضل خبرتنا في التدبير الكرائي.",
      points: ["جواب داخل 48 ساعة", "دون أي التزام", "دراسة مبنية على منطقتك بالضبط"],
      formTitle: "أريد الحصول على تقييمي",
      formBody: "املأ الاستمارة وسنعاود الاتصال بك سريعاً.",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      address: "عنوان العقار",
      submit: "احصل على تقييمك المجاني",
      success: "شكراً لك! تم إرسال طلبك، سنعود إليك داخل 48 ساعة.",
      bedrooms: "عدد الغرف",
      bedroomsPlaceholder: "– اختر –",
      commissionFrom: "ابتداءً من",
      commissionValue: "18%",
      commissionCaption: "من العمولة",
      perks: [
        "ديكور وصور بجودة عالية",
        "تحسين نسبة الإشغال",
        "تنظيف بمعايير فندقية",
        "خدمة العملاء 24/24",
        "10 خدمات إضافية أخرى",
      ],
      legalNote:
        "طبقاً للقانون 09-08، لك حق الولوج والتصحيح والاعتراض على معالجة معطياتك الشخصية.",
      consentLegal: "قرأت وأقبل المعلومات القانونية، بما فيها حماية المعطيات الشخصية.",
      consentMarketing: "أقبل استعمال معطياتي لأغراض التواصل التجاري المباشر.",
    },
    footer: {
      tagline: "كونسيرج وإدارة عقارية",
      brand: "كازا نستيا: نعتني بعقارك كما لو كان عقارنا، بتميّز وثقة.",
      location: "مراكش · المغرب",
      scope: "كراء قصير وطويل الأمد",
      navTitle: "التصفح",
      navLinks: [
        { label: "الخدمات", href: "#services" },
        { label: "طريقة العمل", href: "#fonctionnement" },
        { label: "النتائج", href: "#resultats" },
        { label: "المناطق", href: "#secteurs" },
        { label: "الأسئلة الشائعة", href: "#faq" },
      ],
      zoneTitle: "المناطق المغطاة",
      zone: ["مراكش", "الدار البيضاء", "الصويرة", "بوسكورة", "الرباط", "أكادير"],
      contactTitle: "اتصال",
      legal: "معلومات قانونية",
      privacy: "سياسة الخصوصية",
      cgv: "الشروط العامة للبيع",
      rights: "جميع الحقوق محفوظة.",
    },
  },
  am: {
    nav: {
      home: "ⵜⴰⵙⵏⴰ ⵜⴰⵎⵣⵡⴰⵔⵓⵜ",
      services: "ⵜⵉⵏⴰⴼⵓⵜⵉⵏ",
      fonctionnement: "ⵎⴰⵎⴽ ⵏⵜⵜⵡⴰⵙⵙⵏ",
      resultats: "ⵉⴳⵎⴰⴹ",
      secteurs: "ⵜⵉⵎⵏⴰⴹⵉⵏ",
      faq: "ⵉⵙⵇⵙⵉⵜⵏ",
      cta: "ⵙⵓⵜⵔ ⴰⵙⵎⵓⵜⵜⴳ ⴱⴰⵟⵍ",
    },
    hero: {
      location: "",
      tagline: "ⴰⵙⵙⵓⴷⵓ ⴷ ⵓⵙⵡⵓⴷⴷⵓ ⵏ ⵜⴳⵎⵎⵉ",
      title: "ⵜⴰⵥⵓⵕⵉ ⵏ ⵓⵙⵎⵓⵜⵜⴳ ⵏ ⵜⴳⵎⵎⵉ ⵏⵏⴽ",
      body: "Casa Nestia ⵜⵜⵎⵓⴷⴷⵓ ⵉⴱⴰⴱⴰⵜⵏ ⵏ ⵜⴳⵎⵎⵉ ⴳ ⵓⵙⵡⵓⴷⴷⵓ ⵏ ⵓⴽⵔⴰ ⵉⴳⵣⵣⵓⵍⵏ ⴷ ⵓⵣⵉⵔⴰⵔ, ⵙ ⵜⴰⴼⵍⵙⵜ, ⵜⵉⵖⴰⵔⴰ ⴷ ⵜⴰⵍⵡⵉⵜ.",
      primary: "ⵙⵓⵜⵔ ⴰⵙⵎⵓⵜⵜⴳ ⴱⴰⵟⵍ",
      secondary: "ⵙⵙⵏ Casa Nestia",
      scroll: "ⴰⴷⴷⵓ ⵙ ⵡⴰⴷⴷⴰⵢ",
    },
    story: {
      eyebrow: "Casa Nestia",
      title: "ⵢⴰⵜ ⵜⴰⵔⴰⵢⵜ ⵢⴰⴹⵏⵉⵏ ⵏ ⵓⵙⵎⵓⵜⵜⴳ ⵏ ⵜⴳⵎⵎⵉ.",
      body: "Casa Nestia ⵜⵍⵓⵍ ⵙⴳ ⵢⴰⵜ ⵜⵡⵉⵍⴰ ⵉⴼⵙⵓⵙⵏ: ⴽⵓ ⴱⴰⴱ ⵏ ⵜⴳⵎⵎⵉ ⵉⵙⵜⴰⵀⵍ ⴰⵙⵡⵓⴷⴷⵓ ⵉⵍⵍⴰⵏ ⴷ ⵜⴰⵍⵡⵉⵜ, ⴷ ⵜⵓⴼⵔⴰⵜ, ⴷ ⵜⵉⵎⵙⵍⴰⵢⵜ. ⵙ ⵜⴰⵢⵔⵉ ⵏ ⵜⴳⵎⵎⵉ, ⵏ ⵜⵎⴰⵍⵉⵜ ⴷ ⵜⵖⴰⵔⴰ ⵏ ⵜⵏⴰⴼⵓⵜ, ⵙⵙⵏⵜⵉⵖ Casa Nestia ⴰⴼⴰⴷ ⴰⴷ ⵎⵎⵓⴷⴷⵓⵖ ⵉⴱⴰⴱⴰⵜⵏ ⵍⵍⵉ ⵉⵔⴰⵏ ⴰⴷ ⴼⴽⵏ ⴰⵙⵡⵓⴷⴷⵓ ⵏ ⵓⴽⵔⴰ ⵏⵏⵙⵏ, ⵙ ⵓⵙⵎⵖⵔ ⵏ ⵜⴷⵔⵉⵎⵜ ⵏⵏⵙⵏ ⴷ ⵜⵉⵔⵎⵉⵜ ⵉⴼⵓⵍⴽⵉⵏ ⵉ ⵉⵎⵙⴰⴼⴰⵔⵏ ⵏⵏⵙⵏ.",
    },
    expertise: {
      eyebrow: "ⵜⴰⵣⵣⵓⵍⵜ",
      title: "ⵜⴰⵣⵣⵓⵍⵜ ⵉ ⵜⴳⵎⵎⵉ ⵏⵏⴽ.",
      body: "ⴳ Casa Nestia, ⵏⵜⵜⵎⵓⴷⴷⵓ ⵉⴱⴰⴱⴰⵜⵏ ⴳ ⵓⵙⵡⵓⴷⴷⵓ ⵏ ⵜⴳⵎⵎⴰ ⵏⵏⵙⵏ ⴳ ⵓⴽⵔⴰ ⵉⴳⵣⵣⵓⵍⵏ ⴷ ⵓⵣⵉⵔⴰⵔ ⵙ ⵢⴰⵜ ⵜⴰⵔⴰⵢⵜ ⵉⵙⵎⵓⵏⵏ ⵜⵓⴼⵔⴰⵜ ⵏ ⵜⵡⵓⵔⵉ, ⵜⵉⵎⵙⵜⴳⴳⴰⵔⵜ ⴷ ⵓⵙⵡⵉⵏⴳⵎ ⴳ ⵜⵖⴰⵡⵙⵉⵡⵉⵏ ⵜⵉⵎⵥⵥⵢⴰⵏⵉⵏ.",
    },
    services: {
      eyebrow: "ⵜⵉⵏⴰⴼⵓⵜⵉⵏ",
      title: "ⵎⴰⵢⴷ ⵏⵜⵜⴰⵡⵙ ⵙⵔⵙ.",
      items: [
        "ⴰⵙⵡⵓⴷⴷⵓ ⵏ ⵓⴽⵔⴰ ⵉⴳⵣⵣⵓⵍⵏ ⴷ ⵓⵣⵉⵔⴰⵔ",
        "ⴰⵙⵎⵖⵔ ⵏ ⵜⴷⵔⵉⵎⵜ",
        "ⴰⵙⵏⴼⵍⵓⵍ ⴷ ⵓⵙⵎⵖⵔ ⵏ ⵉⵎⵢⴰⵡⴰⴹⵏ",
        "ⴰⵎⵢⴰⵡⴰⴹ ⴷ ⵉⵎⵙⴰⴼⴰⵔⵏ 7/7",
        "ⴰⵙⵎⵓⵜⵜⴳ ⵏ ⵓⵙⵓⵖⵍ ⴷ ⵜⵓⵙⴽⴰ",
        "ⴰⴽⵛⵛⵓⵎ / ⴰⴼⴼⵓⵖ",
        "ⴰⴹⴼⵓⵕ ⵏ ⵜⵖⴰⵔⴰ ⴷ ⵜⵎⵙⵜⴳⴳⴰⵔⵜ",
        "ⴰⵙⵡⵓⴷⴷⵓ ⴰⵏⴱⴷⴰⴷ ⴷ ⴰⵎⵙⵙⵓⴳⵓⵔ",
        "ⴰⵙⵎⵖⵔ ⵏ ⵡⴰⵜⵉⴳ ⵏ ⵜⴳⵎⵎⵉ",
      ],
    },
    cities: {
      eyebrow: "ⵜⵉⵎⵏⴰⴹⵉⵏ",
      title: "ⵜⵉⵎⵏⴰⴹⵉⵏ",
      body: "",
      list: [
        {
          name: "ⵎⵕⵕⴰⴽⵛ",
          country: "ⵍⵎⵖⵔⵉⴱ",
          status: "ⵜⴰⵎⵏⴰⴹⵜ ⵜⵓⵙⵙⵉⵏⵜ",
          note: "ⵜⴰⵎⴷⵉⵏⵜ ⵜⴰⵣⴳⴳⵯⴰⵖⵜ, ⵜⴰⵎⵏⴰⴹⵜ ⵜⴰⵎⵣⵡⴰⵔⵓⵜ ⵏ ⵜⵎⵙⵙⴰⵔⵜ ⴳ ⵜⴳⵍⴷⵉⵜ.",
        },
        {
          name: "ⴷⴷⴰⵕⵍⴱⵉⴹⴰ",
          country: "ⵍⵎⵖⵔⵉⴱ",
          status: "ⵜⴰⵎⵏⴰⴹⵜ ⵜⵓⵙⵙⵉⵏⵜ",
          note: "ⵜⴰⵎⴷⵉⵏⵜ ⵜⴰⴷⴰⵎⵙⴰⵏⵜ ⵏ ⵍⵎⵖⵔⵉⴱ ⵙ ⵓⵙⵓⵜⵍ ⵏ ⵓⴽⵔⴰ ⵢⵓⵙⵙⴰⵏ.",
        },
        {
          name: "ⵜⴰⵚⵚⵓⵕⵜ",
          country: "ⵍⵎⵖⵔⵉⴱ",
          status: "ⵜⴰⵎⵏⴰⴹⵜ ⵜⵓⵙⵙⵉⵏⵜ",
          note: "ⵜⴰⵎⴷⵉⵏⵜ ⵏ ⵓⴳⴰⵔⴰⵡ ⵙ ⵓⵎⵍⵓ ⵏⵏⵙ ⴷ ⵜⵎⵙⵙⴰⵔⵜ.",
        },
        {
          name: "ⴱⵓⵙⴽⵓⵔⴰ",
          country: "ⵍⵎⵖⵔⵉⴱ",
          status: "ⵜⴰⵎⵏⴰⴹⵜ ⵜⵓⵙⵙⵉⵏⵜ",
          note: "ⴰⵎⵎⴰⵙ ⴰⵣⴷⴰⵖⴰⵏ ⵢⴰⵜⵜⵓⵢⵏ ⵉⵜⵜⵎⵖⵓⵔⵏ ⵙ ⵓⵙⵓⵜⵍ ⵏ ⵓⴽⵔⴰ.",
        },
        {
          name: "ⵕⵕⴱⴰⵟ",
          country: "ⵍⵎⵖⵔⵉⴱ",
          status: "ⵜⴰⵎⵏⴰⴹⵜ ⵜⵓⵙⵙⵉⵏⵜ",
          note: "ⵜⴰⵎⴰⵥⵓⵏⵜ ⵜⴰⵏⴱⴷⴰⴷⵜ ⵜⵜⴰⵡⵙ ⵉⵎⵙⵖⴰⵏ ⴷ ⵉⴷⵉⴱⵍⵓⵎⴰⵙⵉⵢⵏ.",
        },
        {
          name: "ⴰⴳⴰⴷⵉⵔ",
          country: "ⵍⵎⵖⵔⵉⴱ",
          status: "ⵜⴰⵎⵏⴰⴹⵜ ⵜⵓⵙⵙⵉⵏⵜ",
          note: "ⵜⴰⵎⵏⴰⴹⵜ ⵜⴰⵎⵙⵙⴰⵔⵜ ⵜⴰⵎⵇⵔⴰⵏⵜ ⵙ ⵓⴽⵛⵛⵓⵎ ⵢⴰⵜⵜⵓⵢⵏ ⴰⵙⴳⴳⵯⴰⵙ ⴰⴽⴽⵯ.",
        },
      ],
    },
    process: {
      eyebrow: "ⵎⴰⵎⴽ ⵏⵜⵜⵡⴰⵙⵙⵏ",
      title: "ⴽⴽⵓⵥ ⵏ ⵜⵙⵓⵔⵉⴼⵉⵏ ⵙ ⵜⴰⴼⵍⵙⵜ",
      body: "ⴰⴱⵔⵉⴷ ⵉⴼⵙⵓⵙⵏ, ⵙⴳ ⵓⵎⵢⴰⵡⴰⴹ ⴰⵎⵣⵡⴰⵔⵓ ⴰⵔ ⴰⵙⵡⵓⴷⴷⵓ ⴰⴽⵓⴷⴰⵏ ⵏ ⵜⴳⵎⵎⵉ ⵏⵏⴽ.",
      steps: [
        { name: "ⴰⵙⵎⵓⵜⵜⴳ ⴱⴰⵟⵍ", body: "ⵏⵙⵙⵍⵎⴰⴷ ⵜⴰⴳⵎⵎⵉ ⴷ ⵜⴰⵎⵏⴰⴹⵜ ⵏⵏⴽ ⴰⴼⴰⴷ ⴰⴷ ⵏⵙⵙⵏ ⵜⴰⴷⵔⵉⵎⵜ ⵏⵏⴽ ⴳ 48 ⵏ ⵜⵙⵔⴰⴳⵉⵏ." },
        { name: "ⵜⴰⵔⵣⵣⵓⵜ ⴷ ⵓⵙⵎⵓⵜⵜⴳ", body: "ⵜⵉⵡⵍⴰⴼⵉⵏ, ⵜⵉⵔⵔⴰ ⵏ ⵓⵎⵢⴰⵡⴰⴹ ⴷ ⵓⵙⵔⵙ ⵏ ⵜⵎⵙⵙⵓⴳⵓⵔⵜ." },
        { name: "ⴰⵙⵔⵙ ⵖⴼ ⵓⵣⵟⵟⴰ", body: "ⴰⵙⵏⵓⴱⴳ ⵖⴼ ⵎⵏⵏⴰⵡ ⵏ ⵜⵎⵏⵏⴰⵜⵉⵏ ⴷ ⵓⵙⵡⵓⴷⴷⵓ ⵏ ⵜⵖⵉⵎⵉⵜⵉⵏ ⵜⵉⵎⵣⵡⵓⵔⴰ." },
        { name: "ⴰⵙⵡⵓⴷⴷⵓ ⴰⴽⵓⴷⴰⵏ", body: "ⴰⵙⵏⵓⴱⴳ, ⴰⵙⵓⵖⵍ, ⵜⴰⵡⵉⵙⵉ ⵏ ⵉⵎⵙⴰⴼⴰⵔⵏ ⴷ ⵓⵏⵖⵎⵉⵙ ⴰⵢⵢⵓⵔⴰⵏ." },
      ],
    },
    faq: {
      eyebrow: "ⵉⵙⵇⵙⵉⵜⵏ",
      title: "ⴰⵢⵍⵍⵉ ⵙ ⵜⵜ ⵉⵏⵖ ⵙⵇⵙⴰⵏ ⵉⴱⴰⴱⴰⵜⵏ",
      items: [
        {
          q: "ⵎⴰⵎⴽ ⵜⵙⵙⵏⵎ ⵜⴰⴷⵔⵉⵎⵜ ⵉⵏⵓ?",
          a: "ⵏⵙⵙⵍⵎⴰⴷ ⵜⴰⴳⵎⵎⵉ ⵏⵏⴽ (ⴰⴷⵖⴰⵔ, ⵜⵉⴷⴷⵉ, ⵜⵉⵎⵙⵙⵓⴳⵓⵔⵜ) ⴷ ⵉⵙⴼⴽⴰ ⵏ ⵜⵖⵉⵎⵉⵜⵉⵏ ⵏ ⵜⴳⵎⵎⴰ ⵢⴰⴹⵏⵉⵏ ⴰⴼⴰⴷ ⴰⴷ ⴰⴽ ⵏⴼⴽ ⴰⵙⵎⵓⵜⵜⴳ ⵉⵎⵎⴰⵍⵏ ⴳ 48 ⵏ ⵜⵙⵔⴰⴳⵉⵏ, ⴱⵍⴰ ⴰⵎⵜⴰⵡⴰ.",
        },
        {
          q: "ⵎⵛⵜⴰ ⵏ ⵜⴰⵙⵎⵉⵍⵜ ⴷ ⵎⴰⵢⴷ ⵜⵍⵍⴰ ⴳⵉⵙ?",
          a: "ⵜⴰⵙⵎⵉⵍⵜ ⵏⵏⵖ ⵜⵍⵍⴰ ⴳⵔ 18% ⴷ 26% ⵖⴼ ⵜⵡⵉⵍⴰ ⵜⴰⵎⵙⵜⴰⵢⵜ, ⴱⵍⴰ ⵜⵉⵎⵙⴽⵉⵔⵉⵏ ⵜⵉⵏⵓⴼⴼⴰⵔ. ⵜⵍⵍⴰ ⴳⵉⵙ ⵜⵎⵢⴰⵡⴰⴹⵜ, ⴰⵙⵏⵓⴱⴳ, ⴰⵙⴰⵜⵉⴳ ⴰⵙⵎⵓⵜⵜⵉ ⴷ ⵜⴰⵡⵉⵙⵉ 24/7.",
        },
        {
          q: "ⵎⴰⵎⴽ ⵜⵙⵡⵓⴷⴷⵓⵎ ⴰⵙⵓⵖⵍ ⴷ ⵜⴽⵔⵔⴰⵢⵉⵏ?",
          a: "ⵜⴰⵔⴰⴱⴱⵓⵜ ⵏ ⵓⵙⵓⵖⵍ ⵜⴰⵎⴰⵣⵣⵓⵍⵜ ⵜⵜⴽⵛⵛⴰⵎ ⴳⵔ ⴽⵓ ⵙⵉⵏ ⵏ ⵜⵖⵉⵎⵉⵜⵉⵏ, ⵙ ⵓⴹⴼⵓⵕ ⵏ ⵜⵖⴰⵔⴰ ⵙ ⵜⵡⵍⴰⴼⵉⵏ ⴷ ⵜⴽⵔⵔⴰⵢⵉⵏ ⵏ ⵓⵙⵏⵓⴱⴳ.",
        },
        {
          q: "ⵉⵣⴹⴰⵕ ⴰⴷ ⵙⵙⵎⵔⵙⵖ ⵜⴰⴳⵎⵎⵉ ⵉⵏⵓ ⴳ ⵉⵎⵓⵔⴰⵙ ⵉⵏⵓ?",
          a: "ⵢⴰⵀ. ⵜⵙⵙⵏⵜ ⴰⵖ ⵜⵉⵣⵉ ⵏⵏⴽ ⵣⵉⴽ ⵙⴳ ⵜⴼⵍⵡⵉⵜ ⵏⵏⴽ, ⵏⵙⵏⴼⵍ ⴰⵣⵎⵣ ⵏ ⵜⵖⵉⵎⵉⵜⵉⵏ.",
        },
        {
          q: "ⵎⴰⵏⵉ ⵜⵙⵔⴰⵙⵎ ⴰⵎⵢⴰⵡⴰⴹ ⵉⵏⵓ?",
          a: "ⵜⴰⴳⵎⵎⵉ ⵏⵏⴽ ⵜⵜⵡⴰⵙⵔⴰⵙ ⴳ Airbnb, Booking.com ⴷ Abritel ⵙ ⵓⵣⵎⵣ ⵉⵎⵢⴰⵏⴰⵡⵏ.",
        },
        {
          q: "ⵎⴰⵢⴷ ⵉⵜⵜⵉⵍⵉⵏ ⵎⴽ ⵉⵍⵍⴰ ⵓⵎⵓⴽⵔⵉⵙ ⴳ ⵜⵖⵉⵎⵉⵜ?",
          a: "ⵜⴰⵍⵖⵓⵖⵜ ⵏⵏⵖ ⵜⵍⵍⴰ 24/7. ⵎⴽ ⵉⵍⵍⴰ ⴽⵔⴰ, ⵉⴽⵛⵛⵎ ⵢⴰⵏ ⵙⴳ ⵜⵔⴰⴱⴱⵓⵜ ⵏⵖ ⵉⵙⵎⵓⵏ ⴰⵎⵙⵙⵓⴼⵖ ⴰⴷⵖⵔⴰⵏ.",
        },
      ],
    },
    values: {
      eyebrow: "ⵜⵉⵎⵉⵜⴰⵔ",
      title: "ⴽⵕⴰⴹ ⵏ ⵜⵎⵉⵜⴰⵔ, ⴱⵍⴰ ⴰⵙⵏⵉⴼⵍ.",
      items: [
        { name: "ⵜⴰⴼⵍⵙⵜ", body: "ⵜⵉⵎⵢⴰⵇⵇⴰⵏⵉⵏ ⵖⴼ ⵜⵉⴷⵜ, ⵜⵓⴼⵔⴰⵜ ⴷ ⵓⵇⵇⴰⵕ ⵏ ⵡⴰⵡⴰⵍ." },
        { name: "ⵜⵉⵖⴰⵔⴰ", body: "ⴰⵙⵡⵉⵏⴳⵎ ⴰⴽⵓⴷⴰⵏ ⴳ ⵜⵏⴰⴼⵓⵜ ⴷ ⵜⵉⵔⵎⵉⵜ ⴷ ⴽⵓ ⵜⴰⵖⴰⵡⵙⴰ ⵏ ⵓⵙⵡⵓⴷⴷⵓ." },
        { name: "ⵜⴰⵍⵡⵉⵜ", body: "ⴰⴷ ⵜⵙⵙⵏⴷ ⵉⵙ ⵜⴰⴳⵎⵎⵉ ⵏⵏⴽ ⴳ ⵉⴼⴰⵙⵙⵏ ⵢⵓⵙⵙⴰⵏ." },
      ],
    },
    results: {
      eyebrow: "ⵉⴳⵎⴰⴹ",
      title: "ⵉⵎⴹⴰⵏⵏ ⵙⴰⵡⴰⵍⵏⵉⵏ, ⴰⴽⵓⴷ ⵙ ⵓⴽⵓⴷ",
      body: "ⵉⴳⵎⴰⴹ ⵉⵜⵜⵡⴰⵙⴽⴰⵍⵏ ⵖⴼ ⵜⴳⵎⵎⴰ ⵜⵜⵡⴰⵙⵡⵓⴷⴷⵓⵏⵉⵏ ⴳ ⵜⵎⵏⴰⴹⵉⵏ ⵏ ⵍⵎⵖⵔⵉⴱ.",
      note: "",
      items: [
        { label: "ⵏ ⵜⴷⵔⵉⵎⵜ ⵜⴰⵎⴰⵜⴰⵢⵜ", value: "+35 %" },
        { label: "ⵏ ⵜⴳⵎⵎⴰ ⵜⵜⵡⴰⵙⵡⵓⴷⴷⵓⵏⵉⵏ", value: "120+" },
        { label: "ⵜⴰⵙⴽⴰⵍⵜ ⵏ ⵉⵎⵙⴰⴼⴰⵔⵏ", value: "4,9/5" },
        { label: "ⴰⴽⵛⵛⵓⵎ ⴳ ⵓⵏⴱⴷⵓ", value: "96 %" },
      ],
    },
    reviews: {
      eyebrow: "ⵜⵉⵎⵉⵜⴰⵔ ⵏ ⵉⵎⵙⵖⴰⵏ",
      title: "ⵜⵉⵡⵓⵔⵉⵡⵉⵏ ⵏ ⵉⵎⵙⵖⴰⵏ",
      body: "ⵎⴰⵢⴷ ⵙⴰⵡⴰⵍⵏ ⵉⴱⴰⴱⴰⵜⵏ ⵍⵍⵉ ⴰⵖ ⵢⵓⵛⴽⴰⵏ ⵙ ⵜⴳⵎⵎⴰ ⵏⵏⵙⵏ.",
      placeholder: "",
      author: "",
      items: [
        { quote: "ⵙ Casa Nestia, ⵜⵎⵖⵓⵔ ⵜⴷⵔⵉⵎⵜ ⵉⵏⵓ ⵙ 38% ⴳ ⴽⴽⵓⵥ ⵏ ⵡⴰⵢⵢⵓⵔⵏ.", name: "ⴰⵃⵎⴰⴷ" },
        { quote: "ⴰⵙⵡⵓⴷⴷⵓ ⵉⴳⴰⵏ ⴰⵎⵢⴰ ⴷ ⵜⵓⴼⵔⴰⵜ ⵜⴰⵎⵎⵉⴷⵉⵏ. ⴰⵔ ⵜⵜⵉⵏⵉⵖ ⵙ ⵜⵏⴰⴼⵓⵜⵉⵏ ⵏⵏⵙⵏ.", name: "ⵚⵓⴼⵉ" },
        { quote: "ⵜⴰⴷⴷⴰⵔⵜ ⵉⵏⵓ ⵜⵍⴽⵎ 91% ⵏ ⵓⴽⵛⵛⵓⵎ ⵙ ⵜⵣⵣⵓⵍⵜ ⵏⵏⵙⵏ.", name: "ⴽⵔⵉⵎ" },
        { quote: "ⵜⴰⵏⴰⴼⵓⵜ ⵏ ⵉⵎⵙⴰⴼⴰⵔⵏ ⴱⵍⴰ ⴰⴽⵛⵛⵓⴹ. ⵜⵉⵙⴽⴰⵍⵉⵏ ⵏ 5 ⵏ ⵉⵜⵔⴰⵏ ⵜⵜⵎⵖⵓⵔⵏⵜ.", name: "ⵏⴰⴷⵢⴰ" },
        { quote: "ⵜⴰⵣⵣⵍⴰ ⵜⴰⵎⵇⵔⴰⵏⵜ ⴷ ⵓⴽⵛⵛⵓⵎ ⵉⵣⵔⴱⵏ. ⵜⴰⵔⴰⴱⴱⵓⵜ ⵜⵍⵍⴰ ⴷ ⵜⴰⵎⴰⵣⵣⵓⵍⵜ.", name: "ⵍⵓⵕⴰⵏ" },
        { quote: "ⴰⵎⵎⴰⵙ ⵏ ⵓⵙⵙⵓⴷⵓ ⵉⵜⵜⴰⵡⵉⵏ ⴰⵡⴰⵍ ⵏⵏⵙ. ⵜⵓⴼⵔⴰⵜ ⴷ ⵜⵎⵙⵜⴳⴳⴰⵔⵜ.", name: "ⴰⵎⵉⵏⴰ" },
      ],
    },
    reseau: {
      label: "✓ ⵉⵜⵜⵡⴰⵙⵙⵏ ⵙⴳ Le Réseau",
      badge: "ⵉⵜⵜⵡⴰⵙⵙⵏ ⵙⴳ Le Réseau",
      tagline: "ⴰⵎⵢⴰⵏⴰⵡ ⵏ ⵓⴽⵔⴰ ⴰⴳⵣⵣⵓⵍ ⴳ ⵍⵎⵖⵔⵉⴱ",
      title: "ⴰⵎⵎⴰⵙ ⵏ ⵢⴰⵜ ⵜⵣⵟⵟⴰ ⵏ ⵓⵙⵙⵓⴷⵓ ⵢⴰⵜⵜⵓⵢⵏ",
      body: "ⴰⵎⵎⴰⵙ ⴰⴷ ⵏ ⵓⵙⵙⵓⴷⵓ ⵉⴳⴰ ⴽⵔⴰ ⵙⴳ ⵢⴰⵏ ⵓⵎⵢⴰⵏⴰⵡ ⵏ ⵉⵎⴰⵣⵣⵓⵍⵏ ⵉⵜⵜⵡⴰⵙⵜⴰⵢⵏ ⵖⴼ ⵜⵎⵉⵜⴰⵔ ⵏ ⵜⵖⴰⵔⴰ ⵜⵉⵎⵇⵇⵓⵔⵉⵏ ⴷ ⵓⵎⵢⴰⵡⴰⴹ ⵏ ⵜⵎⵓⵙⵙⵏⵉ ⴷ ⵓⵎⵜⴰⵡⴰ ⵖⴼ ⵓⵙⵏⵓⴱⴳ.",
      items: ["ⵜⵉⵎⵉⵜⴰⵔ ⵏ ⵜⵖⴰⵔⴰ", "ⵜⴰⵣⵟⵟⴰ ⵜⴰⵎⴰⵣⵣⵓⵍⵜ", "ⵜⴰⴼⵍⵙⵜ ⴷ ⵜⵓⴼⵔⴰⵜ"],
      note: "",
    },
    vision: {
      eyebrow: "ⵜⴰⵎⵓⵖⵍⵉ",
      title: "ⵜⴰⵎⵓⵖⵍⵉ ⵏⵏⵖ",
      body: "ⵜⴰⵎⵓⵖⵍⵉ ⵏⵏⵖ ⴰⴷ ⵏⴳ Casa Nestia ⴷ ⵜⴰⵎⵉⵜⴰⵔⵜ ⵏ ⵜⴰⴼⵍⵙⵜ ⴳ ⵓⵙⵡⵓⴷⴷⵓ ⵏ ⵜⴳⵎⵎⴰ, ⵙ ⵜⵡⵉⵙⵉ ⵎⴰⵏⵉ ⵜⵜⵎⵢⴰⴳⴰⵔⵏ ⵜⵉⵎⵙⵜⴳⴳⴰⵔⵜ, ⴰⵙⵏⵓⴱⴳ ⴷ ⵓⴼⴳⴰⵏ.",
    },
    contact: {
      eyebrow: "ⴰⵎⵢⴰⵡⴰⴹ",
      title: "ⴰⴷ ⵏⵙⴰⵡⴰⵍ ⵖⴼ ⵜⴳⵎⵎⵉ ⵏⵏⴽ.",
      body: "ⵜⵔⵉⴷ ⴰⴷ ⵜⴼⴽⵜ ⴰⵙⵡⵓⴷⴷⵓ ⵏ ⵜⴳⵎⵎⵉ ⵏⵏⴽ ⵏⵖ ⴰⴷ ⵜⵙⴰⵡⵍⵜ ⵖⴼ ⵓⵙⵏⴼⴰⵔ ⵏⵏⴽ? Casa Nestia ⵜⵙⴼⵍⵉⴷ ⴰⵛ.",
      cta: "ⵎⵢⴰⵡⴰⴹ ⴷⵉⴷⵏⵖ",
      phoneLabel: "ⴰⵜⵉⵍⵉⴼⵓⵏ",
      emailLabel: "ⵉⵎⴰⵢⵍ",
      addressLabel: "ⵜⴰⵏⵙⴰ",
      address: "ⵎⵕⵕⴰⴽⵛ · ⵍⵎⵖⵔⵉⴱ",
    },
    estimate: {
      eyebrow: "ⴰⵙⵎⵓⵜⵜⴳ ⴱⴰⵟⵍ",
      title: "ⵜⵙⵎⵓⵜⵜⴳⴷ ⴰⴷ ⵜⵙⵎⵖⵔⴷ ⵜⴰⴷⵔⵉⵎⵜ ⵏⵏⴽ?",
      body: "ⵙ Casa Nestia, ⵜⵣⴹⴰⵕ ⵜⴳⵎⵎⵉ ⵏⵏⴽ ⴰⴷ ⴷ ⵜⴰⵡⵉ ⵜⴰⴷⵔⵉⵎⵜ ⵢⴰⵜⵜⵓⵢⵏ ⵙ ⵜⵣⵣⵓⵍⵜ ⵏⵏⵖ.",
      points: ["ⵜⵉⵔⵔⴰ ⴳ 48 ⵏ ⵜⵙⵔⴰⴳⵉⵏ", "ⴱⵍⴰ ⴰⵎⵜⴰⵡⴰ", "ⵜⴰⵣⵔⴰⵡⵜ ⵖⴼ ⵜⵎⵏⴰⴹⵜ ⵏⵏⴽ"],
      formTitle: "ⴰⴷ ⴰⵎⵥⵖ ⴰⵙⵎⵓⵜⵜⴳ ⵉⵏⵓ",
      formBody: "ⵛⵛⴰⵔ ⵜⴰⴼⵍⵡⵉⵜ, ⴰⴷ ⴰⴽ ⵏⵎⵢⴰⵡⴰⴹ ⵣⵉⴽ.",
      name: "ⵉⵙⵎ ⴷ ⵓⵣⵡⵉⵔ",
      email: "ⵉⵎⴰⵢⵍ",
      phone: "ⴰⵜⵉⵍⵉⴼⵓⵏ",
      address: "ⵜⴰⵏⵙⴰ ⵏ ⵜⴳⵎⵎⵉ",
      submit: "ⴰⵎⵥ ⴰⵙⵎⵓⵜⵜⴳ ⴱⴰⵟⵍ",
      success: "ⵜⴰⵏⵎⵎⵉⵔⵜ! ⵜⵜⵡⴰⵣⵏ ⵓⵙⵓⵜⵔ ⵏⵏⴽ, ⴰⴷ ⴰⴽ ⵏⵎⵢⴰⵡⴰⴹ ⴳ 48 ⵏ ⵜⵙⵔⴰⴳⵉⵏ.",
      bedrooms: "ⵓⵟⵟⵓⵏ ⵏ ⵜⵅⴰⵎⵉⵏ",
      bedroomsPlaceholder: "– ⵙⵜⵉ –",
      commissionFrom: "ⵙⴳ",
      commissionValue: "18%",
      commissionCaption: "ⵏ ⵜⴽⵓⵎⵉⵙⵢⵓⵏ",
      perks: [
        "ⴰⵙⵜⴰⵢ ⴷ ⵜⵡⵍⴰⴼⵉⵏ ⵏ ⵜⵖⴰⵔⴰ",
        "ⴰⵙⵎⵓⵜⵜⴳ ⵏ ⵓⵣⴷⴰⵖ",
        "ⴰⵙⵖⵓⴷⵓ ⵙ ⵜⵖⴰⵔⴰ ⵏ ⵓⵙⵏⵓⴱⴳ",
        "ⵜⴰⵏⴰⴼⵓⵜ 24/24",
        "10 ⵏ ⵜⵏⴰⴼⵓⵜⵉⵏ ⵢⴰⴹⵏ",
      ],
      legalNote:
        "ⵙ ⵓⵙⵏⵜⵍ ⵏ ⵓⵣⵔⴼ 09-08, ⵖⵓⵔⴽ ⴰⵣⵔⴼ ⵏ ⵓⴽⵛⵛⵓⵎ, ⵓⵙⵖⵓⴷⵓ ⴷ ⵓⴳⴷⴰⵍ ⵏ ⵜⵉⵙⴼⴽⴰ ⵏⵏⴽ.",
      consentLegal: "ⵖⵔⵉⵖ ⴰⵔ ⵇⴱⵍⵖ ⵜⵉⵎⵍⴰⵢⵉⵏ ⵜⵉⵣⵔⴼⴰⵏⵉⵏ.",
      consentMarketing: "ⵇⴱⵍⵖ ⴰⴷ ⵜⵜⵡⴰⵙⵎⵔⵙⵏⵜ ⵜⵉⵙⴼⴽⴰ ⵏⵏⵓ ⵉ ⵓⵎⵢⴰⵡⴰⴹ ⴰⵙⴱⴱⴰⴱ.",
    },
    footer: {
      tagline: "ⴰⵙⵙⵓⴷⵓ ⴷ ⵓⵙⵡⵓⴷⴷⵓ ⵏ ⵜⴳⵎⵎⵉ",
      brand: "Casa Nestia: ⵏⵙⵎⵓⵜⵜⴳ ⵜⴰⴳⵎⵎⵉ ⵏⵏⴽ ⵣⵓⵏⴷ ⵉⵙ ⵜⴳⴰ ⵜⵉⵏⵏⵖ, ⵙ ⵜⵓⴼⵔⴰⵜ ⴷ ⵜⴰⴼⵍⵙⵜ.",
      location: "ⵎⵕⵕⴰⴽⵛ · ⵍⵎⵖⵔⵉⴱ",
      scope: "ⴰⴽⵔⴰ ⴰⴳⵣⵣⵓⵍ ⴷ ⵓⵣⵉⵔⴰⵔ",
      navTitle: "ⴰⵙⵎⵎⵓⵜⵜⴳ",
      navLinks: [
        { label: "ⵜⵉⵏⴰⴼⵓⵜⵉⵏ", href: "#services" },
        { label: "ⵎⴰⵎⴽ ⵏⵜⵜⵡⴰⵙⵙⵏ", href: "#fonctionnement" },
        { label: "ⵉⴳⵎⴰⴹ", href: "#resultats" },
        { label: "ⵜⵉⵎⵏⴰⴹⵉⵏ", href: "#secteurs" },
        { label: "ⵉⵙⵇⵙⵉⵜⵏ", href: "#faq" },
      ],
      zoneTitle: "ⵜⵉⵎⵏⴰⴹⵉⵏ ⵏⵏⵖ",
      zone: ["ⵎⵕⵕⴰⴽⵛ", "ⴷⴷⴰⵕⵍⴱⵉⴹⴰ", "ⵜⴰⵚⵚⵓⵕⵜ", "ⴱⵓⵙⴽⵓⵔⴰ", "ⵕⵕⴱⴰⵟ", "ⴰⴳⴰⴷⵉⵔ"],
      contactTitle: "ⴰⵎⵢⴰⵡⴰⴹ",
      legal: "ⵜⵉⵎⵍⴰⵢⵉⵏ ⵜⵉⵣⵔⴼⴰⵏⵉⵏ",
      privacy: "ⵜⴰⵙⵔⵜⵉⵜ ⵏ ⵜⴱⴰⴹⵏⵉⵜ",
      cgv: "ⵜⵉⵡⵜⵍⵉⵡⵉⵏ ⵏ ⵓⵣⵣⵏⵣⵉ",
      rights: "ⴰⴽⴽⵯ ⵉⵣⵔⴼⴰⵏ ⵜⵜⵡⴰⵃⴹⴰⵏ.",
    },
  },
};

export type Copy = (typeof content)["fr"];
export const LANGS = [
  { code: "fr" as const, label: "FR" },
  { code: "en" as const, label: "EN" },
  { code: "ar" as const, label: "ع" },
  { code: "am" as const, label: "ⵣ" },
];

