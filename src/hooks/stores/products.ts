import { create } from 'zustand'

export type Product = {  id: string, name: string, price: string }

type State = {
  products: Product[]
  carts: Product[]
}

type Action = {
  addToCart: (product: Product) => void
  removeFromCart: (product: Product) => void
}

const initialProducts: Product[] = [
  { id: '1', name: 'product-1', price: '1' },
  { id: '2', name: 'product-2', price: '2' },
  { id: '3', name: 'product-3', price: '3' },
  { id: '4', name: 'product-4', price: '4' }
]

export const useProductsStore = create<State & Action>((set) => ({
  products: initialProducts,
  carts: [],
  addToCart: (product: Product) => set((state) => ({ carts: [...state.carts, product] })),
  removeFromCart: (product: Product) => set((state) => {
    const idx = state.carts.findLastIndex(p => p.id === product.id)
    const newCarts = [...state.carts].splice(idx, 1)
    return { carts: newCarts}
  }),
}))