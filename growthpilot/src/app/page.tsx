"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Footer from "@/components/Footer";
import { useContactModal } from "@/context/ContactModalContext";

/* ── Animation Wrapper ─────────────────────────────────────────────── */
function ScrollAnimationWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/* ── Sub-components ─────────────────────────────────────────────────────────────── */

function Hero() {
  const { openModal } = useContactModal();

  return (
    <ScrollAnimationWrapper>
      <section className="min-h-screen flex items-center pt-[120px]">
        <div className="max-w-[1280px] mx-auto px-11 w-full">
          <div className="max-w-[900px]">
          <h1
            className="font-bold mb-6"
            style={{
              fontFamily: "var(--font-clash), system-ui, sans-serif",
              fontSize: "clamp(3rem,8vw,5.625rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
            }}
          >
            We Don&apos;t Just Market Brands.{" "}
            <br />
            <span
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              We Build Digital Empires
            </span>
            <span style={{ color: "var(--accent)" }}>.</span>
          </h1>
          <p
            className="text-[20px] max-w-[65ch]"
            style={{ color: "var(--muted)", lineHeight: 1.6 }}
          >
            AI Automation, Paid Advertising, SEO, Web Development, Branding, and Scalable Digital
            Systems engineered for modern businesses seeking elite expansion.
          </p>
          <div className="flex gap-6 mt-12 flex-wrap">
            <button onClick={openModal} className="btn-gold">
              Book A Strategy Call
            </button>
            <a href="/#about" className="btn-outline">
              Our Philosophy
            </a>
          </div>
        </div>
      </div>
    </section>
    </ScrollAnimationWrapper>
  );
}

function LogoMarquee() {
  const logos = [
    { name: "Client One", width: 160 },
    { name: "Client Two", width: 140 },
    { name: "Client Three", width: 180 },
    { name: "Client Four", width: 150 },
    { name: "Client Five", width: 170 },
  ];

  return (
    <section className="py-16 border-t border-white/10 overflow-hidden" style={{ background: "var(--bg)" }}>
      <div className="max-w-[1280px] mx-auto px-11">
        <p className="text-center mb-10 text-xs uppercase tracking-[0.3em]" style={{ color: "var(--muted)", opacity: 0.6, fontFamily: "ui-monospace, Menlo, monospace" }}>
          Trusted by ambitious brands
        </p>
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap" aria-label="Client logos">
          {logos.map((logo, i) => (
            <div key={i} className="flex-shrink-0 flex items-center justify-center" style={{ width: logo.width }}>
              <div className="text-center" style={{ opacity: 0.25 }}>
                <div className="text-xs mb-2 uppercase tracking-[0.2em]" style={{ color: "var(--muted)", fontFamily: "ui-monospace, Menlo, monospace" }}>{logo.name}</div>
                <div className="h-8 w-full rounded border" style={{ borderColor: "rgba(255,255,255,0.08)" }} />
              </div>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {logos.map((logo, i) => (
            <div key={i + logos.length} className="flex-shrink-0 flex items-center justify-center" style={{ width: logo.width }}>
              <div className="text-center" style={{ opacity: 0.25 }}>
                <div className="text-xs mb-2 uppercase tracking-[0.2em]" style={{ color: "var(--muted)", fontFamily: "ui-monospace, Menlo, monospace" }}>{logo.name}</div>
                <div className="h-8 w-full rounded border" style={{ borderColor: "rgba(255,255,255,0.08)" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section id="about" className="py-20 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-11">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="font-semibold mb-6"
              style={{
                fontFamily: "var(--font-clash), system-ui, sans-serif",
                fontSize: "clamp(2rem,5vw,3.375rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Built for ambitious{" "}
              <span
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 500,
                }}
              >
                brands
              </span>
              <span style={{ color: "var(--accent)" }}>.</span>
            </h2>
            <p className="text-[20px] leading-relaxed" style={{ color: "var(--muted)" }}>
              Luxury execution meets scalable strategy. We create systems designed for long-term
              growth, moving beyond tactical marketing into architectural brand scaling.
            </p>
          </div>
          <div
            className="relative aspect-video rounded-sm overflow-hidden"
            style={{ border: "1px solid var(--border)" }}
          >
            {/* Corner brackets */}
            <span className="absolute top-3 left-3 w-4 h-4 border-t border-l z-10" style={{ borderColor: "var(--accent)" }} />
            <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r z-10" style={{ borderColor: "var(--accent)" }} />
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url('/mpv8jzbm-ChatGPT-Image-Jun-1_-2026_-02_19_41-PM.png')" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8" style={{ color: "var(--accent)" }}>
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Paid Advertising",
    body: "High-performance campaigns across elite networks, optimized for immediate ROI and brand authority.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8" style={{ color: "var(--accent)" }}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "AI Automation",
    body: "Futuristic workflows and intelligent assistants that remove bottlenecks and scale operations autonomously.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8" style={{ color: "var(--accent)" }}>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Elite Branding",
    body: "Visual identities and typography systems crafted for luxury positioning and market dominance.",
  },
];

function Capabilities() {
  return (
    <ScrollAnimationWrapper>
      <section id="services" className="py-20 border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-11">
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <motion.div
                key={s.title}
                className="glass card-hover p-12 rounded-sm relative overflow-hidden"
                whileHover={{ y: -4, boxShadow: "0 0 30px rgba(212, 175, 55, 0.25)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">{s.icon}</div>
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{ fontFamily: "var(--font-clash), system-ui, sans-serif", letterSpacing: "-0.01em" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ScrollAnimationWrapper>
  );
}

function TheEdge() {
  return (
    <section className="py-20 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-11">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="relative aspect-video rounded-sm overflow-hidden"
            style={{ border: "none" }}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2560&q=100')" }}
            />
          </div>
          <div className="pl-0 md:pl-12">
            <p
              className="text-[11px] uppercase tracking-[0.2em] mb-4"
              style={{ fontFamily: "ui-monospace, Menlo, monospace", color: "var(--accent)" }}
            >
              Why Choose Us
            </p>
            <h2
              className="font-semibold mb-8"
              style={{
                fontFamily: "var(--font-clash), system-ui, sans-serif",
                fontSize: "clamp(2rem,5vw,3.375rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Modern systems for{" "}
              <span
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 500,
                }}
              >
                modern businesses
              </span>
              <span style={{ color: "var(--accent)" }}>.</span>
            </h2>
            <ul className="list-none p-0 m-0">
              {[
                ["01.", "Custom Digital Solutions", "No templates, only bespoke architecture."],
                ["02.", "Scalable Processes", "Built to handle 10x volume without friction."],
                ["03.", "AI-Driven Intelligence", "Real-time data processing and automation."],
              ].map(([num, title, desc]) => (
                <li
                  key={num}
                  className="py-4 border-t text-[15px]"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="mr-3 font-semibold" style={{ color: "var(--accent)" }}>{num}</span>
                  <span className="font-semibold">{title}</span>
                  {" "}— {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-20 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-11">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            ["01", "Discovery", "In-depth audit of your current systems and market positioning to identify high-leverage growth levers."],
            ["02", "Build", "Engineering the core infrastructure, from AI integrations to high-conversion digital surfaces."],
            ["03", "Scale", "Activating the engines and optimizing for exponential growth while maintaining luxury standards."],
          ].map(([num, title, desc]) => (
            <div key={num}>
              <span
                className="text-[32px] font-bold"
                style={{ color: "var(--accent)", fontFamily: "var(--font-clash), system-ui, sans-serif" }}
              >
                {num}
              </span>
              <h3
                className="text-2xl font-semibold mt-3 mb-3"
                style={{ fontFamily: "var(--font-clash), system-ui, sans-serif", letterSpacing: "-0.01em" }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote: "\"GrowthPilot's AI automation reduced our manual workload by 78% while increasing qualified leads 3.2x. The ROI was visible within the first quarter.\"",
      name: "Sarah Chen",
      role: "CEO, Meridian Capital",
    },
    {
      quote: "\"Their paid advertising strategy scaled our customer acquisition from $2M to $47M ARR in 18 months. Elite execution, zero wasted spend.\"",
      name: "Marcus Webb",
      role: "Founder, Apex Digital",
    },
    {
      quote: "\"The branding system they delivered positioned us as the premium choice in our category. We command 40% higher prices with the same volume.\"",
      name: "Elena Volkov",
      role: "CMO, Luminare Group",
    },
  ];

  return (
    <ScrollAnimationWrapper>
      <section className="py-20 border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-11">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: "var(--accent)", fontFamily: "ui-monospace, Menlo, monospace" }}>
              Client Success
            </p>
            <h2
              className="font-semibold"
              style={{
                fontFamily: "var(--font-clash), system-ui, sans-serif",
                fontSize: "clamp(2rem,5vw,3.375rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Results that{" "}
              <span
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 500,
                }}
              >
                speak for themselves
              </span>
              <span style={{ color: "var(--accent)" }}>.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="glass card-hover p-8 rounded-sm relative overflow-hidden">
                <div className="flex gap-1 mb-6" aria-label="5 star rating">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" style={{ color: "var(--accent)" }}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-base leading-relaxed mb-6" style={{ color: "var(--fg)" }}>
                  {t.quote}
                </blockquote>
                <div className="border-t pt-4" style={{ borderColor: "var(--border)" }}>
                  <p className="font-semibold" style={{ fontFamily: "var(--font-clash), system-ui, sans-serif" }}>{t.name}</p>
                  <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollAnimationWrapper>
  );
}

function Vision() {
  return (
    <section id="vision" className="py-20 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-11">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            ["/mqebekf6-WhatsApp-Image-2026-06-14-at-22.45.58.jpeg", "Elite Dashboard Concept"],
            ["/mqebk85w-WhatsApp-Image-2026-06-14-at-22.51.14.jpeg", "Elite Management Workflow"],
          ].map(([src, title]) => (
            <div
              key={title}
              className="glass card-hover rounded-sm overflow-hidden"
              style={{ padding: 0 }}
            >
              <div
                className="aspect-video bg-cover bg-center"
                style={{ backgroundImage: `url('${src}')` }}
              />
              <div className="p-6">
                <h3
                  className="text-xl font-semibold"
                  style={{ fontFamily: "var(--font-clash), system-ui, sans-serif" }}
                >
                  {title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const { openModal } = useContactModal();

  return (
    <section id="contact" className="py-20 border-t border-white/10 text-center">
      <div className="max-w-[800px] mx-auto px-11">
        <h2
          className="font-bold mb-8 text-balance"
          style={{
            fontFamily: "var(--font-clash), system-ui, sans-serif",
            fontSize: "clamp(3rem,8vw,5.625rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
          }}
        >
          Your Brand Deserves{" "}
          <br />
          <span
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontStyle: "italic",
              fontWeight: 500,
            }}
          >
            More Than Average
          </span>
          <span style={{ color: "var(--accent)" }}>.</span>
        </h2>
        <p
          className="text-[20px] leading-relaxed mb-12 mx-auto"
          style={{ color: "var(--muted)", maxWidth: "55ch" }}
        >
          Take the first step toward building your digital empire. Schedule a private strategy
          session with our advisors.
        </p>
        <button onClick={openModal} className="btn-gold inline-flex items-center gap-2">
          Book A Strategy Call
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}


/* ── Page ───────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <LogoMarquee />
        <Philosophy />
        <Capabilities />
        <Testimonials />
        <TheEdge />
        <Process />
        <Vision />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
