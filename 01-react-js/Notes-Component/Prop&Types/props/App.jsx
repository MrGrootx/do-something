import ProfileName from "./Components/ProfileNames";
import "./index.css";

const App = () => {

  return (
    <>
      <ProfileName name={"Abishek Dy"} age={19} isAlien={false} />
      <ProfileName name={"Abishek Dy"} age={19} isAlien={true} />
      <ProfileName />
    </>
  );
};

export default App;
