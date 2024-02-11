import { useState } from "react";

const ReForms = () => {
  const [inputs, setInputs] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
  }

  function handleInputs(e) {
    const name = e.target.name
    const value = e.target.value

    setInputs((oldStates) => { return {...oldStates,[name]:value}})
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter the Name :</label>
        <input
          type="text"
          name="namme"
          onChange={handleInputs}
          className="border border-blackad"
        />
        <label htmlFor="">Enter the Age :</label>
        <input
          type="text"
          name="age"
          onChange={handleInputs}
          className="border border-blackad"
        />
        <label htmlFor="">Enter the Alive? :</label>
        <input
          type="text"
          name="email"
          onChange={handleInputs}
          className="border border-blackad"
        />
        <input
          type="submit"
          value="submit"
          className="bg-red-500 px-2 py-1 ml-3"
        />
      </form>
    </>
  );
};

export default ReForms;
