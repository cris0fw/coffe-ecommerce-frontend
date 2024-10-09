import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-toastify";

const useCart = create(
  persist(
    (set, get) => ({
      items: [],
      addItem: (data) => {
        const currentItem = get().items;
        const existingItem = currentItem.find((item) => item.id === data.id);

        if (existingItem) {
          return toast.error("El elemento ya existe en el carrito");
        }

        set({
          items: [...get().items, data],
        });

        toast.success("Agregado al carrito 🛒");
      },
      
      removeItem: (id) => {
        set({
          items: [...get().items.filter((item) => item.id !== id)],
        });
        toast.error("Producto eliminado ❌");
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useCart;
