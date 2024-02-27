/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";
const Viewcart = () => {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.amt), 0));
  }, [cart]);
  return (
    <>
      <h1 className="font-bold text-xl">Cart Products</h1>
      <div className="flex flex-col p-2 ">
        {cart.map((product) => (
          <div className="flex gap-3 items-center mb-3" key={product.id}>
            <div className="w-[100px] h-[100px]">
              <img
                src={product.img}
                alt="img"
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div>
              <h3>{product.name}</h3>
              <p>Price Rs: {product.amt}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-bold">Total Amount Rs: {total}</h2>
    </>
  );
};

export default Viewcart;
