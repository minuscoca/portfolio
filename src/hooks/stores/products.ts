import { create } from "zustand";
import createSelectors from "./createSelectors";

export type Product = { id: string; name: string; price: string };

type State = {
  products: Product[];
  carts: Product[];
};

type Actions = {
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
};

const initialProducts: Product[] = [
  { id: "1", name: "product-1", price: "1" },
  { id: "2", name: "product-2", price: "2" },
  { id: "3", name: "product-3", price: "3" },
  { id: "4", name: "product-4", price: "4" },
];

export const useStore = create<State & { actions: Actions }>((set) => ({
  products: initialProducts,
  carts: [],
  // ⬇️ separate "namespace" for actions
  actions: {
    addToCart: (product: Product) =>
      set((state) => {
        return { ...state, carts: [...state.carts, product] };
      }),
    removeFromCart: (product: Product) =>
      set((state) => {
        const idx = state.carts.findLastIndex((p) => p.id === product.id);
        const newCarts = [...state.carts];
        newCarts.splice(idx, 1);
        return { ...state, carts: newCarts };
      }),
  },
}));

export const useProductsStore = createSelectors(useStore);
