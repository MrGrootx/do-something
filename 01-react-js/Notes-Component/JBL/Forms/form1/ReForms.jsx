import { useState } from "react";

const ReForms = () => {
  const [inputs, setInputs] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter the Name :</label>
        <input
          type="text"
          onChange={(e) =>
            setInputs((old) => {
              return { ...old, name: e.target.value };
            })
          }
          className="border border-blackad"
        />
        <label htmlFor="">Enter the Age :</label>
        <input
          type="text"
          onChange={(e) =>
            setInputs((old) => {
              return { ...old, age: e.target.value };
            })
          }
          className="border border-blackad"
        />
        <label htmlFor="">Enter the Alive? :</label>
        <input
          type="text"
          onChange={(e) =>
            setInputs((old) => {
              return { ...old, email: e.target.value };
            })
          }
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
