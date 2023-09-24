"use client";

import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Download,
  Gitlab,
  Linkedin,
  CakeSlice,
} from "lucide-react";
import { Button, ButtonProps } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export function ContactButton() {
  const router = useRouter();

  return (
    <PillButton onClick={() => router.replace("/#contact")}>
      Contact me here
      <ArrowRight className="ml-1" size={20} />
    </PillButton>
  );
}

export function CVDownloadButton() {
  return (
    <PillButton variant="outline">
      Download CV
      <Download className="ml-2" size={20} />
    </PillButton>
  );
}

export function LinkedinButton() {
  return (
    <IconButton
      tooltip="Linkedin"
      onClick={() => console.log("got to Linkedin")}
    >
      <Linkedin className="stroke-sky-500 dark:stroke-sky-400" />
    </IconButton>
  );
}

export function CakeresumeButton() {
  return (
    <IconButton
      tooltip="Cakeresume"
      onClick={() => openUrl('https://www.cakeresume.com/me/minuscoca')}
    >
      <CakeSlice className="stroke-emerald-500 dark:stroke-emerald-400" />
    </IconButton>
  );
}

export function GitlabButton() {
  return (
    <IconButton tooltip="Gitlab" onClick={() => openUrl('https://gitlab.com/Minacoca')}>
      <Gitlab className="stroke-orange-500 dark:stroke-orange-400" />
    </IconButton>
  );
}

function openUrl(url: string) {
  window.open(url, '_blank')
}

function PillButton({ children, className, ...props }: ButtonProps) {
  return (
    <Button
      className={cn(
        "h-12 rounded-full px-6 text-2xl active:opacity-25",
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

function IconButton({
  tooltip,
  children,
  className,
  ...props
}: {
  tooltip: string;
} & ButtonProps) {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "h-12 w-12 rounded-full active:opacity-25",
              className,
            )}
            {...props}
          >
            {children}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
