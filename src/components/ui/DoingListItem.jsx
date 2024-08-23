function DoingListItem({
  item,
  moveToDone,
  moveBackToTodo,
  removeTodo,
  provided,
}) {
  return (
    <li
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="flex flex-col justify-between items-center mb-2 p-2 border border-gray-300 rounded bg-yellow-200"
    >
      <span>{item.title}</span>
      <div className="mt-4">
        <button
          className="bg-green-500 hover:bg-green-300 transition-all duration-300 text-white px-2 py-1 rounded mr-2"
          onClick={() => moveToDone(item)}
        >
          Move to done
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-300 transition-all duration-300 text-white px-2 py-1 rounded mr-2"
          onClick={() => moveBackToTodo(item)}
        >
          Move Back to To Do
        </button>
        <button
          className="bg-red-500 hover:bg-red-300 transition-all duration-300 text-white px-2 py-1 rounded"
          onClick={() => removeTodo(item.id)}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default DoingListItem;
