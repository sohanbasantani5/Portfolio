"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const sections = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

const NAV_HEIGHT = 120;
const SCROLL_DURATION = 1200;

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function smoothScrollTo(targetY: number) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / SCROLL_DURATION, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

export function ScrollNav() {
  const [targetIndex, setTargetIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerY = scrollY + NAV_HEIGHT;

      setIsVisible(true);

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

      if (crossedIdx === -1) {
        setTargetIndex(0);
      } else if (crossedIdx < sections.length - 1) {
        setTargetIndex(crossedIdx + 1);
      } else {
        setTargetIndex(sections.length);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = useCallback(() => {
    if (targetIndex >= sections.length) {
      window.history.pushState(null, "", "#");
      smoothScrollTo(0);
      return;
    }

    const section = sections[targetIndex];
    const el = document.getElementById(section.id);
    if (el) {
      window.history.pushState(null, "", `#${section.id}`);
      const y = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
      smoothScrollTo(y);
    }
  }, [targetIndex]);

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
