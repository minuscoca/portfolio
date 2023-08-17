import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeContextProvider } from '@/hooks/contexts/theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'This is a portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeContextProvider>
      <html lang="en">
        <body className={`${inter.className} relative -z-50 bg-gray-100`}>
          <LeftBackgroundDecorator />
          <RightBackgroundDecorator />
          {children}
        </body>
      </html>
    </ThemeContextProvider>
  )
}

function LeftBackgroundDecorator() {
  return <div className='w-3/6 h-[24rem] bg-rose-200 opacity-30 blur-3xl absolute -z-50 left-10' />
}
function RightBackgroundDecorator() {
  return <div className='w-3/6 h-[24rem] bg-sky-200 opacity-30 blur-3xl absolute -z-50 right-10' />
}
