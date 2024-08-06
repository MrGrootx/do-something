// src/contexts/CartItemsContext.tsx
import React, { createContext, ReactNode, useState } from 'react';
import { itemsProps } from '../data/items';

interface CartItemsContextProps {
  cartItems: itemsProps[];
  addItem: (item: itemsProps) => void;
}

export const CartItemsContext = createContext<CartItemsContextProps | undefined>(undefined);

export const CartItemsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<itemsProps[]>([]);

  const addItem = (item: itemsProps) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <CartItemsContext.Provider value={{ cartItems, addItem }}>
      {children}
    </CartItemsContext.Provider>
  );
};
