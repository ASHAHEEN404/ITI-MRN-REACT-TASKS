import { TodoController } from "@/controllers/TodoController";
import { useState } from "react";

function TodoForm() {
  const [title, setTitle] = useState("");
  const { handleAddTodo } = TodoController();

  function handleSubmit(e) {
    e.preventDefault();
    if (!title) return;
    handleAddTodo(title);
    setTitle("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center mt-10"
    >
      <label
        htmlFor="task-input"
        className="mb-5 font-bold text-xl text-stone-600"
      >
        What’s your next task? 🌟
      </label>
      <input
        id="task-input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Type your task here..."
        className="p-2 w-60 border border-b-teal-300 rounded-md bg-yellow-300 text-stone-800 transition-all duration-500 focus:opacity-90 focus:w-72 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2"
      />

      {title !== "" && (
        <div>
          <button className="rounded-xl px-4 py-2 mt-6 bg-stone-600 hover:bg-stone-500 transition-colors duration-300 focus:bg-stone-400 text-white">
            Add Task
          </button>
        </div>
      )}
    </form>
  );
}

export default TodoForm;
