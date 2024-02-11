import { useState } from "react";

const ArrState = () => {
  const [item, setItem] = useState([]);
  const [count, setCount] = useState(0);

  function addItem() {
    const itemName = "item " + count;
    setItem((oldItem) => {
      return [...oldItem, itemName];
    });
    setCount((oldcount) => {
      return oldcount + 1;
    });
  }

  console.log(item);
  return (
    <div>
      <h1>My Items</h1>
      <button className="bg-orange-500 px-1 py-1 rounded" onClick={addItem}>
        Add Item
      </button>
      <ul>
        {item.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArrState;
