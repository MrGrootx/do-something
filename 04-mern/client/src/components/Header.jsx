import { useSelector } from "react-redux";
const Header = () => {
  const { tasksList } = useSelector((state) => state.tasks);

  return (
    <>
      <h1 className="text-center my-4 text-teal-500 font-bold text-2xl">
        Project Management
      </h1>
      <p className="text-center font-semibold text-white">
        Currently {tasksList.length} tasks(s) pending
      </p>
    </>
  );
};

export default Header;
