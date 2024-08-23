import { createRoot } from "react-dom/client";
import App from "./Views/App";
import "./index.css";
import { TodoProvider } from "./context/TodoContext";

createRoot(document.getElementById("root")).render(
  <TodoProvider>
    <App />
  </TodoProvider>
);