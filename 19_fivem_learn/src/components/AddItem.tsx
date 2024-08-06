import React, { useContext, useState } from "react";
import items, { itemsProps } from "../data/items";
import { CartItemsContext } from "../useContext/CartItemsContext";


const AddItem: React.FC = () => {
  const context = useContext(CartItemsContext);

  // Check if context is undefined
  if (!context) {
    throw new Error("AddItem must be used within a CartItemsProvider");
  }

  const { cartItems, addItem } = context;

  const AddItemCTM = (item: itemsProps) => {
    console.log(item);
    addItem(item);
  };

  const [itemssss] = useState<itemsProps[]>(items);

  return (
    <div>
      <h1 className="text-4xl">Add Item</h1>
      <ul className="p-5">
        {itemssss.map((item) => (
          <li key={item.id} className="mt-2 bg-gray-900 px-4 py-4">
            <span>{item.name}</span>
            <span className="mr-4"> qty : {item.quantity}</span>
            <button
              className="bg-red-500 px-2 py-1 rounded text-white"
              onClick={() => AddItemCTM(item)}
            >
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddItem;
