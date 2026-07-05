import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Users, Coffee, Briefcase } from "lucide-react";

interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: Stat[] = [
  {
    icon: Code2,
    value: 30,
    suffix: "+",
    label: "Projects Completed",
    color: "text-[#249E94]",
  },
  {
    icon: Users,
    value: 10,
    suffix: "+",
    label: "Models Built",
    color: "text-[#3BC1A8]",
  },
  {
    icon: Coffee,
    value: 100,
    suffix: "+",
    label: "Cups of Coffee",
    color: "text-[#87BAC3]",
  },
  {
    icon: Briefcase,
    value: 3,
    suffix: "+",
    label: "Years Experience",
    color: "text-[#249E94]",
  },
];

const AnimatedCounter: React.FC<{
  value: number;
  suffix: string;
  inView: boolean;
}> = ({ value, suffix, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, inView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Stats: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section className="py-20 bg-slate-50 dark:bg-deep-900 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.04, y: -6 }}
                className="card-glow p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`p-4 rounded-2xl bg-linear-to-br ${
                      index % 2 === 0
                        ? "from-[#3BC1A8]/15 to-[#249E94]/15 dark:from-[#3BC1A8]/20 dark:to-[#249E94]/20"
                        : "from-[#87BAC3]/15 to-[#249E94]/15 dark:from-[#87BAC3]/20 dark:to-[#249E94]/20"
                    } mb-4`}
                  >
                    <Icon size={32} className={stat.color} />
                  </div>
                  <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      inView={isInView}
                    />
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
