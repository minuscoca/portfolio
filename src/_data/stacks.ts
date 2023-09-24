export type Language = "javascript" | "typescript";
export type Framwork = "react" | "react-native" | "nextjs";
export type Server = "nodejs" | "express";
export type UILibrary =
  | "tailwindcss"
  | "bootstrap"
  | "@mui/material"
  | "@radix-ui"
  | "shadcn-ui"
  | "@tanstack/react-table"
  | "framer-motion"
  | "react-native-paper"
  | "react-native-elements";
export type StateLibrary =
  | "redux"
  | "zustand"
  | "jotai"
  | "@tanstack/react-query";

export type Stack = {
  key: keyof typeof Stacks;
  name: string;
  icon: string | null;
  emoji?: string;
};

export const Languages: Record<Language, Stack> = {
  javascript: {
    key: "javascript",
    name: "Javascript",
    icon: "/stack-icons/javascript-icon.png",
  },
  typescript: {
    key: "typescript",
    name: "Typescript",
    icon: "/stack-icons/typescript-icon.svg",
  },
};

export const Framworks: Record<Framwork, Stack> = {
  react: { key: "react", name: "React", icon: "/stack-icons/react.svg" },
  "react-native": {
    key: "react-native",
    name: "React Native",
    icon: "/stack-icons/react-native.svg",
  },
  nextjs: { key: "nextjs", name: "Next.js", icon: "/stack-icons/nextjs.svg" },
};

export const Server: Record<Server, Stack> = {
  nodejs: { key: "nodejs", name: "Node.js", icon: "/stack-icons/node-js.svg" },
  express: {
    key: "express",
    name: "Express",
    icon: "/stack-icons/express-original.svg",
  },
};

export const UILibraries: Record<UILibrary, Stack> = {
  tailwindcss: {
    key: "tailwindcss",
    name: "Tailwindcss",
    icon: "/stack-icons/tailwind-css.svg",
  },
  bootstrap: {
    key: "bootstrap",
    name: "Bootstrap",
    icon: "/stack-icons/bootstrap.svg",
  },
  "@mui/material": {
    key: "@mui/material",
    name: "Material UI",
    icon: "/stack-icons/material-ui.svg",
  },
  "@radix-ui": {
    key: "@radix-ui",
    name: "Radix UI",
    icon: "/stack-icons/radix-ui.png",
  },
  "shadcn-ui": {
    key: "shadcn-ui",
    name: "Shadcn UI",
    icon: "/stack-icons/shadcn-ui.svg",
  },
  "@tanstack/react-table": {
    key: "@tanstack/react-table",
    name: "React Table",
    icon: null,
  },
  "framer-motion": {
    key: "framer-motion",
    name: "Framer Motion",
    icon: "/stack-icons/framer-motion.webp",
  },
  "react-native-paper": {
    key: "react-native-paper",
    name: "React Native Paper",
    icon: "/stack-icons/react-native-paper.svg",
  },
  "react-native-elements": {
    key: "react-native-elements",
    name: "React Native Elements",
    icon: "/stack-icons/react-native-elements.png",
  },
};

export const StateManagements: Record<StateLibrary, Stack> = {
  redux: {
    key: "redux",
    name: "Redux",
    icon: "/stack-icons/redux-original.svg",
  },
  zustand: { key: "zustand", name: "Zustand", icon: null, emoji: "🐻" },
  jotai: { key: "jotai", name: "Jotai", icon: null, emoji: "👻" },
  "@tanstack/react-query": {
    key: "@tanstack/react-query",
    name: "React Query",
    icon: null,
  },
};

type TestLibrary = "jest" | "vitest";
export const TestLibraries: Record<TestLibrary, Stack> = {
  jest: { key: "jest", name: "Jest", icon: "/stack-icons/jest.png" },
  vitest: { key: "vitest", name: "vitest", icon: "/stack-icons/vitest.png" },
};

export const Stacks = {
  ...Languages,
  ...Framworks,
  ...Server,
  ...UILibraries,
  ...StateManagements,
  ...TestLibraries,
};
