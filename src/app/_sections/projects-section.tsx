import { faker } from '@faker-js/faker'

import { Section } from './section'

export function ProjectsSection() {
  return (
    <Section id='projects' title='Projects' divider>
      <p>{faker.lorem.paragraph()}</p>
      <p>{faker.lorem.paragraph()}</p>
      <p>{faker.lorem.paragraph()}</p>
      <p>{faker.lorem.paragraph()}</p>
    </Section>
  )
}