import {
  AudioLines,
  Boxes,
  BrainCircuit,
  Compass,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export type ServicePageId =
  | "service-product-engineering"
  | "service-mobile-systems"
  | "service-applied-ai"
  | "service-language-data"
  | "service-technical-leadership";

export interface ServiceDetail {
  page: ServicePageId;
  path: string;
  number: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  audience: string;
  shortDescription: string;
  introduction: string;
  timeline: string;
  bestFor: string;
  problems: string[];
  deliverables: string[];
  technologies: string[];
  experience: string;
}

export const SERVICES: ServiceDetail[] = [
  {
    page: "service-product-engineering",
    path: "/services/product-platform-engineering",
    number: "01",
    icon: Boxes,
    title: "Product and platform engineering",
    subtitle: "From investment case to production release",
    audience: "Founders and product teams responsible for a new platform or material product expansion",
    shortDescription:
      "Commission a senior team to define, build and release a web or mobile product. Product discovery, architecture, experience design, engineering, integrations and quality assurance operate as one delivery program.",
    introduction:
      "Commission a senior team to define, build and release a web or mobile product. Product discovery, architecture, experience design, engineering, integrations and quality assurance operate as one delivery program.",
    timeline: "Typically 6–16 weeks for a defined first release",
    bestFor: "Founders, product teams and agencies that need senior delivery ownership",
    problems: [
      "A product idea needs to become a credible technical plan",
      "An existing platform is difficult to extend or release",
      "Critical integrations are slowing down the roadmap",
      "A team needs experienced ownership across product and engineering",
    ],
    deliverables: [
      "Product and technical discovery",
      "MVP scope and milestones",
      "Web and mobile application builds",
      "API and integration design",
      "Authentication, payments and notifications",
      "QA, deployment, analytics and handover",
    ],
    technologies: ["React", "TypeScript", "React Native", "Node.js", "REST APIs", "Firebase", "Supabase", "Cloud platforms"],
    experience:
      "Our senior team brings production experience from enterprise commerce, telemedicine and consumer fitness, including payments, real-time communication, multi-market configuration and mobile release operations.",
  },
  {
    page: "service-mobile-systems",
    path: "/services/mobile-systems",
    number: "02",
    icon: Smartphone,
    title: "Mobile engineering",
    subtitle: "Resolve the complexity around the app",
    audience: "CTOs and engineering leads with complex mobile codebases or release bottlenecks",
    shortDescription:
      "Strengthen the application and the systems around it: architecture, native integrations, authentication, WebViews, deep links, analytics, real-time behavior and release operations.",
    introduction:
      "Strengthen the application and the systems around it: architecture, native integrations, authentication, WebViews, deep links, analytics, real-time behavior and release operations.",
    timeline: "Typically 4–12 weeks for a focused release or stabilization phase",
    bestFor: "Teams shipping React Native products with complex production requirements",
    problems: [
      "A mobile roadmap is blocked by architecture or native-platform issues",
      "Deep links, payments or real-time features are unreliable",
      "Release cycles are slow, fragile or poorly documented",
      "One codebase needs to support multiple markets or configurations",
    ],
    deliverables: [
      "React Native feature and architecture work",
      "iOS and Android build diagnostics",
      "App modernization",
      "Payment and commerce integrations",
      "Real-time chat, audio and video",
      "CI/CD, signing and store releases",
    ],
    technologies: ["React Native", "TypeScript", "iOS", "Android", "Firebase", "Agora", "Stripe", "Apple Pay", "Google Pay"],
    experience:
      "Prior engineering work includes CP AXTRA / Makro PRO, AimFit and Your Doctors Online across multi-market commerce, live fitness experiences, telemedicine, chat, payments and mobile releases.",
  },
  {
    page: "service-applied-ai",
    path: "/services/applied-ai-automation",
    number: "03",
    icon: BrainCircuit,
    title: "Applied AI and automation",
    subtitle: "Move from promising use case to controlled production workflow",
    audience: "Product teams and operations leaders who need AI inside an existing workflow",
    shortDescription:
      "Deploy AI against a defined operational measure. We design retrieval, model integrations, agents and automation with evaluation, permissions, human review and exception handling built in.",
    introduction:
      "Deploy AI against a defined operational measure. We design retrieval, model integrations, agents and automation with evaluation, permissions, human review and exception handling built in.",
    timeline: "Typically 2–6 weeks for feasibility; 6–12 weeks for a production pilot",
    bestFor: "Teams with a defined workflow, usable data and a measurable operational goal",
    problems: [
      "A promising AI use case is still too vague to fund or build",
      "A manual workflow needs safe and reviewable automation",
      "A model demo lacks evaluation, permissions or production controls",
      "Multiple tools need to work together inside one dependable process",
    ],
    deliverables: [
      "Use-case assessment and feasibility",
      "RAG and knowledge retrieval",
      "LLM and provider integration",
      "Tool-calling agents with human review",
      "Workflow orchestration and document processes",
      "Evaluation, observability and handoff",
    ],
    technologies: ["OpenAI APIs", "LLM workflows", "Retrieval", "Structured outputs", "Vector search", "Python", "TypeScript", "Workflow automation"],
    experience:
      "Product engineering and computational linguistics sit within the same team, so feasibility, model behavior, language quality and production integration are assessed together.",
  },
  {
    page: "service-language-data",
    path: "/services/voice-language-data",
    number: "04",
    icon: AudioLines,
    title: "Voice and language data",
    subtitle: "South Asian language capability from collection to deployment",
    audience: "Contact centres and enterprises with multilingual voice or call analysis needs",
    shortDescription:
      "Plan and execute multilingual speech and language programs across more than 45 South Asian languages, from speaker recruitment and collection through transcription, annotation and quality assurance.",
    introduction:
      "Plan and execute multilingual speech and language programs across more than 45 South Asian languages, from speaker recruitment and collection through transcription, annotation and quality assurance.",
    timeline: "Typically 2–6 weeks for discovery and feasibility planning",
    bestFor: "Research, product and operations teams working with multilingual or low-resource language data",
    problems: [
      "Available language data is incomplete, inconsistent or undocumented",
      "A speech or NLP concept needs a realistic feasibility assessment",
      "Annotation guidelines and quality controls are not yet defined",
      "A multilingual workflow performs unevenly across languages or speakers",
    ],
    deliverables: [
      "Call and data audit",
      "ASR and TTS feasibility",
      "Speech dataset preparation and quality control",
      "Transcription and QA analytics prototypes",
      "Agent-assist and voice-agent architecture",
      "Privacy and on-premise deployment assessment",
    ],
    technologies: ["NLP", "Speech recognition", "Transcription", "Corpus design", "Annotation workflows", "Python", "Private deployment", "Evaluation"],
    experience:
      "Co-Founder Meesum Alam is a Fulbright PhD scholar in Computational Linguistics whose work covers language documentation, NLP and community-led datasets for under-resourced South Asian languages.",
  },
  {
    page: "service-technical-leadership",
    path: "/services/technical-leadership",
    number: "05",
    icon: Compass,
    title: "Engineering leadership",
    subtitle: "Executive-level technical direction without a full-time hire",
    audience: "Founders and product owners who need a senior technical owner without a full-time hire",
    shortDescription:
      "Bring senior technical authority into a critical stage of the business. We assess architecture and delivery risk, sequence the roadmap and provide governance to internal or partner teams.",
    introduction:
      "Bring senior technical authority into a critical stage of the business. We assess architecture and delivery risk, sequence the roadmap and provide governance to internal or partner teams.",
    timeline: "Typically 2–4 weeks for an assessment or an ongoing monthly engagement",
    bestFor: "Founders, CTOs and agencies facing high-consequence technical decisions",
    problems: [
      "A roadmap lacks technical sequencing and realistic trade-offs",
      "Delivery risk is rising but the causes are unclear",
      "A product needs architecture review before further investment",
      "An internal or partner team needs experienced technical direction",
    ],
    deliverables: [
      "Feasibility and discovery",
      "Architecture and buy-versus-build decisions",
      "Roadmap and code review",
      "Vendor and team assessment",
      "Hiring and mentoring support",
      "Delivery governance and technical acceptance",
    ],
    technologies: ["System architecture", "Technical roadmaps", "Delivery planning", "Codebase assessment", "Team guidance", "Vendor review", "Release strategy"],
    experience:
      "Miras brings hands-on leadership grounded in production work across commerce, healthcare, mobile systems, integrations and multilingual technology.",
  },
];

export const SERVICE_BY_PAGE = Object.fromEntries(
  SERVICES.map((service) => [service.page, service]),
) as Record<ServicePageId, ServiceDetail>;
