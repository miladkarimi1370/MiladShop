import { create } from "zustand";

export const useMyPagination = create((set) => ({
    currentPage: 1,
    setCurrentPage: (page) => set({ currentPage: page })
}))