export const Languages = {
  'typescript': { key: 'typescript', name: 'Typescript', icon: '/stack-icons/typescript-icon.svg' }
} as const

export const Framworks = {
  'react': { key: 'react', name: 'React', icon: '/stack-icons/react.svg' },
  'react-native': { key: 'react-native', name: 'React Native', icon: '/stack-icons/react-native.svg' },
  'nextjs': { key: 'nextjs', name: 'Next.js', icon: '/stack-icons/nextjs.svg' },
} as const

export const Server = {
  'nodejs': { key: 'nodejs', name: 'Node.js', icon: '/stack-icons/node-js.svg' },
  'express': { key: 'express', name: 'Express', icon: '/stack-icons/express-original.svg' },
} as const

export const UILibraries = {
  'tailwindcss': { key: 'tailwindcss', name: 'Tailwindcss', icon: '/stack-icons/tailwind-css.svg' },
  'bootstrap': { key: 'bootstrap', name: 'Bootstrap', icon: '/stack-icons/bootstrap.svg' },
  '@mui/material': { key: '@mui/material', name: 'Material Ui', icon: '/stack-icons/material-ui.svg' },
  '@radix-ui': { key: '@radix-ui', name: 'Radix Ui', icon: null },
  'shadcn': { key: 'shadcn', name: 'Shadcn', icon: null },
  '@tanstack/react-table': { key: '@tanstack/react-table', name: 'Tanstack/React Table', icon: null },
  'framer-motion': { key: 'framer-motion', name: 'Framer Motion', icon: '/stack-icons/framer-motion.webp' },
} as const

export const StateManagements = {
  'redux': { key: 'redux', name: 'Redux', icon: '/stack-icons/redux-original.svg' },
  'zustand': { key: 'zustand', name: 'Zustand', icon: null },
  'jotai': { key: 'jotai', name: 'Jotai', icon: null },
  '@tanstack/react-query': { key: '@tanstack/react-query', name: 'Tanstack/React Query', icon: null },
} as const

export const Stacks = {
  ...Languages,
  ...Framworks,
  ...Server,
  ...UILibraries,
  ...StateManagements,
}

export type Stack = {
  key: keyof typeof Stacks
  name: string
  icon: string | null
}