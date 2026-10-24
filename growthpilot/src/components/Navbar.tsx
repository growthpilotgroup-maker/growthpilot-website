"use client";

import { useState } from "react";
import Link from "next/link";
import { useContactModal } from "@/context/ContactModalContext";

export default function Navbar() {
  const { openModal } = useContactModal();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleBookCall = (e: React.MouseEvent) => {
    e.preventDefault();
    openModal();
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 border-b"
      style={{
        background: "rgba(18, 18, 18, 0.8)",
        backdropFilter: "blur(12px)",
        borderColor: "rgba(255, 255, 255, 0.1)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-11 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg md:text-xl font-bold tracking-[-0.02em] transition-opacity duration-300 hover:opacity-80 flex-shrink-0"
          style={{ fontFamily: "var(--font-clash), system-ui, sans-serif" }}
        >
          GROWTHPILOT <span style={{ color: "var(--accent)" }}>GROUP</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-12 items-center flex-1 justify-center">
          {[
            ["/#services", "Services"],
            ["/#about", "Philosophy"],
            ["/#vision", "Vision"],
            ["/pricing", "Pricing"],
            ["/#contact", "Contact"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-[13px] font-medium transition-colors duration-300"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <button
          onClick={handleBookCall}
          className="hidden md:block btn-gold flex-shrink-0"
          style={{ padding: "12px 24px", fontSize: "12px" }}
        >
          Book Call
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex-shrink-0 p-2"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{ color: "var(--fg)" }}
          >
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden border-t"
          style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
        >
          <nav className="flex flex-col gap-0 px-6 py-4">
            {[
              ["/#services", "Services"],
              ["/#about", "Philosophy"],
              ["/#vision", "Vision"],
              ["/pricing", "Pricing"],
              ["/#contact", "Contact"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="py-3 text-sm font-medium transition-colors duration-300 border-b"
                style={{
                  color: "var(--muted)",
                  borderColor: "rgba(255, 255, 255, 0.05)",
                }}
                onClick={() => setIsMobileMenuOpen(false)}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                {label}
              </a>
            ))}
            <button
              onClick={(e) => {
                handleBookCall(e);
                setIsMobileMenuOpen(false);
              }}
              className="btn-gold w-full mt-4"
              style={{ padding: "12px 16px", fontSize: "12px" }}
            >
              Book Call
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
