import type { SiteConfig, SiteContent } from "@types";

export const CONFIG_EN: SiteConfig = {
  title: "Alejandro Múnez — Mobile & Web Developer",
  author: "Alejandro Múnez Cuntez",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
    { text: "Contact", href: "#contact" },
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

export const CONTENT_EN: SiteContent = {
  hero: {
    name: "Alejandro Múnez",
    specialty: "Mobile & Web Developer",
    summary:
      "Developer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
    email: "example@email.com",
  },
  experience: [
    {
      company: "Zalmart",
      position: "Lead Android Developer",
      startDate: "May 2018",
      endDate: "Sept 2020",
      summary: [
        "Implemented advanced memory management and code optimization techniques, resulting in a reduction in application load time by 40% and a decrease in crashes by 25%. This significantly improved user experience and increased user retention by 20%.",
        "I led a team of developers in building and integrating new features using Jetpack Android components such as LiveData and ViewModel. This enabled us to build scalable and maintainable applications, reducing the crash rate by 20% and speeding up the time to delivery of new features by 15%.",
        "Integrated Google Pay for in-app purchases, resulting in a 35% increase in mobile transaction revenue. Additionally, implemented Firebase Analytics to gain insights into user behavior, enabling data-driven optimizations and a 30% increase in user retention.",
      ],
    },
    {
      company: "Bankit",
      position: "Mobile Developer",
      startDate: "Feb 2017",
      endDate: "May 2018",
      summary: [
        "I designed and developed a mobile application using Flutter, allowing it to be deployed on both Android and iOS with a single codebase. This reduced development time by 50% and maintenance costs by 30%, facilitating a consistent user experience on both platforms.",
        "I integrated biometric authentication and data encryption, significantly improving the security of user data. This implementation resulted in a 40% increase in user trust and a 25% reduction in unauthorized access attempts.",
      ],
    },
    {
      company: "Driveer",
      position: "Frontend Developer",
      startDate: "Jun 2015",
      endDate: "Oct 2016",
      summary:
        "Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.",
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
      category: "frontend" as const,
      slug: "spotifu-music",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
      category: "frontend" as const,
      slug: "shopp-app",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
      category: "frontend" as const,
      slug: "clontagram",
    },
  ],
  ui: {
    heroCtaButton: "Get in Touch",
    experienceTitle: "Work Experience",
    projectsTitle: "Featured Projects",
    aboutTitle: "About Me",
    projectSource: "Source",
    projectPreview: "Preview",
    projectViewDetails: "View Details",
    projectTabFrontend: "Frontend",
    projectTabBackend: "Backend",
    projectsEmptyState: "No projects available yet. Stay tuned!",
    contactTitle: "Get in Touch",
    contactDescription: "Have a question or want to work together? Send me a message and I'll get back to you as soon as possible.",
    contactNameLabel: "Name",
    contactNamePlaceholder: "Your name",
    contactEmailLabel: "Email",
    contactEmailPlaceholder: "your@email.com",
    contactMessageLabel: "Message",
    contactMessagePlaceholder: "Your message...",
    contactSubmitButton: "Send Message",
    contactSuccessMessage: "Thank you! Your message has been sent successfully.",
    contactErrorMessage: "Something went wrong. Please try again later.",
    contactCaptchaError: "Please complete the captcha verification.",
    // Project detail page
    projectDetailBack: "Back to Portfolio",
    projectDetailGeneral: "General Information",
    projectDetailTech: "Technical Details",
    projectDetailTechStack: "Tech Stack",
    projectDetailArchitecture: "Architecture",
    projectDetailLive: "View Live",
    projectDetailSource: "Source Code",
    projectDetailDownload: "Download",
    projectDetailScreenshots: "Screenshots",
  },
  projectDetails: [
    {
      slug: "spotifu-music",
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      description: `Spotifu Music is a modern music streaming application built as a clone of Spotify's functionality. The project was created with the goal of providing users with an intuitive interface for discovering, playing, and managing music.

The application offers full music player functionality, including playlist creation, song and artist search, and personalized recommendations. The project was built using the latest web technologies, ensuring smooth performance and responsive design.

Key features include user authentication system, integration with music APIs, advanced application state management, and optimization for performance and UX.`,
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
      architecture: `The application was built using a component-based architecture with React and Next.js. Global state management is handled through Redux Toolkit and Zustand for different data layers.

The presentation layer is fully responsive thanks to Tailwind CSS, and communication with music APIs is handled by React Query, which provides efficient caching and data synchronization.

The application routing uses App Router from Next.js 13+, which enables server-side rendering for better SEO and performance. The music player was implemented using React Player with custom controls.

The project follows the atomic design pattern for component organization and implements lazy loading and code splitting for performance optimization.`,
    },
    {
      slug: "shopp-app",
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      description: `Shopp App is an advanced e-commerce platform designed as an alternative to popular online sales solutions. The application enables creating and managing an online store with a full range of functionality.

The system offers comprehensive product management, categories, orders, and payments. An advanced shopping cart, discount system, and integration with popular payment gateways have been implemented.

The project places great emphasis on user experience, offering an intuitive admin panel and responsive interface for end customers. All key operations are optimized for performance and transaction security.`,
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
      architecture: `The application was built using a full-stack architecture with Next.js 14 and API Routes. The backend uses Prisma ORM to communicate with PostgreSQL database, ensuring type-safety at every level of the application.

The payment system was integrated with Stripe, guaranteeing secure transaction processing according to the highest security standards (PCI DSS). All forms are validated using React Hook Form and Zod.

Application state management is handled through Redux Toolkit using RTK Query for efficient product data caching. Server-Side Rendering was implemented for better SEO and product image optimization.

The project uses middleware for authorization, rate limiting, and CSRF protection. Session data is stored in secure cookies with httpOnly and secure flags.`,
    },
    {
      slug: "clontagram",
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      description: `ClonTagram is a comprehensive social platform inspired by Instagram, offering users the ability to share photos, videos, and connect with other users.

The application enables publishing posts with multiple photos, adding filters, geolocation, and tagging other users. The system also includes a stories feature that disappears after 24 hours, and a private messaging section with real-time chat capability.

The project was designed with scalability and performance in mind, handling large volumes of multimedia content and ensuring fast feed loading using infinite scroll and optimistic UI updates.`,
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
      architecture: `The application uses a hybrid architecture with Next.js, combining Server-Side Rendering for public profiles with Client-Side Rendering for dynamic feeds. MongoDB as a NoSQL database provides flexibility in storing various types of posts.

Real-time chat was implemented using Socket.io, enabling instant message exchange. All media is uploaded to Cloudinary with automatic size and format optimization (WebP/AVIF).

The notification system works in real-time, informing users about new likes, comments, and followers. The feed is generated algorithmically taking into account the popularity and publication time of posts.

Infinite scroll was implemented using the Intersection Observer API and prefetching of next pages. Optimistic UI updates make interactions (likes, comments) instant, while synchronization with the server happens in the background.`,
    },
  ],
  about: {
    description: `
      Hi, I'm Alejandro Múnez, a passionate Mobile and Web Developer with a knack for crafting seamless digital experiences. With a strong background in both Android and iOS development, as well as front-end web technologies, I thrive in the intersection where creativity meets technology.

      Over the years, I've honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what's possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/alejandro-big.jpg",
  },
};
