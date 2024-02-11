import { Outlet } from "react-router-dom";
import TheNavbar from "../Components/TheNavbar";

const RootLayouts = () => {
  return (
    <>
      <div>
         <TheNavbar/>
         <div>
         <Outlet/>
         </div>
      </div>
    </>
  );
};

export default RootLayouts;
