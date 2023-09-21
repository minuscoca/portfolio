import { faker } from '@faker-js/faker'

import { Section } from './section'

export function HomeSection() {
  return (
    <Section id='home' title='Home' divider>
      <p>{faker.lorem.paragraph()}</p>
      <p>{faker.lorem.paragraph()}</p>
      <p>{faker.lorem.paragraph()}</p>
      <p>{faker.lorem.paragraph()}</p>
    </Section>
  )
}