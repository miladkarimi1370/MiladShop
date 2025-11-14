import { create } from "zustand";

export const useMenuStore = create((set) => ({
    myAnchorEl: null,
    myActiveMenu: null,
    openMenu: (anchor, activeNameMenu) => set({ myAnchorEl: anchor, myActiveMenu: activeNameMenu }),
    myHandleClose: () => set({ myAnchorEl: null, myActiveMenu: null })

}))


