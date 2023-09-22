import { Stacks, type Stack } from "./stacks";

type K =
  | "merchant_app"
  | "dimrider"
  | "customer_app"
  | "admin_pannel"
  | "merchant_dashboard";

export type Project = {
  key: keyof typeof Projects;
  name: string;
  desc: string;
  stacks: Stack[];
  images?: string[];
};

export const Projects: Record<K, Project> = {
  merchant_app: {
    key: "merchant_app",
    name: "POS",
    desc: "",
    stacks: [Stacks["react-native"], Stacks.redux],
  },
  dimrider: {
    key: "dimrider",
    name: "DimRider",
    desc: "提供DimOrder點單司機承接DimOrder外送訂單，查看外送訂單內容的便捷工具。\n\nDimRider 為專為DimOrder點單司機設計的接單App。透過DimRider，可輕鬆查看目前的外送訂單狀況，並可一鍵承接訂單。於訂定畫面中，可一目暸然目前外送訂單的取餐時間、預計送達時間。訂單數量，也方便與DimOrder營運人員聯繫。在設定畫面中，也可查詢個人的接單數據統計，方便查詢自己的歷史接單紀錄。",
    stacks: [Stacks["react-native"], Stacks.redux],
    images: [
      '/project-images/dimrider/img-0.png',
      '/project-images/dimrider/img-1.jpg',
      '/project-images/dimrider/img-2.jpg',
      '/project-images/dimrider/img-3.jpg',
      '/project-images/dimrider/img-4.jpg',
      '/project-images/dimrider/img-5.jpg',
      '/project-images/dimrider/img-6.jpg',
      '/project-images/dimrider/img-7.jpg',
      '/project-images/dimrider/img-8.jpg',
      '/project-images/dimrider/img-9.jpg',
    ]
  },
  customer_app: {
    key: "customer_app",
    name: "Customer App",
    desc: "",
    stacks: [Stacks.react, Stacks.redux, Stacks["@tanstack/react-query"]],
  },
  admin_pannel: {
    key: "admin_pannel",
    name: "Admin Web",
    desc: "",
    stacks: [Stacks.react, Stacks.redux, Stacks["@tanstack/react-table"]],
  },
  merchant_dashboard: {
    key: "merchant_dashboard",
    name: "Dashboard",
    desc: "",
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
