import { PropFunc } from "./Components/PropFunc";
import "./index.css";

const App = () => {

  function thisisFunction() {
    alert("Hellow I am Function")
  }

  return <>
    <PropFunc handleFunction={thisisFunction} />
  </>;
};

export default App;
