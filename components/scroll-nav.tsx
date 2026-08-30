"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const sections = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

const NAV_HEIGHT = 80;

export function ScrollNav() {
  const [targetIndex, setTargetIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerY = scrollY + NAV_HEIGHT;

      setIsVisible(true);

      // Find which section the trigger point has crossed
      let crossedIdx = -1;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const sectionTop = el.getBoundingClientRect().top + scrollY;
          if (triggerY >= sectionTop) {
            crossedIdx = i;
            break;
          }
        }
      }

      // Target is the NEXT section after the one we've crossed
      if (crossedIdx === -1) {
        setTargetIndex(0);
      } else if (crossedIdx < sections.length - 1) {
        setTargetIndex(crossedIdx + 1);
      } else {
        // At last section — target is scroll to top
        setTargetIndex(sections.length);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (targetIndex >= sections.length) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(sections[targetIndex].id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  const isTop = targetIndex >= sections.length;
  const label = isTop ? "Top" : sections[targetIndex].label;

  return (
    <motion.button
      onClick={handleClick}
      className="scroll-section-btn fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-xs font-heading tracking-wider uppercase">{label}</span>
      <motion.div
        animate={{ y: isTop ? [-3, 3, -3] : [0, 4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {isTop ? (
          <ChevronUp className="w-3.5 h-3.5" />
        ) : (
          <ChevronDown className="w-3.5 h-3.5" />
        )}
      </motion.div>
    </motion.button>
  );
}
