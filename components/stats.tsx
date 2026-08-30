"use client";

import { motion } from "framer-motion";
import { aboutMe } from "@/lib/data";

export function Stats() {
  return (
    <section className="py-20 lg:py-28 border-y border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {aboutMe.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="font-heading text-3xl md:text-4xl lg:text-5xl text-white tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-xs text-neutral-500 font-heading tracking-widest uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}