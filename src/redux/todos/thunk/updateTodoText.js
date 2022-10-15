import { updatedText } from "../actions";

const updateTodoText = (todoId, text) => {
  console.log(todoId);
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        text: text,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const todo = await response.json();

    dispatch(updatedText(todo.id, todo.text));
  };
};

export default updateTodoText;
