"use client";

import { motion } from "framer-motion";

export function StackTransitionContainer({
  children,
  className,
}: React.ComponentProps<"li">) {
  return (
    <motion.li
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.li>
  );
}
