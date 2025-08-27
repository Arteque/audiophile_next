"use client"
import Button from "../Button"
import { useCartStore } from "@/store/CartStore";
import type { Product } from "@/lib/data";
import { useState } from "react";
import { showToast } from "@/lib/toast";

interface AddItemToCartButtonProps {
    product: Product
    quantity?: number
    disabled?: boolean
}

const AddItemToCartButton = ({product, quantity = 1, disabled = false}:AddItemToCartButtonProps) => {

    const addItemWithQuantity = useCartStore((state) => state.addItemWithQuantity)
    const [isLoading, setIsLoading] = useState(false)

    const addItemToCartHandler = async (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        
        if (disabled || isLoading) return;
        
        setIsLoading(true);
        
        try {
            // Check if product is out of stock
            if (product.stock <= 0) {
                showToast.error(`${product.name} is currently out of stock`);
                return;
            }

            // Add the specified quantity at once
            addItemWithQuantity({
                ...product,
                id: String(product.id),
                image: typeof product.image === "string" ? product.image : product.image.desktop,
                stock: product.stock
            }, quantity);
        } catch (error) {
            console.error('Error adding item to cart:', error);
            showToast.error('Failed to add item to cart');
        } finally {
            setIsLoading(false);
        }
    }

  return (
    <Button 
        variant="call" 
        text={isLoading ? "Adding..." : "Add to cart"} 
        href="/" 
        onClick={addItemToCartHandler}
        className={disabled ? "opacity-50 cursor-not-allowed" : ""} 
    />
  )
}

export default AddItemToCartButton