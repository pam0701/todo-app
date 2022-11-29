import React, { useRef, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./Todos.css";

const Todos = () => {
  const no = useRef(1);

  const [todos, setTodos] = useState([]);

  const onAdd = (text) => {
    setTodos([
      ...todos,
      {
        id: no.current++,
        text: text,
        done: false,
      },
    ]);
  };
};
