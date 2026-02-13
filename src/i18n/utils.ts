import { CONFIG_PL, CONTENT_PL } from "./pl";
import { CONFIG_EN, CONTENT_EN } from "./en";
import type { SiteConfig, SiteContent } from "@types";

export type Locale = "pl" | "en";

const configs: Record<Locale, SiteConfig> = {
  pl: CONFIG_PL,
  en: CONFIG_EN,
};

const contents: Record<Locale, SiteContent> = {
  pl: CONTENT_PL,
  en: CONTENT_EN,
};

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split("/");
  if (lang === "en") return "en";
  return "pl";
}

export function getConfig(locale: Locale): SiteConfig {
  return configs[locale];
}

export function getContent(locale: Locale): SiteContent {
  return contents[locale];
}

export function getLocalizedPath(locale: Locale): string {
  return locale === "pl" ? "/" : "/en/";
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "pl" ? "en" : "pl";
}
