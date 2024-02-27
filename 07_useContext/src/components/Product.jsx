/* eslint-disable react/prop-types */

import { useContext } from "react";
import { CartContext } from "../App";

const Product = ({ product }) => {
   const { cart, setCart } = useContext(CartContext);
  const name =
    product.name.length > 21
      ? product.name.substring(0, 20) + ".."
      : product.name;

  const addCart = () => {
    setCart([...cart, product]);
  };
  const removeCart = () => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <div className="w-[200px] h-[250px] ">
      <div className="border">
        <div className="w-[100%] h-[150px] ">
          <img
            src={product.img}
            alt={product.name}
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
        <div className="p-2">
          <h3 className="mb-4 font-bold">{name}</h3>
          <p className="font-semibold text-xs">Price Rs:{product.amt}</p>
          {cart.includes(product) ? (
            <button
              className="mt-2 px-4 py-2 bg-teal-400 rounded btnRemove"
              onClick={removeCart}
            >
              Remove to Cart
            </button>
          ) : (
            <button
              className=" mt-2 px-4 py-2 bg-teal-400 rounded"
              onClick={addCart}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
