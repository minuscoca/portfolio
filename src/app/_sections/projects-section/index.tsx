import { Data } from "@/_data/projects";
import { Section, SectionDivider } from "../section";
import { Project } from "./projects";

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects" fullwidth className="max-w-5xl">
      {Object.values(Data).map((project) => (
        <Project key={project.key} project={project} />
      ))}
      <SectionDivider />
    </Section>
  );
}
