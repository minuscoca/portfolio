import { Stacks, type Stack } from "./stacks";

type K =
  | "dim_pos"
  | "dim_order"
  | "dim_rider"
  | "dim_admin"
  | "dim_pay"
  | "nicelend";

export type Project = {
  key: keyof typeof Data;
  title: string;
  subtitle: string;
  name: string;
  desc: string;
  stacks: Stack[];
  images: string[];
  links?: {
    appStore?: string;
  };
};

export const Data: Record<K, Project> = {
  dim_pos: {
    key: "dim_pos",
    title: "DimPOS",
    subtitle: "餐廳 POS App",
    name: "DimPOS",
    desc: `DimPOS | 餐廳 POS App\n
    專案簡介：
    點單提供給餐廳端的 POS 系統，能接收 DimOrder 下的外帶、外送、內用訂單，並能控制收銀機、連接熱感打印機、標籤機，以便餐廳列印出入座 QRCode、廚房單、收據等，也支援刷卡機、八達通等支付設備，除了雲端功能外也提供離線模式，讓餐廳在網路中斷時也能繼續營業。\n
    工作內容：
    負責將舊版的 Angular 餐廳端 POS 系統，根據設計師提供的 Zeplin 設計圖使用 React Native 開發新版 App，使用 Redux 處理 App 狀態。
    `,
    stacks: [Stacks["react-native"], Stacks.redux],
    images: [
      "/project-images/dim-pos/img-0.png",
      "/project-images/dim-pos/img-1.jpg",
      "/project-images/dim-pos/img-2.jpg",
      "/project-images/dim-pos/img-3.jpg",
      "/project-images/dim-pos/img-4.jpg",
      "/project-images/dim-pos/img-5.jpg",
      "/project-images/dim-pos/img-6.jpg",
      "/project-images/dim-pos/img-7.jpg",
      "/project-images/dim-pos/img-8.jpg",
      "/project-images/dim-pos/img-9.jpg",
      "/project-images/dim-pos/img-10.jpg",
      "/project-images/dim-pos/img-11.jpg",
      "/project-images/dim-pos/img-12.jpg",
      "/project-images/dim-pos/img-13.jpg",
    ],
    links: {
      appStore: "https://apps.apple.com/us/app/dimpos/id1561738870",
    },
  },
  dim_order: {
    key: "dim_order",
    title: "DimOrder",
    subtitle: "點餐 App",
    name: "DimOrder",
    desc: `DimOrder｜點餐 App\n
    專案簡介：
    點單面向一般客人的主力 App，除基本的外帶、外送、內用，也會與一些學校營養午餐或便當販賣機合作，或是和餐廳合作推出優惠活動，另提供平台積分兌換、優惠券兌換與客戶關係管理等多樣功能。\n
    工作內容：
    根據需求使用 React 與 Material UI 開發使用介面，使用 React Query 串接 API，使用 Redux 與 Context API 處理 App 狀態。使用 React Window 處理長列表並配合 React Query 的 InfiniteQuery 功能實做無限捲動功能。
    `,
    stacks: [
      Stacks.react,
      Stacks.redux,
      Stacks["@tanstack/react-query"],
      Stacks["@mui/material"],
    ],
    images: [
      "/project-images/dim-order/img-0.png",
      "/project-images/dim-order/img-1.jpg",
      "/project-images/dim-order/img-2.jpg",
      "/project-images/dim-order/img-3.jpg",
      "/project-images/dim-order/img-4.jpg",
      "/project-images/dim-order/img-5.jpg",
      "/project-images/dim-order/img-6.jpg",
      "/project-images/dim-order/img-7.jpg",
      "/project-images/dim-order/img-8.jpg",
      "/project-images/dim-order/img-9.jpg",
      "/project-images/dim-order/img-10.jpg",
      "/project-images/dim-order/img-11.jpg",
      "/project-images/dim-order/img-12.jpg",
      "/project-images/dim-order/img-13.jpg",
    ],
    links: {
      appStore: "https://apps.apple.com/hk/app/id1558146057",
    },
  },
  dim_rider: {
    key: "dim_rider",
    title: "DimRider",
    subtitle: "點單外送員 App",
    name: "DimRider",
    desc: `DimRider | 點單外送員 App\n
    專案簡介：
    可查看目前的外送訂單狀態並承接外送訂單。於訂定畫面中，可一目暸然目前外送訂單的取餐時間、預計送達時間、訂單數量等。在設定畫面中，也可查詢個人的接單數據統計，方便查詢自己的歷史接單紀錄。\n
    工作內容：
    根據需求設計 UI，使用 React Native 與 React Native Elements 開發 App。使用 Node.js/Express 與 Firebase 開發伺服器，串接第三方外送平台 API，並透過 Webhook 即時更新訂單狀態。
    `,
    stacks: [
      Stacks["react-native"],
      Stacks.redux,
      Stacks["react-native-elements"],
      Stacks.nodejs,
      Stacks.express,
    ],
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
    title: "DimAdmin",
    subtitle: "點單後台管理網站",
    name: "DimAdmin",
    desc: `DimAdmin | 點單後台管理網站\n
    專案簡介：
    提供點單員工進行餐廳設定與管理、設定優惠、訂單查詢、安排訂單運送、處裡訂單退款等完整後台管理功能。\n
    工作內容：
    根據需求設計部分 UI，使用 React 與 Material UI 開發網頁並串接 API。使用 React Table 實做多種表格。
    `,
    stacks: [
      Stacks.react,
      Stacks.redux,
      Stacks["@mui/material"],
      Stacks["@tanstack/react-table"],
    ],
    images: [
      "/project-images/dim-admin/img-0.png",
      "/project-images/dim-admin/img-1.png",
      "/project-images/dim-admin/img-2.png",
      "/project-images/dim-admin/img-3.png",
      "/project-images/dim-admin/img-4.png",
      "/project-images/dim-admin/img-5.png",
      "/project-images/dim-admin/img-6.png",
      "/project-images/dim-admin/img-7.png",
    ],
  },
  dim_pay: {
    key: "dim_pay",
    title: "DimPay",
    subtitle: "付款紀錄 App",
    name: "DimPay",
    desc: `DimPay | 付款紀錄 App\n
    專案簡介：
    提供 DimPos 網路障礙時，仍須查看 DimPay 付款記錄時的備案。當餐廳網路中斷時可使用行動網路查看此 App，以確認訂單是否已收到付款。可根據不同的付款方式與時間區間進行篩選，或依據關鍵字做搜尋。\n
    工作內容：
    根據需求設計 UI，使用 React Native 開發 App。使用 Section List 實做資料更新與無限捲動功能，使用 React Native Paper 設定主題色，使用 React Native Calendars 實做日期區間選擇。
    `,
    stacks: [
      Stacks["react-native"],
      Stacks["react-native-paper"],
      Stacks.typescript,
    ],
    images: [
      "/project-images/dim-pay/img-0.png",
      "/project-images/dim-pay/img-1.jpg",
      "/project-images/dim-pay/img-2.png",
      "/project-images/dim-pay/img-3.png",
      "/project-images/dim-pay/img-4.jpg",
      "/project-images/dim-pay/img-5.jpg",
      "/project-images/dim-pay/img-6.jpg",
      "/project-images/dim-pay/img-7.jpg",
      "/project-images/dim-pay/img-8.jpg",
      "/project-images/dim-pay/img-9.jpg",
      "/project-images/dim-pay/img-10.jpg",
      "/project-images/dim-pay/img-11.jpg",
      "/project-images/dim-pay/img-12.jpg",
    ],
  },
  nicelend: {
    key: "nicelend",
    title: "Nicelend",
    subtitle: "加密貨幣放貸機器人 App",
    name: "Nicelend",
    desc: `
    Nicelend | 加密貨幣放貸機器人 App\n
    專案簡介：
    透過串接 Bitfinex 交易所的 API，根據設定的機器人策略進行放貸。\n
    工作內容：
    配合業主的設計師，使用 React 開發並串接 API。`,
    stacks: [Stacks.react, Stacks.redux, Stacks["@mui/material"]],
    images: [
      "/project-images/nicelend/img-0.png",
      "/project-images/nicelend/img-1.png",
      "/project-images/nicelend/img-2.png",
      "/project-images/nicelend/img-3.png",
      "/project-images/nicelend/img-4.png",
      "/project-images/nicelend/img-5.png",
    ],
    links: {
      appStore: "https://apps.apple.com/tw/app/id1526431273",
    },
  },
};
