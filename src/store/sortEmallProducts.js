import { create } from "zustand";

export const useSortEmallProducts = create((set) => ({
    currentSort: "all",
    setCurrentSortDefault: (prop) => set({ currentSort: prop })
}))