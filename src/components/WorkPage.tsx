import { ArrowRight } from "lucide-react";
import type { Page } from "@/App";
import { withBase } from "@/base";

interface WorkPageProps {
  onNavigate: (page: Page) => void;
}

const WORK = [
  {
    number: "01",
    sector: "Health and fitness",
    name: "AimFit",
    image: withBase("/projects/aimfit-overview.jpg"),
    imageAlt: "AimFit product case study showing its mobile workout experience",
    systemImage: withBase("/projects/aimfit-system.jpg"),
    imageWidth: 832,
    imageHeight: 464,
    systemImageAlt: "AimFit live, recorded and offline media architecture",
    description:
      "Contributed to a consumer fitness platform with live and recorded workouts, nutrition and progress tracking, community features and mobile release work.",
    contribution:
      "The work connected live classes, recorded media and offline downloads while keeping progress consistent across each path.",
  },
  {
    number: "02",
    sector: "Telemedicine",
    name: "Your Doctors Online",
    image: withBase("/projects/ydo-overview.jpg"),
    imageAlt: "Your Doctors Online product case study showing a mobile doctor consultation",
    systemImage: withBase("/projects/ydo-system.jpg"),
    imageWidth: 1024,
    imageHeight: 576,
    systemImageAlt: "Your Doctors Online consultation, EMR, pharmacy and payment integrations",
    description:
      "Worked across mobile and web workflows — Agora consultations, Firebase chat, Apple/Google Pay and Stripe, EMR integration, doctor portal and queuing systems.",
    contribution:
      "The system joined real-time consultation, patient records, prescriptions, pharmacy status, payments and follow-ups into one care journey.",
  },
];

export default function WorkPage({ onNavigate }: WorkPageProps) {
  return (
    <main className="relative overflow-hidden pt-28 pb-24 sm:pt-36 sm:pb-32">
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="page-aurora absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-sm text-cyan-300">/ work</p>
          <h1 className="headline-safe mt-4 text-4xl font-semibold tracking-tight text-gradient sm:text-6xl">
            Selected engineering experience
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            Before founding Miras AI, CTO Avais Muhib Ur Rasool contributed to
            production platforms in enterprise commerce, consumer fitness and
            telemedicine. These case summaries describe his prior engineering
            record; the products were developed by their respective companies.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {WORK.map((project) => (
            <article
              key={project.name}
              className="surface-card border-glow overflow-hidden rounded-3xl"
            >
              <div className="grid border-b border-white/[0.08] sm:grid-cols-2">
                <figure className="overflow-hidden border-b border-white/[0.08] sm:border-b-0 sm:border-r">
                  <img src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" width={project.imageWidth} height={project.imageHeight} className="project-hero-image aspect-video h-full w-full object-cover" />
                </figure>
                <figure className="overflow-hidden">
                  <img src={project.systemImage} alt={project.systemImageAlt} loading="lazy" decoding="async" width={project.imageWidth} height={project.imageHeight} className="aspect-video h-full w-full object-cover" />
                </figure>
              </div>
              <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
                <div>
                  <span className="font-mono text-sm text-violet-300">{project.number}</span>
                  <p className="mt-5 text-sm text-cyan-300">{project.sector}</p>
                  <h2 className="mt-2 text-3xl font-semibold text-white">{project.name}</h2>
                </div>
                <div>
                  <p className="leading-relaxed text-gray-300">{project.description}</p>
                  <p className="mt-5 text-sm leading-relaxed text-gray-400">{project.contribution}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <article className="surface-card mt-8 overflow-hidden rounded-3xl border border-white/[0.08]">
          <div className="grid border-b border-white/[0.08] sm:grid-cols-2">
            <figure className="overflow-hidden border-b border-white/[0.08] sm:border-b-0 sm:border-r">
              <img src={withBase("/projects/makro-commerce-concept.webp")} alt="Concept grocery commerce mobile interface" loading="lazy" decoding="async" width="1400" height="788" className="aspect-video h-full w-full object-cover" />
            </figure>
            <figure className="overflow-hidden">
              <img src={withBase("/projects/makro-systems-concept.webp")} alt="Concept architecture for a multi-market grocery commerce platform" loading="lazy" decoding="async" width="1400" height="788" className="aspect-video h-full w-full object-cover" />
            </figure>
          </div>
          <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
            <div>
              <span className="font-mono text-sm text-violet-300">03</span>
              <p className="mt-5 text-sm text-cyan-300">Enterprise commerce</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">CP AXTRA / Makro PRO</h2>
            </div>
            <div>
              <p className="leading-relaxed text-gray-300">
                Senior mobile engineering on CP AXTRA&apos;s React Native commerce ecosystem — referral, membership, deep links, multi-market configurations and release work across Thailand, Cambodia, Myanmar and Malaysia.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {["React Native", "Multi-market configuration", "Membership", "Deep links", "Release operations"].map((item) => (
                  <span key={item} className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-gray-400">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </article>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.04] p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-white">Have a comparable mandate?</h2>
            <p className="mt-2 text-gray-400">Share the outcome, current state and constraints with our senior team.</p>
          </div>
          <a
            href={withBase("/contact")}
            onClick={(event) => {
              event.preventDefault();
              onNavigate("home");
              window.setTimeout(
                () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
                100,
              );
            }}
            className="primary-cta inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold"
          >
            Discuss a project <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </main>
  );
}
