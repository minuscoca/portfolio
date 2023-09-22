import { GraduationCap, Briefcase, type LucideIcon } from "lucide-react";

export type Timeline = {
  key: string;
  label: string;
  icon: LucideIcon;
  desc: string;
  start: string;
  end: string;
};
export const Data: Timeline[] = [
  {
    key: "0",
    label: "畢業於淡江大學",
    icon: GraduationCap,
    desc: "",
    start: "",
    end: "2017",
  },
  {
    key: "1",
    label: "任職於長榮國際",
    icon: Briefcase,
    desc: "資歷近三年",
    start: "2017/07",
    end: "2020/01",
  },
  {
    key: "2",
    label: "任職於點單(DimOrder)",
    icon: Briefcase,
    desc: "點單主要提供餐飲相關的各服務項應用程式，目前擔任資深前端工程師",
    start: "2020/1",
    end: "至今",
  },
];
