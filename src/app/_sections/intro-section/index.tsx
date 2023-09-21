import { faker } from '@faker-js/faker'

import { Section } from '../section'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { CakeresumeButton, ContactButton, CVDownloadButton, GitlabButton, LinkedinButton } from './buttons'

export function IntroSection() {
  return (
    <Section id='home' title='Home' divider>
      <MyAvatar />
      <p>
        <b>Hi，我是王楷筌</b>，也可以叫我 Kevin。
        我是一名<b>前端工程師</b>，擅長使用 <i>React</i>、<i>React Native</i> 和 <i>Next.js</i> 這些技術來開發<b>網頁和手機應用程式</b>。
      </p>
      <p>
        我熱愛編程，並且致力於不斷學習和提升自己的技術能力，以創造出更好的用戶體驗和功能豐富的應用程式。
        我期待能夠與您一同合作，共同打造出優秀的網頁或應用程式。
      </p>

      <div className='grid gap-4'>
        <div className='grid gap-4 sm:grid-cols-2'>
          <ContactButton />
          <CVDownloadButton />
        </div>
        <div className='flex justify-center gap-4 z'>
          <LinkedinButton />
          <CakeresumeButton />
          <GitlabButton />
        </div>
      </div>
    </Section>
  )
}

function MyAvatar() {
  return (
    <Avatar className='w-20 h-20 border border-border'>
      <AvatarImage src={faker.image.avatar()} alt='Kevin portrait' />
      <AvatarFallback>KC</AvatarFallback>
    </Avatar>
  )
}