import { VisitProjectButton } from "@/app/_sections/intro-section/buttons";

export function Footer() {
  return (
    <footer className="mb-10 flex flex-col items-center justify-center gap-1 border-t-1 border-border pt-6 text-center sm:flex-row sm:gap-4">
      <div className="flex items-center justify-center gap-2">
        <VisitProjectButton />
        <span className="text-sm font-semibold">About this website:</span>
      </div>
      <p className="text-sm">
        built with React & Next.js (App Router), TypeScript, Tailwind CSS,
        Framer Motion, Vercel hosting.
      </p>
    </footer>
  );
}
