import { useEffect, useState } from "react";

import propTypes from "prop-types";

import { useSelector } from "react-redux";
import { updateTaskList } from "../slices/taskSlice";
import { useDispatch } from "react-redux";

const UpdateTask = ({ show, onHide }) => {
  const { selectedTask } = useSelector((state) => state.tasks);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(0);

  const dispatch = useDispatch();

  function updateTask() {
    onHide(false);
    dispatch(updateTaskList({ id, title, description }));
  }

  function closeModal() {
    onHide();
  }

  useEffect(() => {
    if (Object.keys(selectedTask).length !== 0) {
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
      setId(selectedTask.id);
    }
  }, [selectedTask]);

  return (
    <>
      {show && (
        <div>
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="">
                    <form className="space-y-2">
                      <div>
                        <label
                          htmlFor=""
                          className="font-semibold text-gray-600 uppercase"
                        >
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
                      <div className="w-full">
                        <label
                          htmlFor=""
                          className="font-semibold text-gray-600 uppercase"
                        >
                          Task Description
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Task Description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          className="px-2 py-2 w-full outline-none border rounded"
                        />
                        <div className="flex gap-x-2 justify-center">
                          <button
                            type="button"
                            className="bg-red-500 font-semibold px-3 py-1 rounded mt-3 hover:bg-red-600 transition-all duration-300 w-full"
                            onClick={closeModal}
                          >
                            Cancel
                          </button>
                          <button
                            className="bg-teal-500 font-semibold px-3 py-1 rounded mt-3 hover:bg-teal-600 transition-all duration-300 w-full"
                            onClick={updateTask}
                          >
                            Update Task
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateTask;

UpdateTask.propTypes = {
  show: propTypes.bool,
  onHide: propTypes.func,
};
