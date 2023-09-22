import { ThemeToggle } from "@/components/theme/theme-toggle";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-center sm:left-0 sm:right-0 sm:p-4">
      <nav className="flex w-full flex-wrap items-center justify-center border border-border bg-background/40 px-8 py-2 backdrop-blur-lg sm:w-fit sm:rounded-full">
        <Link className="px-2 py-1" replace href="/#home">
          Home
        </Link>
        <Link className="px-2 py-1" replace href="/#about">
          About
        </Link>
        <Link className="px-2 py-1" replace href="/#projects">
          Projects
        </Link>
        <Link className="px-2 py-1" replace href="/#skills">
          Skills
        </Link>
        <Link className="px-2 py-1" replace href="/#experience">
          Experience
        </Link>
        <Link className="px-2 py-1" replace href="/#contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}
