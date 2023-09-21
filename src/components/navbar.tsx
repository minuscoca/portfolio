import { ThemeToggle } from '@/components/theme/theme-toggle'
import Link from 'next/link'

export function Navbar() {
  return (
    <header className='fixed top-0 z-50 sm:left-0 sm:right-0 flex items-center justify-center w-full sm:p-4'>
      <nav className='flex items-center justify-center flex-wrap bg-background/40 border border-border backdrop-blur-lg sm:rounded-full w-full sm:w-fit px-8 py-2'>
        <Link className='px-2 py-1' replace href='/#home'>Home</Link>
        <Link className='px-2 py-1' replace href='/#about'>About</Link>
        <Link className='px-2 py-1' replace href='/#projects'>Projects</Link>
        <Link className='px-2 py-1' replace href='/#skills'>Skills</Link>
        <Link className='px-2 py-1' replace href='/#experience'>Experience</Link>
        <Link className='px-2 py-1' replace href='/#contact'>Contact</Link>
      </nav>
    </header>
  )
}