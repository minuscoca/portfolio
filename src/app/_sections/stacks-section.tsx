import Image from 'next/image'
import { ImageIcon } from "lucide-react"
import { cn } from '@/lib/utils'

import { Section } from '@/app/_sections/section'
import { type Stack, Languages, Framworks, Server, UILibraries, StateManagements, TestLibraries } from "@/_data/stacks"

export function StacksSection() {
  return (
    <Section id='skills' title='My Skills' divider>
      <StacksComponent title='Languages' stacks={Object.values(Languages)} />
      <StacksComponent title='Framworks' stacks={Object.values(Framworks)} />
      <StacksComponent title='Server' stacks={Object.values(Server)} />
      <StacksComponent title='UI Libraries' stacks={Object.values(UILibraries)} />
      <StacksComponent title='State Managements' stacks={Object.values(StateManagements)} />
      <StacksComponent title='Test Libaries' stacks={Object.values(TestLibraries)} />
    </Section>
  )
}

export function StacksComponent({
  title,
  stacks,
}: {
  title: string
  stacks: Stack[]
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-full">
      <h1 className="text-xl font-bold justify-self-start sm:justify-self-end">{title}</h1>
      <ul>
        {stacks.map(stack => <StackComponent key={stack.key} stack={stack} />)}
      </ul>
    </div>
  )
}

export function StackComponent({
  stack
}: {
  stack: Stack
}) {
  return (
    <li key={stack.key} className="flex gap-3 items-center p-2">
      <StackIcon stack={stack} />
      <p>{stack.name}</p>
    </li>
  )
}

function StackIcon({
  stack
}: {
  stack: Stack
}) {
  if (!stack.emoji && !stack.icon) return <ImageIcon width={28} height={28} className="text-slate-400" />
  if (stack.emoji) return (
    <IconContainer>
      <span className='text-2xl'>{stack.emoji}</span>
    </IconContainer>
  )
  if (stack.icon) return (
    <IconContainer showBg={stack.key === 'express' || stack.key === 'nextjs'}>
      <Image alt={stack.key + '_img'} src={stack.icon} width={28} height={28} />
    </IconContainer>
  )
}

function IconContainer({
  children,
  showBg = false,
}: {
  showBg?: boolean
} & React.ComponentProps<'div'>) {
  return (
    <div className={cn(`grid place-items-center rounded w-7 h-7 overflow-hidden`, { 'bg-white': showBg, 'p-[2px]': showBg })}>
      {children}
    </div>
  )
}