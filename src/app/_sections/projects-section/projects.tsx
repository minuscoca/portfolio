import { type Project } from "@/_data/projects";
import { type Stack, type Framwork } from "@/_data/stacks";
import { Badge } from "@/components/ui/badge";
import { AppStoreButton } from "./app-store-button";
import Image from "next/image";

export function Project({ project }: { project: Project }) {
  return (
    <div className="group grid w-full cursor-pointer grid-cols-1 overflow-hidden rounded-xl bg-rose-100 dark:bg-rose-800/50 sm:grid-cols-2">
      <div
        id="project_detail"
        className="relative flex min-h-[10rem] flex-col px-4 sm:group-even:order-last"
      >
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
    <ul className="flex w-full flex-wrap justify-start p-4">
      {stacks.map((stack) => (
        <Badge
          key={stack.key}
          className="mx-2 my-1 min-w-[5rem] cursor-pointer rounded-full bg-slate-700 px-4 py-1 active:opacity-25 dark:bg-slate-100"
        >
          <span className="w-full">{stack.name}</span>
        </Badge>
      ))}
    </ul>
  );
}

function ProjectFramworkIcon({ stacks }: { stacks: Stack[] }) {
  const fromwork = stacks.find(stack => stack.key === 'react' || stack.key === 'react-native')
  if (!fromwork?.icon) return null
  return (
    <Image
      alt='framwork_icon'
      src={fromwork.icon}
      width={24}
      height={24}
    />
  )
}

function ProjectHeader({ project }: { project: Project }) {
  return (
    <>
      <div className="flex mt-4 px-4 gap-4 justify-center">
        <ProjectFramworkIcon stacks={project.stacks} />
        <h1 className="text-3xl font-extrabold">
          {project.name}
        </h1>
      </div>
      <AppStoreButton href={project.links?.appStore} />
      <span className="mt-2 h-[1px] w-full rounded bg-foreground/30" />
    </>
  );
}

function ProjectDesc({ desc }: { desc: string }) {
  return (
    <p className="flex-1 whitespace-pre-line p-4 text-start text-sm leading-6">
      {desc}
    </p>
  );
}

function ProjectImage({ project }: { project: Project }) {
  return (
    <div
      id="project_image"
      className="
      rotate absolute right-4 h-full w-full origin-top-left translate-x-4
      translate-y-4
      overflow-hidden
      sm:rounded-xl
      transition-all
      group-even:-right-4
      group-even:origin-top-right
      group-even:-translate-x-4
      group-hover:translate-y-16
      group-hover:-rotate-1
      group-hover:scale-110
      group-even:group-hover:rotate-1
    "
    >
      {project.images ? (
        <Image
          alt={`${project.key}_sample_image`}
          src={project.images[0]}
          fill
          objectFit="cover"
          className="object-contain object-left"
        />
      ) : (
        <div>Empty Image</div>
      )}
    </div>
  );
}
