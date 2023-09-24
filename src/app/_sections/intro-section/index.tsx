"use client"
import Image from "next/image";
import { Avatar } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Section, SectionDivider } from "../section";

export function IntroSection() {
  return (
    <Section id="home">
      <PortraitAvatar />
      <motion.h1
        className="text-lg whitespace-pre-line"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi！<b>我是 Kevin Wang</b>，一名<b>前端工程師</b><br />
        擅長使用 <i>React</i>、<i>React Native</i> 和 <i>Next.js</i> 這些技術來開發 <b>網頁和手機應用程式</b>
      </motion.h1>

      <motion.h1
        className="text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >

      </motion.h1>
      <SectionDivider />
    </Section>
  );
}

export function PortraitAvatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "tween",
        duration: 0.2,
      }}
    >
      <Avatar className="h-48 w-48 border border-border">
        <Image
          src="/portrait.jpg"
          alt="portrait"
          fill
          className="object-cover object-top"
        />
      </Avatar>
    </motion.div>
  );
}
