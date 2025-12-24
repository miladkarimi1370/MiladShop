import { create } from "zustand";

export const useBrandsFilter = create((set) => ({
    currentBrnad: "all",
    setCurrentBrand: (brand) => set({ currentBrnad: brand })
}))