"use client";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Simulate API call
    setTimeout(() => {
      setSubmitMessage("Thank you for subscribing!");
      setEmail("");
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 3000);
    }, 800);
  };

  return (
    <footer className="py-20 border-t border-white/10" style={{ background: "var(--surface)" }}>
      <div className="max-w-[1280px] mx-auto px-11">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-16 mb-16 pb-16 border-b" style={{ borderColor: "var(--border)" }}>
          {/* Left Column: Brand & Mission */}
          <div>
            <div
              className="text-xl font-bold tracking-[-0.02em] mb-6"
              style={{ fontFamily: "var(--font-clash), system-ui, sans-serif" }}
            >
              GROWTHPILOT <span style={{ color: "var(--accent)" }}>GROUP</span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--muted)", maxWidth: "280px" }}
            >
              Elite digital systems engineered to transform ambitious brands into market leaders.
            </p>
          </div>

          {/* Middle Column: Address & Contact Details */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: "var(--accent)", fontFamily: "ui-monospace, Menlo, monospace" }}>
              Get In Touch
            </p>
            <address className="not-italic mb-6">
              <p className="text-sm leading-relaxed" style={{ color: "var(--fg)" }}>
                1250 Market Street
                <br />
                San Francisco, CA 94103
                <br />
                United States
              </p>
            </address>

            {/* Contact Details */}
            <div className="flex flex-col gap-3 mb-6">
              <a
                href="mailto:contact@growthpilotgroup.net"
                className="text-xs font-medium transition-colors duration-300"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                contact@growthpilotgroup.net
              </a>
              <a
                href="mailto:support@growthpilotgroup.net"
                className="text-xs font-medium transition-colors duration-300"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                support@growthpilotgroup.net
              </a>
              <a
                href="tel:+12127677470"
                className="text-xs font-medium transition-colors duration-300"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                (212) 767-7470-62
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              {[
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "X", href: "https://x.com" },
                { label: "Instagram", href: "https://instagram.com" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium transition-colors duration-300"
                  style={{ color: "var(--muted)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Email Subscribe */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: "var(--accent)", fontFamily: "ui-monospace, Menlo, monospace" }}>
              Subscribe to Insights
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <div className="flex">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-transparent border px-4 py-3 text-sm focus:outline-none transition-colors duration-300"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--fg)",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-3 font-semibold text-xs transition-all duration-300 disabled:opacity-50"
                  style={{
                    backgroundColor: "#D4AF37",
                    color: "#000",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  {isSubmitting ? "..." : "Submit"}
                </button>
              </div>
              {submitMessage && (
                <p className="text-xs mt-2" style={{ color: "var(--accent)" }}>
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Footer: Links */}
        <div className="flex items-center justify-between flex-wrap gap-6">
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            © 2026 GrowthPilot Group. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Privacy", "Terms", "Careers"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs font-medium transition-colors duration-300"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
