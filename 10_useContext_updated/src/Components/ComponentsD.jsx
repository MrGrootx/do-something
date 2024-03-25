import { useContext } from "react"
import { UserContext } from "../Contexts/UserContext"





const ComponentsA = () => {
  const user = useContext(UserContext)
  return (
    <div>
      <div className="box">
      ComponentsD
      <h5>{`Hellow this is form D ${user} `}</h5>
      </div>
    </div>
  )
}

export default ComponentsA
