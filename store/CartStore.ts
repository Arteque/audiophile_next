import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartStoreItem{
    id:string;
    name:string;
    price:number;
    quantity:number;
    image:string;
    stock:number;
}

interface CartState{
    items:CartStoreItem[]
    totalItems:number;
    totalPrice:number;

    addItem: (item:Omit<CartStoreItem, 'quantity'>) => void;
    removeItem:(id:string) => void;
    updateQuantity: (id:string, quantity:number) => void;
    clearCart: () => void;
    getItemById: (id: string) => CartStoreItem | undefined;
    isInCart: (id: string) => boolean;
    updateStock: (id: string, newStock: number) => void;
    recalculateTotals: () => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            totalItems: 0,
            totalPrice: 0,

            addItem: (newItem) => set((state) => {
                const existingItem = state.items.find(item => item.id === newItem.id);
                let updatedItems;
                let newTotalItems;
                let newTotalPrice;

                if(existingItem){
                    updatedItems = state.items.map(item => 
                        item.id === newItem.id 
                            ? {...item, quantity: item.quantity + 1, stock: newItem.stock}
                            : item
                    );
                    newTotalItems = state.totalItems + 1;
                    newTotalPrice = state.totalPrice + newItem.price;
                } else {
                    updatedItems = [...state.items, { ...newItem, quantity: 1}];
                    newTotalItems = state.totalItems + 1;
                    newTotalPrice = state.totalPrice + newItem.price;
                }

                return {
                    items: updatedItems,
                    totalItems: newTotalItems,
                    totalPrice: newTotalPrice
                };
            }),

            removeItem:(id) => set((state) => {
                const item = state.items.find(item => item.id === id);
                if(!item) return state;

                const updatedItems = state.items.filter(item => item.id !== id);
                const newTotalItems = state.totalItems - item.quantity;
                const newTotalPrice = state.totalPrice - (item.price * item.quantity);

                return {
                    items: updatedItems,
                    totalItems: newTotalItems,
                    totalPrice: newTotalPrice
                };         
            }),


            updateQuantity: (id, quantity) => set((state) => {
                const item = state.items.find(item => item.id === id);
                if (!item) return state;

                if (quantity <= 0) {
                    // Remove item directly
                    const filteredItems = state.items.filter(item => item.id !== id);
                    const newTotalItems = state.totalItems - item.quantity;
                    const newTotalPrice = state.totalPrice - (item.price * item.quantity);

                    return {
                        items: filteredItems,
                        totalItems: newTotalItems,
                        totalPrice: newTotalPrice
                    };
                }

                const quantityDiff = quantity - item.quantity;
                const updatedItems = state.items.map(item =>
                    item.id === id ? { ...item, quantity } : item
                );
                const newTotalItems = state.totalItems + quantityDiff;
                const newTotalPrice = state.totalPrice + (item.price * quantityDiff);

                return {
                    items: updatedItems,
                    totalItems: newTotalItems,
                    totalPrice: newTotalPrice
                };
            }),

            clearCart: () => set({
                items: [],
                totalItems: 0,
                totalPrice: 0
            }),

            getItemById: (id) => {
                const { items } = get();
                return items.find(item => item.id === id);
            },

            isInCart: (id) => {
                const { items } = get();
                return items.some(item => item.id === id);
            },

            updateStock: (id, newStock) => set((state) => {
                const updatedItems = state.items.map(item =>
                    item.id === id 
                        ? { ...item, stock: newStock }
                        : item
                );
                return { ...state, items: updatedItems };
            }),

            recalculateTotals: () => set((state) => {
                const newTotalItems = state.items.reduce((total, item) => total + item.quantity, 0);
                const newTotalPrice = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);

                return {
                    ...state,
                    totalItems: newTotalItems,
                    totalPrice: newTotalPrice
                };
            })
        }),
        {
            name: 'cart-storage',
        }
    )
)