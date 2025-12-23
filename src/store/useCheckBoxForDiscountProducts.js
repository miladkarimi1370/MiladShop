import { create } from "zustand";

export const useCheckBoxForDiscountProducts = create((set) => ({
    currentStatusForCheckBox: false,
    setCurrentStatusForCheckBox: (state) => set({ currentStatusForCheckBox: state })
}))