import { useState } from "react";

import ComponentsB from "./ComponentsB";
import { UserContext } from "../Contexts/UserContext";


const ComponentsA = () => {
  const [user] = useState("Abishek");

  return (
    <UserContext.Provider value={user}>
      <div className="box">
        ComponentsA
        <h1>{`Hellow this is ${user} A`}</h1>
        <ComponentsB />
      </div>
    </UserContext.Provider>
  );
};

export default ComponentsA;
