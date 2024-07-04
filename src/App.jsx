import { useReducer } from "react";
import InputTask from "./components/InputTask";
import Task from "./components/Task";
import { listReducer } from "./reducers/listReducer";

function App() {
  const listStorage = JSON.parse(localStorage.getItem("to-do-list")) || [];

  const [list, dispatch] = useReducer(listReducer, listStorage);

  const handleAddTask = (text) => {
    dispatch({
      type: "addTask",
      payload: {
        text,
      },
    });
  };

  const handleEditTask = (id, newTask) => {
    dispatch({
      type: "editTask",
      payload: {
        id,
        newTask,
      },
    });
  };

  const handleRemoveTask = (id) => {
    dispatch({
      type: "removeTask",
      payload: {
        id,
      },
    });
  };

  const handleToogleDone = (id) => {
    dispatch({
      type: "toogleDone",
      payload: {
        id,
      },
    });
  };

  return (
    <div className="flex flex-col gap-2 text-center justify-start items-center w-screen h-screen bg-slate-900 container mx-auto p-3">
      <h1 className="font-bold text-3xl text-white">Lista de tarefas</h1>
      <InputTask handleAddTask={handleAddTask} />
      {list.map((task, index) => (
        <Task
          key={index}
          task={task}
          handleEditTask={handleEditTask}
          handleRemoveTask={handleRemoveTask}
          handleToogleDone={handleToogleDone}
        />
      ))}
    </div>
  );
}

export default App;
