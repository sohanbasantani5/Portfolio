"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const sections = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export function ScrollNav() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsVisible(scrollY > windowHeight * 0.4);

      // Determine which section we're in or closest to
      let closestIdx = 0;
      let closestDist = Infinity;
      sections.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const dist = Math.abs(rect.top);
          if (dist < closestDist) {
            closestDist = dist;
            closestIdx = i;
          }
        }
      });

      // If we're near the very top, show the first section as target
      if (scrollY < 200) {
        setCurrentSection(0);
      } else {
        setCurrentSection(closestIdx);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    const nextIndex = currentSection;
    const targetId = sections[nextIndex]?.id;

    if (!targetId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!isVisible) return null;

  return (
    <motion.button
      onClick={scrollToNext}
      className="scroll-section-btn fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-xs font-heading tracking-wider uppercase">
        {currentSection < sections.length
          ? sections[currentSection].label
          : "Top"}
      </span>
      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-3.5 h-3.5" />
      </motion.div>
    </motion.button>
  );
}
