import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-[#87BAC3] via-[#249E94] to-[#3BC1A8] origin-left z-50"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
