import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, Moon, Sun } from "lucide-react";
import type { Page } from "@/App";
import { withBase } from "@/base";

interface NavbarProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
  onToggleTheme: () => void;
}

const NAV_LINKS = [
  { label: "Services", page: "services" as Page, path: "/services" },
  { label: "About", page: "about" as Page, path: "/about" },
  { label: "Contact", page: "contact" as Page, path: "/contact" },
];

export default function Navbar({ onNavigate, currentPage, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePageNav = (target: Page) => {
    onNavigate(target);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`site-navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "is-scrolled backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href={withBase("/")}
            onClick={(event) => { event.preventDefault(); onNavigate("home"); }}
            className="brand-mark group py-1 transition-all duration-300"
            aria-label="Miras AI home"
          >
            <img
              src={withBase("/miras-gold-wordmark.webp")}
              alt="Miras AI"
              width="900"
              height="310"
              decoding="async"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={withBase(link.path)}
                onClick={(event) => {
                  event.preventDefault();
                  handlePageNav(link.page);
                }}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                aria-current={link.page === currentPage ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              className="theme-toggle inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-colors"
              aria-label="Toggle color theme"
              title="Toggle color theme"
            >
              <Sun className="theme-icon-dark h-4 w-4" />
              <Moon className="theme-icon-light h-4 w-4" />
            </button>
            <a
              href={withBase("/contact")}
              onClick={(event) => { event.preventDefault(); handlePageNav("contact"); }}
              className="secondary-cta group flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-300"
            >
              Discuss a project
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-navigation" className="mobile-menu md:hidden border-t backdrop-blur-xl">
          <div className="px-6 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={withBase(link.path)}
                onClick={(event) => {
                  event.preventDefault();
                  handlePageNav(link.page);
                }}
                className="block w-full text-left text-base text-gray-300 hover:text-white py-2"
                aria-current={link.page === currentPage ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={onToggleTheme}
              className="theme-toggle flex w-full items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium"
            >
              <Sun className="theme-icon-dark h-4 w-4" />
              <Moon className="theme-icon-light h-4 w-4" />
              <span className="theme-label-light">Light mode</span>
              <span className="theme-label-dark">Dark mode</span>
            </button>
            <a
              href={withBase("/contact")}
              onClick={(event) => { event.preventDefault(); handlePageNav("contact"); }}
              className="secondary-cta flex items-center gap-2 w-full rounded-lg border px-4 py-2.5 text-sm font-medium"
            >
              Discuss a project
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
