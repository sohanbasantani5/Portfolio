"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Clock } from "lucide-react";
import { Project } from "@/lib/data";

interface Props {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX(((y - centerY) / centerY) * -5);
    setRotateY(((x - centerX) / centerX) * 5);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative overflow-hidden rounded-xl cursor-pointer bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800"
      style={{ rotateX, rotateY, perspective: 800, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="vid-card-overlay absolute inset-0" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
            <Play className="w-6 h-6 text-black fill-black ml-0.5" />
          </div>
        </div>
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-heading rounded-md">
            {project.category}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-black/60 backdrop-blur-sm text-neutral-300 text-xs font-heading">
          <Clock className="w-3 h-3" />
          {project.duration}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-heading text-lg text-foreground mb-2 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-xs text-neutral-500 bg-neutral-200 dark:bg-neutral-900 px-2 py-0.5 rounded font-heading">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}