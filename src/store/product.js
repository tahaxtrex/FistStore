import { useState } from "react"
import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],

  setProducts: (newProducts) => set({ products: newProducts }),

  createProduct: async (product) => {
    if (!product.name || !product.price || !product.image || !product.category) {
      return { success: false, message: 'Please fill in all fields!' };
    }

    try {
      const res = await fetch("http://localhost:8001/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
      });
        const data = await res.json();
        if (!res.ok || data.success == false) {
        throw new Error("Failed to create product");
        }

      set((state) => ({
        products: [...state.products, data.data]
      }));

      return { success: true, message: "Product created successfully!" };
    } catch (err) {
      console.error("❌ Failed to create product:", err);
      return { success: false, message: "Server error" };
    }
  }
}));
