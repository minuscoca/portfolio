import { Section } from "./section";

export function AboutSection() {
  return (
    <Section id="about" title="About" divider>
      <p>
        目前，我擁有近 4
        年的前端開發工作經驗，並且擔任著資深前端工程師的職位，這段時間我一直在一家名為點單
        (Dimorder) 的公司工作。
        我最喜歡程式設計的部分是解決問題的過程。我喜愛那種終於找到解決方案的感覺，它讓我充滿滿足感。
      </p>
      <p>
        我的程式語言技能包括使用 Typescript 來編寫程式碼。我主要負責React
        前端專案的開發，這包括點餐前端、營運後台、店家後台、營運報表等四個應用程式。
        此外，我也參與了 React Native 前端專案的開發，包括 POS 機、外送員
        App、店家金流 App 等三款應用程式。 我還會使用
        Next.js，並且持續學習其他前端框架，我總是渴望學習新的技術。
      </p>
      <p>
        除了前端開發，我還曾經撰寫過 Node.js/Express
        後端伺服器並且有串接第三方API的經驗。
        目前，我正在積極尋找一個全職的軟體開發職位，因為我對不斷學習和挑戰自己充滿熱情。
        我期待著能夠為一家優秀的軟體開發團隊做出貢獻。
      </p>
    </Section>
  );
}
