import { create } from "zustand";

import { MobileSidebarStore } from "@/types/mobile-sidebar";

export const useMobileSidebar = create<MobileSidebarStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
