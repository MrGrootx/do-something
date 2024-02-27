import Header from "./components/Header";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Home from "./components/Home";
import Viewcart from "./components/Viewcart";
import { useState, createContext } from "react";

export const CartContext = createContext();

const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <Header cart={cart} />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Viewcart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
};

export default App;
