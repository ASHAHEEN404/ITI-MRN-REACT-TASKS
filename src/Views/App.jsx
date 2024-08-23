import { DragDropContext } from "react-beautiful-dnd";
import TodoList from "@/components/ui/TodoList";
import TodoForm from "../components/ui/TodoForm";
import Header from "./Header";
import DoingList from "@/components/ui/DoingList";
import DoneList from "@/components/ui/DoneList";
import { useTodo } from "@/context/TodoContext";

function App() {
  const { todo, doing, done, setState } = useTodo();

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // Dropped outside the list
    if (!destination) return;

    // Clone the current state
    const updatedTodo = Array.from(todo);
    const updatedDoing = Array.from(doing);
    const updatedDone = Array.from(done);

    let movedItem;

    // Remove the item from the source list
    if (source.droppableId === "todoList") {
      movedItem = updatedTodo.splice(source.index, 1)[0];
    } else if (source.droppableId === "doingList") {
      movedItem = updatedDoing.splice(source.index, 1)[0];
    } else {
      movedItem = updatedDone.splice(source.index, 1)[0];
    }

    // Add the item to the destination list
    if (destination.droppableId === "todoList") {
      updatedTodo.splice(destination.index, 0, movedItem);
    } else if (destination.droppableId === "doingList") {
      updatedDoing.splice(destination.index, 0, movedItem);
    } else {
      updatedDone.splice(destination.index, 0, movedItem);
    }

    // Update the context state with the new order
    setState({
      todo: updatedTodo,
      doing: updatedDoing,
      done: updatedDone,
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <Header />
        <TodoForm />
        <div className="flex justify-around mt-10">
          <TodoList />
          <DoingList />
          <DoneList />
        </div>
      </div>
    </DragDropContext>
  );
}

export default App;
