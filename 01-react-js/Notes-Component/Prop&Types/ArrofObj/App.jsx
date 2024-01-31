import { ArrProps } from "./Components/ArrProps";
import "./index.css";

const App = () => {
  const container = [
    { id: 1, name: "Abishek" },
    { id: 2, name: "Jack" },
    { id: 3, name: "Jestin" },
  ];

  return (
    <>
      <ArrProps items={container} />
    </>
  );
};

export default App;
