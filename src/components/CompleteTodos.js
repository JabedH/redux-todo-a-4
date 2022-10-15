import React from "react";
import { useSelector } from "react-redux";
import CompleteTodo from "./CompleteTodo";

const CompleteTodos = () => {
  const todos = useSelector((state) => state.todos);
  const filterByCompleted = (todo) => {
    if (todo.completed === true) {
      return todo;
    }
  };
  return (
    <div className="p-5">
      <div className="mt-2 text-gray-700 text-sm min-h-[300px] overflow-y-auto">
        {todos.filter(filterByCompleted).map((todo) => (
          <CompleteTodo todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default CompleteTodos;
