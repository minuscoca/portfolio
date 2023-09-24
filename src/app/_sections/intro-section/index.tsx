import { Section } from "../section";
import Image from "next/image";
import { Avatar } from "@/components/ui/avatar";

export function IntroSection() {
  return (
    <Section id="home" divider>
      <MyAvatar />
      <p className="text-lg">
        <b>Hi，我是王楷筌</b>，也可以叫我 Kevin。 我是一名<b>前端工程師</b>
        ，擅長使用 <i>React</i>、<i>React Native</i> 和 <i>Next.js</i>{" "}
        這些技術來開發<b>網頁和手機應用程式</b>。
      </p>
      <p className="text-lg">
        我熱愛編程，並且致力於不斷學習和提升自己的技術能力，以創造出更好的用戶體驗和功能豐富的應用程式。
        我期待能夠與您一同合作，共同打造出優秀的網頁或應用程式。
      </p>
    </Section>
  );
}

function MyAvatar() {
  return (
    <Avatar className="h-48 w-48 border border-border">
      <Image
        src="/portrait.jpg"
        alt="portrait"
        fill
        className="object-cover object-top"
      />
    </Avatar>
  );
}
