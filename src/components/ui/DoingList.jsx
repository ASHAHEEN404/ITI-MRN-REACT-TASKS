import { Droppable, Draggable } from "react-beautiful-dnd";
import DoingListItem from "./DoingListItem";
import { useTodo } from "@/context/TodoContext";

function DoingList() {
  const { doing, moveToDone, moveBackToTodo, removeTodo } = useTodo();

  return (
    <Droppable droppableId="doingList">
      {(provided) => (
        <ul
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="w-[30rem] h-auto px-4 py-2 border-4 border-gray-300 shadow-inner p-4 rounded-lg"
        >
          <p className="text-center mb-4 font-semibold text-lg">DOING LIST</p>
          {doing.map((item, index) => (
            <Draggable
              key={item.id}
              draggableId={item.id.toString()}
              index={index}
            >
              {(provided) => (
                <DoingListItem
                  item={item}
                  moveToDone={moveToDone}
                  moveBackToTodo={moveBackToTodo}
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

export default DoingList;
