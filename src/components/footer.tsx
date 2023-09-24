import { VisitProjectButton } from "@/app/_sections/intro-section/buttons";

export function Footer() {
  return (
    <footer className="mb-10 pt-6 text-center border-t-1 border-border flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-4">
      <div className="flex justify-center items-center gap-2">
        <VisitProjectButton />
        <span className="font-semibold text-sm">About this website:</span>
      </div>
      <p className="text-sm">
        built with React & Next.js (App Router), TypeScript, Tailwind CSS,
        Framer Motion, Vercel hosting.
      </p>
    </footer>
  );
}
