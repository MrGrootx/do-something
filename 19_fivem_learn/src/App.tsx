
import Cart from "./components/Cart";
import AddItem from "./components/AddItem";
import { CartItemsProvider } from "./useContext/CartItemsContext";

export const App = () => {
  return (
    <>
      <CartItemsProvider>
        <div className="flex justify-between items-center">
          <Cart />
          <AddItem />
        </div>
      </CartItemsProvider>
    </>
  );
};
