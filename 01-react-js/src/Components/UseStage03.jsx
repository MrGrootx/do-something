import { useState } from "react";

export const UseStage03 = () => {
  const [User, setUser] = useState({ name: "Abishek", age: 23 });

  // we can reUse this function
  function handleUsers(e) {
   setUser({...User, [e.target.name]:e.target.value})
  }

  return (
    <div>
      <h1>User Name : {User.name}</h1>
      <h1>Age : {User.age}</h1>

      <input
        onChange={handleUsers}
        type="text"
        placeholder="New User Name"
        className="outline-none border border-black"
        name="name"
        
      />
      <input
        onChange={handleUsers}
        type="number"
        placeholder="New User Age"
        className="outline-none border border-black"
        name="age"
    
      />
    </div>
  );
};
