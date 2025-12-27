import { create } from "zustand";


export const FavoriteProducts = create((set) => ({
    myFavoriteProducts: [],
    setMyFavoriteProducts: (merchendise) => set((state) => ({
        myFavoriteProducts: [...state.myFavoriteProducts, merchendise]
    }))
}))