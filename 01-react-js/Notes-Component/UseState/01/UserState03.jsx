import { useState } from "react";

export const UserState03 = () => {
  const [user, setUser] = useState({ name: "Abishek", age: 18 });
   
  // Method 1
  function changeUserName(e) {
   setUser((newname) => {
      return {...newname, name: e.target.value}
   })
  }   
  // Method 2
  function changeUserAge(e) {
   const oldUserAge = {...user}
   oldUserAge.age = e.target.value
   setUser(oldUserAge)
  }

  return (
    <div>
      <h1>
        UserName : {user.name} | Age : {user.age}
      </h1>
      <input
        onChange={changeUserName}
        type="text"
        placeholder="New User Name"
        className="outline-none border border-black"
      />
      <input
        onChange={changeUserAge}
        type="number"
        placeholder="New User Age"
        className="outline-none border border-black"
      />
    </div>
  );
};
