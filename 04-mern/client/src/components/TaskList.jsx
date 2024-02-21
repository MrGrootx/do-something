import { FilePenLine, Trash2 } from "lucide-react";
import { useState } from "react";
import UpdateTask from "./UpdateTask";

const TaskList = () => {
  function updateTask() {
    setModalShow(true)
  }
  function deleteTask() {
    console.log("deleted");
  }
  const [modalShow,setModalShow] = useState(false)
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
          <tr className="font-semibold text-white text-center">
            <td className="px-4 border-b border-gray-500 border">1</td>
            <td className="px-4 border-b border-gray-500 border">Mark</td>
            <td className="px-4 border-b border-gray-500 border">Otto</td>
            <td className="px-4 border-b border-gray-500 border">
              <div className="space-x-3 p-1">
                <button className="hover:text-green-500" onClick={updateTask}>
                  <FilePenLine />
                </button>
                <button className="hover:text-red-500" onClick={deleteTask}>
                  <Trash2 />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      
      <UpdateTask show={modalShow} onHide={() => setModalShow(false)}/>
    </>
  );
};

export default TaskList;
