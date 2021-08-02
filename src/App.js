import './App.css';
import { useState } from 'react';

function App() {
  // const result = useState('Hello React!!!');
  // let state = result[0]; // Hello React!!!
  // const update = result[1];
  // shorter version but not good
  // const [state, update] = useState('Hello React!!!');
  // const [state1, update1] = useState('Hello React!!!');
  // const [state2, update2] = useState('Hello React!!!');
  // Best Practice
  // const [message, setMessage] = useState('Hello React !!!');
  // const [title, setTitle] = useState('My Title');
  // Wrong !!!
  // console.log('App is called');
  // let text = 'Hello React';
  // const handleClick = () => {
  //   // state = 'Manual Assign'; Don't do this
  //   setMessage('You clicked a button');
  //   // Wrong !!!
  //   // console.log('clicked');
  //   // text = 'You clicked a button';
  //   // console.log(text);
  // };
  // return (
  //   <div>
  //     <h1>{message}</h1>
  //     <button onClick={handleClick}>Click to change Text</button>
  //     <button onClick={() => setMessage('You Clicked Annonymous')}>Click to change Text AnnonyMous</button>
  //   </div>
  // );
  // const [count, setCount] = useState(0);
  // // const x = param => param + 1;
  // const handleClickAdd = () => {
  //   // setCount(count + 1);
  //   setCount(currentCount => currentCount + 1);
  //   // setCount(x);
  // };
  // const handleClickSubtract = () => {
  //   // setCount(count - 1);
  //   setCount(currentCount => currentCount - 1);
  // };
  // return (
  //   <div className="container">
  //     <button onClick={handleClickAdd}>+</button>
  //     <span>{count}</span>
  //     <button onClick={handleClickSubtract}>-</button>
  //   </div>
  // );

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const [user, setUser] = useState({
    username: '',
    password: '',
    email: '',
    birthDate: ''
  });
}

export default App;
