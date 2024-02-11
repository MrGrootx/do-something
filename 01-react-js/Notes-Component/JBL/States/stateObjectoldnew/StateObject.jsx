import { useState } from "react";

const StateObject = () => {
  const [car, setCar] = useState({
    name: "Honda civic",
    brand: "honda",
    color: "Red",
  });

  function handlebtn() {
    setCar((oldState) => {
      return ({...oldState,color: "Blue"})
    });
  }

  return (
    <div>
      <h1>Cars Details</h1>
      <li>Name: {car.name}</li>
      <li>Brand: {car.brand}</li>
      <li>Color: {car.color}</li>

      <button onClick={handlebtn} className="px-2 py-1 bg-teal-500">
        Click Me
      </button>
    </div>
  );
};

export default StateObject;
