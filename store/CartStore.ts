import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartStoreItem{
    id:string;
    name:string;
    price:number;
    quantity:number;
    image:string;
}

interface CartState{
    items:CartStoreItem[]
    totalItems:number;
    totalPrice:number;

    addItem: (item:Omit<CartStoreItem, 'quantity'>) => void;
    removeItem:(id:string) => void;
    updateQuantity: (id:string, quantity:number) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            totalItems: 0,
            totalPrice: 0,

            addItem: (newItem) => set((state) => {
                const existingItem = state.items.find(item => item.id === newItem.id);
                if(existingItem){
                    const updatedItems = state.items.map(item => 
                        item.id === newItem.id ? {...item, quantity:item.quantity + 1} :item
                    )
                    return {
                        items:updatedItems,
                        totalItems: state.totalItems + 1,
                        totalPrice: state.totalPrice + newItem.price
                    }
                }

                const updatedItems = [...state.items, { ...newItem, quantity: 1}]
                return {
                    items:updatedItems,
                    totalItems: state.totalItems + 1,
                    totalPrice: state.totalPrice + newItem.price
                }
            }),

            removeItem:(id) => set((state) => {
                const item = state.items.find(item => item.id === id)
                if(!item) return state
                return {
                    items: state.items.filter(item => item.id !== id),
                    totalItems: state.totalItems - item.quantity,
                    totalPrice: state.totalPrice - (item.price * item.quantity)
                }            
            }),


            updateQuantity: (id, quantity) => set((state) => {
                const item = state.items.find(item => item.id === id);
                if (!item) return state;

                if (quantity <= 0) {
                    // Remove item directly in this callback
                    const filteredItems = state.items.filter(item => item.id !== id);
                    return {
                        items: filteredItems,
                        totalItems: state.totalItems - item.quantity,
                        totalPrice: state.totalPrice - (item.price * item.quantity)
                    };
                }

                const quantityDiff = quantity - item.quantity;
                const updatedItems = state.items.map(item =>
                    item.id === id ? { ...item, quantity } : item
                );

                return {
                    items: updatedItems,
                    totalItems: state.totalItems + quantityDiff,
                    totalPrice: state.totalPrice + (item.price * quantityDiff)
                };
            }),

            clearCart: () => set({
                items: [],
                totalItems: 0,
                totalPrice: 0
            })
        }),
        {
            name: 'cart-storage',
        }
    )
)