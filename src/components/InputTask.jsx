import { useRef, useState } from "react";

function InputTask({ handleAddTask }) {
  const [inputTask, setInputTask] = useState();

  const inputFocus = useRef(0);

  const handleinputTask = () => {
    if (inputTask != undefined) {
      handleAddTask(inputTask);
      setInputTask("");
      inputFocus.current.focus();
    }
  };
  return (
    <div className="flex gap-2 w-full max-w-3xl border border-gray-100 rounded p-3">
      <input
        ref={inputFocus}
        type="text"
        className="flex-1 px-2 py-1 outline-none rounded-sm bg-slate-400 placeholder:text-white "
        placeholder="Insira sua tarefa"
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
      />
      <button
        className="bg-slate-400 px-2 py-1 rounded-sm text-white hover:opacity-80"
        onClick={() => handleinputTask(inputTask)}
      >
        Inserir
      </button>
    </div>
  );
}

export default InputTask;
