import { IntroSection } from "./_sections/intro-section";
import { AboutSection } from "./_sections/about-section";
import { StacksSection } from "./_sections/stacks-section";
import { ProjectsSection } from "./_sections/projects-section";
import { ExperienceSection } from "./_sections/experience-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-4 px-8 py-28 sm:px-16">
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      <StacksSection />
      <ExperienceSection />
    </main>
  );
}
