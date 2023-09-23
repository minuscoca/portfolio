"use client";

import { motion, type MotionProps } from "framer-motion";

export function FadeInContainer({
  children,
  className,
}: React.ComponentProps<"div"> & MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", duration: 1, delay: 0.1 }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
