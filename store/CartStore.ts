import { create } from "zustand";
import { persist } from "zustand/middleware";
import { cartToast } from "@/lib/toast";

interface CartStoreItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  stock: number;
}

interface CartState {
  items: CartStoreItem[];
  totalItems: number;
  totalPrice: number;
  shippingCosts: number;
  vat: number;

  addItem: (item: Omit<CartStoreItem, "quantity">) => void;
  addItemWithQuantity: (
    item: Omit<CartStoreItem, "quantity">,
    quantity: number
  ) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getItemById: (id: string) => CartStoreItem | undefined;
  isInCart: (id: string) => boolean;
  updateStock: (id: string, newStock: number) => void;
  recalculateTotals: () => void;
  calculateShipping: () => void;
  calculateVat: () => void;
  getGrandTotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,
      shippingCosts: 0,
      vat: 0,

      addItem: (newItem) => {
        const currentState = get();

        // Check stock availability first
        if (newItem.stock <= 0) {
          cartToast.itemOutOfStock(newItem.name);
          return;
        }

        const existingItem = currentState.items.find(
          (item) => item.id === newItem.id
        );

        if (existingItem) {
          // Check if we can add more items
          if (existingItem.quantity >= newItem.stock) {
            cartToast.stockLimitReached(newItem.name, newItem.stock);
            return;
          }
        }

        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === newItem.id
          );
          let updatedItems;
          let newTotalItems;
          let newTotalPrice;

          if (existingItem) {
            updatedItems = state.items.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1, stock: newItem.stock }
                : item
            );
            newTotalItems = state.totalItems + 1;
            newTotalPrice = state.totalPrice + newItem.price;
          } else {
            updatedItems = [...state.items, { ...newItem, quantity: 1 }];
            newTotalItems = state.totalItems + 1;
            newTotalPrice = state.totalPrice + newItem.price;
          }

          return {
            items: updatedItems,
            totalItems: newTotalItems,
            totalPrice: newTotalPrice,
          };
        });

        // Recalculate shipping and VAT after state update
        get().calculateShipping();
        get().calculateVat();

        // Show toast after state update
        cartToast.itemAdded(newItem.name, 1);
      },

      addItemWithQuantity: (newItem, quantity) => {
        const currentState = get();

        // Check stock availability first
        if (newItem.stock <= 0) {
          cartToast.itemOutOfStock(newItem.name);
          return;
        }

        const existingItem = currentState.items.find(
          (item) => item.id === newItem.id
        );

        if (existingItem) {
          // Check if we can add the requested quantity
          const newQuantity = existingItem.quantity + quantity;
          if (newQuantity > newItem.stock) {
            cartToast.stockLimitReached(newItem.name, newItem.stock);
            return;
          }
        } else {
          // Check if requested quantity exceeds stock for new items
          if (quantity > newItem.stock) {
            cartToast.stockLimitReached(newItem.name, newItem.stock);
            return;
          }
        }

        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === newItem.id
          );
          let updatedItems;
          let newTotalItems;
          let newTotalPrice;

          if (existingItem) {
            const newQuantity = existingItem.quantity + quantity;
            updatedItems = state.items.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: newQuantity, stock: newItem.stock }
                : item
            );
            newTotalItems = state.totalItems + quantity;
            newTotalPrice = state.totalPrice + newItem.price * quantity;
          } else {
            updatedItems = [...state.items, { ...newItem, quantity }];
            newTotalItems = state.totalItems + quantity;
            newTotalPrice = state.totalPrice + newItem.price * quantity;
          }

          return {
            items: updatedItems,
            totalItems: newTotalItems,
            totalPrice: newTotalPrice,
          };
        });

        // Recalculate shipping and VAT after state update
        get().calculateShipping();
        get().calculateVat();

        // Show toast after state update
        cartToast.itemAdded(newItem.name, quantity);
      },

      removeItem: (id) => {
        const currentState = get();
        const item = currentState.items.find((item) => item.id === id);
        if (!item) return;

        set((state) => {
          const updatedItems = state.items.filter((item) => item.id !== id);
          const newTotalItems = state.totalItems - item.quantity;
          const newTotalPrice = state.totalPrice - item.price * item.quantity;

          return {
            items: updatedItems,
            totalItems: newTotalItems,
            totalPrice: newTotalPrice,
          };
        });

        // Recalculate shipping and VAT after state update
        get().calculateShipping();
        get().calculateVat();

        // Show toast notification after state update
        cartToast.itemRemoved(item.name);
      },

      updateQuantity: (id, quantity) => {
        const currentState = get();
        const item = currentState.items.find((item) => item.id === id);
        if (!item) return;

        // Check stock limit first
        if (quantity > 0 && quantity > item.stock) {
          cartToast.stockLimitReached(item.name, item.stock);
          return;
        }

        if (quantity <= 0) {
          // Remove item directly
          set((state) => {
            const filteredItems = state.items.filter((item) => item.id !== id);
            const newTotalItems = state.totalItems - item.quantity;
            const newTotalPrice = state.totalPrice - item.price * item.quantity;

            return {
              items: filteredItems,
              totalItems: newTotalItems,
              totalPrice: newTotalPrice,
            };
          });

          // Recalculate shipping and VAT after state update
          get().calculateShipping();
          get().calculateVat();

          // Show toast notification for removal after state update
          cartToast.itemRemoved(item.name);
        } else {
          const quantityDiff = quantity - item.quantity;

          set((state) => {
            const updatedItems = state.items.map((item) =>
              item.id === id ? { ...item, quantity } : item
            );
            const newTotalItems = state.totalItems + quantityDiff;
            const newTotalPrice = state.totalPrice + item.price * quantityDiff;

            return {
              items: updatedItems,
              totalItems: newTotalItems,
              totalPrice: newTotalPrice,
            };
          });

          // Recalculate shipping and VAT after state update
          get().calculateShipping();
          get().calculateVat();

          // Show toast notification for quantity update after state update
          cartToast.itemUpdated(item.name, quantity);
        }
      },

      clearCart: () => {
        set({
          items: [],
          totalItems: 0,
          totalPrice: 0,
          shippingCosts: 0,
          vat: 0,
        });

        // Show toast notification
        cartToast.cartCleared();
      },

      getItemById: (id) => {
        const { items } = get();
        return items.find((item) => item.id === id);
      },

      isInCart: (id) => {
        const { items } = get();
        return items.some((item) => item.id === id);
      },

      updateStock: (id, newStock) =>
        set((state) => {
          const updatedItems = state.items.map((item) =>
            item.id === id ? { ...item, stock: newStock } : item
          );
          return { ...state, items: updatedItems };
        }),

      recalculateTotals: () => {
        set((state) => {
          const newTotalItems = state.items.reduce(
            (total, item) => total + item.quantity,
            0
          );
          const newTotalPrice = state.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          );

          return {
            ...state,
            totalItems: newTotalItems,
            totalPrice: newTotalPrice,
          };
        });

        // Recalculate shipping and VAT after updating totals
        get().calculateShipping();
        get().calculateVat();
      },

      calculateShipping: () =>
        set((state) => {
          // Free shipping if cart is empty or total is over $100
          const shippingCosts =
            state.totalItems === 0 || state.totalPrice >= 100 ? 0 : 50;
          return {
            ...state,
            shippingCosts,
          };
        }),

      calculateVat: () =>
        set((state) => {
          // Calculate VAT as 20% of the total price (excluding shipping)
          const vat = Math.round(state.totalPrice * 0.2 * 100) / 100;
          return {
            ...state,
            vat,
          };
        }),

      getGrandTotal: () => {
        const { totalPrice, shippingCosts, vat } = get();
        return totalPrice + shippingCosts + vat;
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
