import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import {
  FaAws,
  FaDocker,
  FaPython,
  FaGitAlt,
  FaReact,
  FaNodeJs,
  FaBrain,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiTerraform,
  SiTypescript,
  SiPostgresql,
  SiJenkins,
} from "react-icons/si";

const Hero: React.FC = () => {
  const resumeHref = `${import.meta.env.BASE_URL}profiles/resume.pdf`;
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = [
    "Software Developer",
    "AI Researcher",
    "MSc Candidate",
    "Aspiring Quant",
  ];
  const fullText = texts[currentTextIndex];
  const typingSpeed = 100; // milliseconds per character
  const deletingSpeed = 50;
  const pauseDuration = 2000; // pause before deleting

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let isDeleting = false;
    let currentIndex = 0;

    const type = () => {
      if (!isDeleting && currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(type, typingSpeed);
      } else if (!isDeleting && currentIndex > fullText.length) {
        timeout = setTimeout(() => {
          isDeleting = true;
          type();
        }, pauseDuration);
      } else if (isDeleting && currentIndex > 0) {
        currentIndex--;
        setTypedText(fullText.substring(0, currentIndex));
        timeout = setTimeout(type, deletingSpeed);
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        timeout = setTimeout(type, 500);
      }
    };

    type();

    return () => clearTimeout(timeout);
  }, [fullText]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 sm:pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-[#D6F4ED] via-[#87BAC3]/30 to-[#F8FEFC] dark:from-[#005461] dark:via-[#249E94]/20 dark:to-[#0F2F33]" />

        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-60" />

        {/* Floating Tech Logos */}
        {[
          { Icon: FaAws, x: "15%", y: "20%", delay: 0, duration: 8, size: 48 },
          {
            Icon: FaDocker,
            x: "85%",
            y: "25%",
            delay: 1,
            duration: 10,
            size: 44,
          },
          {
            Icon: FaPython,
            x: "10%",
            y: "60%",
            delay: 2,
            duration: 9,
            size: 46,
          },
          {
            Icon: SiKubernetes,
            x: "80%",
            y: "70%",
            delay: 0.5,
            duration: 11,
            size: 44,
          },
          {
            Icon: FaGitAlt,
            x: "25%",
            y: "80%",
            delay: 1.5,
            duration: 7,
            size: 48,
          },
          {
            Icon: SiTerraform,
            x: "75%",
            y: "15%",
            delay: 2.5,
            duration: 12,
            size: 44,
          },
          {
            Icon: FaReact,
            x: "90%",
            y: "50%",
            delay: 1,
            duration: 8.5,
            size: 46,
          },
          {
            Icon: SiTypescript,
            x: "20%",
            y: "40%",
            delay: 0,
            duration: 10.5,
            size: 44,
          },
          {
            Icon: FaBrain,
            x: "70%",
            y: "85%",
            delay: 2,
            duration: 9.5,
            size: 46,
          },
          {
            Icon: FaNodeJs,
            x: "45%",
            y: "15%",
            delay: 1.5,
            duration: 11.5,
            size: 48,
          },
          {
            Icon: SiPostgresql,
            x: "5%",
            y: "45%",
            delay: 0.5,
            duration: 10,
            size: 44,
          },
          {
            Icon: SiJenkins,
            x: "95%",
            y: "60%",
            delay: 2,
            duration: 8,
            size: 46,
          },
          {
            text: "∑",
            x: "35%",
            y: "25%",
            delay: 1,
            duration: 9,
            size: 48,
          },
          {
            text: "∫",
            x: "60%",
            y: "35%",
            delay: 2,
            duration: 10,
            size: 46,
          },
          {
            text: "π",
            x: "55%",
            y: "55%",
            delay: 1.5,
            duration: 8.5,
            size: 52,
          },
          {
            text: "∞",
            x: "12%",
            y: "30%",
            delay: 2.5,
            duration: 9.5,
            size: 48,
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-[#249E94]/25 dark:text-[#3BC1A8]/50"
            style={{ left: item.x, top: item.y }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.4, 0.7, 0.4],
              rotate: [-10, 10, -10],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
          >
            {item.Icon ? (
              <item.Icon size={item.size} />
            ) : (
              <span
                style={{
                  fontSize: `${item.size}px`,
                  fontWeight: "bold",
                  display: "block",
                  fontFamily: "serif",
                }}
              >
                {item.text}
              </span>
            )}
          </motion.div>
        ))}

        {/* Gradient orbs */}
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-150 h-150 bg-linear-to-br from-[#249E94]/30 to-[#3BC1A8]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-125 h-125 bg-linear-to-br from-[#87BAC3]/20 to-[#249E94]/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 50, -30, 0], y: [0, -60, 20, 0] }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-[#005461]/10 dark:bg-[#3BC1A8]/20 rounded-full blur-3xl"
        />

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#249E94]/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 glass rounded-full border border-[#249E94]/30 dark:border-[#3BC1A8]/25 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#3BC1A8] animate-pulse-glow" />
              <span className="text-[#005461] dark:text-[#D6F4ED] font-semibold text-sm tracking-wide">
                Welcome to my portfolio
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display mb-6"
          >
            <span className="bg-linear-to-r from-[#3BC1A8] via-[#249E94] to-[#87BAC3] bg-clip-text text-transparent">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
            <br />
            <span className="block text-2xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-slate-900 dark:text-slate-50 whitespace-nowrap mx-auto w-fit">
              Engineering Intelligent Solutions
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light tracking-wide"
          >
            I build scalable backend systems and intelligent AI models for
            financial markets.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer px-8 py-4 bg-linear-to-r from-[#3BC1A8] to-[#249E94] text-white rounded-xl font-semibold shadow-[0_0_30px_rgba(36,158,148,0.25)] hover:shadow-[0_0_35px_rgba(36,158,148,0.35)] transition-all duration-300 min-w-fit"
            >
              View My Projects
            </motion.button>
            <motion.a
              href={resumeHref}
              download="Gomotsegang_Resume.pdf"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="cursor-pointer px-8 py-4 border-2 border-[#249E94]/70 dark:border-[#3BC1A8]/60 text-[#005461] dark:text-[#D6F4ED] rounded-xl font-semibold hover:bg-[#249E94]/10 hover:border-[#249E94] hover:shadow-[0_0_20px_rgba(36,158,148,0.2)] transition-all duration-300 text-center backdrop-blur-sm min-w-fit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-6 justify-center"
          >
            {[
              {
                Icon: Github,
                label: "GitHub",
                href: "https://github.com/Gomotsegang1",
                accent: "text-[#249E94] dark:text-[#3BC1A8]",
                glow: "from-[#3BC1A8] via-[#249E94] to-[#005461]",
              },
              {
                Icon: Linkedin,
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/gomotsegang-matloa-a56240234",
                accent: "text-[#249E94] dark:text-[#87BAC3]",
                glow: "from-[#249E94] via-[#3BC1A8] to-[#87BAC3]",
              },
              {
                Icon: Mail,
                label: "Email",
                href: "mailto:nadinematloa@gmail.com",
                accent: "text-[#3BC1A8] dark:text-[#D6F4ED]",
                glow: "from-[#87BAC3] via-[#249E94] to-[#3BC1A8]",
              },
            ].map(({ Icon, label, href, accent, glow }) => (
              <motion.a
                key={label}
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-3 rounded-2xl bg-white/80 dark:bg-[#0F2F33]/70 border border-[#87BAC3]/40 dark:border-[#249E94]/30 shadow-[0_8px_24px_rgba(0,84,97,0.08)] transition-all duration-300 ${accent} hover:text-white dark:hover:text-white`}
              >
                <span
                  className={`absolute inset-0 rounded-2xl bg-linear-to-br ${glow} opacity-0 group-hover:opacity-100 transition duration-300`}
                />
                <span className="absolute inset-[1px] rounded-[15px] bg-white/70 dark:bg-[#0F2F33]/70 opacity-100 group-hover:opacity-0 transition duration-300" />
                <span className="relative z-10 flex items-center justify-center">
                  <Icon size={22} />
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Scroll to explore
            </span>
            <ArrowDown size={20} className="text-[#249E94]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
