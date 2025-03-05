import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";
import { clearStash } from "../features/stashSlice";
const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const inputRef = useRef(null);

  // fetch stash from store
  const stash = useSelector((state) => state.stash);
  const isEditing = Boolean(stash.id);
  const { id, text } = stash;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    if (isEditing) {
      dispatch(updateTodo({ id, text: input }));
      dispatch(clearStash());
    } else {
      dispatch(addTodo(input));
    }
    setInput("");
  };

  useEffect(() => {
    if (isEditing) {
      setInput(text);
      inputRef.current?.focus();
    }
  }, [stash]);

  return (
    <div>
      <h1>AddTodo</h1>
      {isEditing ? <h4>{stash.text}</h4> : <h4>No stash</h4>}
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">{text ? "Update" : "Add Todo"}</button>
      </form>
    </div>
  );
};

export default AddTodo;
