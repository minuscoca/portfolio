import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { type Stack } from "@/_data/stacks";

export function StacksComponent({
  title,
  stacks,
}: {
  title: string;
  stacks: Stack[];
}) {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
      <h1 className="justify-self-start text-xl font-bold sm:justify-self-end">
        {title}
      </h1>
      <ul>
        {stacks.map((stack) => (
          <StackComponent key={stack.key} stack={stack} />
        ))}
      </ul>
    </div>
  );
}

export function StackComponent({ stack }: { stack: Stack }) {
  return (
    <li key={stack.key} className="flex items-center gap-3 p-2">
      <StackIcon stack={stack} />
      <p>{stack.name}</p>
    </li>
  );
}

function StackIcon({ stack }: { stack: Stack }) {
  if (!stack.emoji && !stack.icon)
    return <ImageIcon width={28} height={28} className="text-slate-400" />;
  if (stack.emoji)
    return (
      <IconContainer>
        <span className="text-2xl">{stack.emoji}</span>
      </IconContainer>
    );
  if (stack.icon)
    return (
      <IconContainer
        showBg={
          stack.key === "express" ||
          stack.key === "nextjs" ||
          stack.key === "shadcn-ui"
        }
      >
        <Image
          alt={stack.key + "_img"}
          src={stack.icon}
          width={28}
          height={28}
        />
      </IconContainer>
    );
}

function IconContainer({
  children,
  showBg = false,
}: {
  showBg?: boolean;
} & React.ComponentProps<"div">) {
  return (
    <div
      className={cn(`grid h-7 w-7 place-items-center overflow-hidden rounded`, {
        "bg-white": showBg,
        "p-[2px]": showBg,
      })}
    >
      {children}
    </div>
  );
}
