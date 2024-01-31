import { useState } from "react"

export const Cart = () => {
   
   const [count, SetCount] = useState(0)

   function handleButtons() {
      SetCount(count + 5)
   }

  return (
    <div>
      
      <h1>Dynamic Value {count}</h1>
      <button onClick={handleButtons}>Please Click me </button>
    </div>
  )
}
