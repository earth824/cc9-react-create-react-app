import { createContext, useReducer, useContext } from 'react';

const CountContext = createContext();

const INITIAL_COUNT = { count: 0 };
const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return state.count > 0 ? { ...state, count: state.count - 1 } : state;
    case 'STEP':
      return { ...state, count: state.count + action.payload.step };
    case 'RESET':
      return { ...state, count: 0 };
    default:
      return state;
  }
};

function CountProvider(props) {
  const [state, dispatch] = useReducer(countReducer, INITIAL_COUNT);
  return <CountContext.Provider value={{ state: state, dispatch: dispatch }}>{props.children}</CountContext.Provider>;
}

function useCount() {
  const context = useContext(CountContext);
  if (context === undefined) {
    throw new Error('useCount must be used within CountProvider');
  }
  return context;
}

export { CountProvider, useCount };
