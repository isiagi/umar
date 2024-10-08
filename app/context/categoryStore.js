import { create } from "zustand";

const useCategoryStore = create((set) => ({
  categoryName: "",
  setCategoryName: (categoryName) => set({ categoryName }),
}));

export default useCategoryStore;
