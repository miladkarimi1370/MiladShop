import { create } from "zustand";

export const useRateFilter = create((set) => ({
    currentRate: "all",
    setCurrentRate: (myRate) => set({ currentRate: myRate })
}))