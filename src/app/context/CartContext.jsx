"use client"

import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }){
  const [cartItems, setCartItems] = useState([]);
  // const [cartCounter, setCartCounter] = useState(0);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  )
}


export function useCart(){
  const context = useContext(CartContext)
  if (!context){
    throw new Error("useCart must be used under Cart Provider")
  }
  return context
}