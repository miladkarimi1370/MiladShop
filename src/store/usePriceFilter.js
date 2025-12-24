import { create } from "zustand";

export const usePriceFilter = create((set) => ({
    currentPriceFilter: "all",
    setCurrentPriceFilter: (howMuch) => set({ currentPriceFilter: howMuch })
}))