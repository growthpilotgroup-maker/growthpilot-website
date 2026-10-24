"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/growthpilot.group@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            businessName: formData.businessName,
            message: formData.message,
            _captcha: false,
            _subject: "New Lead: Strategy Call Request",
          }),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", businessName: "", message: "" });
        setIsSubmitting(false);
      } else {
        console.error("Form submission failed");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({ name: "", email: "", businessName: "", message: "" });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Fixed to screen */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 h-screen w-screen"
          />

          {/* Modal Container - Fixed and centered */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 h-screen w-screen">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-[500px]"
            >
              <div
                className="rounded-lg border backdrop-blur-md p-8 relative"
                style={{
                  background: "rgba(18, 18, 18, 0.95)",
                  borderColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                  aria-label="Close modal"
                  type="button"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>

                {/* Content */}
                {!isSubmitted ? (
                  <>
                    <h2
                      className="text-2xl font-bold mb-2"
                      style={{ fontFamily: "var(--font-clash), system-ui, sans-serif" }}
                    >
                      Book Your Strategy Call
                    </h2>
                    <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
                      Let&apos;s discuss how we can elevate your brand. No obligation.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-semibold mb-2 uppercase tracking-wide"
                          style={{ color: "var(--accent)" }}
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-transparent border px-4 py-3 rounded-sm text-sm focus:outline-none transition-colors"
                          style={{
                            borderColor: "var(--border)",
                            color: "var(--fg)",
                          }}
                          onFocus={(e) =>
                            (e.currentTarget.style.borderColor = "#D4AF37")
                          }
                          onBlur={(e) =>
                            (e.currentTarget.style.borderColor = "var(--border)")
                          }
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-semibold mb-2 uppercase tracking-wide"
                          style={{ color: "var(--accent)" }}
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-transparent border px-4 py-3 rounded-sm text-sm focus:outline-none transition-colors"
                          style={{
                            borderColor: "var(--border)",
                            color: "var(--fg)",
                          }}
                          onFocus={(e) =>
                            (e.currentTarget.style.borderColor = "#D4AF37")
                          }
                          onBlur={(e) =>
                            (e.currentTarget.style.borderColor = "var(--border)")
                          }
                        />
                      </div>

                      {/* Business Name */}
                      <div>
                        <label
                          htmlFor="businessName"
                          className="block text-xs font-semibold mb-2 uppercase tracking-wide"
                          style={{ color: "var(--accent)" }}
                        >
                          Business Name
                        </label>
                        <input
                          type="text"
                          id="businessName"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          required
                          className="w-full bg-transparent border px-4 py-3 rounded-sm text-sm focus:outline-none transition-colors"
                          style={{
                            borderColor: "var(--border)",
                            color: "var(--fg)",
                          }}
                          onFocus={(e) =>
                            (e.currentTarget.style.borderColor = "#D4AF37")
                          }
                          onBlur={(e) =>
                            (e.currentTarget.style.borderColor = "var(--border)")
                          }
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-xs font-semibold mb-2 uppercase tracking-wide"
                          style={{ color: "var(--accent)" }}
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full bg-transparent border px-4 py-3 rounded-sm text-sm focus:outline-none transition-colors resize-none"
                          style={{
                            borderColor: "var(--border)",
                            color: "var(--fg)",
                          }}
                          onFocus={(e) =>
                            (e.currentTarget.style.borderColor = "#D4AF37")
                          }
                          onBlur={(e) =>
                            (e.currentTarget.style.borderColor = "var(--border)")
                          }
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 font-semibold text-sm transition-opacity duration-300 disabled:opacity-50 mt-6"
                        style={{
                          backgroundColor: "#D4AF37",
                          color: "#000",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.opacity = "0.9")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.opacity = "1")
                        }
                      >
                        {isSubmitting ? "Submitting..." : "Submit Request"}
                      </button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    {/* Success Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                      className="mb-6 flex justify-center"
                    >
                      <svg
                        width="56"
                        height="56"
                        viewBox="0 0 56 56"
                        fill="none"
                        stroke="#D4AF37"
                        strokeWidth="2"
                      >
                        <circle cx="28" cy="28" r="26" />
                        <path d="M16 28l7 7 16-16" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>

                    {/* Success Message */}
                    <h3
                      className="text-2xl font-bold mb-3"
                      style={{ fontFamily: "var(--font-clash), system-ui, sans-serif", color: "#fff" }}
                    >
                      Request Received
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                      Our team will contact you shortly to discuss your strategy call.
                    </p>

                    {/* Additional Info */}
                    <p className="text-xs mt-6 pt-6 border-t" style={{ color: "var(--muted)", borderColor: "rgba(255, 255, 255, 0.1)" }}>
                      A confirmation email has been sent to your inbox.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
