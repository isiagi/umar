import { create } from "zustand";

const useCartStore = create((set) => ({
  cartItems: [], // Initial cart is empty
  totalPrice: 0, // Initialize total price

  // Add item to cart
  addItem: (item) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.name === item.name
      );
      if (existingItem) {
        // If item already exists, increase the quantity
        const updatedItems = state.cartItems.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        return {
          cartItems: updatedItems,
          totalPrice: state.totalPrice + item.price,
        };
      } else {
        // If item does not exist, add it to the cart
        return {
          cartItems: [...state.cartItems, { ...item, quantity: 1 }],
          totalPrice: state.totalPrice + item.price,
        };
      }
    }),

  // Remove item from cart
  removeItem: (itemId) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.name === itemId
      );
      if (!existingItem) return state; // Item doesn't exist in cart

      if (existingItem.quantity > 1) {
        // Decrease quantity if more than 1
        const updatedItems = state.cartItems.map((cartItem) =>
          cartItem.name === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
        return {
          cartItems: updatedItems,
          totalPrice: state.totalPrice - existingItem.price,
        };
      } else {
        // Remove item if quantity is 1
        const updatedItems = state.cartItems.filter(
          (cartItem) => cartItem.name !== itemId
        );
        return {
          cartItems: updatedItems,
          totalPrice: state.totalPrice - existingItem.price,
        };
      }
    }),

  // Clear the cart
  clearCart: () =>
    set({
      cartItems: [],
      totalPrice: 0,
    }),
}));

export default useCartStore;
