// components/ContactForm.tsx
"use client"; // only if using App Router (Next.js 13+)

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactUsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactUs({ isOpen, onClose }: ContactUsProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed: " + data.error);
      }
    } catch (err) {
      setStatus("❌ Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      firstInputRef.current?.focus();
    }
  }, [isOpen]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }

    if (e.key === "Tab") {
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements) {
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className={`relative bg-black/90 border border-white/20 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 max-w-lg w-full m-4`}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-300 p-2 z-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative z-10 max-h-[80vh] overflow-y-auto">
              <h3 className="text-xl sm:text-2xl text-white font-bold mb-6 border-b border-white/20 pb-3 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="mb-4 sm:mb-6">
                  <label className="block mb-2 text-sm font-medium text-white/90">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      ref={firstInputRef}
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      required
                      className="w-full sm:w-1/2 p-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 backdrop-blur-[10px] text-white placeholder-white/50 transition-all duration-300 hover:bg-white/15 text-sm sm:text-base"
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      required
                      className="w-full sm:w-1/2 p-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 backdrop-blur-[10px] text-white placeholder-white/50 transition-all duration-300 hover:bg-white/15 text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-4 sm:mb-6">
                  <label className="block mb-2 text-sm font-medium text-white/90">
                    E-mail <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@example.com"
                    required
                    className="w-full p-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 backdrop-blur-[10px] text-white placeholder-white/50 transition-all duration-300 hover:bg-white/15 text-sm sm:text-base"
                  />
                </div>

                {/* Message */}
                <div className="mb-6 sm:mb-8">
                  <label className="block mb-2 text-sm font-medium text-white/90">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Write your message..."
                    required
                    className="w-full p-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 backdrop-blur-[10px] text-white placeholder-white/50 transition-all duration-300 hover:bg-white/15 resize-none text-sm sm:text-base"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full relative overflow-hidden rounded-xl py-3 transition-all duration-300 group"
                >
                  {/* Button background with header gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E1A940] to-[#FF6700] hover:from-[#FF6700] hover:to-[#E1A940] backdrop-blur-[10px] border border-white/20 rounded-xl group-hover:shadow-xl transition-all duration-300"></div>
                  
                  {/* Button content */}
                  <span className="relative z-10 text-white font-semibold text-center block text-sm sm:text-base">
                    {loading ? "Submitting..." : "SEND MESSAGE"}
                  </span>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </button>
              </form>

              {status && (
                <div className="mt-4 p-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-[10px]">
                  <p className="text-center text-sm text-white/90">{status}</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}