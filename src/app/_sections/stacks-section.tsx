import Image from 'next/image'
import { ImageIcon } from "lucide-react"
import { cn } from '@/lib/utils'

import { Section } from '@/app/_sections/section'
import { type Stack, Languages, Framworks, Server, UILibraries, StateManagements } from "@/_data/stacks"

export function StacksSection() {
  return (
    <Section id='skills' title='My Skills' className='gap-12 sm:gap-8' divider>
      <StacksComponent title='Languages' stacks={Object.values(Languages)} />
      <StacksComponent title='Framworks' stacks={Object.values(Framworks)} />
      <StacksComponent title='Server' stacks={Object.values(Server)} />
      <StacksComponent title='UI Libraries' stacks={Object.values(UILibraries)} />
      <StacksComponent title='State Managements' stacks={Object.values(StateManagements)} />
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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-1/2 sm:w-full">
      <h1 className="text-xl font-bold sm:justify-self-end">{title}</h1>
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
  const ICON_SIZE = 28
  const shouldShowBackground = stack.key === 'express' || stack.key === 'nextjs'
  return (
    <li key={stack.key} className="flex gap-3 items-center p-2">
      {
        stack.icon !== null
          ? (
            <div className={cn(`grid place-items-center rounded w-[${ICON_SIZE}px] h-[${ICON_SIZE}px] overflow-hidden`, { 'bg-white': shouldShowBackground, 'p-[2px]': shouldShowBackground })}>
              <Image alt={stack.key + '_img'} src={stack.icon} width={ICON_SIZE} height={ICON_SIZE} />
            </div>
          )
          : <ImageIcon width={ICON_SIZE} height={ICON_SIZE} className="text-slate-400" />
      }
      <p>{stack.name}</p>
    </li>
  )
}