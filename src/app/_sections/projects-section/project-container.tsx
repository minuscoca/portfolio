"use client"

import { motion, type MotionProps } from 'framer-motion'

export function ProjectContainer({
  children,
}: React.ComponentProps<'div'> & MotionProps
) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, }}
      viewport={{ once: true, }}
      className="group grid min-h-[30rem] w-full cursor-pointer grid-cols-1 overflow-hidden rounded-xl bg-secondary sm:grid-cols-2"
    >
      {children}
    </motion.div>
  )
}