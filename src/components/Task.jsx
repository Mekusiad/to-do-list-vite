import { useRef, useState } from "react";

function Task({ task, handleToogleDone, handleEditTask, handleRemoveTask }) {
  const [inputTask, setInputTask] = useState();
  const inputFocus = useRef(0);

  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setInputTask(task.text);
    if (edit) {
      inputFocus.current.focus();
      if (inputTask !== "") {
        handleEditTask(task.id, inputTask);

        setEdit(false);
      }
    }
    setEdit(true);
    if (edit && inputTask !== "") {
      setEdit(false);
    }
  };
  return (
    <div className="flex flex-row  gap-1 justify-between items-center w-full p-3 border-b border-slate-200  text-white">
      {!edit && (
        <p
          onClick={() => handleToogleDone(task.id)}
          className={` text-lg flex-1 text-start ${
            task.done ? "bg-green-500" : ""
          }`}
        >
          {task.text}
        </p>
      )}
      {edit && (
        <input
          type="text"
          ref={inputFocus}
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
          className={`
          } text-lg flex-1 text-start bg-slate-200 text-black rounded-md outline-none px-2${
            task.done ? "line-through" : ""
          }`}
        />
      )}

      <div className="flex gap-2">
        <button
          className="rounded-md bg-blue-600 px-2 py-1"
          onClick={handleEdit}
        >
          Editar
        </button>
        <button
          className="rounded-md bg-red-600 px-2 py-1"
          onClick={() => handleRemoveTask(task.id)}
        >
          Apagar
        </button>
      </div>
    </div>
  );
}

export default Task;
