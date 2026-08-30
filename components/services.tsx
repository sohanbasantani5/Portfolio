"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { Clapperboard, Film, Palette, Volume2 } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  VideoEdit: <Clapperboard className="w-6 h-6" />,
  MotionDesign: <Film className="w-6 h-6" />,
  ColorGrade: <Palette className="w-6 h-6" />,
  SoundDesign: <Volume2 className="w-6 h-6" />,
};

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 border-y border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-heading text-neutral-500 tracking-[0.3em] uppercase">
            What I Do
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mt-4 tracking-tight">
            Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group p-8 lg:p-10 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-black transition-all duration-500">
                {iconMap[service.icon]}
              </div>
              <h3 className="font-heading text-xl text-white mb-3">{service.title}</h3>
              <p className="text-neutral-400 leading-relaxed text-sm mb-6 font-body">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((f) => (
                  <span
                    key={f}
                    className="px-3 py-1 text-xs font-heading text-neutral-500 bg-neutral-900 border border-neutral-800 rounded-md"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}