import './App.css';
import { useReducer, useState } from 'react';
import Text from './components/Text';
import Button from './components/Button';
import { CountProvider } from './contexts/CountContext';
import { CountContext } from './contexts/CountContext';

// Action : INCREMENT, DECREMENT, RESET, STEP
// dispatch({ type: 'INCREMENT' });

// state : { count: 0 }
// const INITIAL_STATE = { count: 0, error: '' };
// const counterReducer = (state, action) => {
//   if (action.type === 'INCREMENT') {
//     // { count: state.count + 1 }
//     const cloneState = { ...state };
//     cloneState.count = state.count + 1;
//     return cloneState;
//     // return { ...state, count: state.count + 1 };
//   } else if (action.type === 'DECREMENT') {
//     if (state.count > 0) {
//       const cloneState = { ...state };
//       cloneState.count = state.count - 1;
//       return cloneState;
//       // return { ...state, count: state.count - 1 }
//     }
//     return state;
//   } else if (action.type === 'RESET') {
//     const cloneState = { ...state };
//     cloneState.count = 0;
//     return cloneState;
//   } else {
//     return state;
//   }
// };

// const counterReducer = (state, action) => {
//   switch (action.type) {
//     case 'INCREMENT': {
//       const cloneState = { ...state };
//       cloneState.count = state.count + 1;
//       return cloneState;
//     }
//     case 'STEP': {
//       const cloneState = { ...state };
//       cloneState.count = state.count + action.payload.step;
//       return cloneState;
//       // return { ...state, count: state.count + action.payload.step };
//     }
//     case 'DECREMENT': {
//       if (state.count > 0) {
//         const cloneState = { ...state };
//         cloneState.count = state.count - 1;
//         return cloneState;
//       }
//       return state;
//     }
//     case 'RESET': {
//       const cloneState = { ...state };
//       cloneState.count = 0;
//       return cloneState;
//     }
//     default:
//       return state;
//   }
// };

// function App() {
//   const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);
//   const [step, setStep] = useState(0);

//   return (
//     <div style={{ padding: '4rem' }}>
//       <input type="text" onChange={e => setStep(+e.target.value)} />
//       <h1>{state.count}</h1>
//       <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
//       <button onClick={() => dispatch({ type: 'STEP', payload: { step } })}>Step</button>
//       <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
//       <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
//     </div>
//   );
// }

function App() {
  return (
    <CountProvider>
      <div style={{ padding: '4rem' }}>
        <Text />
        <Button />
      </div>
    </CountProvider>
  );
}

// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <CountContext.Provider value={{ count: count, setCount: setCount }}>
//       <div style={{ padding: '4rem' }}>
//         <Text />
//         <Button />
//       </div>
//     </CountContext.Provider>
//   );
// }

// function CountProvider(props) {
//   // const [count, setCount] = useState(0);
//   const [state, dispatch] = useReducer(countReducer, INITIAL_COUNT);
//   return <CountContext.Provider value={{ state: state, dispatch: dispatch }}>{props.children}</CountContext.Provider>;
// }

export default App;
