import { create } from "zustand";


export const useTheShapeOfShowCards = create((set) => ({
    currentColumnBase: 3,
    setCurrentColumnBase: (number) => set({ currentColumnBase: number })

}))