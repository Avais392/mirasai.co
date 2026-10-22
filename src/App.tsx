import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrackRecord from "@/components/TrackRecord";
import HowWeWork from "@/components/HowWeWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookiePolicy from "@/components/legal/CookiePolicy";
import PrivacyPolicy from "@/components/legal/PrivacyPolicy";
import TermsOfService from "@/components/legal/TermsOfService";
import AboutPage from "@/components/AboutPage";
import WorkPage from "@/components/WorkPage";
import WhyMiras from "@/components/WhyMiras";
import EngagementModels from "@/components/EngagementModels";
import ServicePage from "@/components/ServicePage";
import ServicesPage from "@/components/ServicesPage";
import ContactPage from "@/components/ContactPage";
import CareersPage from "@/components/CareersPage";
import CareerRolePage from "@/components/CareerRolePage";
import FAQ from "@/components/FAQ";
import { SERVICES, type ServicePageId } from "@/content/services";
import { BASE, withBase } from "@/base";

export type Page =
  | "home"
  | "about"
  | "work"
  | "services"
  | "contact"
  | "careers"
  | "career-full-stack-engineering-intern"
  | "career-business-development-sales-intern"
  | "career-social-media-visual-content-intern"
  | "cookie"
  | "privacy"
  | "terms"
  | ServicePageId;

export type Theme = "dark" | "light";

const SERVICE_PATHS = Object.fromEntries(
  SERVICES.map((service) => [service.page, service.path]),
) as Record<ServicePageId, string>;

const SERVICE_TITLES = Object.fromEntries(
  SERVICES.map((service) => [service.page, `${service.title} | Miras AI`]),
) as Record<ServicePageId, string>;

const PAGE_PATHS: Record<Page, string> = {
  home: "/",
  about: "/about",
  work: "/work",
  services: "/services",
  contact: "/contact",
  careers: "/careers",
  "career-full-stack-engineering-intern": "/careers/full-stack-engineering-intern",
  "career-business-development-sales-intern": "/careers/business-development-sales-intern",
  "career-social-media-visual-content-intern": "/careers/social-media-visual-content-intern",
  cookie: "/cookie-policy",
  privacy: "/privacy-policy",
  terms: "/terms-of-service",
  ...SERVICE_PATHS,
};

const PAGE_TITLES: Record<Page, string> = {
  home: "Miras AI | Product Engineering, Applied AI & Language Data",
  about: "About Miras AI | Leadership, Locations & Purpose",
  work: "Engineering Work & Experience | Miras AI",
  services: "Product Engineering & AI Services | Miras AI",
  contact: "Contact Miras AI | Discuss an Engineering or AI Project",
  careers: "Careers at Miras AI | Open Roles in Lahore",
  "career-full-stack-engineering-intern": "Full-Stack Engineering Intern in Lahore | Miras AI Careers",
  "career-business-development-sales-intern": "BD & Sales Intern in Lahore | Miras AI Careers",
  "career-social-media-visual-content-intern": "Social Media Intern in Lahore | Miras AI Careers",
  cookie: "Cookie Policy | Miras AI",
  privacy: "Privacy Policy | Miras AI",
  terms: "Terms of Service | Miras AI",
  ...SERVICE_TITLES,
};

const pageFromPath = (fullPath: string): Page => {
  const path = fullPath.startsWith(BASE) ? fullPath.slice(BASE.length) || "/" : fullPath;
  const normalizedPath = path.length > 1 ? path.replace(/\/+$/, "") : path;
  const entry = Object.entries(PAGE_PATHS).find(([, value]) => value === normalizedPath);
  return (entry?.[0] as Page | undefined) ?? "home";
};

const DEFAULT_DESCRIPTION =
  "Miras AI delivers senior product engineering, applied AI, mobile systems and multilingual language-data capability from teams in the United States and Pakistan.";

const PAGE_DESCRIPTIONS: Partial<Record<Page, string>> = {
  home: DEFAULT_DESCRIPTION,
  about: "Meet the founder-led Miras AI team: a US-registered engineering company with delivery operations in Bloomington, Indiana and Lahore, Pakistan.",
  work: "Review the production engineering experience behind Miras AI across enterprise commerce, mobile fitness and telemedicine platforms.",
  services: "Explore Miras AI services in product engineering, React Native mobile systems, applied AI, voice and language data, and fractional technical leadership.",
  contact: "Discuss a product, AI, mobile or multilingual systems mandate with Miras AI. We aim to respond within one business day.",
  careers: "Explore open roles at Miras AI in Lahore, Pakistan, across engineering, AI, language data and growth.",
  "career-full-stack-engineering-intern": "Apply for the Full-Stack Engineering Intern (AI/ML focus) role at Miras AI in Lahore: build frontend, backend and practical AI features end to end.",
  "career-business-development-sales-intern": "Apply for the Business Development & Sales Intern role at Miras AI in Lahore: company research, tailored outreach, lead qualification and follow-ups.",
  "career-social-media-visual-content-intern": "Apply for the Social Media & Visual Content Intern role at Miras AI in Lahore: plan content, design posts and carousels, and keep the brand consistent.",
  cookie: "Learn which browser storage the Miras AI website uses, what it does and how to control it.",
  privacy: "Learn how Miras AI handles enquiries, job applications, technical access data, international transfers and privacy requests.",
  terms: "Read the terms that govern access to the Miras AI website, including permitted use, intellectual property, disclaimers and Indiana law.",
  ...Object.fromEntries(SERVICES.map((service) => [service.page, service.shortDescription])),
};

interface AppProps {
  initialPath?: string;
  initialTheme?: Theme;
}

export default function App({ initialPath, initialTheme }: AppProps = {}) {
  const [page, setPage] = useState<Page>(() =>
    pageFromPath(initialPath ?? (typeof window === "undefined" ? "/" : window.location.pathname)),
  );
  const [theme, setTheme] = useState<Theme>(() => {
    if (initialTheme) return initialTheme;
    if (typeof window === "undefined") return "dark";
    const savedTheme = window.localStorage.getItem("miras-theme");
    if (savedTheme === "dark" || savedTheme === "light") return savedTheme;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("miras-theme", theme);
  }, [theme]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.title = PAGE_TITLES[page];
    const description = PAGE_DESCRIPTIONS[page] ?? DEFAULT_DESCRIPTION;
    const canonicalUrl = `https://mirasai.co${withBase(PAGE_PATHS[page])}`;
    const setMeta = (selector: string, attribute: string, value: string) => {
      const element = document.head.querySelector<HTMLMetaElement>(selector);
      element?.setAttribute(attribute, value);
    };
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="title"]', "content", PAGE_TITLES[page]);
    setMeta('meta[property="og:title"]', "content", PAGE_TITLES[page]);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[name="twitter:title"]', "content", PAGE_TITLES[page]);
    setMeta('meta[name="twitter:description"]', "content", description);
    document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", canonicalUrl);
  }, [page]);

  useEffect(() => {
    const handlePopState = () => setPage(pageFromPath(window.location.pathname));
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleNavigate = (target: Page) => {
    const path = withBase(PAGE_PATHS[target]);
    if (window.location.pathname !== path) {
      window.history.pushState({}, "", path);
    }
    setPage(target);
  };

  return (
    <div className="theme-shell relative min-h-screen overflow-x-hidden">
      <Navbar
        onNavigate={handleNavigate}
        currentPage={page}
        onToggleTheme={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
      />

      {page === "home" && (
        <main>
          <Hero />
          <Services onOpenService={handleNavigate} />
          <WhyMiras />
          <TrackRecord onOpenWork={() => handleNavigate("work")} />
          <EngagementModels />
          <HowWeWork />
          <FAQ />
          <Contact />
        </main>
      )}

      {page === "about" && <AboutPage onNavigate={handleNavigate} />}
      {page === "work" && <WorkPage onNavigate={handleNavigate} />}
      {page === "services" && <ServicesPage onNavigate={handleNavigate} />}
      {page === "contact" && <ContactPage />}
      {page === "careers" && <CareersPage />}
      {page === "career-full-stack-engineering-intern" && <CareerRolePage roleId="full-stack-engineering-intern" />}
      {page === "career-business-development-sales-intern" && <CareerRolePage roleId="business-development-sales-intern" />}
      {page === "career-social-media-visual-content-intern" && <CareerRolePage roleId="social-media-visual-content-intern" />}
      {page.startsWith("service-") && (
        <ServicePage servicePage={page as ServicePageId} onNavigate={handleNavigate} />
      )}

      {page === "cookie" && <CookiePolicy onBack={() => handleNavigate("home")} />}
      {page === "privacy" && <PrivacyPolicy onBack={() => handleNavigate("home")} />}
      {page === "terms" && <TermsOfService onBack={() => handleNavigate("home")} />}

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
