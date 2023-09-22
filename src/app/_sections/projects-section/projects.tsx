import { type Project } from "@/_data/projects";
import { type Stack } from "@/_data/stacks";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image'

export function Project({ project }: { project: Project }) {
  return (
    <div className="grid w-full grid-cols-1 sm:grid-cols-2 rounded-xl overflow-hidden group cursor-pointer">
      <div id="project_detail" className="min-h-[10rem] flex flex-col bg-rose-100 dark:bg-rose-800/75 px-4">
        <ProjectName name={project.name} />
        <ProjectDesc desc={project.desc} />
        <ProjectStacks stacks={project.stacks} />
      </div>
      <ProjectImage project={project} />
    </div>
  );
}

function ProjectStacks({ stacks }: { stacks: Stack[] }) {
  return (
    <ul className="flex justify-center w-full p-4 flex-wrap">
      {stacks.map((stack) => (
        <Badge
          key={stack.key}
          className="cursor-pointer rounded-full active:opacity-25 min-w-[5rem] mx-2 my-1"
        >
          <span className="w-full">{stack.name}</span>
        </Badge>
      ))}
    </ul>
  );
}

function ProjectName({ name }: { name: string }) {
  return (
    <>
      <h1 className="text-3xl font-extrabold p-4">{name}</h1>
      <span className="w-full h-[1px] rounded bg-foreground/30" />
    </>
  )
}

function ProjectDesc({ desc }: { desc: string }) {
  return (
    <>
      <p className="flex-1 whitespace-pre-line text-start text-sm leading-6 p-4">{desc}</p>
    </>
  )
}

function ProjectImage({ project }: { project: Project }) {
  return (
    <div id="project_image" className="relative bg-secondary aspect-square">
      <div className="relative w-full h-full overflow-hidden transition-all group-hover:scale-110">
        {project.images
          ? <Image
            alt={`${project.key}_image`}
            src={project.images[0]}
            fill
          />
          : <div>Empty Image</div>}
      </div>
    </div>
  )
}