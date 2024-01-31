import { useState } from "react";

export const UseState02 = () => {
  const [User, setUser] = useState({ names: "Abishek", age: 18 });

   function userNameUpdate() {
     setUser({...User, names: "Abit"})
   }

   function userAgeUpdate() {
      setUser({ ...User, age: 25})
   }
   
  return <div>UseState02
   <h1>User Name : {User.names}</h1>
   <h1>Age : {User.age}</h1>

   <button onClick={userNameUpdate} className="bg-red-500  mr-2">userNameUpdate</button>
   <button onClick={userAgeUpdate} className="bg-green-500  mr-2">userAgeUpdate</button>

  </div>;
};
