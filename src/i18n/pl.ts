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
    { text: "Kontakt", href: "#contact" },
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
      category: "frontend" as const,
      slug: "spotifu-music",
    },
    {
      name: "Shopp App",
      summary:
        "Platforma e-commerce replikująca kluczowe funkcje Shopify.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
      category: "frontend" as const,
      slug: "shopp-app",
    },
    {
      name: "ClonTagram",
      summary: "Sieć społecznościowa replikująca funkcje Instagrama.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
      category: "frontend" as const,
      slug: "clontagram",
    },
  ],
  ui: {
    heroCtaButton: "Skontaktuj się",
    experienceTitle: "Doświadczenie zawodowe",
    projectsTitle: "Wybrane projekty",
    aboutTitle: "O mnie",
    projectSource: "Kod źródłowy",
    projectPreview: "Podgląd",
    projectViewDetails: "Zobacz szczegóły",
    projectTabFrontend: "Frontend",
    projectTabBackend: "Backend",
    projectsEmptyState: "Na razie brak projektów. Wkrótce się pojawią!",
    contactTitle: "Kontakt",
    contactDescription: "Masz pytanie lub chcesz nawiązać współpracę? Wyślij mi wiadomość, a odezwę się tak szybko, jak to możliwe.",
    contactNameLabel: "Imię",
    contactNamePlaceholder: "Twoje imię",
    contactEmailLabel: "Email",
    contactEmailPlaceholder: "twoj@email.com",
    contactMessageLabel: "Wiadomość",
    contactMessagePlaceholder: "Twoja wiadomość...",
    contactSubmitButton: "Wyślij wiadomość",
    contactSuccessMessage: "Dziękuję! Twoja wiadomość została wysłana.",
    contactErrorMessage: "Coś poszło nie tak. Spróbuj ponownie później.",
    contactCaptchaError: "Proszę potwierdzić, że nie jesteś robotem.",
    // Project detail page
    projectDetailBack: "Powrót do portfolio",
    projectDetailGeneral: "Informacje ogólne",
    projectDetailTech: "Szczegóły techniczne",
    projectDetailTechStack: "Stack technologiczny",
    projectDetailArchitecture: "Architektura",
    projectDetailLive: "Zobacz live",
    projectDetailSource: "Kod źródłowy",
    projectDetailDownload: "Pobierz",
    projectDetailScreenshots: "Zrzuty ekranu",
  },
  projectDetails: [
    {
      slug: "spotifu-music",
      name: "Spotifu Music",
      summary: "Aplikacja do strumieniowania muzyki naśladująca główne funkcje Spotify.",
      description: `Spotifu Music to nowoczesna aplikacja do strumieniowania muzyki, zbudowana jako klon funkcjonalności Spotify. Projekt powstał z myślą o zapewnieniu użytkownikom intuicyjnego interfejsu do odkrywania, odtwarzania i zarządzania muzyką.

Aplikacja oferuje pełną funkcjonalność odtwarzacza muzycznego, w tym tworzenie playlist, wyszukiwanie utworów i artystów oraz personalizowane rekomendacje. Projekt został zrealizowany z wykorzystaniem najnowszych technologii webowych, zapewniając płynne działanie i responsywny design.

Kluczowe funkcjonalności obejmują system autentykacji użytkowników, integrację z API muzycznymi, zaawansowane zarządzanie stanem aplikacji oraz optymalizację pod kątem wydajności i UX.`,
      image: "/spotifu.png",
      category: "frontend" as const,
      liveLink: "https://spotifu-demo.vercel.app",
      linkSource: "https://github.com/immois/astro-zen",
      screenshots: ["/spotifu.png"],
      techStack: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Redux Toolkit",
        "React Query",
        "Spotify Web API",
        "Axios",
        "React Player",
        "Zustand"
      ],
      architecture: `Aplikacja została zbudowana w architekturze komponentowej z wykorzystaniem React i Next.js. Zarządzanie stanem globalnym odbywa się poprzez Redux Toolkit i Zustand dla różnych warstw danych.

Warstwa prezentacji jest w pełni responsywna dzięki Tailwind CSS, a komunikacja z API muzycznymi jest obsługiwana przez React Query, co zapewnia efektywne cachowanie i synchronizację danych.

Routing aplikacji wykorzystuje App Router z Next.js 13+, co umożliwia server-side rendering dla lepszego SEO i wydajności. Odtwarzacz muzyczny został zaimplementowany z użyciem React Player z customowymi kontrolkami.

Projekt stosuje atomic design pattern dla organizacji komponentów oraz implementuje lazy loading i code splitting dla optymalizacji wydajności.`,
    },
    {
      slug: "shopp-app",
      name: "Shopp App",
      summary: "Platforma e-commerce replikująca kluczowe funkcje Shopify.",
      description: `Shopp App to zaawansowana platforma e-commerce, zaprojektowana jako alternatywa dla popularnych rozwiązań sprzedażowych online. Aplikacja umożliwia tworzenie i zarządzanie sklepem internetowym z pełnym zakresem funkcjonalności.

System oferuje kompleksowe zarządzanie produktami, kategoriami, zamówieniami oraz płatnościami. Zaimplementowano zaawansowany koszyk zakupowy, system rabatowy oraz integrację z popularnymi bramkami płatności.

Projekt kładzie duży nacisk na doświadczenie użytkownika, oferując intuicyjny panel administracyjny oraz responsywny interfejs dla klientów końcowych. Wszystkie kluczowe operacje są zoptymalizowane pod kątem wydajności i bezpieczeństwa transakcji.`,
      image: "/shopify-clon.png",
      category: "frontend" as const,
      liveLink: "https://shopp-demo.vercel.app",
      linkSource: "https://github.com/immois/astro-zen",
      screenshots: ["/shopify-clon.png"],
      techStack: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Redux Toolkit",
        "Stripe API",
        "Prisma",
        "PostgreSQL",
        "React Hook Form",
        "Zod"
      ],
      architecture: `Aplikacja została zbudowana w architekturze full-stack z wykorzystaniem Next.js 14 i API Routes. Backend wykorzystuje Prisma ORM do komunikacji z bazą danych PostgreSQL, zapewniając type-safety na każdym poziomie aplikacji.

System płatności został zintegrowany z Stripe, co gwarantuje bezpieczne przetwarzanie transakcji zgodnie z najwyższymi standardami bezpieczeństwa (PCI DSS). Wszystkie formularze są walidowane za pomocą React Hook Form i Zod.

Zarządzanie stanem aplikacji odbywa się przez Redux Toolkit z wykorzystaniem RTK Query do efektywnego cachowania danych produktowych. Zaimplementowano Server-Side Rendering dla lepszego SEO oraz optymalizację obrazów produktów.

Projekt wykorzystuje middleware do autoryzacji, rate limiting oraz zabezpieczeń CSRF. Dane sesji są przechowywane w bezpiecznych cookie z flagami httpOnly i secure.`,
    },
    {
      slug: "clontagram",
      name: "ClonTagram",
      summary: "Sieć społecznościowa replikująca funkcje Instagrama.",
      description: `ClonTagram to kompleksowa platforma społecznościowa inspirowana Instagram, oferująca użytkownikom możliwość dzielenia się zdjęciami, filmami oraz nawiązywania kontaktów z innymi użytkownikami.

Aplikacja umożliwia publikowanie postów z wieloma zdjęciami, dodawanie filtrów, geolokalizacji oraz tagowanie innych użytkowników. System zawiera również funkcję stories, które znikają po 24 godzinach, oraz sekcję wiadomości prywatnych z możliwością czatu w czasie rzeczywistym.

Projekt został zaprojektowany z myślą o skalowalności i wydajności, obsługując duże wolumeny treści multimedialnych oraz zapewniając szybkie ładowanie feedu z wykorzystaniem infinite scroll i optymistycznych aktualizacji UI.`,
      image: "/clone-ig.png",
      category: "frontend" as const,
      liveLink: "https://clontagram-demo.vercel.app",
      linkSource: "https://github.com/immois/astro-zen",
      screenshots: ["/clone-ig.png"],
      techStack: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Zustand",
        "Socket.io",
        "Cloudinary",
        "Prisma",
        "MongoDB",
        "React Query"
      ],
      architecture: `Aplikacja wykorzystuje architekturę hybrydową z Next.js, łącząc Server-Side Rendering dla publicznych profili z Client-Side Rendering dla dynamicznych feedów. MongoDB jako baza NoSQL zapewnia elastyczność w przechowywaniu różnorodnych typów postów.

Real-time chat został zaimplementowany przy użyciu Socket.io, umożliwiając natychmiastową wymianę wiadomości. Wszystkie media są przesyłane do Cloudinary z automatyczną optymalizacją rozmiaru i formatu (WebP/AVIF).

System powiadomień działa w czasie rzeczywistym, informując użytkowników o nowych polubeniach, komentarzach i obserwujących. Feed jest generowany algorytmicznie z uwzględnieniem popularności i czasu publikacji postów.

Zaimplementowano infinite scroll z wykorzystaniem Intersection Observer API oraz prefetching następnych stron. Optymistyczne aktualizacje UI sprawiają, że interakcje (polubienia, komentarze) są natychmiastowe, a synchronizacja z serwerem odbywa się w tle.`,
    },
  ],
  about: {
    description: `
      Cześć, jestem Alejandro Múnez — pasjonat programowania aplikacji mobilnych i webowych, z talentem do tworzenia płynnych doświadczeń cyfrowych. Dzięki solidnemu doświadczeniu w programowaniu na Androida i iOS oraz technologiach front-endowych, rozwijam się na styku kreatywności i technologii.

      Przez lata doskonaliłem umiejętności tworzenia solidnych, przyjaznych dla użytkownika aplikacji, które nie tylko spełniają potrzeby użytkowników, ale także poszerzają granice możliwości. Moje projekty obejmują innowacyjne aplikacje mobilne i responsywne projekty webowe, z naciskiem na wydajność, bezpieczeństwo i skalowalność.
    `,
    image: "/alejandro-big.jpg",
  },
};
