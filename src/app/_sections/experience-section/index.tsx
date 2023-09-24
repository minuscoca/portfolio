import { Section } from "../section";
import { cn } from "@/lib/utils";
import { Data, type Timeline } from "@/_data/timeline";
import { FadeInContainer } from "@/components/transition/fade-in-container";
import { TimelineProjects } from "./timeline-projects";

export function ExperienceSection() {
  return (
    <FadeInContainer>
      <Section
        id="experience"
        title="Experience"
        fullwidth
        className="max-w-5xl"
      >
        <Timeline data={Data} />
      </Section>
    </FadeInContainer>
  );
}

function Timeline({ data }: { data: Timeline[] }) {
  return (
    <ul className="flex w-full flex-col-reverse gap-4">
      {data.map((timeline, index) => (
        <TimelineItem
          key={timeline.key}
          data={timeline}
          hasNextItem={index !== data.length - 1}
        />
      ))}
    </ul>
  );
}

function TimelineItem({
  data,
  hasNextItem,
}: {
  data: Timeline;
  hasNextItem: boolean;
} & React.ComponentProps<"div">) {
  const IconComponent = data.icon;
  return (
    <div className="group flex gap-4 text-start sm:even:flex-row-reverse">
      <div className="hidden py-2 text-right group-even:text-left sm:block sm:flex-1"></div>
      <div className="flex flex-col items-center gap-4">
        <TimelineDivider hasNextItem={hasNextItem} />
        <IconComponent className="h-10 w-10 flex-shrink-0 rounded-full border border-foreground p-2" />
      </div>
      <div className="flex flex-1 flex-col gap-2 rounded-xl bg-secondary py-4">
        <h1 className="px-6 text-xl">{data.title}</h1>
        <TimelineDuration data={data} />
        <p className="whitespace-pre-line px-6 py-2 text-secondary-foreground">
          {data.desc}
        </p>
        <TimelineProjects data={data.projects} />
      </div>
    </div>
  );
}

function TimelineDuration({
  data,
  className,
}: { data: Timeline } & React.ComponentProps<"span">) {
  return (
    <span className={cn("px-6 text-muted-foreground", className)}>
      {data.start}
      {data.start && " - "}
      {data.end}
    </span>
  );
}

function TimelineDivider({ hasNextItem }: { hasNextItem: boolean }) {
  return (
    <span
      className={cn(
        "min-h-[5rem] w-1 flex-1 rounded-full border-r-[2px] border-foreground",
        { "border-dashed": !hasNextItem },
      )}
    />
  );
}
