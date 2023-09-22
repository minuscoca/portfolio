import { type Project } from "@/_data/projects";
import { type Stack, type Framwork } from "@/_data/stacks";
import { Badge } from "@/components/ui/badge";
import { AppStoreButton } from "./app-store-button";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function Project({ project }: { project: Project }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group grid w-full cursor-pointer grid-cols-1 overflow-hidden rounded-xl bg-secondary sm:grid-cols-2 min-h-[30rem]">
          <div id="project_detail" className="relative flex flex-col px-4 sm:group-odd:order-last">
            <ProjectHeader project={project} />
            <ProjectDesc desc={project.desc} />
            <ProjectStacks stacks={project.stacks} />
          </div>
          <div className="relative aspect-square sm:aspect-auto">
            <ProjectImage project={project} />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-thin">
            {project.title}
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
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
  const image = project.images?.[0] ?? ''
  return (
    <Image
      alt={`${project.key}_sample_image`}
      src={image}
      fill
      className="
      object-cover
      object-left
      transition-all
      duration-300
      sm:rounded-2xl

      sm:-rotate-2
      sm:group-odd:rotate-2
      sm:group-hover:rotate-0

      sm:translate-x-4
      sm:group-odd:-translate-x-4
      sm:group-hover:translate-x-0

      sm:translate-y-8
      sm:group-hover:translate-y-0

      sm:scale-105
      sm:group-hover:scale-100
      sm:group-hover:rounded-none
      "
    />
  );
}
