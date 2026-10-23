import { Linkedin, Mail } from "lucide-react";
import type { Page } from "@/App";
import { SERVICES } from "@/content/services";
import { withBase } from "@/base";

interface FooterProps { onNavigate: (page: Page) => void; }

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToApproach = () => {
    onNavigate("home");
    setTimeout(() => document.getElementById("approach")?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  return (
    <footer className="relative border-t border-white/[0.06] py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_0.8fr_0.8fr]">
          <div>
            <a href={withBase("/")} onClick={(event) => { event.preventDefault(); onNavigate("home"); }} className="brand-mark py-1" aria-label="Miras AI home">
              <img src={withBase("/miras-gold-wordmark.webp")} alt="Miras AI" width="900" height="310" loading="lazy" decoding="async" className="h-11 w-auto object-contain" />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">Product engineering and AI systems partner for founders, CTOs and agencies. We bring a clear plan and accountable delivery.</p>
            <p className="mt-3 font-mono text-xs text-gray-500">Bloomington, Indiana · Lahore, Pakistan</p>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-white">Services</h2>
            <ul className="space-y-3">
              {SERVICES.map((service) => <li key={service.page}><a href={withBase(service.path)} onClick={(event) => { event.preventDefault(); onNavigate(service.page); }} className="text-sm text-gray-400 transition-colors hover:text-white">{service.title}</a></li>)}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-white">Company</h2>
            <ul className="space-y-3">
              <li><a href={withBase("/work")} onClick={(event) => { event.preventDefault(); onNavigate("work"); }} className="text-sm text-gray-400 hover:text-white">Work</a></li>
              <li><a href={withBase("/#approach")} onClick={(event) => { event.preventDefault(); scrollToApproach(); }} className="text-sm text-gray-400 hover:text-white">Approach</a></li>
              <li><a href={withBase("/about")} onClick={(event) => { event.preventDefault(); onNavigate("about"); }} className="text-sm text-gray-400 hover:text-white">About</a></li>
              <li><a href={withBase("/careers")} onClick={(event) => { event.preventDefault(); onNavigate("careers"); }} className="text-sm text-gray-400 hover:text-white">Careers</a></li>
              <li><a href={withBase("/contact")} onClick={(event) => { event.preventDefault(); onNavigate("contact"); }} className="text-sm text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-white">Connect</h2>
            <ul className="space-y-3">
              <li><a href="https://www.linkedin.com/company/mirasai/about/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"><Linkedin className="h-4 w-4" />LinkedIn</a></li>
              <li><a href="mailto:avais@mirasai.co" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"><Mail className="h-4 w-4" />avais@mirasai.co</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Miras AI. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href={withBase("/cookie-policy")} onClick={(event) => { event.preventDefault(); onNavigate("cookie"); }} className="text-xs text-gray-500 hover:text-white">Cookie Policy</a>
            <a href={withBase("/privacy-policy")} onClick={(event) => { event.preventDefault(); onNavigate("privacy"); }} className="text-xs text-gray-500 hover:text-white">Privacy Policy</a>
            <a href={withBase("/terms-of-service")} onClick={(event) => { event.preventDefault(); onNavigate("terms"); }} className="text-xs text-gray-500 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
