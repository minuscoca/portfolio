import Image from 'next/image'
import { type Stack, Languages, Framworks, Server, UILibraries, StateManagements } from "@/_data/stacks"
import { ImageIcon } from "lucide-react"
import { cn } from '@/lib/utils'
import { faker } from '@faker-js/faker'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 sm:px-8 py-28">
      <div className="grid gap-4">
        <Section id='home' title='Home' divider>
          <p>{faker.lorem.paragraph()}</p>
          <p>{faker.lorem.paragraph()}</p>
          <p>{faker.lorem.paragraph()}</p>
          <p>{faker.lorem.paragraph()}</p>
        </Section>
        <Section id='about' title='About' divider>
          <p>{faker.lorem.paragraph()}</p>
          <p>{faker.lorem.paragraph()}</p>
          <p>{faker.lorem.paragraph()}</p>
          <p>{faker.lorem.paragraph()}</p>
        </Section>
        <Section id='projects' title='Projects' divider>
          <p>{faker.lorem.paragraph()}</p>
          <p>{faker.lorem.paragraph()}</p>
          <p>{faker.lorem.paragraph()}</p>
          <p>{faker.lorem.paragraph()}</p>
        </Section>
        <Section id='skills' title='My Skills' className='gap-12 sm:gap-8' divider>
          <StacksComponent title='Languages' stacks={Object.values(Languages)} />
          <StacksComponent title='Framworks' stacks={Object.values(Framworks)} />
          <StacksComponent title='Server' stacks={Object.values(Server)} />
          <StacksComponent title='UI Libraries' stacks={Object.values(UILibraries)} />
          <StacksComponent title='State Managements' stacks={Object.values(StateManagements)} />
        </Section>
        <Section id='experience' title='Experience' divider>
          <p>{faker.lorem.paragraph()}</p>
          <p>{faker.lorem.paragraph()}</p>
          <p>{faker.lorem.paragraph()}</p>
          <p>{faker.lorem.paragraph()}</p>
        </Section>
        <Section id='contact' title='Contect'>
          <p>{faker.lorem.paragraph()}</p>
          <p>{faker.lorem.paragraph()}</p>
          <p>{faker.lorem.paragraph()}</p>
          <p>{faker.lorem.paragraph()}</p>
        </Section>
      </div>
    </main>
  )
}

function StacksComponent({
  title,
  stacks,
}: {
  title: string
  stacks: Stack[]
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-1/2 sm:w-full">
      <h1 className="text-xl font-bold sm:justify-self-end">{title}</h1>
      <ul>
        {stacks.map(stack => <StackComponent key={stack.key} stack={stack} />)}
      </ul>
    </div>
  )
}

function StackComponent({
  stack
}: {
  stack: Stack
}) {
  const ICON_SIZE = 28
  const shouldShowBackground = stack.key === 'express' || stack.key === 'nextjs'
  return (
    <li key={stack.key} className="flex gap-3 items-center p-2">
      {
        stack.icon !== null
          ? (
            <div className={cn('grid place-items-center rounded w-7 h-7 overflow-hidden', { 'bg-white': shouldShowBackground, 'p-[2px]': shouldShowBackground })}>
              <Image alt={stack.key + '_img'} src={stack.icon} width={ICON_SIZE} height={ICON_SIZE} />
            </div>
          )
          : <ImageIcon width={ICON_SIZE} height={ICON_SIZE} className="text-slate-400" />
      }
      <p>{stack.name}</p>
    </li>
  )
}
function Section({
  id,
  title,
  divider,
  children,
  className,
}: {
  id: string
  title: string
  divider?: boolean
} & React.ComponentProps<'section'>) {
  return (
    <>
      <section id={id} className={cn('grid place-items-center text-center scroll-mt-20', className)}>
        <h1 className='text-3xl my-4'>{title}</h1>
        {children}
      </section>
      {divider && <span className='h-16 w-1 bg-border m-8 justify-self-center rounded-full' />}
    </>
  )
}