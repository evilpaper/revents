import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { openModal } from "../../app/common/modal/modalReducer";
import { increment, decrement } from "./testReducer";

export default function Sandbox() {
  const dispatch = useDispatch();
  const [target, setTarget] = useState(null);
  const count = useSelector((state) => state.test.count);
  const { loading } = useSelector((state) => state.async);

  return (
    <>
      <h1>This is the Sandbox Component for playing around with stuff</h1>
      <h3>Count = {count}</h3>
      <Button
        name="increment"
        loading={loading && target === "increment"}
        onClick={(e) => {
          dispatch(increment(1));
          setTarget(e.target.name);
        }}
        content="Increment"
        color="green"
      />
      <Button
        name="decrement"
        loading={loading && target === "decrement"}
        onClick={(e) => {
          dispatch(decrement(1));
          setTarget(e.target.name);
        }}
        content="Decrement"
        color="red"
      />

      <Button
        content="Open Modal"
        basic
        color="teal"
        onClick={() =>
          dispatch(openModal({ modalType: "TestModal", modalProps: { count } }))
        }
      />
    </>
  );
}
