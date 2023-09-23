import { GraduationCap, Briefcase, type LucideIcon } from "lucide-react";
import { type Project, Data as Projects } from "./projects";

export type Timeline = {
  key: string;
  label: string;
  icon: LucideIcon;
  desc: string;
  start: string;
  end: string;
  projects: Project[];
};
export const Data: Timeline[] = [
  {
    key: "0",
    label: "畢業於淡江大學",
    icon: GraduationCap,
    desc: "",
    start: "",
    end: "2017",
    projects: [],
  },
  {
    key: "1",
    label: "任職於長榮國際股份有限公司",
    icon: Briefcase,
    desc: "資歷近三年",
    start: "2017/07",
    end: "2020/01",
    projects: [],
  },
  {
    key: "2",
    label: "任職於刻一有限公司",
    icon: Briefcase,
    desc: "刻一是一間接案公司，我的職位為前端工程師。工作內容為根據業主的需求完成網頁或 App 的 UI，期間有用 React 寫過一些比較小的網站，例如積分兌換活動等。另外也是在這時候接觸到 React Native，並協助完成了一個虛擬貨幣借貸機器人 App Nicelend。",
    start: "2020/01",
    end: "2020/12",
    projects: [Projects.nicelend],
  },
  {
    key: "3",
    label: "任職於點單(DimOrder)",
    icon: Briefcase,
    desc: "點單主要提供餐飲相關的各服務項應用程式，",
    start: "2020/9",
    end: "至今",
    projects: [Projects.dim_pos, Projects.dim_order, Projects.dim_rider, Projects.dim_admin, Projects.dim_pay],
  },
];
