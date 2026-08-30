"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Calendar, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  videoSrc: string;
  year: string;
  duration: string;
  tags: string[];
}

interface Props {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[70] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/85 backdrop-blur-lg"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        <motion.div
          className="relative w-full max-w-4xl bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800 max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative aspect-video md:aspect-[16/9]">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-3 py-1 bg-white text-black text-xs font-heading rounded-md mb-3">
                {project.category}
              </span>
              <h2 className="font-heading text-2xl md:text-3xl text-white">
                {project.title}
              </h2>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-neutral-400 text-sm">
                <Clock className="w-4 h-4" />
                {project.duration}
              </div>
              <div className="flex items-center gap-2 text-neutral-400 text-sm">
                <Calendar className="w-4 h-4" />
                {project.year}
              </div>
            </div>

            <p className="text-neutral-300 leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-neutral-900 text-neutral-300 text-xs font-heading rounded-md border border-neutral-800"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="border-t border-neutral-800 pt-6">
              <h4 className="font-heading text-sm text-neutral-400 tracking-widest uppercase mb-4">
                Watch Preview
              </h4>
              <div className="aspect-video rounded-xl overflow-hidden bg-black flex items-center justify-center">
                <video
                  controls
                  className="w-full h-full"
                  poster={project.thumbnail}
                >
                  <source src={project.videoSrc} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}