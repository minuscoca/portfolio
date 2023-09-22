import { Data } from "@/_data/projects";
import { Section } from "../section";
import { Project } from "./projects";

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Projects"
      divider
      fullwidth
      className="max-w-5xl"
    >
      {Object.values(Data).map((project) => (
        <Project key={project.key} project={project} />
      ))}
    </Section>
  );
}
