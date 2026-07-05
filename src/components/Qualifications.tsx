import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  GraduationCap,
  Star,
  CheckCircle,
  ExternalLink,
  Clock,
} from "lucide-react";
import qualificationsData from "../data/qualifications.json";

interface Qualification {
  id: number;
  type: "certification" | "education" | "achievement";
  title: string;
  issuer: string;
  date: string;
  icon: string;
  description: string;
  credentialId?: string;
}

const Qualifications: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("education");

  const qualifications: Qualification[] =
    qualificationsData as unknown as Qualification[];

  const filters = [
    { id: "education", label: "Education" },
    { id: "achievement", label: "Achievements" },
    { id: "certification", label: "Certifications" },
  ];

  const filteredQualifications = qualifications.filter(
    (q) => q.type === activeFilter,
  );

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "award":
        return Award;
      case "graduation-cap":
        return GraduationCap;
      case "star":
        return Star;
      default:
        return Award;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "certification":
        return "from-[#87BAC3] to-[#249E94]";
      case "education":
        return "from-[#87BAC3] to-[#3BC1A8]";
      case "achievement":
        return "from-[#3BC1A8] to-[#87BAC3]";
      default:
        return "from-[#87BAC3] to-[#249E94]";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="qualifications"
      className="py-20 bg-white dark:bg-deep-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 dot-grid opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-[#87BAC3] via-[#249E94] to-[#3BC1A8] bg-clip-text text-transparent">
              Qualifications
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Certifications, education, and achievements that validate my
            expertise
          </p>

          {/* View All Certificates Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-linear-to-r from-[#3BC1A8] to-[#249E94] text-white rounded-xl font-semibold shadow-glow transition-all duration-300 cursor-default"
            type="button"
            disabled
          >
            <ExternalLink size={20} className="text-white" />
            <span className="text-white">
              Certificates Available On Request
            </span>
          </motion.button>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-linear-to-r from-[#3BC1A8] to-[#249E94] text-white shadow-glow"
                  : "bg-slate-100/80 dark:bg-deep-700 border border-slate-200/70 dark:border-[#249E94]/30 text-slate-700 dark:text-slate-300 hover:border-[#249E94]/40 hover:text-[#249E94] dark:hover:text-[#3BC1A8]"
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Qualifications Grid */}
        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-6"
        >
          {filteredQualifications.map((qualification) => {
            const Icon = getIcon(qualification.icon);
            return (
              <motion.div
                key={qualification.id}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-glow p-6 shadow-card hover:shadow-card-hover"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className={`p-3 rounded-xl bg-linear-to-br ${getTypeColor(
                      qualification.type,
                    )} shrink-0`}
                  >
                    <Icon size={28} className="text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                        {qualification.title}
                      </h3>
                      {qualification.description?.includes("In Progress") ? (
                        <Clock
                          size={20}
                          className="text-yellow-500 shrink-0 ml-2 animate-pulse"
                        />
                      ) : (
                        <CheckCircle
                          size={20}
                          className="text-green-500 shrink-0 ml-2"
                        />
                      )}
                    </div>

                    <p className="text-[#249E94] dark:text-[#3BC1A8] font-semibold mb-2">
                      {qualification.issuer}
                    </p>

                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                      {qualification.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 dark:text-slate-500 text-sm">
                        {qualification.date}
                      </span>
                    </div>

                    {/* Type Badge */}
                    <div className="mt-3">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-linear-to-r ${getTypeColor(
                          qualification.type,
                        )}`}
                      >
                        {qualification.type.charAt(0).toUpperCase() +
                          qualification.type.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Empty State */}
        {filteredQualifications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              No qualifications found for this filter.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Qualifications;
