// import { UseState02 } from "./Components/UseState02";
import { Props } from "./Components/Props";
import "./index.css";

const App = () => {
  const carDetails = { brand: "civic" , color: 1 }
  return <>
  {/* <UseState02/> */}
  <Props carDetails={carDetails}/>
  </>;
};

export default App;
