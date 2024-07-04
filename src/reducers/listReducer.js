export const listReducer = (list, action) => {
  switch (action.type) {
    case "addTask":
      localStorage.setItem(
        "to-do-list",
        JSON.stringify([
          ...list,
          {
            id: list.length,
            text: action.payload.text,
            done: false,
          },
        ])
      );
      return [
        ...list,
        {
          id: list.length,
          text: action.payload.text,
          done: false,
        },
      ];

    case "editTask":
      localStorage.setItem(
        "to-do-list",
        JSON.stringify([
          ...list.map((task) => {
            if (task.id === action.payload.id) {
              task.text = action.payload.newTask;
              return task;
            }

            return task;
          }),
        ])
      );
      return list.map((task) => {
        if (task.id === action.payload.id) {
          task.text = action.payload.newTask;
          return task;
        }

        return task;
      });

    case "removeTask":
      localStorage.setItem(
        "to-do-list",
        JSON.stringify([
          ...list.filter((task) => {
            if (task.id !== action.payload.id) {
              return task;
            }
          }),
        ])
      );
      return list.filter((task) => {
        if (task.id !== action.payload.id) {
          return task;
        }
      });

    case "toogleDone":
      return list.map((task) => {
        if (task.id === action.payload.id) {
          task.done = !task.done;
          return task;
        }

        return task;
      });

    default:
      return list;
  }
};
