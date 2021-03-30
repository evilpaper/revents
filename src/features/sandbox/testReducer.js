// Action Names
const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";

// Action Creators
export function increment(amount) {
  return {
    type: INCREMENT_COUNTER,
    payload: amount,
  };
}

export function decrement(amount) {
  return {
    type: DECREMENT_COUNTER,
    payload: amount,
  };
}

export function add() {
  return {
    type: ADD_TODO,
    payload: "Important thing",
  };
}

export function remove() {
  return {
    type: REMOVE_TODO,
    payload: "Nothing here",
  };
}

const initialState = {
  count: 42,
  todos: [],
};

export default function testReducer(state = initialState, { type, payload }) {
  switch (type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + payload,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: [...state.todos.slice(0, state.todos.length - 1)],
      };
    default:
      return state;
  }
}
