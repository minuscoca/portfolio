import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ProductsContextProvider, CartsContextProvider } from '@/hooks/contexts/products'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Products',
  description: 'All products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProductsContextProvider>
      <CartsContextProvider>
        <html lang="en">
          <body className={`${inter.className} relative -z-50 bg-gray-100`}>
            {children}
          </body>
        </html>
      </CartsContextProvider>
    </ProductsContextProvider>
  )
}