import { faker } from '@faker-js/faker'

import { Section } from './section'

export function ContectSection() {
  return (
    <Section id='contact' title='Contect'>
      <p>{faker.lorem.paragraph()}</p>
      <p>{faker.lorem.paragraph()}</p>
      <p>{faker.lorem.paragraph()}</p>
      <p>{faker.lorem.paragraph()}</p>
    </Section>
  )
}