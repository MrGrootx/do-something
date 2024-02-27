/* eslint-disable react/prop-types */
import { useState } from "react";

import data from "../data/products.json";
import Product from "./Product";

const Home = () => {
  const [products] = useState(data);

  return (
    <div className="flex flex-wrap gap-x-2 gap-y-10 justify-center ">
      {products.map((item) => (
        <Product key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Home;
