import { type Project } from "@/_data/projects";
import { type Stack } from "@/_data/stacks";
import { Badge } from "@/components/ui/badge";
import { AppStoreButton } from "./app-store-button";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { FadeInContainer } from "@/components/transition/fade-in-container";
import { Carousel } from "@/components/carousel";

export function Project({ project }: { project: Project }) {
  return (
    <Dialog>
      <FadeInContainer className="w-full">
        <DialogTrigger asChild>
          <div className="group grid min-h-[30rem] w-full cursor-pointer grid-cols-1 overflow-hidden rounded-xl bg-secondary sm:grid-cols-2">
            <div
              id="project_detail"
              className="relative flex flex-col px-4 sm:group-odd:order-last"
            >
              <ProjectHeader project={project} />
              <ProjectDesc desc={project.desc} />
              <ProjectStacks stacks={project.stacks} />
            </div>
            <div className="relative aspect-square sm:aspect-auto">
              <ProjectImage image={project.images[0]} project={project} />
            </div>
          </div>
        </DialogTrigger>
      </FadeInContainer>
      <DialogContent className="w-screen h-screen p-0 max-w-[initial] flex flex-col items-center justify-center">
        <DialogHeader className="p-4">
          <DialogTitle className="font-thin px-8">{project.title}</DialogTitle>
        </DialogHeader>
        <Carousel data={project.images} />
      </DialogContent>
    </Dialog>
  );
}

function ProjectStacks({ stacks }: { stacks: Stack[] }) {
  return (
    <ul className="flex w-full flex-wrap justify-end p-2">
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
  const fromwork = stacks.find(
    (stack) => stack.key === "react" || stack.key === "react-native",
  );
  if (!fromwork?.icon) return null;
  return (
    <Image alt="framwork_icon" src={fromwork.icon} width={24} height={24} />
  );
}

function ProjectHeader({ project }: { project: Project }) {
  return (
    <>
      <div className="mt-4 flex justify-center gap-4 px-4">
        <ProjectFramworkIcon stacks={project.stacks} />
        <h1 className="text-3xl font-extrabold">{project.name}</h1>
      </div>
      <AppStoreButton href={project.links?.appStore} />
      <span className="m-2 h-[1px] w-full rounded bg-foreground/30" />
    </>
  );
}

function ProjectDesc({ desc }: { desc: string }) {
  return (
    <p className="flex-1 whitespace-pre-line p-2 text-start text-sm leading-6">
      {desc}
    </p>
  );
}


function ProjectImage({
  image,
}: {
  image: string;
}) {
  return (
    <Image
      src={image}
      alt='project_sample_image'
      fill
      className="object-cover object-left"
    />
  );
}