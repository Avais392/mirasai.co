import { Linkedin, Mail } from "lucide-react";
import type { Page } from "@/App";

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToSection = (id: string) => {
    onNavigate("home");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <footer className="relative border-t border-white/[0.06] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <a
              href="/"
              onClick={(event) => { event.preventDefault(); onNavigate("home"); }}
              className="brand-mark py-1"
              aria-label="Miras AI home"
            >
              <img
                src="/miras-gold-wordmark.webp"
                alt="Miras AI"
                width="900"
                height="310"
                loading="lazy"
                decoding="async"
                className="h-11 w-auto object-contain"
              />
            </a>
            <p className="mt-4 text-sm text-gray-400 max-w-sm leading-relaxed">
              Senior product engineering, applied AI and language-data capability
              for organizations with consequential delivery mandates.
            </p>
            <p className="mt-3 font-mono text-xs text-gray-500">
              Headquartered in Bloomington, Indiana · Delivery operations in Lahore, Pakistan
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="/services" onClick={(event) => { event.preventDefault(); onNavigate("services"); }}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a href="/work" onClick={(event) => { event.preventDefault(); onNavigate("work"); }}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Work
                </a>
              </li>
              <li>
                <a href="/about" onClick={(event) => { event.preventDefault(); onNavigate("about"); }}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a href="/#approach" onClick={(event) => { event.preventDefault(); scrollToSection("approach"); }}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Approach
                </a>
              </li>
              <li>
                <a href="/careers" onClick={(event) => { event.preventDefault(); onNavigate("careers"); }}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" onClick={(event) => { event.preventDefault(); onNavigate("contact"); }}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/company/mirasai/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:avais@mirasai.co"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  avais@mirasai.co
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Miras AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/cookie-policy"
              onClick={(event) => {
                event.preventDefault();
                onNavigate("cookie");
              }}
              className="text-xs text-gray-500 hover:text-white transition-colors"
            >
              Cookie Policy
            </a>
            <a
              href="/privacy-policy"
              onClick={(event) => {
                event.preventDefault();
                onNavigate("privacy");
              }}
              className="text-xs text-gray-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              onClick={(event) => {
                event.preventDefault();
                onNavigate("terms");
              }}
              className="text-xs text-gray-500 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
