import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { openModal } from "../../app/common/modal/modalReducer";
import { increment, decrement } from "./testReducer";

export default function Sandbox() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.test.count);

  return (
    <>
      <h1>This is the Sandbox Component for playing around with stuff</h1>
      <h3>Count = {count}</h3>
      <Button
        onClick={() => dispatch(decrement(1))}
        content="Decrement"
        color="red"
      />
      <Button
        onClick={() => dispatch(increment(1))}
        content="Increment"
        color="green"
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
