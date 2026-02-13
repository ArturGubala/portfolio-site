import type { SiteConfig, SiteContent } from "@types";

export const CONFIG_PL: SiteConfig = {
  title: "Alejandro Múnez — Programista Mobile & Web",
  author: "Alejandro Múnez Cuntez",
  description:
    "Inżynier oprogramowania z San Francisco, USA. Specjalizuję się w projektowaniu UI, tworzeniu i utrzymywaniu aplikacji webowych i mobilnych.",
  lang: "pl",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Doświadczenie", href: "#experience" },
    { text: "Projekty", href: "#projects" },
    { text: "O mnie", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const CONTENT_PL: SiteContent = {
  hero: {
    name: "Alejandro Múnez",
    specialty: "Programista Mobile & Web",
    summary:
      "Programista z San Francisco, USA. Specjalizuję się w projektowaniu UI, tworzeniu i utrzymywaniu aplikacji webowych i mobilnych.",
    email: "example@email.com",
  },
  experience: [
    {
      company: "Zalmart",
      position: "Główny Programista Android",
      startDate: "Maj 2018",
      endDate: "Wrz 2020",
      summary: [
        "Wdrożyłem zaawansowane techniki zarządzania pamięcią i optymalizacji kodu, co skutkowało skróceniem czasu ładowania aplikacji o 40% i zmniejszeniem liczby awarii o 25%. Znacząco poprawiło to doświadczenia użytkowników i zwiększyło retencję o 20%.",
        "Kierowałem zespołem programistów w budowaniu i integracji nowych funkcji z wykorzystaniem komponentów Jetpack Android, takich jak LiveData i ViewModel. Pozwoliło to na tworzenie skalowalnych i łatwych w utrzymaniu aplikacji, zmniejszając współczynnik awarii o 20% i przyspieszając dostarczanie nowych funkcji o 15%.",
        "Zintegrowałem Google Pay do płatności w aplikacji, co przyniosło 35% wzrost przychodów z transakcji mobilnych. Dodatkowo wdrożyłem Firebase Analytics, aby uzyskać wgląd w zachowania użytkowników, umożliwiając optymalizacje oparte na danych i 30% wzrost retencji.",
      ],
    },
    {
      company: "Bankit",
      position: "Programista Mobilny",
      startDate: "Lut 2017",
      endDate: "Maj 2018",
      summary: [
        "Zaprojektowałem i zbudowałem aplikację mobilną z użyciem Flutter, umożliwiając jej wdrożenie na Androida i iOS z jedną bazą kodu. Skróciło to czas rozwoju o 50% i koszty utrzymania o 30%, zapewniając spójne doświadczenie użytkownika na obu platformach.",
        "Zintegrowałem uwierzytelnianie biometryczne i szyfrowanie danych, znacząco poprawiając bezpieczeństwo danych użytkowników. Wdrożenie to zaowocowało 40% wzrostem zaufania użytkowników i 25% redukcją prób nieautoryzowanego dostępu.",
      ],
    },
    {
      company: "Driveer",
      position: "Frontend Developer",
      startDate: "Cze 2015",
      endDate: "Paź 2016",
      summary:
        "Opracowałem i zintegrowałem system śledzenia pojazdów w czasie rzeczywistym z wykorzystaniem WebSockets, poprawiając dokładność i aktualizację danych w aplikacji. Ta funkcjonalność zwiększyła satysfakcję użytkowników o 30% i zmniejszyła liczbę zapytań do obsługi klienta o 25%.",
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary:
        "Aplikacja do strumieniowania muzyki naśladująca główne funkcje Spotify.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary:
        "Platforma e-commerce replikująca kluczowe funkcje Shopify.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "Sieć społecznościowa replikująca funkcje Instagrama.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  ui: {
    heroCtaButton: "Skontaktuj się",
    experienceTitle: "Doświadczenie zawodowe",
    projectsTitle: "Wybrane projekty",
    aboutTitle: "O mnie",
    projectSource: "Kod źródłowy",
    projectPreview: "Podgląd",
  },
  about: {
    description: `
      Cześć, jestem Alejandro Múnez — pasjonat programowania aplikacji mobilnych i webowych, z talentem do tworzenia płynnych doświadczeń cyfrowych. Dzięki solidnemu doświadczeniu w programowaniu na Androida i iOS oraz technologiach front-endowych, rozwijam się na styku kreatywności i technologii.

      Przez lata doskonaliłem umiejętności tworzenia solidnych, przyjaznych dla użytkownika aplikacji, które nie tylko spełniają potrzeby użytkowników, ale także poszerzają granice możliwości. Moje projekty obejmują innowacyjne aplikacje mobilne i responsywne projekty webowe, z naciskiem na wydajność, bezpieczeństwo i skalowalność.
    `,
    image: "/alejandro-big.jpg",
  },
};
