import { faker } from "@faker-js/faker";

import { Section } from "./section";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience" divider>
      <p>{faker.lorem.paragraph()}</p>
      <p>{faker.lorem.paragraph()}</p>
      <p>{faker.lorem.paragraph()}</p>
      <p>{faker.lorem.paragraph()}</p>
    </Section>
  );
}
