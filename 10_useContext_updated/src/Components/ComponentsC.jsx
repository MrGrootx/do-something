import { useContext } from "react";
import ComponentsD from "./ComponentsD";
import { UserContext } from "../Contexts/UserContext";
const ComponentsA = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <div className="box">
        ComponentsC
        <h5>{`Yello yelo this is for C ${user}`}</h5>
        <ComponentsD />
      </div>
    </div>
  );
};

export default ComponentsA;
