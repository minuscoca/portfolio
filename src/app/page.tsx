import { faker } from '@faker-js/faker'

import { Section } from '@/app/_sections/section'
import { StacksSection } from '@/app/_sections/stacks-section'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 sm:px-8 py-28">
      <div className="grid gap-4">
        <Section id='home' title='Home' divider>
          <p>{faker.lorem.paragraph()}</p>
          <p>{faker.lorem.paragraph()}</p>
          <p>{faker.lorem.paragraph()}</p>
          <p>{faker.lorem.paragraph()}</p>
        </Section>
        <Section id='about' title='About' divider>
          <p>{faker.lorem.paragraph()}</p>
          <p>{faker.lorem.paragraph()}</p>
          <p>{faker.lorem.paragraph()}</p>
          <p>{faker.lorem.paragraph()}</p>
        </Section>
        <Section id='projects' title='Projects' divider>
          <p>{faker.lorem.paragraph()}</p>
          <p>{faker.lorem.paragraph()}</p>
          <p>{faker.lorem.paragraph()}</p>
          <p>{faker.lorem.paragraph()}</p>
        </Section>
        <StacksSection />
        <Section id='experience' title='Experience' divider>
          <p>{faker.lorem.paragraph()}</p>
          <p>{faker.lorem.paragraph()}</p>
          <p>{faker.lorem.paragraph()}</p>
          <p>{faker.lorem.paragraph()}</p>
        </Section>
        <Section id='contact' title='Contect'>
          <p>{faker.lorem.paragraph()}</p>
          <p>{faker.lorem.paragraph()}</p>
          <p>{faker.lorem.paragraph()}</p>
          <p>{faker.lorem.paragraph()}</p>
        </Section>
      </div>
    </main>
  )
}

