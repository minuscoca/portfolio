import { Section, SectionDivider } from "@/app/_sections/section";
import {
  Languages,
  Framworks,
  Server,
  UILibraries,
  StateManagements,
  TestLibraries,
} from "@/_data/stacks";
import { StacksComponent } from "./stacks";

export function StacksSection() {
  return (
    <Section id="skills" title="My Skills">
      <StacksComponent title="Languages" stacks={Object.values(Languages)} />
      <StacksComponent title="Framworks" stacks={Object.values(Framworks)} />
      <StacksComponent title="Server" stacks={Object.values(Server)} />
      <StacksComponent
        title="UI Libraries"
        stacks={Object.values(UILibraries)}
      />
      <StacksComponent
        title="State Managements"
        stacks={Object.values(StateManagements)}
      />
      <StacksComponent
        title="Test Libaries"
        stacks={Object.values(TestLibraries)}
      />
      <SectionDivider />
    </Section>
  );
}
