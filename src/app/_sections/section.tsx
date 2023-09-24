import { cn } from "@/lib/utils";

export function Section({
  id,
  title,
  divider,
  children,
  className,
  fullwidth,
}: {
  id: string;
  title?: string;
  divider?: boolean;
  fullwidth?: boolean;
} & React.ComponentProps<"section">) {
  return (
    <>
      <section
        id={id}
        className={cn(
          "grid max-w-3xl scroll-mt-24 place-items-center gap-12 text-center sm:gap-8",
          className,
          { "w-full": fullwidth },
        )}
      >
        <h1 className="my-4 text-3xl">{title}</h1>
        {children}
      </section>
    </>
  );
}

export function SectionDivider() {
  return (
    <span className="m-8 h-16 w-1 justify-self-center rounded-full bg-border" />
  )
}