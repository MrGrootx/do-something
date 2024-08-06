import React, { useContext } from 'react';
import { CartItemsContext } from '../useContext/CartItemsContext';


const Cart: React.FC = () => {
  const context = useContext(CartItemsContext);

  if (!context) {
    throw new Error("Cart must be used within a CartItemsProvider");
  }

  const { cartItems } = context;


  return (
    <div>
      <h1 className="text-4xl">Carts</h1>
      <ul className="p-5">
        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cartItems.map((item: any) => (
            <li key={item.id} className="mt-2 bg-gray-900 px-4 py-4">
              <span>{item.name}</span>
              <span className="mr-4"> qty : {item.quantity}</span>
              <button
                className="bg-red-500 px-2 py-1 rounded text-white"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Cart;
