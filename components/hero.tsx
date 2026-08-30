"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "next-themes";
import { Play, Film, Clapperboard, Mic, Camera, Scissors, Paintbrush } from "lucide-react";
import Link from "next/link";

const roles = ["Video Editor", "Podcast Producer", "Artist"];

const darkIcons = [
  { Icon: Film, x: "10%", y: "20%", size: 32, delay: 0, duration: 5.5, rotate: 15, opacity: 0.07 },
  { Icon: Clapperboard, x: "85%", y: "15%", size: 28, delay: 0.5, duration: 6.2, rotate: -10, opacity: 0.07 },
  { Icon: Mic, x: "8%", y: "70%", size: 30, delay: 1, duration: 5.8, rotate: 20, opacity: 0.07 },
  { Icon: Camera, x: "88%", y: "65%", size: 26, delay: 1.5, duration: 6.5, rotate: -15, opacity: 0.07 },
  { Icon: Scissors, x: "20%", y: "85%", size: 24, delay: 0.8, duration: 5.2, rotate: 10, opacity: 0.07 },
  { Icon: Paintbrush, x: "78%", y: "82%", size: 28, delay: 1.2, duration: 6.0, rotate: -20, opacity: 0.07 },
];

const lightIcons = [
  { Icon: Film, x: "10%", y: "20%", size: 40, delay: 0, duration: 5.5, rotate: 15, opacity: 0.15 },
  { Icon: Clapperboard, x: "85%", y: "15%", size: 36, delay: 0.5, duration: 6.2, rotate: -10, opacity: 0.15 },
  { Icon: Mic, x: "8%", y: "70%", size: 38, delay: 1, duration: 5.8, rotate: 20, opacity: 0.15 },
  { Icon: Camera, x: "88%", y: "65%", size: 34, delay: 1.5, duration: 6.5, rotate: -15, opacity: 0.15 },
  { Icon: Scissors, x: "20%", y: "85%", size: 30, delay: 0.8, duration: 5.2, rotate: 10, opacity: 0.15 },
  { Icon: Paintbrush, x: "78%", y: "82%", size: 36, delay: 1.2, duration: 6.0, rotate: -20, opacity: 0.15 },
];

const marqueeItems = [
  "VIDEO EDITING",
  "MOTION DESIGN",
  "PODCAST PRODUCTION",
  "GRAPHICS",
  "COLOR GRADING",
  "SOUND DESIGN",
  "STORYTELLING",
  "VFX",
];

function TypingRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 50 : 100
      );
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <span>
      {displayText}
      <span className="inline-block w-[3px] h-[0.9em] bg-current ml-1 align-middle animate-pulse" />
    </span>
  );
}

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const icons = isDark ? darkIcons : lightIcons;

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={isDark ? "https://picsum.photos/seed/hero-cinematic/1920/1080.jpg" : "https://picsum.photos/seed/light-office-warm/1920/1080.jpg"}
          alt="Background"
          className="w-full h-full object-cover transition-opacity duration-700"
        />
        <div className="hero-gradient absolute inset-0" />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

      {icons.map(({ Icon, x, y, size, delay, duration, rotate, opacity }, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none floating-icon"
          style={{ left: x, top: y, color: isDark ? `rgba(255,255,255,${opacity})` : `rgba(196,93,62,${opacity})` }}
          initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
          animate={isInView ? {
            opacity: 1,
            scale: 1,
            rotate: rotate,
            y: [0, -18, 0],
          } : {}}
          transition={{
            opacity: { duration: 0.8, delay },
            scale: { duration: 0.8, delay },
            y: { duration, repeat: Infinity, ease: "easeInOut", delay },
          }}
        >
          <Icon size={size} strokeWidth={1.5} />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="hero-badge inline-block px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-heading text-white tracking-widest uppercase mb-8">
            Available for Freelance & Commissions
          </span>
        </motion.div>

        <motion.h1
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          I&apos;m Sohan
        </motion.h1>

        <motion.div
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-8 min-h-[1.2em]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="text-gradient-white">
            <TypingRole />
          </span>
        </motion.div>

        <motion.p
          className="hero-subtitle text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-12 font-body"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Crafting cinematic brand films, motion graphics, podcast productions,
          and visual narratives that captivate audiences worldwide.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Link
            href="#work"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-heading text-sm rounded-lg hover:bg-neutral-200 transition-all duration-300 hover:shadow-lg hover:shadow-white/10 hero-cta-primary"
          >
            View My Work
            <Play className="w-4 h-4 fill-black group-hover:fill-black transition-colors" />
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 border border-neutral-700 text-white font-heading text-sm rounded-lg hover:border-neutral-500 hover:bg-neutral-900 transition-all duration-300 hero-cta-secondary"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <span className="text-xs text-neutral-500 tracking-widest uppercase font-heading">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-neutral-500 to-transparent"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-white/5 bg-black/30 backdrop-blur-sm marquee-bar">
        <div className="flex whitespace-nowrap py-3" style={{ animation: "marquee 25s linear infinite" }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-xs font-heading text-white/30 tracking-[0.3em] uppercase mx-8 flex items-center gap-3">
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}