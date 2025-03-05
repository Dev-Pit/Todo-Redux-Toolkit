import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { MdEditSquare } from "react-icons/md";
import { holdStash, clearStash } from "../features/stashSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todo.todos); // this hook helps to get access to the store, state
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
    dispatch(clearStash());
  };

  const handleEdit = (todo) => dispatch(holdStash(todo));

  return (
    <div>
      <h1>Todo list</h1>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}{" "}
          <button onClick={() => handleEdit(todo)}>
            <MdEditSquare />
          </button>
          <button onClick={() => handleDelete(todo.id)}>X</button>
        </li>
      ))}
    </div>
  );
};

export default Todos;
