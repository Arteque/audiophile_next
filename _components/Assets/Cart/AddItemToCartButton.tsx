"use client"
import Button from "../Button"
import { useCartStore } from "@/store/cartStore";
import type { Product } from "@/lib/data";
import { useState } from "react";

interface AddItemToCartButtonProps {
    product: Product
    quantity?: number
    disabled?: boolean
}

const AddItemToCartButton = ({product, quantity = 1, disabled = false}:AddItemToCartButtonProps) => {

    const addItem = useCartStore((state) => state.addItem)
    const [isLoading, setIsLoading] = useState(false)

    const addItemToCartHandler = async (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        
        if (disabled || isLoading) return;
        
        setIsLoading(true);
        
        try {
            // Add multiple quantities if specified
            for (let i = 0; i < quantity; i++) {
                addItem({
                    ...product,
                    id: String(product.id),
                    image: typeof product.image === "string" ? product.image : product.image.desktop,
                    stock: product.stock
                })
            }
            
            // Optional: Show success feedback
            console.log(`${quantity} x ${product.name} added to cart`);
        } catch (error) {
            console.error('Error adding item to cart:', error);
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