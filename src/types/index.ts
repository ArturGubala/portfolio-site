export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface UiStrings {
  heroCtaButton: string;
  experienceTitle: string;
  projectsTitle: string;
  aboutTitle: string;
  projectSource: string;
  projectPreview: string;
  projectViewDetails: string;
  projectTabFrontend: string;
  projectTabBackend: string;
  projectsEmptyState: string;
  contactTitle: string;
  contactDescription: string;
  contactNameLabel: string;
  contactNamePlaceholder: string;
  contactEmailLabel: string;
  contactEmailPlaceholder: string;
  contactMessageLabel: string;
  contactMessagePlaceholder: string;
  contactSubmitButton: string;
  contactSuccessMessage: string;
  contactErrorMessage: string;
  contactCaptchaError: string;
  // Project detail page
  projectDetailBack: string;
  projectDetailGeneral: string;
  projectDetailTech: string;
  projectDetailTechStack: string;
  projectDetailArchitecture: string;
  projectDetailLive: string;
  projectDetailSource: string;
  projectDetailDownload: string;
  projectDetailScreenshots: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  projectDetails: ProjectDetailProps[];
  about: AboutProps;
  ui: UiStrings;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: string;
  category: "frontend" | "backend";
  slug?: string;
}

export interface ProjectDetailProps {
  slug: string;
  name: string;
  summary: string;
  description: string;
  image: string;
  category: "frontend" | "backend";

  // General section
  liveLink?: string;
  downloadLink?: string;
  screenshots?: string[];
  video?: string;

  // Technical section
  techStack: string[];
  architecture?: string;
  diagrams?: string[];

  // Links
  linkSource?: string;
  linkPreview?: string;
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
