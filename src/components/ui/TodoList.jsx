import { Droppable, Draggable } from "react-beautiful-dnd";
import TodoItem from "./TodoItem";
import { useTodo } from "@/context/TodoContext";

function TodoList() {
  const { todo, moveToDoing, removeTodo } = useTodo();

  return (
    <Droppable droppableId="todoList">
      {(provided) => (
        <ul
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="w-72 h-auto px-4 py-2 border-4 border-gray-300 shadow-inner p-4 rounded-lg"
        >
          <p className="text-center mb-4 font-semibold text-lg">TODO LIST</p>
          {todo.map((item, index) => (
            <Draggable
              key={item.id}
              draggableId={item.id.toString()}
              index={index}
            >
              {(provided) => (
                <TodoItem
                  item={item}
                  moveToDoing={moveToDoing}
                  removeTodo={removeTodo}
                  provided={provided}
                />
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
}

export default TodoList;
