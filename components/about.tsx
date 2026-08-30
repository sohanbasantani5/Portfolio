"use client";

import { motion } from "framer-motion";
import { aboutMe, skills } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-heading text-neutral-500 tracking-[0.3em] uppercase">
              About Me
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-4 mb-8 tracking-tight leading-tight">
              Crafting Visual Stories
              <br />
              <span className="text-neutral-400 dark:text-neutral-500">Since 2019</span>
            </h2>
            <div className="space-y-5 text-neutral-600 dark:text-neutral-400 leading-relaxed font-body">
              {aboutMe.bio.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <span className="text-xs font-heading text-neutral-500 tracking-widest uppercase">Based In</span>
                <p className="text-foreground mt-1 font-heading">{aboutMe.location}</p>
              </div>
              <div>
                <span className="text-xs font-heading text-neutral-500 tracking-widest uppercase">Role</span>
                <p className="text-foreground mt-1 font-heading">{aboutMe.role}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h3 className="font-heading text-sm text-neutral-500 tracking-widest uppercase mb-8">
              Software & Skills
            </h3>
            <div className="space-y-5">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-foreground font-heading">{skill.name}</span>
                    <span className="text-xs text-neutral-400 dark:text-neutral-600 font-heading">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-foreground dark:bg-white rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.05, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}