import { Section, SectionDivider } from "../section";
import { FadeInContainer } from "@/components/transition/fade-in-container";

export function AboutSection() {
  return (
    <FadeInContainer>
      <Section id="about" title="About" className="max-w-xl">
        <p className="whitespace-pre-line">
          {`現任點單 (Dimorder) 資深前端工程師，有近四年的前端工作經驗，目前正在積極尋找一個全職的前端工程師職位

          工作內容為前端專案的開發，主要使用的技術為 React、React Native、Typescript。我會寫 Next.js，並且持續學習其他前端框架。除了前端開發，我還曾經撰寫過 Node.js/Express 後端伺服器並且有串接第三方API的經驗
          `}
        </p>
        <SectionDivider />
      </Section>
    </FadeInContainer>
  );
}
