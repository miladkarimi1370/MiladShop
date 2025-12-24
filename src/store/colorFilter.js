import { create } from "zustand";

export const useColorFilter = create((set) => ({
    currentColor: "all",
    setCurrentColorFilter: (Name) => set({ currentColor: Name })
}))