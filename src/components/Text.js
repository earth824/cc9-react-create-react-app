import { useContext } from 'react';
import { CountContext } from '../contexts/CountContext';
// import { useCount } from '../contexts/CountContext';

function Text() {
  const context = useContext(CountContext); // { state: , dispatch: }
  return <h1>{context.state.count}</h1>;

  // const context = useCount();
  // const {
  //   state: { count }
  // } = useCount();
  // return <h1>{count}</h1>;
}

export default Text;
