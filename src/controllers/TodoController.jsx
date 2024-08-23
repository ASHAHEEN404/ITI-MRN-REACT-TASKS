import { useTodo } from "../context/TodoContext";

export function TodoController() {
  const {
    todo,
    doing,
    done,
    addTodo,
    moveToDoing,
    moveToDone,
    moveBackToTodo,
    removeTodo,
    setState,
  } = useTodo();

  function handleAddTodo(title) {
    if (title.trim()) addTodo(title);
  }

  function handleMoveToDoing(todo) {
    moveToDoing(todo);
  }

  function handleMoveToDone(todo) {
    moveToDone(todo);
  }

  function handleMoveBackToDo(todo) {
    moveBackToTodo(todo);
  }

  function handleRemoveTodo(id) {
    console.log("Removing item with id:", id);
    if (id) {
      removeTodo(id);
    }
  }

  return {
    todo,
    doing,
    done,
    handleAddTodo,
    handleMoveToDoing,
    handleMoveToDone,
    handleMoveBackToDo,
    handleRemoveTodo,
    setState,
  };
}
