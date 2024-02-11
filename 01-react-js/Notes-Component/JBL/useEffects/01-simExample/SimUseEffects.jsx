import { useEffect, useState } from "react"

const SimUseEffects = () => {
   const [count,setCount] = useState(1)

   useEffect(() => {
      checkCount()
      console.log("Screen Rendered");
   },[count])
   
   function checkCount() {
      if(count > 10) {
         setCount(1)
      }
   }
   // console.log(count);
   function handleButton() {
      setCount((oldCount) => { return oldCount + 1})
   }

   return (
    <div>
      <h1>I Have rendered {count} times</h1>
      <button onClick={handleButton}>Button</button>
    </div>
  )
}

export default SimUseEffects