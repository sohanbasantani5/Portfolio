"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-heading text-neutral-500 tracking-[0.3em] uppercase">
            Kind Words
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 tracking-tight">
            Client Reviews
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="p-8 rounded-xl bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Quote className="w-8 h-8 text-neutral-300 dark:text-neutral-700 mb-6" />
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm mb-8 font-body">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-foreground text-sm font-heading">{t.name}</p>
                  <p className="text-neutral-500 text-xs font-heading">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}