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
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FadeInContainer } from "@/components/transition/fade-in-container";
import { Carousel } from "@/components/carousel";
import { GalleryHorizontalEnd } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Project({ project }: { project: Project }) {
  return (
    <div id={`project_${project.key}`} className="scroll-mt-24"    >
      <Dialog>
        <FadeInContainer className="w-full">
          <div className="grid min-h-[30rem] w-full cursor-pointer grid-cols-1 overflow-hidden rounded-xl bg-secondary sm:grid-cols-2"          >
            <DialogTrigger asChild>
              <div className="relative aspect-square sm:aspect-auto overflow-hidden group">
                <ProjectImage image={project.images[0]} />
                <ProjectDetailButton />
              </div>
            </DialogTrigger>
            <div
              id="project_detail"
              className="relative flex flex-col px-4"
            >
              <ProjectHeader project={project} />
              <ProjectDesc desc={project.desc} />
              <ProjectStacks stacks={project.stacks} />
            </div>
          </div>
        </FadeInContainer>
        <DialogContent className="w-screen h-screen p-0 max-w-[initial] flex flex-col items-center justify-center">
          <DialogHeader className="p-4">
            <DialogTitle className="font-thin px-8 text-center">{project.title}</DialogTitle>
            <DialogDescription className="text-center">{project.subtitle}</DialogDescription>
          </DialogHeader>
          <Carousel data={project.images} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

function ProjectStacks({ stacks }: { stacks: Stack[] }) {
  return (
    <ul className="flex w-full flex-wrap justify-start px-2 mb-4">
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
      className="object-cover object-center transition-all duration-300 origin-top-left group-hover:scale-105"
    />
  );
}
function ProjectDetailButton() {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='secondary' size='icon' className="absolute left-0 bottom-0 m-2 p-2 rounded-full w-14 h-14 bg-slate-600 hover:opacity-90 active:opacity-80">
            <GalleryHorizontalEnd size={32} className="stroke-slate-100" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>查看更多圖片</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}