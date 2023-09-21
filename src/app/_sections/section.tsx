import { cn } from '@/lib/utils'

export function Section({
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
      <section id={id} className={cn('grid place-items-center text-center scroll-mt-24 gap-12 sm:gap-8 max-w-3xl', className)}>
        <h1 className='text-3xl my-4'>{title}</h1>
        {children}
      </section>
      {divider && <span className='h-16 w-1 bg-border m-8 justify-self-center rounded-full' />}
    </>
  )
}