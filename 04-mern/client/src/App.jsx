import Addtask from "./components/Addtask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";



function App() {
  return (
    <>
      <Header />
      <div className="grid grid-row-6 justify-center mt-7">
        <Addtask />
      </div>
      <div className="mx-auto container">
        <div className="flex justify-center mt-11">
          <TaskList />
        </div>
      </div>
    </>
  );
}

export default App;
