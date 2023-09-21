import { Stacks } from './stacks'

export const Projects = {
  'merchant_app': { stacks: [Stacks['react-native'], Stacks.redux] },
  'driver_app': { stacks: [Stacks['react-native'], Stacks.redux] },
  'customer_app': { stacks: [Stacks.react, Stacks.redux, Stacks['@tanstack/react-query']] },
  'admin_pannel': { stacks: [Stacks.react, Stacks.redux, Stacks['@tanstack/react-table']] },
  'merchant_dashboard': { stacks: [Stacks.react, Stacks.nextjs, Stacks.zustand, Stacks.shadcn, Stacks['@radix-ui'], Stacks['@tanstack/react-table']] }
}