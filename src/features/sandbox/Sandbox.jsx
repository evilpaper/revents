import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { increment, decrement, add, remove } from "./testReducer";

export default function Sandbox() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.test.count);
  const todos = useSelector((state) => state.test.todos);
  return (
    <>
      <h1>This is the Sandbox Component for playing around with stuff</h1>
      <h3>Count = {count}</h3>
      <Button
        onClick={() => dispatch(increment(1))}
        content="Increment"
        color="green"
      />
      <Button
        onClick={() => dispatch(decrement(1))}
        content="Decrement"
        color="red"
      />
      <h3>Todos</h3>
      <Button content="Add" color="blue" onClick={() => dispatch(add())} />
      <Button
        content="Remove"
        basic
        color="blue"
        onClick={() => dispatch(remove())}
      />
      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </>
  );
}
