import { observable } from "@legendapp/state"
import { useSelector } from "@legendapp/state/react"

export type Product = { id: string, name: string, price: string }

type State = {
  products: Product[]
  carts: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (product: Product) => void
}

const initialProducts: Product[] = [
  { id: '1', name: 'product-1', price: '1' },
  { id: '2', name: 'product-2', price: '2' },
  { id: '3', name: 'product-3', price: '3' },
  { id: '4', name: 'product-4', price: '4' }
]

const state = observable<State>({
  products: initialProducts,
  carts: [],
  addToCart: (product: Product) => {
    const carts = state.carts.get()
    state.carts.set([...carts, product])
  },
  removeFromCart: (product: Product) => {
    const carts = state.carts.get()
    const idx = carts.findLastIndex(p => p.id === product.id)
    const newCarts = [...carts]
    newCarts.splice(idx, 1)
    state.carts.set(newCarts)
  }
})

export default state

export function useProducts() {
  return {
    products: useSelector(() => state.products.get())
  }
}

export function useCarts() {
  return {
    carts: useSelector(() => state.carts.get()),
    addToCart: state.addToCart,
    removeFromCart: state.removeFromCart,
  }
}