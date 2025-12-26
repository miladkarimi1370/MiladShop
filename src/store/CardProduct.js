import { create } from "zustand";

export const CartProduct = create((set) => ({
    myBasket: [],
    setMyBasket: (kala) => set((state) => ({
        myBasket: [...state.myBasket, kala]
    }))
}))