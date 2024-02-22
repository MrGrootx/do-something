import { useDispatch } from "react-redux";
import { useState } from "react";

import { addTaskToList } from "../slices/taskSlice";

const Addtask = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function addTask(e) {
    console.log({ title, description });
    e.preventDefault();
    dispatch(addTaskToList({ title, description }));
    setTitle("");
    setDescription("")
  }

  return (
    <div>
      <section className="container mx-auto">
        <form className="space-y-2">
          <div>
            <label htmlFor="" className="font-semibold text-gray-100 uppercase">
              Task Title
            </label>
            <input
              type="text"
              placeholder="Enter Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="px-2 py-2 w-full outline-none border rounded"
            />
          </div>
          <div>
            <label htmlFor="" className="font-semibold text-gray-100 uppercase">
              Task Description
            </label>
            <input
              type="text"
              placeholder="Enter Task Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="px-2 py-2 w-full outline-none border rounded"
            />
            <button
              className="bg-teal-500 font-semibold px-3 py-1 rounded mt-3 hover:bg-teal-600 transition-all duration-300"
              onClick={addTask}
            >
              Add Task
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Addtask;
