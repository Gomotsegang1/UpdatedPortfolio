import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import projectsData from "../data/projects.json";
import { ProjectSkeleton } from "./SkeletonLoader";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
}

const Projects: React.FC = () => {
  const [_selectedProject, _setSelectedProject] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const projects: Project[] = projectsData;

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const resolveImageSrc = (imagePath: string): string => {
    if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
      return imagePath;
    }

    const cleanPath = imagePath.replace(/^\/+/, "");
    return `${import.meta.env.BASE_URL}${cleanPath}`;
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-deep-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 line-grid" />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            <span className="bg-linear-to-r from-[#87BAC3] to-[#249E94] bg-clip-text text-transparent">
              Projects Worked On
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            A selection of projects showcasing my ability to deliver high-impact
            solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <ProjectSkeleton key={i} />
            ))}
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              // Keep uploaded screenshots fully visible; use cover mode for logos/artwork.
              <motion.div
                key={project.id}
                variants={itemVariants}
                onClick={() => _setSelectedProject(project.id)}
                className="group cursor-pointer"
              >
                <div className="relative bg-white dark:bg-deep-800 rounded-xl overflow-hidden border border-slate-200/70 dark:border-[#249E94]/30 shadow-card hover:shadow-card-hover hover:border-[#249E94]/40 dark:hover:border-[#3BC1A8]/40 transition-all duration-300 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img
                      src={resolveImageSrc(project.image)}
                      alt={project.title}
                      className={`w-full h-full transition-transform duration-300 ${
                        project.image.includes("profiles/")
                          ? "object-cover object-top scale-100 group-hover:scale-105"
                          : "object-cover object-center group-hover:scale-105"
                      }`}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-sm font-medium">
                        View Project
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#249E94] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag text-xs py-0.5">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {project.link !== "#" && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-linear-to-r from-[#3BC1A8] to-[#249E94] text-white rounded-xl text-sm font-semibold shadow-glow transition-all"
                        >
                          <ExternalLink size={16} className="text-white" />
                          <span className="text-white">Live</span>
                        </motion.a>
                      )}
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-[#249E94]/60 dark:border-[#3BC1A8]/50 text-[#005461] dark:text-[#3BC1A8] rounded-xl text-sm font-semibold hover:bg-[#249E94]/10 hover:border-[#249E94] hover:shadow-glow transition-all"
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
