import { toast, ToastOptions } from 'react-toastify';

const defaultOptions: ToastOptions = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const showToast = {
  success: (message: string, options?: ToastOptions) => {
    toast.success(message, { ...defaultOptions, ...options });
  },
  
  error: (message: string, options?: ToastOptions) => {
    toast.error(message, { ...defaultOptions, ...options });
  },
  
  warning: (message: string, options?: ToastOptions) => {
    toast.warning(message, { ...defaultOptions, ...options });
  },
  
  info: (message: string, options?: ToastOptions) => {
    toast.info(message, { ...defaultOptions, ...options });
  },
};

// Cart specific toast notifications
export const cartToast = {
  itemAdded: (itemName: string, quantity: number = 1) => {
    const message = quantity === 1 
      ? `${itemName} added to cart` 
      : `${quantity}x ${itemName} added to cart`;
    showToast.success(message);
  },
  
  itemRemoved: (itemName: string) => {
    showToast.info(`${itemName} removed from cart`);
  },
  
  itemUpdated: (itemName: string, newQuantity: number) => {
    if (newQuantity === 0) {
      showToast.info(`${itemName} removed from cart`);
    } else {
      showToast.info(`${itemName} quantity updated to ${newQuantity}`);
    }
  },
  
  cartCleared: () => {
    showToast.info('Cart cleared');
  },
  
  stockLimitReached: (itemName: string, maxStock: number) => {
    showToast.warning(`Cannot add more ${itemName}. Maximum stock: ${maxStock}`);
  },
  
  itemOutOfStock: (itemName: string) => {
    showToast.error(`${itemName} is currently out of stock`);
  },
};
