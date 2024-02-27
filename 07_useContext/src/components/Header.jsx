/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Header = ({ cart }) => {
  return (
    <div className="w-full h-[50%] bg-black flex items-center justify-between p-2">
      <div className="text-white font-bold">Food Card</div>
      <ul className="text-white flex gap-x-4">
        <li>
          <Link to={"/"} className="text-white font-bold hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/Cart"}
            className="text-white font-bold hover:text-gray-400 flex items-center gap-x-3"
          >
            <span className="bg-yellow-400 p-2 rounded-lg h-[30px] w-[30px] block text-center text-black">
              {cart.length}
            </span>
            View Cart
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
