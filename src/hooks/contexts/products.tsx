'use client'

import { createContext, useContext, useState } from 'react'

export type Product = { id: string, name: string, price: string }

type ProductsContext = {
  products: Product[]
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
} | null

type CartsContext = {
  carts: Product[]
  setCarts: React.Dispatch<React.SetStateAction<Product[]>>
} | null


export const ProductsContext = createContext<ProductsContext>(null)
export const CartsContext = createContext<CartsContext>(null)

const initialProducts: Product[] = [
  { id: '1', name: 'product-1', price: '1' },
  { id: '2', name: 'product-2', price: '2' },
  { id: '3', name: 'product-3', price: '3' },
  { id: '4', name: 'product-4', price: '4' }
]

export function ProductsContextProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  )
}

export function CartsContextProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [carts, setCarts] = useState<Product[]>([])
  return (
    <CartsContext.Provider value={{ carts, setCarts }}>
      {children}
    </CartsContext.Provider>
  )
}

export function useProducts() {
  const context = useContext(ProductsContext)
  if (!context) {
    throw new Error('useProducts must be used within a ProductsContextProvider')
  }
  return context
}


export function useCarts() {
  const context = useContext(CartsContext)
  if (!context) {
    throw new Error('useCarts must be used within a CartsContextProvider')
  }
  const addToCart = (product: Product) => context.setCarts(prev => [...prev, product])
  const removeFromCart = (product: Product) => {
    const idx = context.carts.findIndex(p => p.id === product.id)
    const newCarts = [...context.carts]
    newCarts.splice(idx, 1)
    context.setCarts(newCarts)
  }
  return { ...context, addToCart, removeFromCart }
}