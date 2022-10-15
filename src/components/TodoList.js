import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTodos from "../redux/todos/thunk/fetchTodos";
import CompleteTodo from "./CompleteTodo";
import Todo from "./Todo";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos);
  }, [dispatch]);

  const filterByStatus = (todo) => {
    const { status } = filters;
    switch (status) {
      case "Complete":
        return todo.completed;

      case "Incomplete":
        return !todo.completed;

      default:
        return true;
    }
  };

  const filterByColors = (todo) => {
    const { colors } = filters;
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  };

  const filterByInCompleted = (todo) => {
    if (todo.completed === false) {
      return todo;
    }
  };
  return (
    <div className="lg:p-5 p-2">
      <div className="mt-2 text-gray-700 text-sm min-h-[300px] overflow-y-auto">
        {todos
          .filter(filterByStatus)
          .filter(filterByColors)
          .filter(filterByInCompleted)
          .map((todo) => (
            <Todo todo={todo} key={todo.id} />
          ))}
      </div>
    </div>
  );
}
