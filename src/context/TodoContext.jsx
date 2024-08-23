import { createContext, useContext, useReducer } from "react";

const TodoContext = createContext();

const initialState = {
  todo: [],
  doing: [],
  done: [],
};

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };

    case "MOVE_TO_DOING":
      return {
        ...state,
        todo: state.todo.filter((item) => item.id !== action.payload.id),
        doing: [...state.doing, action.payload],
      };

    case "MOVE_BACK_TO_TODO":
      return {
        ...state,
        doing: state.doing.filter((item) => item.id !== action.payload.id),
        todo: [...state.todo, action.payload],
      };

    case "MOVE_TO_DONE":
      return {
        ...state,
        doing: state.doing.filter((item) => item.id !== action.payload.id),
        done: [...state.done, action.payload],
      };

    case "REMOVE_TODO":
      return {
        ...state,
        todo: state.todo.filter((item) => item.id !== action.payload),
        doing: state.doing.filter((item) => item.id !== action.payload),
        done: state.done.filter((item) => item.id !== action.payload),
      };

    case "SET_STATE":
      return {
        ...state,
        todo: action.payload.todo,
        doing: action.payload.doing,
        done: action.payload.done,
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function TodoProvider({ children }) {
  const [{ todo, doing, done }, dispatch] = useReducer(
    todoReducer,
    initialState
  );

  const addTodo = (title) => {
    const newTodo = { id: Date.now(), title, completed: false };
    dispatch({ type: "ADD_TODO", payload: newTodo });
  };

  const moveToDoing = (todo) => {
    dispatch({ type: "MOVE_TO_DOING", payload: todo });
  };

  const moveToDone = (todo) => {
    dispatch({ type: "MOVE_TO_DONE", payload: todo });
  };

  const moveBackToTodo = (todo) => {
    dispatch({ type: "MOVE_BACK_TO_TODO", payload: todo });
  };

  const removeTodo = (id) => {
    console.log("Remove function called with id:", id);
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  const setState = ({ todo, doing, done }) => {
    dispatch({
      type: "SET_STATE",
      payload: { todo, doing, done },
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todo,
        doing,
        done,
        addTodo,
        moveToDoing,
        moveToDone,
        moveBackToTodo,
        removeTodo,
        setState,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

function useTodo() {
  const context = useContext(TodoContext);
  if (context === undefined)
    throw new Error("Context Used Outside of the TodoContext ");
  return context;
}

export { TodoProvider, useTodo };
