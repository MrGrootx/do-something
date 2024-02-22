import { FilePenLine, Trash2 } from "lucide-react";
import { useState } from "react";
import UpdateTask from "./UpdateTask";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSelectedTask,removeTaskFromList } from "../slices/taskSlice";

const TaskList = () => {
  const { tasksList } = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  function updateTask(task) {
    setModalShow(true);
    dispatch(setSelectedTask(task));
  }
  function deleteTask(task) {
    dispatch(removeTaskFromList(task));
  }
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <table className="table-auto border border-gray-500  rounded p-2">
        <thead className=" ">
          <tr className="text-gray-50 ">
            <th className=" px-4 py-1 border-gray-500 border">No</th>
            <th className=" px-4 py-1 border-gray-500 border">Title</th>
            <th className=" px-4 py-1 border-gray-500 border">Description</th>
            <th className=" px-4 py-1 border-gray-500 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasksList &&
            tasksList.map((task, index) => {
              return (
                <tr
                  className="font-semibold text-white text-center"
                  key={task.id}
                >
                  {/* <td className="px-4 border-b border-gray-500 border">{task.id}</td> */}
                  <td className="px-4 border-b border-gray-500 border">
                    {index + 1}
                  </td>
                  <td className="px-4 border-b border-gray-500 border">
                    {task.title}
                  </td>
                  <td className="px-4 border-b border-gray-500 border">
                    {task.description}
                  </td>
                  <td className="px-4 border-b border-gray-500 border">
                    <div className="space-x-3 p-1">
                      <button
                        className="hover:text-green-500"
                        onClick={() => updateTask(task)}
                      >
                        <FilePenLine />
                      </button>
                      <button
                        className="hover:text-red-500"
                        onClick={() => deleteTask(task)}
                      >
                        <Trash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <UpdateTask show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default TaskList;
