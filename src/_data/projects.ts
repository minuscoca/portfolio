import { Stacks, type Stack } from "./stacks";

type K = "dim_pos" | "dim_rider" | "dim_order" | "dim_admin" | "dim_pay";
// | "merchant_dashboard";

export type Project = {
  key: keyof typeof Data;
  name: string;
  desc: string;
  stacks: Stack[];
  images?: string[];
  links?: {
    appStore?: string;
  };
};

export const Data: Record<K, Project> = {
  dim_pos: {
    key: "dim_pos",
    name: "DimPOS",
    desc: "DimPOS | 一站式雲端餐飲系統\n\n包含餐廳營業設定、菜單設定、店內點餐系統、外帶與外送接單系統、現金結帳與多種付款方式。",
    stacks: [Stacks["react-native"], Stacks.redux],
    images: [
      "/project-images/dim-pos/img-0.png",
      "/project-images/dim-pos/img-1.png",
      "/project-images/dim-pos/img-2.png",
      "/project-images/dim-pos/img-3.png",
      "/project-images/dim-pos/img-4.png",
    ],
    links: {
      appStore: "https://apps.apple.com/us/app/dimpos/id1561738870",
    },
  },
  dim_order: {
    key: "dim_order",
    name: "DimOrder",
    desc: "DimOrder｜外賣平台 App\n\n提供堂食、外帶、外送等多種餐廳服務，另提供平台積分兌換與客戶關係管理等多樣功能。",
    stacks: [Stacks.react, Stacks.redux, Stacks["@tanstack/react-query"]],
    images: [
      "/project-images/dim-order/img-0.png",
      "/project-images/dim-order/img-1.png",
      "/project-images/dim-order/img-2.png",
      "/project-images/dim-order/img-3.png",
      "/project-images/dim-order/img-4.png",
      "/project-images/dim-order/img-5.png",
      "/project-images/dim-order/img-6.png",
    ],
    links: {
      appStore: "https://apps.apple.com/hk/app/id1558146057",
    },
  },
  dim_rider: {
    key: "dim_rider",
    name: "DimRider",
    desc: "DimRider | 為 DimOrder 點單司機設計的接單 App\n\n可查看目前的外送訂單狀態並承接外送訂單。於訂定畫面中，可一目暸然目前外送訂單的取餐時間、預計送達時間、訂單數量等。在設定畫面中，也可查詢個人的接單數據統計，方便查詢自己的歷史接單紀錄。",
    stacks: [Stacks["react-native"], Stacks.redux],
    images: [
      "/project-images/dim-rider/img-0.png",
      "/project-images/dim-rider/img-1.jpg",
      "/project-images/dim-rider/img-2.jpg",
      "/project-images/dim-rider/img-3.jpg",
      "/project-images/dim-rider/img-4.jpg",
      "/project-images/dim-rider/img-5.jpg",
      "/project-images/dim-rider/img-6.jpg",
      "/project-images/dim-rider/img-7.jpg",
      "/project-images/dim-rider/img-8.jpg",
      "/project-images/dim-rider/img-9.jpg",
    ],
    links: {
      appStore: "https://apps.apple.com/hk/app/id1592248182",
    },
  },
  dim_admin: {
    key: "dim_admin",
    name: "DimAdmin",
    desc: "DimAdmin | 點單營運後台網站。",
    stacks: [Stacks.react, Stacks.redux, Stacks["@tanstack/react-table"]],
    images: ["/project-images/dim-admin/img-0.png"],
  },
  dim_pay: {
    key: "dim_pay",
    name: "DimPay",
    desc: "DimPay | 提供餐廳查看 DimPay 金流紀錄的 App，可根據不同的付款方式與時間區間進行篩選，或依據關鍵字做搜尋。（未完成）",
    stacks: [Stacks["react-native"], Stacks["react-native-paper"]],
    images: ["/project-images/dim-pay/img-0.png"],
  },
  // merchant_dashboard: {
  //   key: "merchant_dashboard",
  //   name: "Dashboard",
  //   desc: "",
  //   stacks: [
  //     Stacks.react,
  //     Stacks.nextjs,
  //     Stacks.zustand,
  //     Stacks["shadcn-ui"],
  //     Stacks["@radix-ui"],
  //     Stacks["@tanstack/react-table"],
  //   ],
  // },
};
