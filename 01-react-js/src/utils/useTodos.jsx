import { useEffect, useState } from "react"

export const useTodos = () => {
   const [todos,setTodos] = useState([])
   const [loading,setloading] = useState(true)

   useEffect(() => {
      try {
         const fetchTodos = async () => {

         }
      fetchTodos()

      } catch (error) {
         console.log(error);
      }
   },[])
  return (
    <div>useTodos</div>
  )
}

