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
              <ProjectImages project={project} />
            </div>
          </div>
        </DialogTrigger>
      </FadeInContainer>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-thin">{project.title}</DialogTitle>
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

function ProjectImages({ project }: { project: Project }) {
  return project.images?.map((image, index) => (
    <ProjectImage
      key={project.key}
      image={image}
      project={project}
      index={index}
    />
  ));
}

function ProjectImage({
  image,
  project,
  index,
}: {
  image: string;
  project: Project;
  index: number;
}) {
  const zIndex = 4 - index;
  if (index > 3) return null;
  return (
    <Image
      src={image}
      alt={`${project.key}_sample_image`}
      fill
      style={{ zIndex }}
      className={cn(
        `
        sm:group-hover:scale-{96}
        origin-bottom
        object-cover
        object-left 
        opacity-0
        transition-all 
        duration-300
        group-hover:scale-90
        group-hover:rounded-xl
        group-hover:opacity-100
        sm:origin-bottom-right
        sm:translate-x-4
        sm:translate-y-8
        sm:rotate-2
        sm:scale-95
        sm:rounded-2xl
        sm:group-odd:-translate-x-4
        sm:group-odd:-rotate-2
        sm:group-even:origin-bottom-left
        sm:group-hover:translate-x-0
        sm:group-hover:translate-y-0
      `,
        {
          "opacity-100": index === 0,
          "sm:group-hover:-rotate-4": index === 0,
          "sm:group-hover:-rotate-0": index === 1,
          "sm:group-hover:rotate-4": index === 2,
          "sm:group-hover:rotate-8": index === 3,
          "sm:group-odd:group-hover:rotate-4": index === 0,
          "sm:group-odd:group-hover:rotate-0": index === 1,
          "sm:group-odd:group-hover:-rotate-4": index === 2,
          "sm:group-odd:group-hover:-rotate-8": index === 3,
          "group-hover:translate-y-12 group-hover:-rotate-4": index === 0,
          "group-hover:translate-y-8 group-hover:rotate-0": index === 1,
          "group-hover:translate-y-4 group-hover:rotate-4": index === 2,
          "group-hover:translate-y-0 group-hover:rotate-8": index === 3,
        },
      )}
    />
  );
}

// sm:-rotate-2
// sm:group-odd:rotate-2
// sm:group-hover:rotate-0
