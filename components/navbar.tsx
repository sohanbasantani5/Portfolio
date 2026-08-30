"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        animate={{
          backgroundColor: scrolled ? "rgba(7,7,7,0.92)" : "rgba(7,7,7,0.45)",
          backdropFilter: "blur(24px)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
          boxShadow: scrolled
            ? "0 4px 30px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.05) inset"
            : "0 4px 30px rgba(0,0,0,0.2)",
        }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-white dark:bg-white flex items-center justify-center transition-colors duration-500">
                <span className="text-black font-bold text-sm font-heading">SB</span>
              </div>
              <span className="font-heading text-lg tracking-tight text-white dark:text-white group-hover:opacity-80 transition-opacity duration-500">
                SOHAN BASANTANI
              </span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-body text-neutral-300 dark:text-neutral-300 hover:text-white transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <ThemeToggle />
              <a
                href="#contact"
                className="ml-2 px-5 py-2.5 bg-white dark:bg-white text-black dark:text-black text-sm font-heading rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-200 transition-colors duration-500"
              >
                Hire Me
              </a>
            </div>

            <div className="md:hidden flex items-center gap-3">
              <ThemeToggle />
              <button
                className="text-white dark:text-white p-2 transition-colors duration-500"
                onClick={() => setMobileOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[55]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed inset-y-0 right-0 w-72 bg-neutral-950 dark:bg-neutral-950 bg-white border-l border-neutral-800 dark:border-neutral-800 border-neutral-200 z-[60] p-8 flex flex-col transition-colors duration-500"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-heading text-white dark:text-white text-foreground transition-colors duration-500">Menu</span>
                <button onClick={() => setMobileOpen(false)} className="text-white dark:text-white text-foreground transition-colors duration-500">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-xl font-heading text-neutral-300 dark:text-neutral-300 text-neutral-600 hover:text-white dark:hover:text-white hover:text-foreground transition-colors duration-500"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-auto">
                <a
                  href="#contact"
                  className="block w-full py-4 bg-white dark:bg-white bg-foreground text-black dark:text-black text-background text-center font-heading rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-200 hover:opacity-90 transition-all duration-500"
                  onClick={() => setMobileOpen(false)}
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}