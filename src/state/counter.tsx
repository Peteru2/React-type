import { useReducer } from 'react';
type CounterState = {
    count: number
}


type increDecre = {
    type: "INCREMENT" | "DECREMENT"
}
type Reset = {  
    type: "RESET"
}
type CounterAction = increDecre | Reset
// Reducer function
const initialState = { count: 0 };

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
    return initialState
    default:
      return state;
  }
};


const Counter = () => {
  // Use useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>

    </div>
  );
};

export default Counter;