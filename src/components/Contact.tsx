import type { FormEvent } from "react";
import { ArrowRight, CalendarDays, Clock3, Mail } from "lucide-react";

const fieldClass =
  "contact-field mt-2 min-w-0 max-w-full w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors placeholder:text-gray-600";

interface ContactProps {
  pageHeading?: boolean;
}

export default function Contact({ pageHeading = false }: ContactProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const company = String(form.get("company") ?? "Not provided");
    const area = String(form.get("area") ?? "Not selected");
    const challenge = String(form.get("challenge") ?? "");

    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        `Area of interest: ${area}`,
        "",
        "Project or technical challenge:",
        challenge,
      ].join("\n"),
    );

    window.location.href = `mailto:avais@mirasai.co?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden surface-card border-glow rounded-3xl p-7 sm:p-10 lg:p-14">
          <div className="absolute inset-0 bg-radial-glow opacity-60" />

          <div className="relative grid min-w-0 gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div className="min-w-0">
              <p className="font-mono text-sm text-cyan-300">/ start a conversation</p>
              {pageHeading ? (
                <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Bring us the mandate, constraint or delivery risk.
                </h1>
              ) : (
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Bring us the mandate, constraint or delivery risk.
                </h2>
              )}
              <p className="mt-4 text-lg leading-relaxed text-gray-400">
                Tell us what needs to change, what is at stake and where the work stands. We will respond with a practical next step—usually a discovery call or scoped technical assessment.
              </p>

              <div className="mt-8 space-y-4 border-t border-white/[0.08] pt-7">
                <div className="flex gap-3">
                  <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-violet-300" />
                  <div>
                    <p className="text-sm font-medium text-white">Response time</p>
                    <p className="mt-1 text-sm text-gray-400">We aim to respond within one business day.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" />
                  <div>
                    <p className="text-sm font-medium text-white">What happens next</p>
                    <p className="mt-1 text-sm leading-relaxed text-gray-400">We will confirm fit, request any essential context and propose the next decision.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="mt-0.5 font-mono text-sm text-emerald-300">US/PK</span>
                  <div>
                    <p className="text-sm font-medium text-white">Operating locations</p>
                    <p className="mt-1 text-sm text-gray-400">Indiana, USA and Pakistan — serving clients across both regions.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="mt-0.5 font-mono text-sm text-violet-300">TZ</span>
                  <div>
                    <p className="text-sm font-medium text-white">Working coverage</p>
                    <p className="mt-1 text-sm text-gray-400">Planned overlap across US and Asian working hours.</p>
                  </div>
                </div>
              </div>

              <a
                href="mailto:avais@mirasai.co?subject=Discovery%20call%20request"
                className="secondary-cta mt-8 inline-flex items-center gap-2 rounded-lg border px-5 py-3 text-sm font-medium transition-colors"
              >
                <CalendarDays className="h-4 w-4 text-violet-300" />
                Request a discovery call
              </a>
            </div>

            <form onSubmit={handleSubmit} className="contact-form min-w-0 rounded-2xl border p-5 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm text-gray-300">
                  Name <span className="text-cyan-300">*</span>
                  <input name="name" type="text" required autoComplete="name" placeholder="Your name" className={fieldClass} />
                </label>
                <label className="text-sm text-gray-300">
                  Work email <span className="text-cyan-300">*</span>
                  <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={fieldClass} />
                </label>
              </div>

              <label className="mt-5 block text-sm text-gray-300">
                Company or team
                <input name="company" type="text" autoComplete="organization" placeholder="Optional" className={fieldClass} />
              </label>

              <label className="mt-5 block text-sm text-gray-300">
                Area of interest
                <select name="area" defaultValue="" className={fieldClass}>
                  <option value="" disabled>Select a service area</option>
                  <option>Product and platform engineering</option>
                  <option>Mobile engineering</option>
                  <option>Applied AI and automation</option>
                  <option>Voice and language data</option>
                  <option>Engineering leadership</option>
                  <option>Embedded engineering team</option>
                  <option>Not sure yet</option>
                </select>
              </label>

              <label className="mt-5 block text-sm text-gray-300">
                What are you working on? <span className="text-cyan-300">*</span>
                <textarea
                  name="challenge"
                  required
                  rows={5}
                  placeholder="Describe the product, workflow or technical challenge you are facing."
                  className={`${fieldClass} resize-y`}
                />
              </label>

              <button
                type="submit"
                className="primary-cta group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors"
              >
                Send message
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <p className="mt-3 text-center text-xs leading-relaxed text-gray-500">
                Your email app will open with these details addressed to avais@mirasai.co. You can review everything before sending.
              </p>
              <p className="mt-2 text-center text-xs leading-relaxed text-gray-500">
                Please do not include passwords, production credentials or regulated data. See our{" "}
                <a href="/privacy-policy" className="font-medium text-cyan-200 hover:text-white">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
