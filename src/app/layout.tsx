import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { Navbar } from '@/components/navbar'
import { ThemeToggle } from '@/components/theme/theme-toggle'

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kevin | Personal Portfolio',
  description: 'Kevin is a react developer with 4 years of experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${font.className} relative -z-50 transition-colors duration-300 ease-in-out`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <LeftBackgroundDecorator />
          <RightBackgroundDecorator />
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}

function LeftBackgroundDecorator() {
  return <div className='w-3/6 h-[24rem] bg-rose-200 rounded-[8rem] opacity-40 blur-3xl absolute -z-50 left-10' />
}
function RightBackgroundDecorator() {
  return <div className='w-3/6 h-[24rem] bg-sky-200 rounded-[8rem] opacity-40 blur-3xl absolute -z-50 right-10' />
}
