import { VisitProjectButton } from "@/app/_sections/intro-section/buttons";

export function Footer() {
  return (
    <footer className="mb-10 pt-6 text-center border-t-1 border-border flex justify-center items-center gap-4">
      <span className="font-semibold text-sm">About this website:</span>
      <p className="text-sm">
        built with React & Next.js (App Router), TypeScript, Tailwind CSS,
        Framer Motion, Vercel hosting.
      </p>
      <VisitProjectButton />
    </footer>
  );
}
