import { create } from "zustand";

export const useSizeFilter = create((set) => ({
    currentSize: "all",
    setCurrentSize: (mySize) => set({ currentSize: mySize })
}))