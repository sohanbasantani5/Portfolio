"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src="https://picsum.photos/seed/hero-cinematic/1920/1080.jpg"
          alt="Cinematic background"
          className="w-full h-full object-cover"
        />
        <div className="hero-gradient absolute inset-0" />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-heading text-white tracking-widest uppercase mb-8">
            Available for Freelance & Commissions
          </span>
        </motion.div>

        <motion.h1
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          I Edit
          <br />
          <span className="text-gradient-white">Stories</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-12 font-body"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          Professional video editor & motion designer crafting cinematic brand films,
          social content, and visual narratives that captivate audiences worldwide.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
        >
          <Link
            href="#work"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-heading text-sm rounded-lg hover:bg-neutral-200 transition-all duration-300"
          >
            View My Work
            <Play className="w-4 h-4 fill-black group-hover:fill-black transition-colors" />
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 border border-neutral-700 text-white font-heading text-sm rounded-lg hover:border-neutral-500 hover:bg-neutral-900 transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <span className="text-xs text-neutral-600 tracking-widest uppercase font-heading">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-neutral-600 to-transparent" />
      </motion.div>
    </section>
  );
}