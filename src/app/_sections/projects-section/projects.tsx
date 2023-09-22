import { type Project } from "@/_data/projects";
import { type Stack } from "@/_data/stacks";
import { Badge } from "@/components/ui/badge";
import { AppStoreButton } from "./app-store-button";
import Image from 'next/image'

export function Project({ project }: { project: Project }) {
  return (
    <div className="grid w-full grid-cols-1 sm:grid-cols-2 rounded-xl overflow-hidden group cursor-pointer bg-rose-100 dark:bg-rose-800/60">
      <div id="project_detail" className="relative min-h-[10rem] flex flex-col px-4 group-even:order-last">
        <ProjectHeader project={project} />
        <ProjectDesc desc={project.desc} />
        <ProjectStacks stacks={project.stacks} />
      </div>
      <div className="relative aspect-square overflow-hidden">
        <ProjectImage project={project} />
      </div>
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

function ProjectHeader({ project }: { project: Project }) {
  return (
    <>
      <h1 className="text-3xl font-extrabold px-4 mt-4">{project.name}</h1>
      <AppStoreButton href={project.links?.appStore} />
      <span className="w-full h-[1px] rounded bg-foreground/30 mt-2" />
    </>
  )
}

function ProjectDesc({ desc }: { desc: string }) {
  return (
    <p className="flex-1 whitespace-pre-line text-start text-sm leading-6 p-4">{desc}</p>
  )
}

function ProjectImage({ project }: { project: Project }) {
  return (
    <div id="project_image" className="
      absolute w-full h-full rounded-xl overflow-hidden transition-all rotate
      right-4
      group-even:-right-4
      origin-top-left
      group-even:origin-top-right
      translate-y-4
      translate-x-4
      group-even:-translate-x-4
      group-hover:-rotate-1
      group-even:group-hover:rotate-1
      group-hover:translate-y-16
      group-hover:scale-110
    ">
      {project.images
        ? <Image
          alt={`${project.key}_sample_image`}
          src={project.images[0]}
          fill
          objectFit='cover'
          className='object-contain object-left'
        />
        : <div>Empty Image</div>}
    </div>
  )
}