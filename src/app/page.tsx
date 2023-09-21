import { faker } from '@faker-js/faker'

import { Section } from '@/app/_sections/section'
import { HomeSection } from './_sections/home-section'
import { AboutSection } from './_sections/about-section'
import { StacksSection } from './_sections/stacks-section'
import { ProjectsSection } from './_sections/projects-section'
import { ExperienceSection } from './_sections/experience-section'
import { ContectSection } from './_sections/contact-section'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between gap-4 px-8 sm:px-16 py-28">
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <StacksSection />
      <ExperienceSection />
      <ContectSection />
    </main>
  )
}

