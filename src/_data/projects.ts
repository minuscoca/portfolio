import { Stacks, type Stack } from "./stacks";

type K =
  | "merchant_app"
  | "driver_app"
  | "customer_app"
  | "admin_pannel"
  | "merchant_dashboard";

export type Project = {
  key: keyof typeof Projects;
  name: string;
  stacks: Stack[];
  images?: [];
};

export const Projects: Record<K, Project> = {
  merchant_app: {
    key: "merchant_app",
    name: "POS",
    stacks: [Stacks["react-native"], Stacks.redux],
  },
  driver_app: {
    key: "driver_app",
    name: "Driver App",
    stacks: [Stacks["react-native"], Stacks.redux],
  },
  customer_app: {
    key: "customer_app",
    name: "Customer App",
    stacks: [Stacks.react, Stacks.redux, Stacks["@tanstack/react-query"]],
  },
  admin_pannel: {
    key: "admin_pannel",
    name: "Admin Web",
    stacks: [Stacks.react, Stacks.redux, Stacks["@tanstack/react-table"]],
  },
  merchant_dashboard: {
    key: "merchant_dashboard",
    name: "Dashboard",
    stacks: [
      Stacks.react,
      Stacks.nextjs,
      Stacks.zustand,
      Stacks["shadcn-ui"],
      Stacks["@radix-ui"],
      Stacks["@tanstack/react-table"],
    ],
  },
};
