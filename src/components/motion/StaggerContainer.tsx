import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  inView?: boolean;
}

const containerVariants = (staggerDelay: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
    },
  },
});

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

const StaggerContainer = ({ children, className = "", staggerDelay = 0.15, inView = true }: StaggerContainerProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={containerVariants(staggerDelay)}
      initial="hidden"
      {...(inView ? { whileInView: "visible", viewport: { once: true, margin: "-60px" } } : { animate: "visible" })}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default StaggerContainer;
