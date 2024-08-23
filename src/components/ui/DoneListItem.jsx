function DoneListItem({ item, removeTodo, provided }) {
  return (
    <li
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="flex flex-col justify-between items-center mb-2 p-2 border border-gray-300 rounded bg-yellow-200"
    >
      <span>{item.title}</span>
      <button
        onClick={() => removeTodo(item.id)}
        className="bg-red-500 mt-4 hover:bg-red-400 transition-colors duration-300 text-white px-2 py-1 rounded"
      >
        Remove
      </button>
    </li>
  );
}

export default DoneListItem;
