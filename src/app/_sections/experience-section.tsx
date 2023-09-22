import { Section } from "./section";
import { cn } from "@/lib/utils";
import { Data, type Timeline } from "@/_data/timeline";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      title="Experience"
      divider
      fullwidth
      className="max-w-5xl"
    >
      <Timeline data={Data} />
    </Section>
  );
}

function Timeline({ data }: { data: Timeline[] }) {
  return (
    <ul className="flex flex-col gap-4 w-full">
      {data.map((timeline, index) => <TimelineItem key={timeline.key} data={timeline} hasNextItem={index !== data.length - 1} />)}
    </ul>
  )
}

function TimelineItem({
  data,
  hasNextItem,
}: {
  data: Timeline,
  hasNextItem: boolean
} & React.ComponentProps<'div'>) {
  const IconComponent = data.icon
  return (
    <div className='group flex gap-4 sm:even:flex-row-reverse text-start'>
      <div className="hidden sm:block sm:flex-1 text-right group-even:text-left py-2">
        <TimelineDuration data={data} />
      </div>
      <div className="flex flex-col items-center gap-4">
        <IconComponent className="p-2 border border-foreground rounded-full w-10 h-10 flex-shrink-0" />
        <TimelineDivider hasNextItem={hasNextItem} />
      </div>
      <div className="flex flex-1 flex-col bg-secondary rounded-xl py-4 gap-2">
        <h1 className="text-lg px-6">
          {data.label}
        </h1>
        <p className="px-6">
          {data.desc}
        </p>
        <TimelineDuration data={data} className="sm:hidden px-6" />
      </div>
    </div>
  )
}

function TimelineDuration({
  data,
  className
}: {
  data: Timeline
} & React.ComponentProps<'span'>) {
  return (
    <span className={cn(className)}>
      {data.start}
      {data.start && ' - '}
      {data.end}
    </span>
  )
}

function TimelineDivider({ hasNextItem }: { hasNextItem: boolean }) {
  return (
    <span className={cn("w-1 flex-1 border-r-[2px] border-foreground rounded-full min-h-[5rem]", { 'border-dashed': !hasNextItem })} />
  )
}

