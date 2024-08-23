import { Droppable, Draggable } from "react-beautiful-dnd";
import DoneListItem from "./DoneListItem";
import { useTodo } from "@/context/TodoContext";

function DoneList() {
  const { done, removeTodo } = useTodo();

  return (
    <Droppable droppableId="doneList">
      {(provided) => (
        <ul
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="w-72 h-auto px-4 py-2 border-4 border-gray-300 shadow-inner p-4 rounded-lg"
        >
          <p className="text-center mb-4 font-semibold text-lg">DONE LIST</p>
          {done.map((item, index) => (
            <Draggable
              key={item.id}
              draggableId={item.id.toString()}
              index={index}
            >
              {(provided) => (
                <DoneListItem
                  item={item}
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

export default DoneList;
