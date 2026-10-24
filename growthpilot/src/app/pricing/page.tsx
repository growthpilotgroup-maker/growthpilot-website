"use client";

import { useContactModal } from "@/context/ContactModalContext";

/* ── Types ──────────────────────────────────────────────────────────── */
interface PricingTier {
  name: string;
  tagline: string;
  price: string;
  period: string;
  popular: boolean;
  features: string[];
  cta: string;
}

interface FAQItem {
  q: string;
  a: string;
}

/* ── Data ───────────────────────────────────────────────────────────── */
const tiers: PricingTier[] = [
  {
    name: "Starter Engine",
    tagline: "Launch your digital presence",
    price: "$2,500",
    period: "/mo",
    popular: false,
    features: [
      "Paid ad management (1 platform)",
      "Monthly performance report",
      "Basic AI chatbot setup",
      "Landing page build & deployment",
      "Email + CRM onboarding",
      "Dedicated account manager",
    ],
    cta: "Get Started",
  },
  {
    name: "Pro Autopilot",
    tagline: "Scale with intelligent automation",
    price: "$6,500",
    period: "/mo",
    popular: true,
    features: [
      "Paid ads across 3 platforms",
      "Full Voice AI assistant deployment",
      "CRM automation & pipeline build",
      "SEO content system (8 assets/mo)",
      "Custom web development sprints",
      "Weekly strategy calls",
      "Real-time analytics dashboard",
    ],
    cta: "Book a Strategy Call",
  },
  {
    name: "Enterprise Scale",
    tagline: "Full-stack digital empire",
    price: "Custom",
    period: "",
    popular: false,
    features: [
      "Unlimited ad platforms & spend",
      "Bespoke AI automation stack",
      "White-glove CRM architecture",
      "Full SEO & content operation",
      "Dedicated dev team (weekly sprints)",
      "C-suite strategy sessions",
      "Priority 24 / 7 support",
    ],
    cta: "Talk to Our Team",
  },
];

const faqs: FAQItem[] = [
  {
    q: "How does your Voice AI service work?",
    a: "We build and deploy custom Voice AI assistants trained on your brand, products, and workflows. They handle inbound calls, qualify leads, book appointments, and escalate to your team — running 24 / 7 without additional headcount.",
  },
  {
    q: "What CRM platforms do you integrate with?",
    a: "We work with HubSpot, GoHighLevel, Salesforce, and Notion-based systems. Our automation layer connects your ad platforms, forms, and voice flows into a single pipeline so no lead falls through the gaps.",
  },
  {
    q: "Can I upgrade my plan as my business grows?",
    a: "Yes. Plans are month-to-month with a 30-day notice period. Most clients start on Starter Engine, see measurable traction within 60 days, and move to Pro Autopilot once the core systems are validated.",
  },
  {
    q: "What does onboarding look like?",
    a: "We run a 2-week discovery sprint: brand audit, tech stack review, competitor analysis, and goal mapping. By day 14 your first campaigns and automations are live. Your dedicated account manager is with you from day one.",
  },
];

/* ── Sub-components ─────────────────────────────────────────────────── */
function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0 mt-0.5"
    >
      <circle cx="8" cy="8" r="7.25" stroke="#d4af37" strokeWidth="1.5" />
      <path
        d="M4.5 8.25 L7 10.75 L11.5 5.75"
        stroke="#d4af37"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PricingCard({ tier, index }: { tier: PricingTier; index: number }) {
  const { openModal } = useContactModal();
  const delay = `${index * 80}ms`;

  return (
    <article
      style={{ animationDelay: delay }}
      className={[
        "animate-fade-up relative flex flex-col rounded-sm p-8 transition-all duration-300",
        tier.popular
          ? "bg-[#111111] border border-[#d4af37] shadow-gold"
          : "glass card-hover border border-white/10",
      ].join(" ")}
    >
      {/* Popular badge */}
      {tier.popular && (
        <div className="absolute -top-px left-1/2 -translate-x-1/2">
          <span className="eyebrow inline-block bg-[#d4af37] text-[#050505] px-4 py-1 text-[0.5625rem] font-bold tracking-[0.2em] rounded-b-sm">
            Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-8 pt-2">
        <p className="eyebrow mb-3">{tier.name}</p>
        <p className="text-[var(--muted)] text-sm leading-relaxed">
          {tier.tagline}
        </p>
      </div>

      {/* Price */}
      <div className="mb-8 flex items-end gap-1">
        <span
          className="font-[var(--font-clash),system-ui] font-bold text-[2.75rem] leading-none tracking-tight text-white"
          style={{ fontFamily: "var(--font-clash), system-ui, sans-serif" }}
        >
          {tier.price}
        </span>
        {tier.period && (
          <span className="text-[var(--muted)] text-sm pb-1">{tier.period}</span>
        )}
      </div>

      {/* Divider */}
      <div className="h-px bg-white/10 mb-8" />

      {/* Features */}
      <ul className="flex flex-col gap-3 mb-10 flex-1">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-[#e0e0e0]">
            <CheckIcon />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={openModal}
        className={tier.popular ? "btn-gold w-full text-center" : "btn-outline w-full text-center"}
      >
        {tier.cta}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </article>
  );
}

function FAQItem({ item, index }: { item: FAQItem; index: number }) {
  return (
    <details
      className="group border-b border-white/10 last:border-0"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <summary className="flex items-center justify-between gap-4 py-6 cursor-pointer list-none select-none">
        <span
          className="font-semibold text-white text-base"
          style={{ fontFamily: "var(--font-clash), system-ui, sans-serif" }}
        >
          {item.q}
        </span>
        {/* Plus / minus icon */}
        <span className="shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-[var(--muted)] group-open:border-[#d4af37] group-open:text-[#d4af37] transition-colors duration-200">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="group-open:[&_.minus]:block group-open:[&_.plus]:hidden">
            <path className="plus" d="M5 1V9M1 5H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path className="minus hidden" d="M1 5H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </summary>
      <p className="pb-6 text-sm text-[var(--muted)] leading-relaxed max-w-2xl">
        {item.a}
      </p>
    </details>
  );
}

/* ── Page ───────────────────────────────────────────────────────────── */
export default function PricingPage() {
  const { openModal } = useContactModal();

  return (
    <main className="min-h-screen bg-[#050505]">
      {/* ── Hero header ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 text-center px-4">
        {/* Radial gold bloom */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 flex justify-center"
        >
          <div className="w-[600px] h-[400px] rounded-full opacity-[0.07] blur-[120px] bg-[#d4af37]" />
        </div>

        <div className="relative max-w-3xl mx-auto">
          <p className="eyebrow mb-6">Pricing</p>
          <h1
            className="text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-balance text-white mb-6"
            style={{ fontFamily: "var(--font-clash), system-ui, sans-serif" }}
          >
            Transparent Pricing for{" "}
            <span
              className="italic-serif"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
            >
              Elite Expansion
            </span>
            <span className="gold-dot">.</span>
          </h1>
          <p className="text-[var(--muted)] text-lg max-w-xl mx-auto leading-relaxed">
            No opaque retainers. Every tier is scoped to a specific growth stage — so you only pay for what moves the needle.
          </p>
        </div>
      </section>

      {/* ── Pricing grid ────────────────────────────────────────────── */}
      <section className="px-4 pb-28 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, i) => (
            <PricingCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>

        {/* Fine print */}
        <p className="text-center text-xs text-[var(--muted)] mt-8 tracking-wide">
          All plans billed monthly. No setup fees. Cancel with 30 days&apos; notice.
        </p>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="px-4 pb-32 max-w-[800px] mx-auto">
        <div>
          {faqs.map((item, i) => (
            <FAQItem key={item.q} item={item} index={i} />
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ──────────────────────────────────────────────── */}
      <section
        id="contact"
        className="border-t border-white/10 bg-[#111111] px-4 py-24 text-center"
      >
        <p className="eyebrow mb-4">Still deciding?</p>
        <h2
          className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.025em] text-white mb-4 text-balance"
          style={{ fontFamily: "var(--font-clash), system-ui, sans-serif" }}
        >
          Let&apos;s scope it together.
        </h2>
        <p className="text-[var(--muted)] text-base max-w-md mx-auto mb-10">
          Book a 30-minute strategy call. We&apos;ll map the right tier to your stage and goals — no obligation.
        </p>
        <button onClick={openModal} className="btn-gold">
          Book a Free Strategy Call
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </section>
    </main>
  );
}
