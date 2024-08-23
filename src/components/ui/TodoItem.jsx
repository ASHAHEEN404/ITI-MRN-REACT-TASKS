function TodoItem({ item, moveToDoing, removeTodo, provided }) {
  return (
    <li
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="flex flex-col justify-between items-center mb-2 p-2 border border-gray-300 rounded bg-yellow-200"
    >
      <span>{item.title}</span>
      <div className="mt-5">
        <button
          onClick={() => moveToDoing(item)}
          className="bg-blue-500 hover:bg-blue-300 transition-all duration-300 text-white px-2 py-1 rounded mr-2"
        >
          Move to Doing
        </button>
        <button
          onClick={() => removeTodo(item.id)}
          className="bg-red-500 hover:bg-red-300 transition-all duration-300 text-white px-2 py-1 rounded"
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
