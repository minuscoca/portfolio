'use client'

import { useProdStore, Product } from "@/hooks/stores/products"

export default function Products() {


  return (
    <main className="min-h-screen p-24 grid grid-cols-2 gap-4">
      <Carts />
      <Prods />
    </main>
  )
}

function Prods() {
  const products = useProdStore.use.products()
  console.log('render Prods', products)
  return (
    <div className="flex-1">
      <h1 className="mb-4 text-3xl">Products</h1>
      <ul className="grid gap-2">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </ul>
    </div>
  )
}

function Carts() {
  const carts = useProdStore.use.carts()
  console.log('render Carts', carts)
  return (
    <aside className="min-w-[10rem] flex flex-col">
      <h1 className="mb-4 text-3xl">Cart</h1>
      <ul className="grid gap-2">
        {carts.map((p, idx) => <CartCard key={p.id + idx} product={p} />)}
      </ul>
    </aside>
  )
}

function ProductCard({ product }: { product: Product }) {
  const addToCart = useProdStore.use.addToCart()
  return (
    <div key={product.id} className="grid grid-cols-3 p-4 rounded-md bg-purple-200">
      <div className="flex flex-col gap-2 col-span-2">
        <span>Name: {product.name}</span>
        <span>Price: {product.price}</span>
      </div>
      <button
        className="bg-purple-50 rounded-md hover:bg-purple-100 active:bg-purple-300"
        onClick={() => addToCart(product)}
      >
        Add
      </button>
    </div>
  )
}

function CartCard({ product }: { product: Product }) {
  const removeFromCart = useProdStore.use.removeFromCart()
  return (
    <div key={product.id} className="grid grid-cols-3 p-4 rounded-md bg-orange-200">
      <div className="flex flex-col gap-2 col-span-2">
        <span>Name: {product.name}</span>
        <span>Price: {product.price}</span>
      </div>
      <button
        className="bg-orange-50 rounded-md hover:bg-orange-100 active:bg-orange-300"
        onClick={() => removeFromCart(product)}
      >
        Remove
      </button>
    </div>
  )
}
