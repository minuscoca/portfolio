import { type Project } from "@/_data/projects";
import { type Stack } from "@/_data/stacks";
import { Badge } from "@/components/ui/badge";

export function Project({ project }: { project: Project }) {
  return (
    <div className="grid w-full grid-cols-1 sm:grid-cols-2">
      <div id="project_detail" className="aspect-square bg-rose-500">
        <h1>{project.name}</h1>
        <ProjectStacks stacks={project.stacks} />
      </div>
      <div id="project_image" className="aspect-square bg-secondary">
        <div>Images</div>
      </div>
    </div>
  );
}

function ProjectStacks({ stacks }: { stacks: Stack[] }) {
  return (
    <ul className="grid grid-cols-3 gap-4">
      {stacks.map((stack) => (
        <Badge
          key={stack.key}
          className="cursor-pointer rounded-full active:opacity-25"
        >
          <span className="w-full">{stack.name}</span>
        </Badge>
      ))}
    </ul>
  );
}
